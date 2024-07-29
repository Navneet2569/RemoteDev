import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

export default function Sidebar({
  jobItems,
  isLoading,
  total,
  onClick,
  currentPage,
}) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount total={total} />
        <Sorting />
      </div>
      <JobList jobItems={jobItems} isLoading={isLoading} />

      <Pagination onClick={onClick} currentPage={currentPage} />
    </div>
  );
}
