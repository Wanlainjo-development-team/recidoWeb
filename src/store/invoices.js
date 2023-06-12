import { db } from "@/plugins/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";

export const useInvoicesStore = defineStore("invoices", {
  state: () => ({
    invoiceList: [],
  }),

  actions: {
    async GET_INVOICES() {
      let id = import.meta.env.VITE_UserId;

      const q = collection(db, "users", id, "invoices");
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.invoiceList = [];
        querySnapshot.forEach((doc) => {
          this.invoiceList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });

      return unsubscribe;
    },
  },
});
