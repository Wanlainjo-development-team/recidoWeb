import { defineStore } from "pinia";
import { db } from "@/plugins/firebase";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { useAppStore } from "./app";

const app = useAppStore;

export const useCustomerStore = defineStore("customers", {
  state: () => ({
    customerList: [],
    dialog: false,
    customerName: "",
    address: "",
    contact: "",
    email: "",
    loading: false,
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

    async NEW_CUSTOMER() {
      let id = import.meta.env.VITE_UserId;

      const customers = await getDocs(
        query(
          collection(db, "users", id, "customers"),
          where("name", "==", this.customerName)
        )
      );

      if (customers.docs.length >= 1) {
        app().snackbar = true;
        app().snackbarText = "This customer already exists";
        app().snackbarColor = "red";
      } else {
        this.loading = true;

        await addDoc(collection(db, "users", id, "customers"), {
          name: this.customerName,
          address: this.address,
          phone: this.contact,
          email: this.email,
        });

        app().snackbar = true;
        app().snackbarText = "Customer added successfully";
        app().snackbarColor = "green";

        this.loading = false;
        this.dialog = false;g
      }
      // const newUser = collection(db, "users" , id, "customers").set({
      //     name:
      // })
    },
  },
});
