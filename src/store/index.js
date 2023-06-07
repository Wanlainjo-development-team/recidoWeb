// Utilities
import { createPinia } from 'pinia'
import { db } from '@/plugins/firebase'

export default createPinia({
    state:{
        invoiceData:[]
    },
    actions: {
        async GET_INVOICES({commit,state}){
            const getData = db.collection('invoices');
            const results = await getData.get();
            //ietterating through the results
            results.forEach(doc => {
                //if invocie already exist in the invocieDat it wont be added twice
                if(!state.invoiceData.some(invocie => invocie.docId === doc.id)){
                    const data ={
                        docId: doc.id,
                        state:  doc.data().state,
                        address: doc.data().address,
                    };
                }
            })

        }
    },
})
