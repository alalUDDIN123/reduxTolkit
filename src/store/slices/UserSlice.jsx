import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeUser(state, action) { },
        deleteUser(state, action) { },
    }
})

export { userSlice }