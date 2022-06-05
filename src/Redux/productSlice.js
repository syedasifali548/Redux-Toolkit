const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProduct(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state,action)=>{
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.status = STATUSES.ERROR
        })
    }
 
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk

export const fetchProduct=createAsyncThunk('products/fetch',async()=>{
    const res = await fetch('https:fakestoreapi.com/products');
                const data = await res.json();
                return data
})


// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))


//         try {
//             const res = await fetch('https:fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProduct(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error.message);
//             dispatch(setStatus(STATUSES.ERROR))

//         }
//     }
//     };






