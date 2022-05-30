export default function AppContainer({ children, className = "" }) {
  return (
    <section
      className={`lg:max-w-6xl mx-2 md:mx-10 lg:mx-20 xl:m-auto ${className}`}
    >
      {children}
    </section>
  );
}
