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
             console.log('data', state.invoiceData)
        }
    },
    actions: {
        async GET_INVOICE({commit}, state) {
            const results = await getDocs(collection(db, 'invoice'));
            results.forEach((doc) => {
                if(!state?.invoiceData.some((invoice) => invoice.docId === doc.id)){
                    const data = {
                        docId: doc.id,
                        invoiceId: doc.data().invoiceId,
                        billerAddress: doc.data().billerAddress,
                        billerCity: doc.data().billerCity,
                        billerZipCode: doc.data().billerZipCode,
                        billerCountry: doc.data().billerCountry,
                        clientName: doc.data().clientName,
                        clientEmail: doc.data().clientEmail,
                        clientAddress: doc.data().clientAddress,
                        clientCity: doc.data().clientCity,
                        clientZipCode: doc.data().clientZipCode,
                        clientCountry: doc.data().clientCountry,
                        invoiceDateUnix: doc.data().invoiceDateUnix, // not added yet
                        invoiceDate: doc.data().invoiceDate,
                        invoiceDueDateUnix: doc.data().invoiceDueDateUnix, // not added yet
                        invoiceDueDate: doc.data().invoiceDueDate,
                        invoiceTerms: doc.data().invoiceTerms,
                        invoiceDesc: doc.data().invoiceDesc,
                        invoiceItemList: doc.data().invoiceItemList,
                        invoiceTotal: doc.data().invoiceTotal,
                        invoicePending: doc.data().invoicePending,
                        invoiceDraft: doc.data().invoiceDrafts,
                        invoicePaid: doc.data().invoicePaid,
                    }
                    commit('SET_INVOICE', data)
                }
            })
        }
    },
})
export default store