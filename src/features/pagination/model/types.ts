export interface IPaginationProps {
  totalPages: number
  handleNextPage: () => void
  handlePreviousPage: () => void
  handlePageClick: (page: number) => void
  currentPage: number
}
