import './App.css';
import React, { Suspense, useEffect, useState } from "react";
import { onValue, ref, set,update } from "firebase/database"
import {db} from "./firebase";
import Modal from "./Modal";

function App() {
  const [ presents, setPresents ] = useState([]);
  const [ modal, setModal ] = useState(false);
  const [ currentId, setCurrentId ] = useState('')

  useEffect(() => {
    const query = ref(db, "presents");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) setPresents(data)
    });
  }, []);

  const onModalShow = (id) => {
    setCurrentId(id)
    setModal(!modal)
  }

  const selectItem = () => {
    update(ref(db, 'presents/' + currentId), {isSelected:true});
  }

  // console.log('presents',presents)
  return (
    <div className="app">
        <div className={"header"}>
          <div className="wrapper">
            <div className="header-title">
            {/*<h1>Varia`s</h1>*/}
            {/*<p className={"header-subtitle"}>birthday party</p>*/}
            {/*<p className={"header-desc"}>come to celebrate with us!</p>*/}
          </div>
          </div>
        </div>
        <div className={"description section"}>
          <div className="wrapper">
            <h2>Всем привет!</h2>
            <div className="description-list">
              <div className="description-item">
                Дорогие, спасибо Вам, что смогли разделить с нами наш маленький праздник!
              </div>
              <div className="description-item">
                 <p>Московский проспект 257, ТЦ "Гиант", 3 этаж, Арлепарк</p>
                  <p>04 Апреля, 11:00</p>
              </div>
              <div className="description-item">
                *  Будем ждать всех в 10:45, чтобы успеть переодеться и подготовиться к празднику :)
              </div>
              <div className="description-item">
                * Не забудьте взять носочки для себя
                и наших маленьких гостей!
              </div>
            </div>
          </div>
        </div>
        <div className={"ideas section"}>
          <div className="wrapper">
            <div className="ideas-list">
              <h2>Что подарить?</h2>
              <p>Мы не по наслышке знаем, как тяжело подобрать подарок малышу, чтобы искренне его порадовать. И кто как не родители лучше всего знают, что вызовет бурю позитивных эмоций у их малыша!</p>
              <p>
                Чтобы избавить вас от головной боли, а нашей малышке доставить больше радости, мы сделали подборку того, что нам действительно нужно.

              </p>
            </div>
          </div>
        </div>
        <div className="presents section">
          <div className="wrapper">
            <div className="presents-title">
              <h2>Идеи подарков</h2>
              <p>Огромная просьба, если вы выбрали подарок из списка и хотите его подарить, нажмите специальную кнопку под описанием, чтобы скрыть его из списка, чтобы Варюша не получила два одинаковых подарочка:)</p>
            </div>
            <div className="presents-list">
              { presents.map(item => {
                return (
                  <div key={item.id} className={item.isSelected ? `presents-item selected` : `presents-item`}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <img src={`${item.img}`} alt={item.name} />
                    <a target={"_blank"} href={item.link}>Где купить?</a>
                    <button onClick={() => onModalShow(item.id)}>Оставить за нами</button>
                  </div>
                )
              }) }
            </div>
          </div>
        </div>
        <div className={"footer"}>
        <div className="wrapper">
          <div className="footer-title">
            <p className={"footer-subtitle"}>Спасибо за внимание :)</p>
            <h1>До встречи!</h1>

          </div>
        </div>
      </div>
        <Modal active={modal} setModal={setModal} selectItem={selectItem} />
    </div>
  );
}

export default App;
