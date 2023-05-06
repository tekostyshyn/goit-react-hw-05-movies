export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value;
    onSubmit(inputValue)
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input className="input" type="text" name="query" />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
};
