import { db } from "@/plugins/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";

export const useInventorystore = defineStore("inventory",{
    sate:() =>({
        inventoryList: [],
    }),
    actions:{
       async GET_INVENTORY(){
        let id = import.meta.env.VITE_UserId;

        const i = collection(db, "users",id,"inventory");
        const unsubscribe = onSnapshot(i,(querySnapshot) =>{
            this.inventoryList = [];
            querySnapshot.forEach((doc) =>{
                this.inventoryList.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        });
        return unsubscribe
       }
    },
})