export const Form = ({ onSubmit }) => {
  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <input className="input" type="text" name="query" />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
};
