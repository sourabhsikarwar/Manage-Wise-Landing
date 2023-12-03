const Badge = ({ title, icon }) => {
  return (
    <div className="uppercase text-[12px] tracking-wide font-bold text-violet-600 py-1 px-2 bg-white border-[1px] border-gray-300 rounded-lg w-fit">
      <span className="mr-1 text-lg">{icon}</span>
      {title}
    </div>
  );
};

export default Badge;
