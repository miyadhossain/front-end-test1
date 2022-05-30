import "../../styles/AppDividerTitle.css";

export default function AppDividerTitle({ title, className = "" }) {
  return (
    <h1 className={`divider text-violet text-3xl ${className}`}>{title}</h1>
  );
}
