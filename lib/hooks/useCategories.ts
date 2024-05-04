import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "../services/category.service";

export const useCategories =  () => {

    const { data } =  useQuery({
        queryKey: ['get category'],
        queryFn: () => CategoryService.getAll(), 
    });
    
    return { category: data};
}
