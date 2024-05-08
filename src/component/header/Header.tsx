import Cart from "../cart/Cart";
import fishes from './fishes.webp';

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__title">
                    <h1>Рыба & Рис</h1>
                </div>
                <div className="header__img">
                    <img width={770} height={770} src={fishes} alt="Логотип с 2 карпами" />
                </div>
                {/* <div className="header__info">
                        <p>г. Бакал, ул. Ленина, 5, помещение 1 (вход с торца)</p>
                        <p>ДОСТАВКА от 500 рублей по Бакалу БЕСПЛАТНО</p>
                    </div>
                    <div className="header__links">
                        <a href="mock">vk.com/fishrice_bakal</a>
                        <a href="mock">+7 (908) 939-22-12</a>
                        <a href="mock">+7 (912) 772-89-48</a>
                    </div> */}
                <Cart />
            </div>
        </header>
    )
}