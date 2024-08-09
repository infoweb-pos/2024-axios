import { useState } from "react";
// import axios from "axios";
import api from "../servicos/api";

const PaginaListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    const clicarCarregarUsuarios = () => {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        api('/users')
            // .then(resposta => resposta.data)
            .then(resposta => {
                console.log(resposta);
                return resposta.data;
            })
            .then(json => {
                console.info(json);
                setUsuarios(json);
            })
            
    }
    return (
        <div className="aplicacao">
            <div>
                <h2>Lista de usuarios</h2>
                <button onClick={clicarCarregarUsuarios}>Carregar usuários</button>
            </div>
            <div>
                <ul>
                    {usuarios.map((item) => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default PaginaListarUsuarios;