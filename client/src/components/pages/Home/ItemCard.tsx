import { Shoe } from "../../../types/Shoe";

export function ItemCard(props: { shoe: Shoe }) {
    const { shoe } = props;
    return (
        <li key={shoe._id}>{shoe.make} {shoe.model}<img style={{ width: '50%' }} src={shoe.images[0]} /></li>
    );
}
