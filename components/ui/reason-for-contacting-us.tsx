import ArrowForwardIcon from "@/icons/arrow-forward";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function ReasonForContactingUs({
  setDropValue,
  dropData,
  initialState,
}: {
  setDropValue: Dispatch<SetStateAction<string>>;

  dropData: string[];
  initialState: string;
}) {
  const [data, setData] = useState<string[]>([...dropData]);
  const [current, setCurrent] = useState(initialState);
  const [showDrop, setShowDrop] = useState(false);

  function handleChange(changeValue: string) {
    setCurrent(changeValue);
    setShowDrop(true);
    setData(dropData.filter((data: string) => data.includes(changeValue)));
    setDropValue(changeValue);
  }

  function handleSelect(value: string) {
    setShowDrop(false);
    setCurrent(value);
    setDropValue(value);
  }

  return (
    <div className="w-full flex flex-col relative items-center ">
      <div className="w-full flex justify-between items-center gap-[10px] p-[14.67px] md:p-6">
        <input
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setShowDrop(true)}
          onClick={() => setShowDrop(true)}
          onBlur={() => setShowDrop(false)}
          type={"text"}
          value={current}
          required
          placeholder="Reason for contacting us"
          className="flex-grow font-publicSans font-semibold text-[14.667px] md:text-[24.038px] text-[#18181B] placeholder:text-[#E3E3E3] bg-transparent focus:outline-none"
        />
        <div
          className="text-[#292D32]"
          style={{
            transform: `rotateZ(${showDrop ? "270" : "90"}deg)`,
            transition: "transform ease 200ms",
          }}
        >
          <ArrowForwardIcon />
        </div>
      </div>

      {showDrop && (
        <div className="w-full h-fit max-h-[170px] overflow-y-auto absolute top-[55px] md:top-[90px] p-[14px] flex flex-col bg-[#F5F5F5] border z-30">
          {data.map((data, index) => (
            <button
              type="button"
              key={index}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(data);
              }}
              className="p-[15px] flex justify-start items-center gap-[10px] hover:bg-[#f5f1f1]"
            >
              <p className="font-publicSans font-semibold text-[14.667px] md:text-[24.038px] text-[#18181B]">
                {data}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
