import { configureStore } from "@reduxjs/toolkit";
import LangugeSlice from "./slice/SliceLanguge";
import themeSlice from "./slice/themeSlice";
export const store = configureStore({
  reducer: {
    lang: LangugeSlice,
    theme: themeSlice,
  },
});
