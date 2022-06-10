// Firebase
import { getClientes, onGetClientes, deleteCliente } from '../assets/js/firebase.js'

// Variables
const tablaBody = document.querySelector('#tbodyDataBase')

// Event Listener
window.addEventListener('DOMContentLoaded', () => {
    pintarClientesEnTabla();
})


// Funciones
async function pintarClientesEnTabla() {

    onGetClientes((querySnapshot) => {

        tablaBody.innerHTML = "";

        querySnapshot.forEach(cliente => {
            
            const {nombre, correo, asunto, tipoEmpresa} = cliente.data();

            tablaBody.innerHTML += `
            <tr>
                <td>
                    ${nombre}
                </td>
                <td>
                    ${correo}
                </td>
                <td>
                    ${asunto}
                </td>
                <td>
                    ${tipoEmpresa}
                </td>
                <td>
                    <button class="btn-delete" data-id="${cliente.id}">Eliminar</button>
                </td>
            </tr>
            `;
        });

        const btnDelete = tablaBody.querySelectorAll('.btn-delete');

        btnDelete.forEach((btn) => {
            
            btn.addEventListener('click', ({target: {dataset}}) => {
                deleteCliente(dataset.id)
            })
        })
    });
};

























/*     const querySnapshot = await getClientes();

    console.log()

    querySnapshot.forEach(cliente => {
        const {nombre, correo, asunto, tipoEmpresa} = cliente.data();
        tablaBody.innerHTML += `
        <tr>
            <td>
                ${nombre}
            </td>
            <td>
                ${correo}
            </td>
            <td>
                ${asunto}
            </td>
            <td>
                ${tipoEmpresa}
            </td>
        </tr>
        `
    });
 */