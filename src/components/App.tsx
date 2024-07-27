import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useDebounce, useJobItems } from "../lib/hooks";
import { ToastBar, Toaster } from "react-hot-toast";

function App() {
  const [searchText, setSearchText] = useState("");

  const debouncedSearchText = useDebounce(searchText, 250);

  const { jobItems, isLoading } = useJobItems(debouncedSearchText);

  const jobItemsSliced = jobItems?.slice(0, 7) || [];
  const totalNumberOfResults = jobItems?.length || 0;

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container
        total={totalNumberOfResults}
        jobItems={jobItemsSliced}
        isLoading={isLoading}
      />
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;
