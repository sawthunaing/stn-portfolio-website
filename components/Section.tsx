export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="grid gap-6 border-t border-line py-14 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
