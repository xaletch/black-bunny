import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: ``,
        headers: {
            "content-type": "text/plain;charset=UTF-8",
        },
        mode: "no-cors",
        credentials:"include"
    }),
    reducerPath: "baseApi",
    endpoints: () => ({}),
    tagTypes: [""],
});
