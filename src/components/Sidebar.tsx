import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

export default function Sidebar({ jobItems, isLoading }) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount jobItems={jobItems} />
        <Sorting />
      </div>
      <JobList jobItems={jobItems} isLoading={isLoading} />

      <Pagination />
    </div>
  );
}
