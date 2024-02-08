import { useEffect, useState } from "react";
import Display from "./components/Display";
import Pagination from "./components/Paginations";
import Search from "./components/Search";
import { generateMilliseconds, searchData } from "./utils";

export default function App() {
  const [buttonNum, setButtonNum] = useState(null);
  const [value, setValue] = useState("");
  const [ output, setOutput] = useState('')


  useEffect(() => {
    const milliseconds = generateMilliseconds();
    searchData(buttonNum, milliseconds, value)
      .then((res) => {
        setOutput(res);
      })
      .catch((err) => console.log(err));
  }, [value, buttonNum]);
  return (
    <div className="flex flex-col justify-center my-10">
      <Search setValue={setValue} value={value} />
      <Pagination setButtonNum={setButtonNum} />
      <Display output={output} />
    </div>
  );
}
