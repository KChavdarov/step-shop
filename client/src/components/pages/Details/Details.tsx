import { useParams } from 'react-router';
import './Details.scss';

export function Details() {
    const params = useParams();
    return (
        <section>Details for product:{params.id}</section>
    );
}