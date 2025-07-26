import SearchPannel from "./SearchPannel";
import Carts from "./Carts";
import ControlPanel from "./СontrolPanel";

export default function Home() {
  return (
    <div className="continer">
      <main>
        <ControlPanel />
        <div className="main-show">
          <SearchPannel />
          <Carts />
        </div>
      </main>
    </div>
  );
}
