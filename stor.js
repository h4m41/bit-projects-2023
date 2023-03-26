

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/redux";

// import langSlice from "./components/redux/langSlice";
export default configureStore({
  reducer: {
    
    user: userSlice,
    // lang: langSlice,
  },
});
