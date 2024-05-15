const TOKEN_BOT = '';
const CHAT_ID = ''

export async function sendOrderTG(order: string) {
    const bodyParser = {
        chat_id: CHAT_ID,
        text: order,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Подтвердить',
                        callback_data: "order_success"
                    },
                ], [
                    {
                        text: 'Отменить',
                        callback_data: "order_cancel"
                    }
                ]
            ]
        }
    }

    const response = await fetch(`https://api.telegram.org/bot${TOKEN_BOT}8/sendMessage`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(bodyParser)
    })
    const json = await response.json();
    return json;
}