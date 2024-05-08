import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import japan_girl from './art_girl.webp';
import rice from './rice.webp';
import carps from './carps.webp';

import "./HomeMain.css";

export default function HomeMain() {
    const navigate = useNavigate();
    const handleStartBuy = () => {
        navigate('/cold_rolls');
        // чекнуть как это фиксить, выглядит как хуйня
        window.scrollTo(0, 0);
    }

    return (
        <section className="home container">
            <div className="home__section greetings">
                <div className="home__img">
                    <img width={800} height={1200} src={japan_girl} alt="Гейша с зонтиком" />
                </div>
                <div className="home__text">
                    <p>Однажды к учителю пришел ученик и спросил: <i>- "Что такое суши, Учитель?".</i></p>
                    <p>Учитель отвечал ему:<br /> <i>- "Су́ши, или су́си (яп. すし, 寿司, 壽司, 鮨, 鮓, 寿斗, 寿し), — блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов. С начала 1980-х годов суши получило широкую популярность на Западе и во всём мире."</i></p>
                </div>
            </div>
            <div className='home__section discription'>
                <div className="home__img">
                    <img width={800} height={650} src={carps} alt="Тарелка с рисом и палочки" />
                </div>
                <div className='home__text'>
                    <p>Мы рады приветствовать Вас в нашем магазине "Рыба&Рис!"</p>
                    <p>Здесь вы можете заказать доставку суши по городу <u>Бакал, ул. Ленина, д.5</u></p>
                    <p>Для особых ценителей в нашем ассортименте имеется большой выбор пиццы)</p>
                    <p>Бесплатная доставка от 600 руб</p>
                    <div className="discription__btn-group">
                        <a href="tel:+79089392212">
                            <Button variant="dark">Позвоните нам</Button>
                        </a>
                        <Button variant="dark" onClick={handleStartBuy}>Начать покупки</Button>
                    </div>
                </div>
            </div>
            <div className='home__section rules'>
                <div className="home__img">
                    <img width={800} height={650} src={rice} alt="Тарелка с рисом и палочки" />
                </div>
                <div className='home__text'>
                    <p>Для того чтобы сделать заказ, добавьте в корзину интересующие вас блюда, щёлкните на корзине справа-сверху и подтвердите заказ. В открывшейся странице заказа необходимо указать Вашу информацию и сделать запрос. Пройдёт совсем не много времени и с вами свяжется наш оператор для уточнения деталей.</p>
                </div>
            </div>
        </section>
    )
}