import LinkImg from "../../assets/link.png";

export default function TabTextContainer({ title, text, className = "" }) {
  return (
    <div className={className}>
      <h1 className="text-2xl text-orange">{title}</h1>
      <p className="text-2xl my-16 text-justify">{text}</p>
      <div className="flex items-center space-x-3">
        <div>
          <h4 className="text-xl text-violet">Learn more</h4>
        </div>
        <div>
          <img className="w-4 h-4 object-cover" src={LinkImg} alt="link icon" />
        </div>
      </div>
    </div>
  );
}
