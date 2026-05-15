"use client";

import { trackEvent } from "../lib/gtag";

type TrackedEmailLinkProps = {
  email: string;
  label?: string;
  context: string;
  className?: string;
};

export function TrackedEmailLink({
  email,
  label,
  context,
  className,
}: TrackedEmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() =>
        trackEvent("contact_email_click", {
          email,
          context,
        })
      }
    >
      {label ?? email}
    </a>
  );
}
