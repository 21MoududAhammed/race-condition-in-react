import { useState } from "react";

export default function Pagination({ setButtonNum }) {
  const [clicked, setClicked] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
  });
  function handleClickBtn(num) {
    const btn = `btn${num}`;
    setClicked({
      ...clicked,
      [btn]: !clicked[`${btn}`],
    });
  }
  return (
    <div className="flex justify-center gap-5 mt-10">
      <button
        className={` ${
          clicked.btn1 ? "bg-gray-500" : "bg-green-600"
        } text-white font-bold px-4 py-2 rounded-lg`}
        disabled={clicked.btn5 ? true : false}
        onClick={() => {
          handleClickBtn(1);
          setButtonNum(1);
        }}
      >
        1
      </button>
      <button
        className={` ${
          clicked.btn2 ? "bg-gray-500" : "bg-green-600"
        } text-white font-bold px-4 py-2 rounded-lg`}
        disabled={clicked.btn2 ? true : false}
        onClick={() => {
          handleClickBtn(2);
          setButtonNum(2);
        }}
      >
        2
      </button>
      <button
        className={` ${
          clicked.btn3 ? "bg-gray-500" : "bg-green-600"
        } text-white font-bold px-4 py-2 rounded-lg`}
        disabled={clicked.btn3 ? true : false}
        onClick={() => {
          handleClickBtn(3);
          setButtonNum(3);
        }}
      >
        3
      </button>
      <button
        className={` ${
          clicked.btn4 ? "bg-gray-500" : "bg-green-600"
        } text-white font-bold px-4 py-2 rounded-lg`}
        disabled={clicked.btn4 ? true : false}
        onClick={() => {
          handleClickBtn(4);
          setButtonNum(4);
        }}
      >
        4
      </button>
      <button
        className={` ${
          clicked.btn5 ? "bg-gray-500" : "bg-green-600"
        } text-white font-bold px-4 py-2 rounded-lg`}
        disabled={clicked.btn4 ? true : false}
        onClick={() => {
          handleClickBtn(5);
          setButtonNum(5);
        }}
      >
        5
      </button>
    </div>
  );
}
