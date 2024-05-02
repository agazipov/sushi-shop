// строчные или прописные в рецептах блюд**
// woc из допов добавить топпинги
import { IDish, ISet } from "../types/types";

export const coldRolls: IDish[] = [
    {
        id: '',
        name: 'Сяке маки',
        compound: 'Лосось с/с, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 160,
        img: 'LQzku-niAqM.jpg'
    },
    {
        id: '',
        name: 'Текка маки',
        compound: 'Тунец, свежий огурчик, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 180,
        img: 'yPiciDJCL9Y.jpg'
    },
    {
        id: '',
        name: 'Крабик',
        compound: 'Творожный сыр, мясо краба, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 170,
        img: 'QO-14tGUxCU.jpg'
    },
    {
        id: '',
        name: 'Лава',
        compound: 'рис, лосось, огурчик, Ким чи',
        price_for_mid: 0,
        price_for_large: 190,
        img: 'pJy-cW9WoaI.jpg'
    },
    {
        id: '',
        name: 'Гейша маки',
        compound: 'Творожный сыр, копченый лосось, зелёный лук',
        price_for_mid: 0,
        price_for_large: 200,
        img: 'DlUW1JrOOXc.jpg'
    },
    {
        id: '',
        name: 'Икура маки',
        compound: 'Творожный сыр, икра лососевая)',
        price_for_mid: 0,
        price_for_large: 230,
        img: '30I_IXf8YmA.jpg'
    },
    {
        id: '',
        name: 'Унаги маки',
        compound: 'Угорь, свежий огурчик, соус Унаги, кунжут',
        price_for_mid: 0,
        price_for_large: 210,
        img: 'TpdPj7SUBoo.jpg'
    },
    {
        id: '',
        name: 'Тори маки',
        compound: 'сливочный сыр, курочка, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 200,
        img: 'zjuji5uNt7E.jpg'
        // шакалья фотка
    },
    {
        id: '',
        name: 'Эби маки',
        compound: 'Творожный сыр, икра Тобико, креветка',
        price_for_mid: 0,
        price_for_large: 210,
        img: 'BbEl5HpDkmc.jpg'
    },
    {
        id: '',
        name: 'Бекон маки',
        compound: 'Рис, сливочный сыр, зеленый лук, бекон',
        price_for_mid: 0,
        price_for_large: 200,
        img: 'R6qZmV1FXDg.jpg'
    },
    {
        id: '',
        name: 'Каппа маки',
        compound: 'свежий огурчик, творожный сыр',
        price_for_mid: 0,
        price_for_large: 100,
        img: '9PWsZnQ9-9E.jpg'
    },
    {
        id: '',
        name: 'Фитнес',
        compound: 'Свежий огурчик, болгарский перец, помидор, лист салата, соус Ореховый',
        price_for_mid: 0,
        price_for_large: 180,
        img: '3hMJtZz_Ol8.jpg'
    },
    {
        id: '',
        name: 'Чука маки',
        compound: 'Водоросли Чука, соус Ореховый',
        price_for_mid: 0,
        price_for_large: 120,
        img: '7Hp_WlNM_9Q.jpg'
    },
    {
        id: '',
        name: 'Шиитаке маки',
        compound: 'рис, грибы шиитаке, омлет Томаго',
        price_for_mid: 0,
        price_for_large: 140,
        img: 'tAOFOdfEsx4.jpg'
    },
    {
        id: '',
        name: 'Сакана',
        compound: 'Творожный сыр, тунец, свежий огурчик, кунжут',
        price_for_mid: 190,
        price_for_large: 330,
        img: 'xFF9PSHhnh8.jpg'
    },
    {
        id: '',
        name: 'Ига маки',
        compound: 'Рис, вареные мидии, лист салата, кунжут',
        price_for_mid: 0,
        price_for_large: 180,
        img: 'TOIGkcieCr8.jpg'
    },
    {
        id: '',
        name: 'Филадельфия Классик',
        compound: 'Много творожного сыра, лосось с/с',
        price_for_mid: 190,
        price_for_large: 330,
        img: '8SY3xsBqn_E.jpg'
    },
    {
        id: '',
        name: 'Филадельфия ДеЛюкс',
        compound: 'Творожный сыр, лосось с/с, угорь, креветка, икорная шапочка',
        price_for_mid: 210,
        price_for_large: 350,
        img: 'IvxOurRt3H0.jpg'
    },
    {
        id: '',
        name: 'Москва',
        compound: 'Творожный сыр, лосось с/с, свежий огурчик, икра лососевая',
        price_for_mid: 210,
        price_for_large: 350,
        img: '4bt707Tx43c.jpg'
    },
    {
        id: '',
        name: 'Филадельфия Лайм',
        compound: 'Творожный сыр, лосось с/с, свежий огурчик, лайм(или лимон), острый соус Ким Чи',
        price_for_mid: 200,
        price_for_large: 340,
        img: 'edLXVuAkp3g.jpg'
    },
    {
        id: '',
        name: 'Дракон',
        compound: 'Творожный сыр, свежий огурчик, угорь, соус Унаги, кунжут',
        price_for_mid: 190,
        price_for_large: 330,
        img: 'xUaJ3SYtvy4.jpg'
    },
    {
        id: '',
        name: 'Канада',
        compound: 'Творожный сыр, свежий огурчик, лосось с/с, угорь, соус Унаги, кунжут',
        price_for_mid: 210,
        price_for_large: 350,
        img: 'mngJsvDMJU0.jpg'
    },
    {
        id: '',
        name: 'Бутта ролл',
        compound: 'Творожный сыр, помидор, лист салата, зелёный лук, бекон, кунжут',
        price_for_mid: 180,
        price_for_large: 300,
        img: '8BCQdMclXtQ.jpg'
    },
    {
        id: '',
        name: 'Мясной',
        compound: 'Творожный сыр, курочка, омлет Томаго, бекон, соус Барбекю',
        price_for_mid: 190,
        price_for_large: 330,
        img: 'UJey7POWtv4.jpg'
    },
    {
        id: '',
        name: 'Либерти',
        compound: 'сливочный сыр,маменори, креветка, салат, икорная шапочка, ореховый соус',
        price_for_mid: 0,
        price_for_large: 320,
        img: 'JlBaX_0iK4U.jpg'
    },
    {
        id: '',
        name: 'Ига ролл',
        compound: 'Маменори, творожный сыр, мидии, свежий огурчик, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 320,
        img: 'ykdyPV3PzuE.jpg'
    },
    {
        id: '',
        name: 'Амстердам',
        compound: 'Сливочный сыр, курочка, свежий огурчик, икра тобико, шапочка Амстердам с ветчиной',
        price_for_mid: 190,
        price_for_large: 320,
        img: 'w00aBwiXgUc.jpg'
        // *продукт на фотографии может отличаться от оригинала, при выборе блюд опирайтесь на описание
    },
    {
        id: '',
        name: 'Калифорния',
        compound: 'Творожный сыр, лосось с/с, свежий огурчик, икра Тобико',
        price_for_mid: 190,
        price_for_large: 310,
        img: 'UxOISO1_HKY.jpg'
    },
    {
        id: '',
        name: 'Калифорния Эби',
        compound: 'Творожный сыр, креветка, свежий огурчик, икра Тобико',
        price_for_mid: 190,
        price_for_large: 310,
        img: 'AZLAXbQjyn0.jpg'
    },
    {
        id: '',
        name: 'Кани',
        compound: 'Творожный сыр, мясо краба, огурчик, икра Тобико',
        price_for_mid: 170,
        price_for_large: 290,
        img: 'OJoSj_ajZX0.jpg'
    },
    {
        id: '',
        name: 'Кабиа',
        compound: 'Творожный сыр, угорь, свежий огурчик, икра Тобико',
        price_for_mid: 190,
        price_for_large: 300,
        img: 'os5tOogRaIs.jpg'
    },
    {
        id: '',
        name: 'Бостон',
        compound: 'обжаренный лосось, сливочный сыр, лист салата, икра тобико',
        price_for_mid: 190,
        price_for_large: 300,
        img: 'Jb1gYPGWov4.jpg'
    },
    {
        id: '',
        name: 'Катана',
        compound: 'Креветка в кляре, свежий огурчик, икра Тобико, соус Спайси',
        price_for_mid: 190,
        price_for_large: 300,
        img: 'KsHnfsO1rkA.jpg'
    },
    {
        id: '',
        name: 'Чиз',
        compound: 'Творожный сыр, курочка, свежий огурчик, сыр Hochland, соус Барбекю',
        price_for_mid: 190,
        price_for_large: 300,
        img: '9loXvjna0EA.jpg'
    },
    {
        id: '',
        name: 'Кабуки',
        compound: 'сливочный сыр, копченый лосось, свежий огурчик, сыр Hochland',
        price_for_mid: 190,
        price_for_large: 310,
        img: 'xilSkszd0PE.jpg'
    },
    {
        id: '',
        name: 'Королевский',
        compound: 'Творожный сыр, тунец, свежий огурчик, икорная шапочка, икра лососевая',
        price_for_mid: 190,
        price_for_large: 320,
        img: 'v2LJGv42S-Y.jpg'
    },
    {
        id: '',
        name: 'Аляска',
        compound: 'Творожный сыр, копченый лосось, свежий огурчик, кунжут, икорная шапочка',
        price_for_mid: 190,
        price_for_large: 310,
        img: 'IlAr9WVfedw.jpg'
    },
    {
        id: '',
        name: 'Греческий',
        compound: 'Творожный сыр, помидор, болгарский перец, свежий огурчик, лист салата, кунжут, сыр Брынза',
        price_for_mid: 160,
        price_for_large: 220,
        img: 'ctfDbEqpsT8.jpg'
    },
    {
        id: '',
        name: 'Цезарь',
        compound: 'курочка, сливочный сыр, помидор, лист салата, кунжут, соус Чесночный',
        price_for_mid: 170,
        price_for_large: 280,
        img: 'iDZgMH4PA1I.jpg'
    },
    {
        id: '',
        name: 'Бонито',
        compound: 'Творожный сыр, лосось обжаренный в соусе Терияке, стружка тунца',
        price_for_mid: 190,
        price_for_large: 310,
        img: 'HVogVPEf5Oo.jpg'
    },
    {
        id: '',
        name: 'Киото',
        compound: 'Творожный сыр, курочка, омлет Томаго, лук фри, соус Спайси',
        price_for_mid: 190,
        price_for_large: 300,
        img: 'gw2ePk43d5s.jpg'
    },
    {
        id: '',
        name: 'Нагано',
        compound: 'сливочный сыр, угорь, свежий огурчик, стружка тунца, соус Унаги',
        price_for_mid: 190,
        price_for_large: 310,
        img: 'z9eRg8oCvqE.jpg'
    },
    {
        id: '',
        name: 'Чукос',
        compound: 'сливочный сыр, курица, омлет томаго, кунжут ч/б, чука, соус спайси',
        price_for_mid: 160,
        price_for_large: 280,
        img: 'EzafE0fXBes.jpg'
    },
    {
        id: '',
        name: 'Чеддер маки',
        compound: 'сливочный сыр, курица в/к, огурец, соус сырный, воздушный рис',
        price_for_mid: 170,
        price_for_large: 280,
        img: '8YjsHX1uCcQ.jpg'
    },
    {
        id: '',
        name: 'Харли',
        compound: 'сливочный сыр, лосось, огурец, воздушный рис',
        price_for_mid: 200,
        price_for_large: 400,
        img: 'OGSNP7dOCeE.jpg'
    },
]

