import "./ManuButton.css"

export default function ManuButton({children, icon, type}){
    console.log(type)
    return(
        <div className="manu-button">
            <button className={type}>
                {icon}
                <p>{children}</p>
            </button>
        </div>
    )
}