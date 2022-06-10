// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { 
    getFirestore, 
    collection,
    doc, 
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDvFfYpEISeOp_ArlkhQwTBHc8JlvI9CPM",
authDomain: "valfracontactform.firebaseapp.com",
databaseURL: "https://valfracontactform-default-rtdb.firebaseio.com",
projectId: "valfracontactform",
storageBucket: "valfracontactform.appspot.com",
messagingSenderId: "937132259017",
appId: "1:937132259017:web:d1c216fccc5199f21dff18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore

const db = getFirestore();

// Funciones para guardar BBDD
export function nuevoClienteValfra(nombre, correo, asunto, tipoEmpresa) {
    addDoc(collection(db, 'clientes'), {nombre, correo, asunto, tipoEmpresa})
}

export const getClientes = async () =>  await getDocs(collection(db, 'clientes'));

export const onGetClientes = (callback) => {
    onSnapshot(collection(db, 'clientes'), callback)
}

export const deleteCliente = (id) => {
    deleteDoc(doc(db, 'clientes', id));
}