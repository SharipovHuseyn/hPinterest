import { FaPinterest } from "react-icons/fa";

export default function Logo() {
  return (
    <a className="logo-link" href="/">
      <div className="logo">
        <FaPinterest color="red" size={25} />
        <h3>hPinterest</h3>
      </div>
    </a>
  );
}
