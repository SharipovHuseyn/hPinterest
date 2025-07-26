import "./Upload/Upload.css";
import SearchPannel from "./SearchPannel";
import ControlPanel from "./СontrolPanel";

export default function Upload() {
  return (
    <div className="continer">
      <main>
        <ControlPanel />
        <div className="main-show">
          <SearchPannel />
          <div>
            
          </div>
        </div>
      </main>
    </div>
  );
}