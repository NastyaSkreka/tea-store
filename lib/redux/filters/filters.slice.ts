import { EnumProductSort } from "@/lib/services/product/product.types";
import { IFiltersActionsPayload, IFiltersState } from "./filters.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFiltersState = {
    isFilterUpdated: false, 
    queryParams: {
        sort: EnumProductSort.NEWEST, 
        searchTerm: '', 
        page: 1, 
        perPage: 12,
        rating: ''
    }
}

export const filtersSlice = createSlice({
    name: 'filters', 
    initialState, 
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value } = action.payload
            state.queryParams[key] = value
            state.isFilterUpdated = true
        }, 
        resetFilterUpdate: state => {
            state.isFilterUpdated = false
        }
    }
})