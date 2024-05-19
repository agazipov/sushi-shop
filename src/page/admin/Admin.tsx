import TableDishes from "../../component/tableDishes/TableDishes";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import coldRolls from "../../data/menu/coldRolls.json";
import bakedRolls from "../../data/menu/bakedRolls.json";
import beverages from "../../data/menu/beverages.json";
import extras from "../../data/menu/extras.json";
import friedRolls from "../../data/menu/friedRolls.json";
import pizzas from "../../data/menu/pizzas.json";
import tortillas from "../../data/menu/tortillas.json";
import { createPortal } from "react-dom";
import ModalChangeDish from "../../component/modalChangeDish/ModalChangeDish";
import { IDish } from "../../types/types";

const CATEGORIES_LIST = [coldRolls, bakedRolls, beverages, extras, friedRolls, pizzas, tortillas];
const CATEGORIES_NAME = ['coldRolls', 'bakedRolls', 'beverages', 'extras', 'friedRolls', 'pizzas', 'tortillas'];

export default function Admin() {
    const [key, setKey] = useState('coldRolls');
    const [show, setShow] = useState<IDish | null>(null);

    // ссырая версия, нужно менять структуру для блюд 
    // паренёк у тебя ключ индексом назначен
    return (
        <section>
            <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k!)}
                className="mb-3"
            >
                {CATEGORIES_NAME.map((categorie, index) => {
                    return (
                        <Tab eventKey={categorie} title={categorie} key={index}>
                            <TableDishes categories={CATEGORIES_LIST[index]} showModal={setShow}/>
                        </Tab>
                    )
                })}
            </Tabs>
            {createPortal(
                <ModalChangeDish data={show} setShow={setShow} />,
                document.getElementById('modalContainer')!
            )}
        </section>
    )
}
