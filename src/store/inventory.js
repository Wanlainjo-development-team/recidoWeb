import { db } from "@/plugins/firebase";
import { addDoc,
    collection,
    getDocs,
    onSnapshot,
    query,
    where,} from "firebase/firestore";
import { defineStore } from "pinia";
 import { useAppStore } from "./app";
 const app = useAppStore;

export const useInventorystore = defineStore("inventory",{
    sate:() =>({
        inventoryList: [],
        dialog : false,
        price:"",
        description:"",
        name:"",
        quantity:"",
        description:"",
        loading: false

    }),
    actions:{
       async GET_INVENTORY(){
        let id = import.meta.env.VITE_UserId;

        const q = collection(db, "users",id,"inventory");
        const unsubscribe = onSnapshot (q,(querySnapshot) =>{
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