export const friedRolls: IDish[] = [
    {
        id: '',
        name: 'Эби темпура',
        compound: 'Творожный сыр, креветка, водоросли Чука, соус Ореховый',
        price_for_mid: 0,
        price_for_large: 310,
        img: 's3d-LvHMEYE.jpg'
    },
    {
        id: '',
        name: 'Блэк',
        compound: 'Творожный сыр, креветка, угорь, икра Тобико, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 300,
        img: 'X6cjkdwfKEI.jpg'
    },
    {
        id: '',
        name: 'Унаги темпура',
        compound: 'Творожный сыр, угорь, омлет Томаго, соус Унаги',
        price_for_mid: 0,
        price_for_large: 320,
        img: 'NtxqldkN5Pw.jpg'
    },
    {
        id: '',
        name: 'Сяке темпура',
        compound: 'Творожный сыр, лосось с/с, свежий огурчик, зелёный лук, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 320,
        img: 'cc67Ui3fvEo.jpg'
    },
    {
        id: '',
        name: 'Унаги-сяке темпура',
        compound: 'Творожный сыр, лосось с/с, угорь, свежий огурчик, икорная шапочка, соус Унаги',
        price_for_mid: 0,
        price_for_large: 350,
        img: 'LV9P9O8ZchM.jpg'
    },
    {
        id: '',
        name: 'Куш',
        compound: 'Творожный сыр, курочка, омлет Томаго, шапочка Куш',
        price_for_mid: 0,
        price_for_large: 300,
        img: '2N-0QIN5EGI.jpg'
    },
    {
        id: '',
        name: 'Оригами',
        compound: 'Творожный сыр, курочка, бекон, лук фри, соус Барбекю',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'ebj9hKHw7Fs.jpg'
    },
    {
        id: '',
        name: 'Тори темпура',
        compound: 'Творожный сыр, курочка, свежий огурчик, соус Спайси',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'tfpEjPr-Lyg.jpg'
    },
    {
        id: '',
        name: 'Кани темпура',
        compound: 'Творожный сыр, мясо краба, икра Тобико',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'R4xE88Ot_dY.jpg'
    },
    {
        id: '',
        name: 'Цезарь Хот',
        compound: 'Курочка, помидор, лист салата, лук фри, соус Чесночный',
        price_for_mid: 0,
        price_for_large: 280,
        img: 'FcjVnfKp4I8.jpg'
    },
    {
        id: '',
        name: 'Америка',
        compound: 'Творожный сыр, креветка, икра Тобико, шапочка Фиеста с мидиями',
        price_for_mid: 0,
        price_for_large: 300,
        img: '7XvSaydlH68.jpg'
    },
    {
        id: '',
        name: 'Текка темпура',
        compound: 'Творожный сыр, тунец, свежий огурчик, икорная шапочка',
        price_for_mid: 0,
        price_for_large: 300,
        img: '-qV_yPe8BRg.jpg'
    },
    {
        id: '',
        name: 'Вегас',
        compound: 'Творожный сыр, грибы Шиитаке, зеленый лук, соус Терияке',
        price_for_mid: 0,
        price_for_large: 260,
        img: '8nzptjg1Gxo.jpg'
    },
    {
        id: '',
        name: 'Чикен темпура',
        compound: 'сливочный сыр, курица, помидор, пармезан',
        price_for_mid: 0,
        price_for_large: 300,
        img: 'bbcJX-l7JHs.jpg'
    },
    {
        id: '',
        name: 'Токио',
        compound: 'сливочный сыр, лосось, огурец, сырная шапочка, соус унаги, лук жаренный',
        price_for_mid: 0,
        price_for_large: 310,
        img: 'XNUULdN_1HY.jpg'
    },
]

