import Card from "react-bootstrap/Card";
import Produto from "../../models/ProdutoModel";
import Button from 'react-bootstrap/Button';
import './styles.css'
export default function ProdutoItem(props: {produto: Produto})
{
    return(
        <Card className="card-parent">
            <Card.Header>
                <Card.Title>{props.produto.nome}</Card.Title>
                <Card.Subtitle>{props.produto.categoria}</Card.Subtitle>
            </Card.Header>
            <Card.Img src={props.produto.imagem} alt={props.produto.nome} className="card-image"/>
            <Card.Footer>
                <Card.Text className="preco">R$ {props.produto.preco.toFixed(2)}</Card.Text>
                <Button 
                variant="dark"
                className="botao-comprar mb-3" 
                href={`/comprar/${props.produto.id}`}
                >
                    Comprar
                </Button>
            </Card.Footer>
        </Card>
    );
}