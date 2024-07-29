import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useDebounce, useJobItems } from "../lib/hooks";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchText, setSearchText] = useState("");

  const debouncedSearchText = useDebounce(searchText, 250);

  const { jobItems, isLoading } = useJobItems(debouncedSearchText);

  const [currentPage, setCurrentPage] = useState(1);

  const jobItemsSliced = jobItems?.slice(0, 7) || [];
  const totalNumberOfResults = jobItems?.length || 0;

  const handleChangePage = (direction: "next" | "previous") => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container
        total={totalNumberOfResults}
        jobItems={jobItemsSliced}
        isLoading={isLoading}
        onClick={handleChangePage}
        currentPage={currentPage}
      />
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;
