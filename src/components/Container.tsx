import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({
  jobItems,
  isLoading,
  total,
  onClick,
  currentPage,
}) {
  return (
    <div className="container">
      <Sidebar
        jobItems={jobItems}
        isLoading={isLoading}
        total={total}
        onClick={onClick}
        currentPage={currentPage}
      />
      <JobItemContent />
    </div>
  );
}
