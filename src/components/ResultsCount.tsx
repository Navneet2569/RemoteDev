export default function ResultsCount({ total }: number) {
  return (
    <p className="count">
      <span className="u-bold">{total} </span> results
    </p>
  );
}
