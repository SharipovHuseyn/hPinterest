import Logo from "./logo";
import ManuButton from "./MenuButton/ManuButton";
import BannerUser from "./BannerUser/BannerUser";

import { RiHomeFill } from "react-icons/ri";
import { IoTime } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

export default function ControlPanel() {
  return (
    <div className="control-panel">
      <Logo />
      <div>
        <div>
          <ManuButton icon={<RiHomeFill />} type={"active"}>
            Home
          </ManuButton>
          <ManuButton icon={<IoTime />}>Recent</ManuButton>
          <ManuButton icon={<BsFillPeopleFill />}>Following</ManuButton>
          <p className="insights">Insights</p>
          <ManuButton icon={<BiSolidMessageDetail />}>Message</ManuButton>
          <ManuButton icon={<IoNotifications />}>Notifications</ManuButton>
        </div>

        <BannerUser lastLogin={"10/08/24"}>Huseyn</BannerUser>
      </div>
    </div>
  );
}
