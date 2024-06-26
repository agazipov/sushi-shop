import { FormData, ICart } from "../types/types";

export function parsedOderForString(formState: FormData, cart: ICart): string {
    const deliveryChek = formState.delivery.toString() === 'false';

    let string = 'Имя: ' + formState.name + '\n'
        + 'Телефон: ' + formState.phone + '\n'
        + 'Заказал:\n' + cart.buy.map((dish) => {
            return 'Блюдо - ' + dish.name + ' ('
                + (dish.countByLarge ? 'большая порция: ' + dish.countByLarge : '')
                + ((dish.countByLarge && dish.countByMid) ? ', ' : '')
                + (dish.countByMid ? 'маленькая порция: ' + dish.countByMid : '')
                + ')'
        }).join('\n') + '\n'
        + 'На сумму: ' + cart.price + '₽\n'
        + 'Доставка: ' + (deliveryChek ? 'самовывоз' : 'на адрес') + '\n'
        + (deliveryChek ? '' : 'Адрес: ул. ' + formState.street + ', дом ' + formState.house + ', квартира ' + formState.apartment + '\n')
        + (formState.comment ? 'Коментарий: ' + formState.comment + '\n' : '')
    return string;
}