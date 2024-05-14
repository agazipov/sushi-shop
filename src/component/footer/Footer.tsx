import telegram from './svg/icons8-telegram.svg';
import vk from './svg/icons8-vk.svg';

import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__icon-wrapper">
                    <p>Не забудь подписатся на нас</p>
                    <div className="footer__icon">
                        <a href="https://vk.com/fishrice_group" target='__blank'>
                            <img src={telegram} alt="Иконка телеграм" />
                        </a>
                        <a href="https://vk.com/fishrice_group" target='__blank'>
                            <img src={vk} alt="Иконка вконтекте" />
                        </a>
                    </div>
                </div>
                <div className='footer__inf-wrapper'>
                    <div className="footer__inf">
                        <p>ИП Зубарева Екатерина Сергеевна</p>
                        <p>ИНН 741709410469</p>
                        <p>ОГРН 322745600095772</p>
                    </div>
                    <div className="footer__inf">
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Публичная оферта</a>
                    </div>
                    <div className="footer__inf">
                        <p>Development by <a href="https://nextjs.org" target='__blank'>Next.js</a></p>
                        <p>2024г.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}