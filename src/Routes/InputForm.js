import React from 'react'

const InputForm = () => {
console.log("hello there");
  return (
    <div>
      <h1> HELLO FROM Login Form</h1>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email phone</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default InputForm
