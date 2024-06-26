import './OrderSuccess.css'

export default function OrderSuccess() {
    return (
        <section className="orderSuccess container">
            <div className='orderSuccess__wrapper'>
                <p>Ваш заказ усешно сформирован, через несколько минут с вами свяжется наш оператор для подтверждения</p>
                <p>Вы сможете сделать повторный заказ через 5 минут</p>
            </div>
        </section>
    )
}