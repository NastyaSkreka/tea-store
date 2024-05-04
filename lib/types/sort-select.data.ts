import { ISelectItem } from "@/lib/types/select.interface";
import { EnumProductSort } from "@/lib/services/product/product.types";

// для этого был сделал дженерик, потому что тут ключ енам

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
    {
        key: EnumProductSort.HIGH_PRICE, 
        label: 'High price'
    }, 
    {
        key: EnumProductSort.LOW_PRICE, 
        label: 'Low price'
    }, 
    {
        key: EnumProductSort.NEWEST, 
        label: 'Newest'
    }, 
    {
        key: EnumProductSort.OLDEST, 
        label: 'Oldest'
    }, 

]