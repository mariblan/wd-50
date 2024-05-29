
function LogIn() {
    return (
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />
        </div>
        <button type='submit'>Create User</button>
      </form>
    );
  }
  
  export default LogIn;