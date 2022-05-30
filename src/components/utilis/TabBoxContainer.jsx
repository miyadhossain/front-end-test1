export default function TabBoxContainer({
  title1,
  title2,
  title3,
  className = "",
}) {
  return (
    <div
      className={`flex justify-center items-center border border-white bg-[#644F9C] text-white min-w-[500px] h-72 text-2xl ${className}`}
    >
      <div className="space-y-10">
        <h1 className="font-bold text-center">{title1}</h1>
        <h4 className="text-center text-xl">{title2}</h4>
        <h4 className="text-center text-xl">{title3}</h4>
      </div>
    </div>
  );
}
