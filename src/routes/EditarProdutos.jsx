import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import produtos from "./Produtos";

export default function EditarProdutos(){

document.title = "EDITAR PRODUTO";

const {id} = useParams();

const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]

    return(
        <>
        <div>
            <form>
                <fieldset>
                    <legend>Produto Selecionado</legend>
                    <div>
                        <label htmlFor="idNome">Nome</label>
                        <input type="text" name="nome" id="idNome" 
                        defaultValue={produtoRecuperado.nome}/>

                        <label htmlFor="idDesc">Descrição</label>
                        <input type="text" name="desc" id="idDesc" 
                        defaultValue={produtoRecuperado.desc}/>

                        <label htmlFor="idPreco">Preço</label>
                        <input type="text" name="preco" id="idPreco"
                        defaultValue={produtoRecuperado.preco}/>

                    </div>
                    <div>
                        <button>EDITAR</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    )
}
