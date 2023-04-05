import { useParams } from 'react-router-dom';
export default function Comprar()
{
    const { id } = useParams();
    return(
        <>
            <h1>Comprar Item {id}</h1>
        </>
    )
}