import React, { useState } from "react";
import FlagBr from "../../assets/flag-br.svg";
import FlagUs from "../../assets/flag-us.svg";

export default function Welcome() {
  const [languageSelected, setLanguageSelected] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="absolute top-0 w-full items-center flex justify-between p-2 border-b-[0.5px]">
        <div>ZeroHungry</div>
        <div className="p-2 rounded-lg bg-green-600 font-semibold text-white">
          Entrar
        </div>
      </div>
      <div className="p-4 bg-slate-100 rounded-lg flex flex-col gap-2 items-center">
        <div>Seja Bem Vindo</div>
        <div>Escolha um idioma para continuar</div>
        <div className="flex gap-2">
          <div
            onClick={() => setLanguageSelected("pt-br")}
            className={`${
              languageSelected === "pt-br" ? "border-green-600" : "grayscale"
            }  ease-in-out duration-300 border-2 flex flex-col items-center p-2 gap-4 bg-white rounded-lg`}
          >
            <img
              src={FlagBr}
              alt="Português"
              className="object-cover w-[120px] h-[80px] rounded-lg"
            />
            <div>Português</div>
          </div>
          <div
            onClick={() => setLanguageSelected("en-us")}
            className={`${
              languageSelected === "en-us" ? "border-green-600" : "grayscale"
            } ease-in-out duration-300 border-2 flex flex-col items-center p-2 gap-4 bg-white rounded-lg`}
          >
            <img
              src={FlagUs}
              alt="English"
              className="filter object-cover w-[120px] h-[80px] rounded-lg"
            />
            <div>English</div>
          </div>
        </div>
        <button
          disabled={languageSelected === ""}
          className="bg-green-600 ease-in-out duration-300  disabled:bg-opacity-30 w-full p-2 text-center text-white font-semibold rounded-lg"
        >
          Avançar
        </button>
      </div>
    </div>
  );
}
