import { db } from "@/plugins/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customers", {
  state: () => ({
    customerList: [],
  }),

  actions: {
    async GET_CUSTOMERS() {
      let id = import.meta.env.VITE_UserId;

      const q = collection(db, "users", id, "customers");
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.customerList = [];
        querySnapshot.forEach((doc) => {
          this.customerList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });

      return unsubscribe;
    },
  },
});
