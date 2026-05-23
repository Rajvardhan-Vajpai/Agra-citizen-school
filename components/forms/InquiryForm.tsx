"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquirySchema } from "@/lib/schemas/inquiry";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusMode, setStatusMode] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquirySchema>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      parent: "",
      phone: "",
      email: "",
      className: "",
      message: "",
    },
  });

  async function onSubmit(values: InquirySchema) {
    setStatusMode("idle");
    setStatusMessage(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = await response.json();
      if (!response.ok) {
        const error = typeof payload === "object" && payload?.error ? payload.error : "Submission failed.";
        setStatusMode("error");
        setStatusMessage(Array.isArray(error) ? "Submission failed." : String(error));
        return;
      }

      setStatusMode("success");
      setStatusMessage("Your inquiry has been sent. We will contact you shortly.");
      reset();
    } catch (error) {
      setStatusMode("error");
      setStatusMessage("Unable to submit the inquiry at this time. Please try again later.");
      console.error("Inquiry submission error:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "grid gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-xl shadow-emerald-950/5 dark:border-white/10 dark:bg-white/[0.06]",
        !compact && "sm:p-8"
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Name
          <input
            {...register("name")}
            type="text"
            className="min-h-12 rounded-xl border border-emerald-900/10 bg-white px-4 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10"
          />
          {errors.name?.message && <span className="text-xs text-red-600">{errors.name.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Parent name
          <input
            {...register("parent")}
            type="text"
            className="min-h-12 rounded-xl border border-emerald-900/10 bg-white px-4 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10"
          />
          {errors.parent?.message && <span className="text-xs text-red-600">{errors.parent.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Phone
          <input
            {...register("phone")}
            type="tel"
            className="min-h-12 rounded-xl border border-emerald-900/10 bg-white px-4 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10"
          />
          {errors.phone?.message && <span className="text-xs text-red-600">{errors.phone.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input
            {...register("email")}
            type="email"
            className="min-h-12 rounded-xl border border-emerald-900/10 bg-white px-4 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10"
          />
          {errors.email?.message && <span className="text-xs text-red-600">{errors.email.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
          Class
          <input
            {...register("className")}
            type="text"
            className="min-h-12 rounded-xl border border-emerald-900/10 bg-white px-4 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10"
          />
          {errors.className?.message && <span className="text-xs text-red-600">{errors.className.message}</span>}
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea
          {...register("message")}
          rows={compact ? 3 : 5}
          className="rounded-xl border border-emerald-900/10 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-white/10"
        />
        {errors.message?.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
      </label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>

      {statusMessage ? (
        <p
          className={cn(
            "rounded-xl px-4 py-3 text-sm font-semibold",
            statusMode === "success"
              ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-200"
              : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-200"
          )}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
