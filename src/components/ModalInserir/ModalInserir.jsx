import styles from "./ModalInserir.module.css";

export default function ModalInserir(){

    document.title = "CADASTRO"/node_modules

    let novoId;

    fetch("http://localhost:5000/produtos",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
        
    })
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data)
        return novoId = (data[data.length-1].id+1)
    })
    .catch(error=> console.log(error));

    console.log("NOVO ID " + novoId)
    return novoId

if (props.open){
    return(
        <div className={styles.container}>
            <h1>Modal Inserir</h1>
            <button onClick={()=>props.setOpen(false)}>CLOSE-MODAL</button>
        </div>
    )
    }
}