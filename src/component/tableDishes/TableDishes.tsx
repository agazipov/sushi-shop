import { IDish } from "../../types/types";
import Table from 'react-bootstrap/Table';

interface ITableDishes {
    categories: IDish[]
    showModal: (e: IDish) => void
}

export default function TableDishes({categories, showModal}: ITableDishes) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Состав</th>
                        <th>Цена(мал)</th>
                        <th>Цена(бол)</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((dish, index) => {
                        return (
                            <tr key={dish.id} onClick={() => showModal(dish)}>
                                <td>{index + 1}</td>
                                <td>{dish.name}</td>
                                <td>{dish.compound}</td>
                                <td>{dish.price_for_mid}</td>
                                <td>{dish.price_for_large}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}