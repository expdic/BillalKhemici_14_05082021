
import { configureStore } from "@reduxjs/toolkit";

import userStore from "./reducer/usersStored";

const storage = configureStore({
  reducer: {
    usersList: userStore,
  },
});

export default storage;