import React, { useState } from "react";

function ListUser() {
  const [inputs, setInput] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <div>
      <h1>List User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label htmlFor="">Name</label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Email</label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Mobile</label>
              </th>
              <td>
                <input type="text" name="mobile" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ListUser;
