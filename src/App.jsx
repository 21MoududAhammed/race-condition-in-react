import { useEffect, useState } from "react";
import Display from "./components/Display";
import Pagination from "./components/Paginations";
import Search from "./components/Search";
import { generateMilliseconds, searchData } from "./utils";

export default function App() {
  const [buttonNum, setButtonNum] = useState(null);
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  let ignore = false;

  useEffect(() => {
    const milliseconds = generateMilliseconds();
    searchData(buttonNum, milliseconds, value)
      .then((res) => {
        if(!ignore){
          setOutput(res);
        }
      })
      .catch((err) => console.log(err));

      //clean up the useEffect
      return ()=>{
        ignore = true;
      }
  }, [value, buttonNum]);
  return (
    <div className="flex flex-col justify-center my-10">
      <p className="text-center mb-5"><span className="font-bold">Note :</span> Select a button based on your wish. Type something in the text box.</p>
      <Search setValue={setValue} value={value} />
      <Pagination setButtonNum={setButtonNum} />
      <Display output={output} />
    </div>
  );
}