export const bakedRolls: IDish[] = [
    {
        id: '',
        name: 'Вулкан',
        compound: 'Творожный сыр, мясо краба, сырная шапочка, соус Спайси',
        price_for_mid: 0,
        price_for_large: 250,
        img: 'EnVsRaFpWDY.jpg'
    },
    {
        id: '',
        name: 'Изуми',
        compound: 'Творожный сыр, креветка, свежий огурчик, лосось с/с, сырная шапочка, соус Унаги, кунжут',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'suoGTIWOQr0.jpg'
    },
    {
        id: '',
        name: 'Невада',
        compound: 'Творожный сыр, курочка, Шампиньоны, сырная шапочка, соус 1000 островов',
        price_for_mid: 0,
        price_for_large: 270,
        img: 'vNmuh-Z8zb4.jpg'
    },
    {
        id: '',
        name: 'Ямайка',
        compound: 'Творожный сыр, курочка, ананас, кунжут, сырная шапочка',
        price_for_mid: 0,
        price_for_large: 310,
        img: 'MuxKT2emlBM.jpg'
    },
    {
        id: '',
        name: 'Шик',
        compound: 'Творожный сыр, курочка, омлет Томаго, помидор, сырная шапочка, чесночный соус',
        price_for_mid: 0,
        price_for_large: 310,
        img: 'S9f5vX6VzTg.jpg'
    },
    {
        id: '',
        name: 'Фьюжн',
        compound: 'Творожный сыр, угорь, курочка, лук фри, соус 1000 островов',
        price_for_mid: 0,
        price_for_large: 310,
        img: 'oICJfloS814.jpg'
    },
    {
        id: '',
        name: 'Тояма',
        compound: 'Творожный сыр, угорь, лист салата, икра Тобико, сырная шапочка, соус Унаги',
        price_for_mid: 0,
        price_for_large: 320,
        img: 'FhC6DyiSIYQ.jpg'
    },
    {
        id: '',
        name: 'Фиеста',
        compound: 'Творожный сыр, креветка, свежий огурчик, икра Тобико, шапочка с мидиями',
        price_for_mid: 0,
        price_for_large: 330,
        img: 'NLZaDDjWud4.jpg'
    },
    {
        id: '',
        name: 'Филадельфия Хот',
        compound: 'Творожный сыр, лосось с/с, соус Унаги, зелёный лук',
        price_for_mid: 0,
        price_for_large: 350,
        img: 'Hdttk9G975c.jpg'
    },
    {
        id: '',
        name: 'Криспи',
        compound: 'Творожный сыр, креветка, лист салата, икра Тобико, шапочка с ветчиной',
        price_for_mid: 0,
        price_for_large: 330,
        img: 'THygZr51pKc.jpg'
    },
    {
        id: '',
        name: 'Запеченные ролл с лососем и тунцом',
        compound: 'сливочный сыр, огурец, шапочка лосось/тунец, спайси соус, лук зелёный',
        price_for_mid: 0,
        price_for_large: 340,
        img: 'Y7xnIt4xR4k.jpg'
    },
]

