//rfce -> react functional component with export

function Form() {
  return (
    <form className="addForm">
      <label htmlFor='name'>Todo</label>
      <input type='text' id='todo' name='todo' />
      <button type='submit'>Add</button>
    </form>
  );
}

export default Form;
