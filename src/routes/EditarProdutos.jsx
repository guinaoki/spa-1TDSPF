import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import produtos from "./Produtos";

export default function EditarProdutos(){

const {id} = useParams();

const produtoRecuperado = ListaProdutos.filter((produto) => {
    if(produto.id == id){
        return produto;
    }

});

const objProdutoRecuperado = produtoRecuperado[0];

    return(
        <>
        <h1>EditarProdutos</h1>
        <h2>PRODUTO</h2>
        <p>Produto Selecionado - {objProdutoRecuperado.nome}</p>
        <p>NOME : {objProdutoRecuperado.nome}</p>
        <p>DESCRIÇÃO : {objProdutoRecuperado.desc}</p>
        <p>PREÇO : {objProdutoRecuperado.preco}</p>
        </>
    )
}
