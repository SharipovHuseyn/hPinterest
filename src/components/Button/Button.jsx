import "./Button.css";

export default function Button({ children, icon, color, bgColor, url}) {
  return (
    <div className="button">
        <a href={url}>
          <button style={{ color: color, backgroundColor: bgColor }}>
            {icon}
            <p>{children}</p>
          </button>
        </a>
    </div>
  );
}