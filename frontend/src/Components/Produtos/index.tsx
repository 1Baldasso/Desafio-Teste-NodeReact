import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categorias from '../Categorias';
import ProdutoItem from '../ProdutoItem';
import Produto from '../../models/ProdutoModel';
import { getAllProdutos } from './services';
export default function Produtos() {
    const produtoTeste: Produto = {
        id: "abcguid123",
        nome: "Produto Teste",
        preco: 10,
        categoria: "Teste",
        descricao: "Teste",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcSwChHJkUqoevTLo7igM9V4iPvU64XYcJQ&usqp=CAU"
    };

    const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {
        getAllProdutos().then((produtos) => {
            let listaProdutos: Produto[] = [];
            produtos.map((produto: any) => {
                const produtoTemp: Produto = {
                    id: produto.id, 
                    nome: produto.nome,
                    preco: produto.preco,
                    descricao: produto.descricao,
                    categoria: produto.categoria,
                    imagem: produto.imagem
                }
               listaProdutos.push(produtoTemp);
               setProdutos(listaProdutos);
            });
        });
    }, []);

    return (
        <main>
            <Container>
                <h2>Nossos Produtos</h2>
                <Categorias />

                <Row md={3} className="g-4 gx-1">
                    {produtos.map((produto) => {
                        return (
                            <Col key={produto.id}>
                                <ProdutoItem produto={produto} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </main>
    )
}