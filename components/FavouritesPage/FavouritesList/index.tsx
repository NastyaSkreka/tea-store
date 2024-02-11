'use client'

import FavouritesListItem from '../FavouritesListItem';
import { FavouritesListSection, 
        FavouritesListContainer
} from  './style'


export default function FavouritesList() {

  return (
    <FavouritesListSection>
      <FavouritesListContainer>
            <FavouritesListItem/>
      </FavouritesListContainer>
    </FavouritesListSection>
  );
}