
import { useFilters } from "@/lib/hooks/useFilters";
import FilterWrapper from "../FilterWrapper";
import { RATING_VARIANTS } from "./rating.variants.data";
import Checkbox from "@/components/ui/Checkbox";
import { updateRatingsQuery } from "../../../lib/utils/update.ratings.query";
import { Rating } from "react-simple-star-rating";

export default function RatingGroup() {
    const { queryParams, updateQueryParams } = useFilters();
  
    return (
      <FilterWrapper title="Rating">
          {
            RATING_VARIANTS.map(rating => (
                <Checkbox
                    isChecked={queryParams.rating?.includes(rating.toString())}
                    onClick={() => updateQueryParams(
                        'rating', 
                        updateRatingsQuery(queryParams.rating, rating.toString())
                    )}
                    key={rating}
                >

                <Rating
                   readonly
                   initialValue={rating}
                   transition
                   size={20}
                />

                </Checkbox>
            ))
          }
      </FilterWrapper>
    );
  }