export default function SearchForm({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      alert("Вооди что-то");
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" />
        <button type="submit">Find</button>
      </form>
    </>
  );
}
