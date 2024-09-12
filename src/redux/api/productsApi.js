import { api } from './index';

const productsApi = api.injectEndpoints({
    endpoints : (build) => ({
        getProducts : build.query({
            query : () => ({
                url : '/products',
            }),
            providesTags : ["PRODUCTS"]
        }),
        updateProducts : build.mutation({
            query : ({id , title , price}) => ({
                url : `/products/${id}`,
                method : 'PUT',
                body: ({
                    title,
                    price
                }),
                headers: {
                    'Content-Type': 'application/json', 
                  },
            }),
            invalidatesTags : ["PRODUCTS"]
        })
    })
})

export const {useGetProductsQuery , useUpdateProductsMutation} = productsApi