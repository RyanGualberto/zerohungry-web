import React from "react";
import { GrClose } from "react-icons/gr";

export default function Modal({ title, children, show, close }) {
  if (show) {
    return (
      <div className="w-screen h-screen bg-[#00000050] absolute z-[999] flex justify-center items-center]">
        <div onClick={close} className="absolute w-full h-full z-10"></div>
        <div className="z-20 rounded-lg p-4 bg-white min-h-1/2 min-w-[500px] w-fit self-center animate-slide-up">
          <div className="flex w-full justify-between items-center">
            <div className="font-bold text-2xl">{title}</div>
            <GrClose size={28} onClick={close} className="cursor-pointer" />
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  }
}
