import {createStore} from 'vuex'
import {collection, getDocs, doc, query} from "firebase/firestore";
import db from "@/firebase/firbaseInt";

const store = createStore({
    state: {
        invoiceData: []
    },
    mutations: {
        SET_INVOICE(state, payload) {
            state.invoiceData.push(payload);
            // console.log('data', state.invoiceData)
        }
    },
    actions: {
        async GET_INVOICE({commit}, state) {
            const results = await getDocs(collection(db, 'invoice'));
            results.forEach((doc) => {
                const data = {

                }
                commit('SET_INVOICE', doc.data())
            })
        }
    },
})
export default store