export const tortillas: IDish[] = [
    {
        id: '',
        name: 'Холодная тортилья с курочкой',
        compound: 'мексиканская лепешка, творожный сыр, курочка, маринованный огурчик, помидор',
        price_for_mid: 0,
        price_for_large: 270,
        img: 'ZD7sjWLlT0w.jpg'
    },
    {
        id: '',
        name: 'Холодная тортилья с лососем',
        compound: 'мексиканская лепешка, творожный сыр, лосось копченый, Пекинская капуста, помидор',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'iAwDetWX218.jpg'
    },
    {
        id: '',
        name: 'Горячая тортилья с беконом',
        compound: 'Мексиканская лепешка, творожный сыр, свежий огурчик, помидор, бекон, зелёный лук, Пекинская капуста',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'VEOkW2g-M0M.jpg'
    },
    {
        id: '',
        name: 'Горячая тортилья с курочкой',
        compound: 'Мексиканская лепешка, творожный сыр, курочка, помидор, свежий огурчик, Пекинская капуста',
        price_for_mid: 0,
        price_for_large: 290,
        img: 'kbdbEwlpvlg.jpg'
    },
    {
        id: '',
        name: 'Горячая тортилья с креветкой',
        compound: 'Мексиканская лепешка, творожный сыр, помидор, свежий огурчик, креветка, Пекинская капуста',
        price_for_mid: 0,
        price_for_large: 300,
        img: 'wvffosF9ibM.jpg'
    },
    {
        id: '',
        name: 'Запечённая тортилья с беконом и ветчиной',
        compound: 'Мексиканская лепешка, творожный сыр, бекон, ветчина, свежий огурчик, помидор, Пекинская капуста, сырная шапочка, чесночный соус',
        price_for_mid: 0,
        price_for_large: 320,
        img: '-QK-ozSIAUo.jpg'
    },
]

