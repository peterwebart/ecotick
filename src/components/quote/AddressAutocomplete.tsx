"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { AddressSuggestion } from "@/app/api/places/autocomplete/route";

/**
 * Address field with our own suggestion list, fed by /api/places/autocomplete.
 *
 * Implements the ARIA combobox pattern rather than a bare input, so the listbox
 * is announced and keyboard-navigable: arrows to move, Enter to select, Escape
 * to dismiss. Selecting a suggestion records the Google place id alongside the
 * text, which tells the office whether an address was verified or hand-typed.
 *
 * Typing without selecting is fine and always has been — plenty of rural
 * Eastern Ontario properties will not match a suggestion at all, and blocking
 * submission on that would lose exactly the customers this business wants.
 */
export function AddressAutocomplete({
  value,
  onChange,
  label = "Property address",
  hint,
}: {
  value: string;
  /** `placeId` is empty when the customer typed rather than picked. */
  onChange: (value: string, placeId: string) => void;
  label?: string;
  hint?: string;
}) {
  const id = useId();
  const listId = `${id}-list`;
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);
  const sessionToken = useRef(
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : String(Date.now()),
  );
  /** Set right after a pick, so the resulting value change does not refetch. */
  const justPicked = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Debounced lookup. 250ms is short enough to feel live and long enough that a
  // typed street name is one request rather than fifteen.
  useEffect(() => {
    if (justPicked.current) {
      justPicked.current = false;
      return;
    }
    if (value.trim().length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/places/autocomplete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: value, sessionToken: sessionToken.current }),
          signal: controller.signal,
        });
        const data = (await res.json()) as { suggestions: AddressSuggestion[] };
        setSuggestions(data.suggestions ?? []);
        setOpen((data.suggestions ?? []).length > 0);
        setActive(-1);
      } catch (err) {
        // The field stays usable as a plain text input either way, but surface
        // the reason in the console so a broken key is diagnosable.
        if ((err as Error)?.name !== "AbortError") {
          console.warn("[address] suggestion lookup failed", err);
        }
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [value]);

  // Dismiss on outside click, including taps on mobile.
  useEffect(() => {
    function onDocPointer(e: PointerEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onDocPointer);
    return () => document.removeEventListener("pointerdown", onDocPointer);
  }, []);

  function pick(s: AddressSuggestion) {
    justPicked.current = true;
    onChange(s.text, s.placeId);
    setOpen(false);
    setSuggestions([]);
    // A fresh token per completed lookup is what Google's billing expects.
    sessionToken.current =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now());
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      const chosen = suggestions[active];
      if (chosen) pick(chosen);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={boxRef} className="relative">
      <label htmlFor={id} className="block text-sm font-semibold text-ink-900">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-500">
          {hint}
        </p>
      )}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value, "")}
        onKeyDown={onKeyDown}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
        aria-describedby={hint ? `${id}-hint` : undefined}
        autoComplete="street-address"
        enterKeyHint="next"
        placeholder="Start typing your address"
        className="mt-2 w-full rounded-card border border-border bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-500"
      />

      {loading && (
        <span className="absolute top-[3.05rem] right-4 text-xs text-ink-500">
          Searching…
        </span>
      )}

      {/* z-50 clears the sticky header; the field sits inside a card on mobile. */}
      {open && suggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Address suggestions"
          className="absolute z-50 mt-1 w-full overflow-hidden rounded-card border border-border bg-white shadow-lift"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.placeId}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              onPointerDown={(e) => {
                e.preventDefault();
                pick(s);
              }}
              onMouseEnter={() => setActive(i)}
              className={`cursor-pointer border-b border-border px-4 py-3 last:border-0 ${
                i === active ? "bg-sage-100" : "bg-white"
              }`}
            >
              <span className="block text-sm font-medium text-ink-900">{s.main}</span>
              {s.secondary && (
                <span className="block text-xs text-ink-500">{s.secondary}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
