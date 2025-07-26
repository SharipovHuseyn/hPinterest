import "./Input.css";

export default function Input({
  placeholder,
  width,
  height,
  label = null,
  id = null,
  textarea = false,
  marginTop = 0
}) {
  console.log(label);
  return (
    <div className="upload-input-block" style={{marginTop: marginTop}}>
      {label ? (
        <label className="upload-label" htmlFor={id}>
          {label}
        </label>
      ) : null}
      {textarea ? (
        <textarea
            className="upload-input"
          style={{ width: width, height: height }}
          name={id}
          placeholder={placeholder}
        >
          {}
        </textarea>
      ) : (
        <input
          className="upload-input"
          id={id}
          type="text"
          style={{ width: width, height: height}}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