export const sets: ISet[] = [
    {
        id: '',
        name: '',
        price: 0,
        img: '',
        dishes: []
    },
]

export const pizzas: IDish[] = [
    {
        id: '',
        name: 'Донателло',
        compound: 'Сыр Моцарелла, сыр Брынза, сыр Пармезан, сыр "Hochland", грецкий орех, соус Маджорио',
        price_for_mid: 250,
        price_for_large: 400,
        img: 'p9vfspblKhw.jpg'
    },
    {
        id: '',
        name: 'Леонардо',
        compound: 'Бекон, пепперони, ветчина, сервелат, маслины, сыр Моцарелла, соус томатный, соус «Рыба&Рис»',
        price_for_mid: 270,
        price_for_large: 430,
        img: 'FzsHiuxhqqU.jpg'
    },
    {
        id: '',
        name: 'Микеланджело',
        compound: 'Копченая курочка, сыр Моцарелла, помидоры, ананас, соус Маджорио',
        price_for_mid: 250,
        price_for_large: 390,
        img: 'wFLdyAKBjz8.jpg'
    },
    {
        id: '',
        name: 'Рафаэль',
        compound: 'Креветки, мидии, сыр Моцарелла, перец Болгарский, Маслины, салат, соус томатный',
        price_for_mid: 270,
        price_for_large: 440,
        img: 'YVTAnqWzJP4.jpg'
    },
    {
        id: '',
        name: 'Ассорти',
        compound: 'Сервелат, шампиньоны, помидоры, сыр Моцарелла, соус томатный, соус «Маджорио», укроп',
        price_for_mid: 250,
        price_for_large: 420,
        img: 'lrezo3ZICI0.jpg'
    },
    {
        id: '',
        name: 'Барбекю Дьябло',
        compound: 'Ветчина, бекон, карбонат, сыр Моцарелла, перец Халапенью, соус «Барбекю»',
        price_for_mid: 270,
        price_for_large: 430,
        img: 'vcPaAaeqamE.jpg'
    },
    {
        id: '',
        name: 'Большой Биг',
        compound: 'Бекон, карбонат, сыр Моцарелла, перец болгарский, шампиньоны, соус Маджорио',
        price_for_mid: 250,
        price_for_large: 390,
        img: 'qdsW7z0ZgLc.jpg'
    },
    {
        id: '',
        name: 'Ветчина&Грибы',
        compound: 'Шампиньоны, Ветчина, сыр Моцарелла, соус «Маджорио», соус томатный',
        price_for_mid: 250,
        price_for_large: 390,
        img: '-vkQ6-UQ-T0.jpg'
    },
    {
        id: '',
        name: 'Каприз',
        compound: 'Ветчина, шампиньоны, лук, маринованные огурчики, маслины, сыр Моцарелла, соус «Рыба&Рис»',
        price_for_mid: 260,
        price_for_large: 420,
        img: 'H-ZbbqT6pGY.jpg'
    },
    {
        id: '',
        name: 'Маргарита',
        compound: 'Помидоры, сыр Моцарелла, сыр Брынза, соус «Маджорио», соус томатный',
        price_for_mid: 200,
        price_for_large: 300,
        img: 'HCLrMoPhUXM.jpg'
    },
    {
        id: '',
        name: 'Пепперони',
        compound: 'Пепперони, сыр Моцарелла, помидоры, соус томатный, соус «Маджорио»',
        price_for_mid: 250,
        price_for_large: 390,
        img: '_z_w5kOx7DE.jpg'
    },
    {
        id: '',
        name: 'Цыпленок',
        compound: 'Копченая курочка, брокколи, соус «Маджорио», сыр Моцарелла, помидоры, соус томатный',
        price_for_mid: 250,
        price_for_large: 390,
        img: 'ZkYJfLkb1Xg.jpg'
    },
    {
        id: '',
        name: 'Римская пицца с лососем',
        compound: 'соус маджорио, соус томатный, руккола, сливочный сыр, масага красная, лосось, пряное оливковое масло',
        price_for_mid: 0,
        price_for_large: 399,
        img: '26px4b4A6dw.jpg'
    },
]

