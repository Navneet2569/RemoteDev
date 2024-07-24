export type JobItem = {
  id: number;
  title: string;
  company: string;
  badgeLetters: string;
  daysAgo: number;
  relevenceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;
};

export type SearchFormProps = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};
