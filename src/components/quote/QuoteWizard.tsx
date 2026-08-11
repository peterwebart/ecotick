"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

const propertyTypes = [
  "Home",
  "Cottage",
  "Farm",
  "Commercial property",
  "Campground",
  "Resort",
  "Golf course",
  "Large property",
  "Other",
] as const;

const services = [
  "Tick control",
  "Mosquito control",
  "Tick + mosquito",
  "Not sure yet",
] as const;

const sizes = [
  "Under 1/4 acre",
  "1/4 to 1 acre",
  "1 to 5 acres",
  "5 to 25 acres",
  "25+ acres",
] as const;

const timings = ["As soon as possible", "Within a month", "Next season", "Just researching"] as const;

/** Property types that branch the form into the B2B question set. */
const commercialTypes = new Set<string>([
  "Commercial property",
  "Campground",
  "Resort",
  "Golf course",
  "Large property",
  "Farm",
]);

type Form = {
  propertyType: string;
  service: string;
  size: string;
  location: string;
  timing: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  acreage: string;
  buildings: string;
  visitors: string;
  // Honeypot: real users never fill this.
  website: string;
};

const empty: Form = {
  propertyType: "",
  service: "",
  size: "",
  location: "",
  timing: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
  acreage: "",
  buildings: "",
  visitors: "",
  website: "",
};

const TOTAL_STEPS = 6;

/**
 * `initialPropertyType` lets a service page drop the visitor straight onto the
 * matching branch - the large-property page opens on step 2 with the B2B
 * question set already active, rather than asking what it already knows.
 */
export function QuoteWizard({
  initialPropertyType,
}: {
  initialPropertyType?: string;
} = {}) {
  const [step, setStep] = useState(initialPropertyType ? 2 : 1);
  const [form, setForm] = useState<Form>(
    initialPropertyType ? { ...empty, propertyType: initialPropertyType } : empty,
  );
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [started, setStarted] = useState(false);
  const formId = useId();

  const isCommercial = commercialTypes.has(form.propertyType);

  function set<K extends keyof Form>(key: K, value: Form[K]) {
    if (!started) {
      setStarted(true);
      track("quote_started");
    }
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(current: number): string[] {
    const e: string[] = [];
    if (current === 1 && !form.propertyType) e.push("Choose a property type.");
    if (current === 2 && !form.service) e.push("Choose the service you need.");
    if (current === 3 && !form.size) e.push("Choose an approximate property size.");
    if (current === 4 && form.location.trim().length < 2)
      e.push("Enter your town or city.");
    if (current === 5 && !form.timing) e.push("Choose when you would like service.");
    if (current === 6) {
      if (form.name.trim().length < 2) e.push("Enter your name.");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
        e.push("Enter a valid email address.");
      if (form.phone.replace(/\D/g, "").length < 10)
        e.push("Enter a phone number with at least 10 digits.");
    }
    return e;
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (e.length === 0) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  async function submit() {
    const e = validate(6);
    setErrors(e);
    if (e.length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      // Fire only on a server-confirmed write, never on click.
      track("quote_submitted", { propertyType: form.propertyType, service: form.service });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-border bg-white p-8 shadow-card">
        <h2 className="text-h2 font-display">Request received.</h2>
        <p className="mt-3 text-ink-700">
          Thanks, {form.name.split(" ")[0]}. We have your details for a{" "}
          {form.size.toLowerCase()} {form.propertyType.toLowerCase()} in{" "}
          {form.location}. Someone will be in touch to arrange an assessment.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-border bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-center justify-between">
        <p className="text-eyebrow font-semibold text-clay-600 uppercase">
          Step {step} of {TOTAL_STEPS}
        </p>
        <p className="text-sm text-ink-500">{isCommercial ? "Commercial" : "Residential"}</p>
      </div>
      <div
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-label="Quote progress"
        className="mt-3 h-1 w-full overflow-hidden rounded-pill bg-sage-100"
      >
        <div
          className="h-full bg-cta transition-[width] duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      {errors.length > 0 && (
        <div
          role="alert"
          className="mt-6 rounded-card border border-clay-600 bg-clay-100 p-4 text-sm text-ink-900"
        >
          <ul className="space-y-1">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-7">
        {step === 1 && (
          <Choice
            legend="What kind of property is it?"
            name={`${formId}-type`}
            options={propertyTypes}
            value={form.propertyType}
            onChange={(v) => set("propertyType", v)}
          />
        )}
        {step === 2 && (
          <Choice
            legend="What do you need?"
            name={`${formId}-service`}
            options={services}
            value={form.service}
            onChange={(v) => set("service", v)}
          />
        )}
        {step === 3 && (
          <>
            <Choice
              legend="Roughly how big is the property?"
              name={`${formId}-size`}
              options={sizes}
              value={form.size}
              onChange={(v) => set("size", v)}
            />
            {isCommercial && (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Text
                  label="Approximate acreage"
                  value={form.acreage}
                  onChange={(v) => set("acreage", v)}
                />
                <Text
                  label="Number of buildings"
                  value={form.buildings}
                  onChange={(v) => set("buildings", v)}
                />
                <Text
                  label="Typical people on site"
                  value={form.visitors}
                  onChange={(v) => set("visitors", v)}
                />
              </div>
            )}
          </>
        )}
        {step === 4 && (
          <Text
            label="Town or city"
            value={form.location}
            onChange={(v) => set("location", v)}
            hint="So we can confirm the property is within our service area."
          />
        )}
        {step === 5 && (
          <Choice
            legend="When would you like service to start?"
            name={`${formId}-timing`}
            options={timings}
            value={form.timing}
            onChange={(v) => set("timing", v)}
          />
        )}
        {step === 6 && (
          <div className="grid gap-4">
            <Text label="Full name" value={form.name} onChange={(v) => set("name", v)} />
            <Text
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => set("email", v)}
            />
            <Text
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => set("phone", v)}
            />
            <Text
              label="Anything we should know about the property?"
              value={form.notes}
              onChange={(v) => set("notes", v)}
              optional
            />
            {/* Honeypot - visually hidden, not display:none, so bots still fill it. */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor={`${formId}-website`}>Website</label>
              <input
                id={`${formId}-website`}
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
              />
            </div>
          </div>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 text-sm text-clay-600">
          That did not send. Check your connection and try again, or call us
          directly.
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            setErrors([]);
            setStep((s) => Math.max(s - 1, 1));
          }}
          disabled={step === 1}
          className="text-sm font-semibold text-ink-500 disabled:invisible"
        >
          Back
        </button>
        {step < TOTAL_STEPS ? (
          <Button onClick={next} size="lg">
            Continue
          </Button>
        ) : (
          <Button onClick={submit} size="lg" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send my request"}
          </Button>
        )}
      </div>
    </div>
  );
}

function Choice({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="font-display text-h3 text-brand">{legend}</legend>
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex cursor-pointer items-center gap-3 rounded-card border px-4 py-3 text-sm transition-colors ${
              value === opt
                ? "border-cta bg-sage-100 font-semibold text-brand"
                : "border-border hover:border-sage-500"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="accent-moss-600"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Text({
  label,
  value,
  onChange,
  type = "text",
  hint,
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hint?: string;
  optional?: boolean;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink-900">
        {label}
        {optional && <span className="ml-1.5 font-normal text-ink-500">(optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-500">
          {hint}
        </p>
      )}
      <input
        id={id}
        type={type}
        value={value}
        aria-describedby={hint ? `${id}-hint` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-card border border-border bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-500"
      />
    </div>
  );
}
