import db from "@/firebase/firbaseInt";
import {collection, getDocs, doc} from "firebase/firestore";

export async function getInvoice({commit, state} ){
    const result = await getDocs(collection(db,'invoice'));
    result.forEach((doc) =>{
        const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
        }
        commit('SET_INVOICE', data)
    })
}