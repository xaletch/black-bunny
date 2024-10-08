import { baseApi } from "@/api/base";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([baseApi.middleware]);
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
