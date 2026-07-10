"use client";
interface Props {
  flavors: string[];
  active: string;
  setActive: (value: any) => void;
}

export default function FlavorSelector({
  flavors,
  active,
  setActive,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 w-full max-w-[500px] justify-start md:justify-start">
      {flavors.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`relative z-50 pointer-events-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 md:py-4 rounded-full border font-light md:font-[400] text-xs sm:text-sm md:text-md transition-all duration-300
          ${
            active === item
              ? "bg-[#E21175] text-white border-[#E21175]"
              : "bg-white/0 hover:text-white border-[#333333] hover:border-[#E21175] hover:bg-[#E21175]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}