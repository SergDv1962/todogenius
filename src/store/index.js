import { configureStore } from "@reduxjs/toolkit";
import registeredSlice from "./registeredSlice";

export const store = configureStore({
   reducer: {
      registered: registeredSlice,
   }
})