export const extras: IDish[] = [
    {
        id: '',
        name: 'Порция имбиря',
        price_for_mid: 30,
        img: 'T9A2lUJGPHs.jpg'
    },
    {
        id: '',
        name: 'Порция Васаби',
        price_for_mid: 30,
        img: 'T9A2lUJGPHs.jpg'
    },
    {
        id: '',
        name: 'Порция соевого соуса',
        price_for_mid: 30,
        img: 'T9A2lUJGPHs.jpg'
    },
    {
        id: '',
        name: 'Cоус ким чи 50гр',
        price_for_mid: 50,
        img: 'noCSPJkdXBw.jpg'
    },
    {
        id: '',
        name: 'Cоус ореховый 50гр',
        price_for_mid: 50,
        img: 'nBOMdpbD1JQ.jpg'
    },
    {
        id: '',
        name: 'Cоус спайси 50гр',
        price_for_mid: 50,
        img: '2H09HpIT83g.jpg'
    },
    {
        id: '',
        name: 'Картофель фри с соусом 100/25гр',
        price_for_mid: 130,
        img: '1-tmeDlwBuM.jpg'
    },
    {
        id: '',
        name: 'Кольца кальмаров в кляре с соусом 100/25гр',
        price_for_mid: 160,
        img: 'a3uw6ZqnKl0.jpg'
    },
    {
        id: '',
        name: 'Луковые кольца с соусом 120/25гр',
        price_for_mid: 140,
        img: 'WTi5yDsRICA.jpg'
    },
    {
        id: '',
        name: 'Наггетсы из мяса цыпленка с соусом 8шт/25гр',
        price_for_mid: 160,
        img: '1dec-sl9mwI.jpg'
    },
    {
        id: '',
        name: 'Салат Чука',
        price_for_mid: 100,
        img: 'Rv6HMRxyoxk.jpg'
    },
    {
        id: '',
        name: 'Чука с креветкой',
        price_for_mid: 150,
        img: 'Rv6HMRxyoxk.jpg'
    },
    {
        id: '',
        name: 'Чука с угрем',
        price_for_mid: 180,
        img: 'Rv6HMRxyoxk.jpg'
    },
    {
        id: '',
        name: 'Лапша Фунчеза с овощами 200гр',
        price_for_mid: 120,
        img: '_DD6WpjTFno.jpg'
    },
    {
        id: '',
        name: 'Лапша Удон с овощами 200гр',
        price_for_mid: 120,
        img: '_DD6WpjTFno.jpg'
    },
    {
        id: '',
        name: 'Лапша Рамэн с овощами 200гр',
        price_for_mid: 120,
        img: '_DD6WpjTFno.jpg'
    },
    {
        id: '',
        name: 'Рис Японский с овощами 200гр',
        price_for_mid: 120,
        img: '_DD6WpjTFno.jpg'
    },
    {
        id: '',
        name: 'Рис Японский с овощами 200гр',
        price_for_mid: 120,
        img: '_DD6WpjTFno.jpg'
    },
    {
        id: '',
        name: 'Фреш ролл с беконом 240гр',
        compound: 'Мексиканская лепешка, помидор, свежий огурчик, лист салата, лук красный, моцарелла, бекон, соуса:рыба&рис, томатный',
        price_for_mid: 220,
        img: 'njkSSWE_Nk4.jpg'
    },
    {
        id: '',
        name: 'Фреш ролл с креветкой 240гр',
        compound: 'Мексиканская лепешка, помидор, свежий огурчик, лист салата, моцарелла, креветка в кляре, соус 1000остр',
        price_for_mid: 240,
        img: 'UE-CSIjrm7A.jpg'
    },
    {
        id: '',
        name: 'Фреш ролл с рыбкой 240гр',
        compound: 'Мексиканская лепешка, помидор, свежий огурчик, лист салата, моцарелла, рыбные палочки, соус чесночный',
        price_for_mid: 200,
        img: 'PtQLcLJK1C0.jpg'
    },
    {
        id: '',
        name: 'Чизкейк клубничный',
        price_for_mid: 180,
        img: 'Yn6jcVCISMU.jpg'
    },
    {
        id: '',
        name: 'Чизкейк Сникерс',
        price_for_mid: 180,
        img: 'WNmgLqM4KAU.jpg'
    },
    {
        id: '',
        name: 'Онигири темпура с лососем',
        price_for_mid: 290,
        img: 'XMD_02BsiMo.jpg'
    },
    {
        id: '',
        name: 'Онигири темпура с курицей',
        price_for_mid: 290,
        img: '9D3IWfHTkvk.jpg'
    },
    {
        id: '',
        name: 'Запеченные Мидии',
        compound: 'фирменная заправка, соус унаги, кунжут, лимон',
        price_for_mid: 260,
        price_for_large: 400,
        img: 'Gz2e5wULuKw.jpg'
    },
    {
        id: '',
        name: 'Фри бокс с беконом 260гр',
        compound: 'бекон, соус сырный, соус томатный',
        price_for_mid: 280,
        img: 'A6hZoU6_pDM.jpg'
    },
]

