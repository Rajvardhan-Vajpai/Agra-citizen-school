"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "parent", label: "Parent name", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "className", label: "Class", type: "text" }
];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (!String(form.get(field.name) ?? "").trim()) nextErrors[field.name] = `${field.label} is required`;
    });

    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email";
    if (phone && !/^[0-9+\-\s]{8,16}$/.test(phone)) nextErrors.phone = "Enter a valid phone number";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      event.currentTarget.reset();
    }, 900);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "soft-card grid gap-4 rounded-[26px] p-5",
        !compact && "sm:p-8"
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-medium text-[var(--brand)]">
            {field.label}
            <input
              name={field.name}
              type={field.type}
              className="min-h-12 rounded-[18px] border border-[rgba(10,61,31,0.12)] bg-white px-4 text-[var(--foreground)] outline-none transition focus:border-[rgba(46,153,82,0.55)] focus:shadow-[inset_0_4px_14px_rgba(10,61,31,0.12),0_0_0_5px_rgba(82,194,120,0.12)]"
            />
            {errors[field.name] && <span className="text-xs text-red-600">{errors[field.name]}</span>}
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-medium text-[var(--brand)]">
        Message
        <textarea
          name="message"
          rows={compact ? 3 : 5}
          className="rounded-[18px] border border-[rgba(10,61,31,0.12)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[rgba(46,153,82,0.55)] focus:shadow-[inset_0_4px_14px_rgba(10,61,31,0.12),0_0_0_5px_rgba(82,194,120,0.12)]"
        />
      </label>
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Inquiry"}
      </Button>
      {success && (
        <p className="rounded-[18px] bg-[var(--brand-faint)] px-4 py-3 text-sm font-medium text-[var(--brand)]">
          Thank you. Our admissions team will contact you shortly.
        </p>
      )}
    </form>
  );
}
