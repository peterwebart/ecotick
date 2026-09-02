"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { AddressAutocomplete } from "@/components/quote/AddressAutocomplete";
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

const sizes = [
  "Under 1/4 acre",
  "1/4 to 1 acre",
  "1 to 5 acres",
  "5 to 25 acres",
  "25+ acres",
] as const;

const timings = [
  "As soon as possible",
  "Within a month",
  "Next season",
  "Just researching",
] as const;

const contactMethods = ["Email", "Phone call", "Text message"] as const;

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
  size: string;
  acreage: string;
  buildings: string;
  visitors: string;
  address: string;
  /** Google place id, set only when a suggestion was selected. */
  addressPlaceId: string;
  timing: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  /**
   * Marketing consent. Deliberately OPTIONAL, not required to submit.
   *
   * Under CASL, express consent has to be freely given — making it a condition
   * of getting a quote is the pattern regulators treat as invalid consent, and
   * it would also cost conversions on the last step of the funnel. Unchecked by
   * default (pre-ticked boxes are not consent either). The value is recorded on
   * the lead so there is a record of who agreed and who did not.
   */
  marketingOptIn: boolean;
  notes: string;
  // Honeypot: real users never fill this.
  website: string;
};

const empty: Form = {
  propertyType: "",
  size: "",
  acreage: "",
  buildings: "",
  visitors: "",
  address: "",
  addressPlaceId: "",
  timing: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "",
  marketingOptIn: false,
  notes: "",
  website: "",
};

/**
 * Four steps:
 *   1  Property type
 *   2  Property size (plus acreage/buildings/headcount for commercial)
 *   3  Property address (Google autocomplete) + preferred timing
 *   4  Contact details, split name, and preferred contact method
 *
 * The old "which pest" step is gone. It never changed how a property gets
 * assessed — the technician walks it either way — so it was a question that cost
 * a drop-off and bought nothing.
 */
const TOTAL_STEPS = 4;

/**
 * `initialPropertyType` lets a service page drop the visitor straight onto the
 * matching branch — the large-property page opens on step 2 with the B2B
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
    if (current === 2 && !form.size) e.push("Choose an approximate property size.");
    if (current === 3) {
      // A typed address is accepted. Rural properties frequently have no
      // matching suggestion, and rejecting those would lose real customers.
      if (form.address.trim().length < 5)
        e.push("Enter the property address.");
      if (!form.timing) e.push("Choose when you would like service to start.");
    }
    if (current === 4) {
      if (form.firstName.trim().length < 2) e.push("Enter your first name.");
      if (form.lastName.trim().length < 2) e.push("Enter your last name.");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
        e.push("Enter a valid email address.");
      if (form.phone.replace(/\D/g, "").length < 10)
        e.push("Enter a phone number with at least 10 digits.");
      if (!form.preferredContact)
        e.push("Choose how you would prefer to be contacted.");
    }
    return e;
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (e.length === 0) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  async function submit() {
    const e = validate(TOTAL_STEPS);
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
      track("quote_submitted", {
        propertyType: form.propertyType,
        preferredContact: form.preferredContact,
      });
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
          Thanks, {form.firstName}. We have your details for a{" "}
          {form.size.toLowerCase()} {form.propertyType.toLowerCase()} at{" "}
          {form.address}. Someone will be in touch by{" "}
          {form.preferredContact.toLowerCase()} to arrange an assessment.
        </p>
        {form.marketingOptIn && (
          <p className="mt-4 text-sm text-ink-500">
            You are signed up for service updates and reminders. Reply STOP to
            any message to cancel.
          </p>
        )}
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
        aria-label={`Quote progress, step ${step} of ${TOTAL_STEPS}`}
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
                  optional
                />
                <Text
                  label="Number of buildings"
                  value={form.buildings}
                  onChange={(v) => set("buildings", v)}
                  optional
                />
                <Text
                  label="Typical people on site"
                  value={form.visitors}
                  onChange={(v) => set("visitors", v)}
                  optional
                />
              </div>
            )}
          </>
        )}

        {step === 3 && (
          <div className="space-y-7">
            <AddressAutocomplete
              value={form.address}
              onChange={(v, placeId) =>
                setForm((f) => {
                  if (!started) {
                    setStarted(true);
                    track("quote_started");
                  }
                  return { ...f, address: v, addressPlaceId: placeId };
                })
              }
              hint="Start typing and pick your address from the list, or type it in full."
            />
            <Choice
              legend="When would you like service to start?"
              name={`${formId}-timing`}
              options={timings}
              value={form.timing}
              onChange={(v) => set("timing", v)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Text
                label="First name"
                value={form.firstName}
                onChange={(v) => set("firstName", v)}
                autoComplete="given-name"
              />
              <Text
                label="Last name"
                value={form.lastName}
                onChange={(v) => set("lastName", v)}
                autoComplete="family-name"
              />
            </div>
            <Text
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => set("email", v)}
              autoComplete="email"
            />
            <Text
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => set("phone", v)}
              autoComplete="tel"
            />
            <Choice
              legend="How would you prefer we get in touch?"
              name={`${formId}-contact`}
              options={contactMethods}
              value={form.preferredContact}
              onChange={(v) => set("preferredContact", v)}
              columns={3}
            />
            <Text
              label="Anything we should know about the property?"
              value={form.notes}
              onChange={(v) => set("notes", v)}
              optional
            />

            <label className="flex cursor-pointer gap-3 rounded-card border border-border bg-bone-50 p-4">
              <input
                type="checkbox"
                checked={form.marketingOptIn}
                onChange={(e) => set("marketingOptIn", e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-moss-600"
              />
              <span>
                <span className="block text-sm font-semibold text-ink-900">
                  Stay connected with Eco-Tick Solutions
                </span>
                <span className="mt-1.5 block text-xs leading-relaxed text-ink-700">
                  I agree to receive service updates, appointment reminders and
                  exclusive offers from Eco-Tick Solutions via call, text or
                  email. Msg &amp; data rates may apply. Msg frequency varies.
                  Reply STOP to cancel or HELP for help. Questions? Email{" "}
                  <a
                    href="mailto:info@eco-ticksolutions.ca"
                    className="underline underline-offset-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    info@eco-ticksolutions.ca
                  </a>
                  .
                </span>
              </span>
            </label>
            {/* Honeypot - offscreen rather than display:none, so bots still fill it. */}
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
  columns = 2,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 2 | 3;
}) {
  return (
    <fieldset>
      <legend className="font-display text-h3 text-brand">{legend}</legend>
      <div
        className={`mt-5 grid gap-2.5 ${
          columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
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
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hint?: string;
  optional?: boolean;
  autoComplete?: string;
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
        autoComplete={autoComplete}
        aria-describedby={hint ? `${id}-hint` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-card border border-border bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-500"
      />
    </div>
  );
}