export const beverages: IDish[] = [
    {
        id: '',
        name: 'Молочный коктейль 300мл',
        price_for_mid: 120,
        img: 'yj2qmGLr6t8.jpg'
    },
    {
        id: '',
        name: 'Сок детский 200мл',
        price_for_mid: 40,
        img: 'yj2qmGLr6t8.jpg'
    },
    {
        id: '',
        name: 'Coca-cola classic 0,5',
        price_for_mid: 85,
        img: 'Vkpf8mSRyNY.jpg'
    },
    {
        id: '',
        name: 'Coca-cola zero 1',
        price_for_mid: 120,
        img: 'Vkpf8mSRyNY.jpg'
    },
    {
        id: '',
        name: 'Coca-cola classic 1,5',
        price_for_mid: 150,
        img: 'Vkpf8mSRyNY.jpg'
    },
    {
        id: '',
        name: 'Эспрессо 60мл',
        price_for_mid: 80,
        img: 'aqTC7uD-0Kk.jpg'
    },
    {
        id: '',
        name: 'Капучино 200мл',
        price_for_mid: 150,
        img: 'aqTC7uD-0Kk.jpg'
    },
    {
        id: '',
        name: 'Латте 200мл',
        price_for_mid: 180,
        img: 'aqTC7uD-0Kk.jpg'
    },
]