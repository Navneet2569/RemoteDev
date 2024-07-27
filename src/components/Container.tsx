import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({ jobItems, isLoading, total }) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} isLoading={isLoading} total={total} />
      <JobItemContent />
    </div>
  );
}
