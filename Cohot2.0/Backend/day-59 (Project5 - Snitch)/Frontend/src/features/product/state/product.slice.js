import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        sellerProducts: [],
        allProducts: [],
    },
    reducers: {
        setSellerProducts: (state, action) => {
            state.sellerProducts = action.payload
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        },
    }
})

export const {setSellerProducts, setAllProducts} = productSlice.actions
export default productSlice.reducer