import { useParams } from 'react-router-dom';
import ProdutoItem from '../../Components/ProdutoItem';
import Produto from '../../models/ProdutoModel';
export default function Comprar()
{
    const produtoTeste: Produto = {
        id: "abcguid123",
        nome: "Produto Teste",
        preco: 10,
        categoria: "Teste",
        descricao: "Teste",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcSwChHJkUqoevTLo7igM9V4iPvU64XYcJQ&usqp=CAU"
    };
    const { id } = useParams();
    return(
        <>
            
        </>
    )
}