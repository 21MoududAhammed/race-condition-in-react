import Display from "./components/Display";
import Pagination from "./components/Paginations";
import Search from "./components/Search";

export default function App(){
    return (
      <div className="flex flex-col justify-center my-10">
         <Search/>
         <Pagination/>
         <Display/>
      </div>
    );
}