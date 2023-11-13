import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "api",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["SHOPLIST", "CATEGORYLIST"],
  endpoints: (builder) => ({
    getShopList: builder.mutation({
      query: ({ pageSize, pageNo, shopName, shopCategoryCodes, type }) => ({
        url: `/ctms/api/shop/landing/shop-list`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          traceNumber: "43bd2130-ee10-4427-9c5a-29f54cd5b46c",
        },
        body: {
          pageSize: pageSize,
          pageNo: pageNo,
          shopName: shopName,
          shopCategoryCodes: shopCategoryCodes,
          type: type,
        },
      }),
      providesTags: () => ["SHOPLIST"],
    }),
    getCategoryList: builder.mutation({
      query: () => ({
        url: `/ctms/api/shop/landing/category-list`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          traceNumber: "376fc418-ce57-46a4-b635-1b8de44152e5",
        },
        body: {
          pageSize: 0,
          pageNo: 0,
        },
      }),
      providesTags: () => ["CATEGORYLIST"],
    }),
  }),
});

export const { useGetShopListMutation, useGetCategoryListMutation } = api;
