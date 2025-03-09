import { useParams } from 'react-router';
import './Edit.scss';

export function Edit() {
    const params = useParams();
    console.log(params);
    console.log(params.id);
    return (
        <section>Edit Page</section>
    );
}