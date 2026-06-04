export type SocialPlatform = "facebook" | "x" | "threads" | "linkedin";

export function SocialIcon({
  platform,
  className = "h-4 w-4",
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M13.5 21v-7.2H16l.4-2.8h-2.9V9.2c0-.8.3-1.4 1.5-1.4h1.6V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H8v2.8h2.5V21h3Z" />
      </svg>
    );
  }

  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.2L6.7 21H3.6l7.3-8.3L3.4 3h6.2l4.3 5.7L18.9 3Zm-1.1 16h1.7L8.7 4.9H6.9L17.8 19Z" />
      </svg>
    );
  }

  if (platform === "threads") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      >
        <path d="M16.7 10.7c-.3-2.3-1.8-4-4.7-4-3.4 0-5.4 2.2-5.4 5.6 0 3.4 2 5.6 5.5 5.6 2.8 0 4.7-1.4 5.2-3.7.4-1.8-.2-3.3-1.8-4.2-1.5-.9-3.5-1.3-5.8-1.2" />
        <path d="M17.2 13.4c0 2.8-2.1 4.9-5 4.9-2.7 0-4.6-1.5-4.6-3.7 0-2.1 1.6-3.4 4.3-3.4 2.4 0 4.4.5 5.3 2.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.9 8.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM5.5 9.8h2.8V18H5.5V9.8Zm4.6 0h2.7V11h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5V18h-2.8v-3.5c0-.8 0-1.9-1.2-1.9s-1.4.9-1.4 1.8V18h-2.8V9.8Z" />
    </svg>
  );
}
