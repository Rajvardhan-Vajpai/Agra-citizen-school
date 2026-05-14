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
    <form onSubmit={handleSubmit} className={cn("grid gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-xl shadow-emerald-950/5 dark:border-white/10 dark:bg-white/[0.06]", !compact && "sm:p-8")}>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold">
            {field.label}
            <input name={field.name} type={field.type} className="min-h-12 rounded-xl border border-emerald-900/10 bg-white px-4 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10" />
            {errors[field.name] && <span className="text-xs text-red-600">{errors[field.name]}</span>}
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea name="message" rows={compact ? 3 : 5} className="rounded-xl border border-emerald-900/10 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10" />
      </label>
      <Button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Inquiry"}</Button>
      {success && <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-200">Thank you. Our admissions team will contact you shortly.</p>}
    </form>
  );
}
