import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

export default function Coupons() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [code, setCode] = useState("");

  return (
    <div className=" w-full flex flex-col gap-4 py-4 px-16">
      <h1 className="font-bold text-2xl">Promoções</h1>

      <div className="w-full items-center flex flex-col gap-2">
        <p>
          {showKeyboard
            ? "Digite o código abaixo"
            : "Aproxime o QR Code do leitor"}
        </p>
        {!showKeyboard ? (
          code ? (
            <div className="text-2xl font-bold">{code}</div>
          ) : (
            <QrScanner
              delay={1000}
              onError={(err) => console.log(err)}
              onScan={(data) => data?.text && setCode(data.text)}
              style={{ width: "24rem" }}
              onLoad={() => console.log("loaded")}
            />
          )
        ) : (
          <>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                maxLength={1}
                className="text-4xl uppercase w-full h-20 text-center border border-gray-300 rounded-lg p-2"
              />
              <input
                type="text"
                maxLength={1}
                className="text-4xl uppercase w-full h-20 text-center border border-gray-300 rounded-lg p-2"
              />
              <input
                type="text"
                maxLength={1}
                className="text-4xl uppercase w-full h-20 text-center border border-gray-300 rounded-lg p-2"
              />
              <div>-</div>
              <input
                type="text"
                maxLength={1}
                className="text-4xl uppercase w-full h-20 text-center border border-gray-300 rounded-lg p-2"
              />
              <input
                type="text"
                maxLength={1}
                className="text-4xl uppercase w-full h-20 text-center border border-gray-300 rounded-lg p-2"
              />
              <input
                type="text"
                maxLength={1}
                className="text-4xl uppercase w-full h-20 text-center border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>Aplicar</div>
          </>
        )}
        <p>ou</p>
        <div
          className="
            cursor-pointer text-center bg-yellow-500 p-2 rounded-lg w-96 font-semibold whitespace-nowrap text-white"
          onClick={() => setShowKeyboard(!showKeyboard)}
        >
          {showKeyboard
            ? "Usar Leitor Do QR Code"
            : "Inserir código manualmente"}
        </div>
      </div>
    </div>
  );
}
