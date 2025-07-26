import Button from "./Button/Button";

import { IoIosSearch } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";

export default function SearchPannel() {
  return (
    <div className="search-pannel">
      <div className="search">
        <IoIosSearch size={20}/>
        <input type="text" placeholder="Search" />
      </div>
      <div className="search-buttons">
        <Button icon={<FiSliders />} bgColor="white" color="black" />
        <Button icon={<AiOutlinePlus />} bgColor="black" color="white" url="/upload" />
      </div>
    </div>
  );
}
