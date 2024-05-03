export interface IDish {
    id: string,
    name: string,
    compound?: string,
    price_for_mid?: number,
    price_for_large?: number,
    count?: number,
    select?: 'mid' | 'large',
    img: string,
}

export interface ISet {
    id: string,
    name: string,
    price: number,
    img: string,
    dishes: string[],
}

export interface ICart {
    price: number,
    countDishes: number,
    buy: IDish[],
}