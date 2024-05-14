import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import japan_girl from './art_girl.webp';
import rice from './rice.webp';
import carps from './carps.webp';
import action from './action.webp';

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
                    {/* <p>Однажды к учителю пришел ученик и спросил: <i>- "Что такое суши, Учитель?".</i></p>
                    <p>Учитель отвечал ему:<br /> <i>- "Су́ши, или су́си (яп. すし, 寿司, 壽司, 鮨, 鮓, 寿斗, 寿し), — блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов. С начала 1980-х годов суши получило широкую популярность на Западе и во всём мире."</i></p> */}
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
            <div className='home__section discription'>
                <div className="home__img">
                    <img width={800} height={650} src={carps} alt="Тарелка с рисом и палочки" />
                </div>
                <div  className="home__text">
                    <h3>АКЦИЯ</h3>
                    <p>Пицца Инь Янь<br />
                        32см - 470гр<br />
                        Цена : 450₽<br />
                        ☯Собери половинки на свой вкус*
                    </p>
                    <div className="home__action">
                        <img src={action} alt="Акция" />
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
            <div className="home__map">
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/37166/bakal/search/%D1%80%D1%8B%D0%B1%20%D1%80%D0%B8%D1%81/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Рыба&Рис в Бакале
                    </a>
                    <a
                        href="https://yandex.ru/maps/37166/bakal/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
                    >
                        Бакал
                    </a>
                    <iframe
                        title="yandex_map"
                        src="https://yandex.ru/map-widget/v1/?ll=58.814795%2C54.938172&mode=search&oid=131386570138&ol=biz&sll=58.811208%2C54.938172&sspn=0.016476%2C0.005603&text=%D1%80%D1%8B%D0%B1%20%D1%80%D0%B8%D1%81&z=16.2"
                        width="400"
                        height="400"
                        allowFullScreen={true}
                        style={{ position: "relative" }}
                    />
                </div>
            </div>
        </section >
    )
}