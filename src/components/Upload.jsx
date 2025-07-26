import "./Upload/Upload.css";
import SearchPannel from "./SearchPannel";
import ControlPanel from "./СontrolPanel";
import Button from "./Button/Button";
import Input from "./Input/Input";

export default function Upload() {
  return (
    <div className="continer">
      <main>
        <ControlPanel />
        <div className="main-show">
          <SearchPannel />
          <div className="upload-block">
            <div className="upload-main">
              <div className="upload-header">
                <p>Создание пина</p>
              </div>
              <div className="upload-pin">
                <div className="upload-image">
                  <div>upload</div>
                  <hr />
                  <button className="draft-btn">Создать</button>
                </div>
                <div className="upload-form">
                  <Input placeholder={"Добавить название"} width={"90%"} height={""} label="Название" id="name"/>
                  <Input placeholder={"Добавите подробное описание"}  marginTop="15px" width={"90%"} height={"50px"} label="Описание" id="discription" textarea={true}/>
                  <Input placeholder={"Найдите тег"} marginTop="20px" width={"90%"} height={""} label="Темы с тегом (0)" id="name"/>
                </div>
              </div>
            </div>
            <div className="upload-draft">
              <div className="draft-header">
                <h3>Черновики пина</h3>
                <button className="draft-btn">Создать</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
