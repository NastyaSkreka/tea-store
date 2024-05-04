import {PaginationButton, PaginationContainer} from './styles'

interface IPagination {
    numberPage: number,  
    changePage: (page: string) => void
    currentPage: number | string 
}

export default function Pagination({
    numberPage, 
    changePage, 
    currentPage 
}: IPagination) {
 
    return (
        <PaginationContainer>
            { Array.from({ length: numberPage > 1 ? numberPage : 1}).map(
                (_, index) => {
                    const pageNumber = (index + 1).toString()
                    const isActive = currentPage === pageNumber;

                    return (
                        <PaginationButton 
                            key={pageNumber}
                            onClick={() => changePage(pageNumber)}
                            disabled={currentPage === pageNumber}
                            isActive={isActive}
                        >
                            {pageNumber}
                        </PaginationButton>
                    )
                }
            )}
        </PaginationContainer>
    )
}