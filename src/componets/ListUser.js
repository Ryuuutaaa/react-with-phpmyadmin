import React from "react";

function ListUser() {
  return (
    <div>
      <h1>List User</h1>
      <form action="">
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label htmlFor="">Name</label>
              </th>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Email</label>
              </th>
              <td>
                <input type="text" name="email" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Mobile</label>
              </th>
              <td>
                <input type="text" name="mobile" />
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
