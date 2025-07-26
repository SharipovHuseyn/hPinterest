import "./CirculProfile.css";
import alphabetColors from "../../../alphabetColors.js"

export default function CirculProfile({children}) {
  const firstLetter = children?.[0]?.toUpperCase() || '';
    
  const colors = alphabetColors.alphabetColors[firstLetter] || alphabetColors.defaultColors;

  return (
    <div className="circul-profil">
      <p
        style={{
          color: colors.color,
          backgroundColor: colors.bgColor,
        }}
      >
        {firstLetter}
      </p>
    </div>
  );
}
