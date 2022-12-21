import React from "react";

export default function Input({
  placeholder,
  type,
  value,
  setValue,
  label,
  min,
  max,
  classname,
}) {
  return (
    <div className="w-full relative">
      <label className="text-[12px] absolute top-[-10px] font-bold left-2 px-2 bg-white capitalize text-[#33333380]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(e.target.value)}
        className={`bg-white border-2 rounded-md outline-none w-full h-[46px] py-[10px] px-[14px] text-[16px] ${classname}`}
      />
    </div>
  );
}

export function Select({ options, value, setValue, label }) {
  return (
    <div className="w-full relative">
      <label className="text-[12px] absolute top-[-10px] font-bold left-2 px-2 bg-white capitalize text-[#33333380]">
        {label}
      </label>
      <select
        className="bg-white border-2 rounded-md outline-none w-full h-[46px] py-[10px] px-[14px] text-[16px]"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option?.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextArea({ placeholder, value, setValue, label }) {
  return (
    <div className="w-full h-full relative">
      <label className="text-[12px] absolute top-[-10px] font-bold left-2 px-2 bg-white capitalize text-[#33333380]">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-white border-2 rounded-md outline-none w-full min-h-full py-[10px] px-[14px] text-[16px]"
      />
    </div>
  );
}
