export default function EmailLink({ email, className = "" }: { email: string; className?: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 text-body-m font-semibold break-all text-brand hover:underline ${className}`}
    >
      <img src="/images/team/icon-mail.svg" alt="" aria-hidden width={16} height={16} className="size-4 shrink-0" />
      {email}
    </a>
  );
}
