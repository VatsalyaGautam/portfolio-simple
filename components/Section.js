export default function Section({ icon, title, children }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center space-x-2">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
