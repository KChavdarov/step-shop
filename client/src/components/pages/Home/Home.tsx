import { useEffect, useState } from 'react';
import { Shoe } from '../../../types/Shoe';
import './Home.scss';
import { getAllShoes } from '../../../services/shoeService';
import { ItemCard } from './ItemCard';

const initialState: Shoe[] = [];

export function Home() {
    const [shoes, setShoes] = useState(initialState);
    useEffect(() => { getLatest(); }, []);

    async function getLatest() {
        const shoes = await getAllShoes();
        setShoes(shoes);
    }


    return (
        <section>
            Home Page
            <ul>
                {shoes.map(shoe => <ItemCard key={shoe._id} shoe={shoe} />)}
            </ul>
        </section>
    );
}