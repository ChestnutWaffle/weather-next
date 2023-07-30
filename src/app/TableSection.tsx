type TableSectionProps = {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string | undefined;
};

export default function TableSection({
  title,
  children,
  id,
  className,
}: TableSectionProps) {
  return (
    <section className={`py-4 px-6 md:px-12 text-gray-300 ${className}`}>
      <div className="rounded-xl bg-gray-700 p-4">
        <header className="my-2">
          <h2 id={id} className="text-3xl font-semibold">
            {title}
          </h2>
        </header>
        <div className="overflow-hidden overflow-x-auto relative">
          {children}
        </div>
      </div>
    </section>
  );
}
