import react from "react";

import { MaleAvatar } from "./Avatar";
import { FemaleAvatar } from "./Avatar";

export const UserTable = ({ userList }) => {
  return (
    <div className="mt-5 shadow-lg rounded p-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  {user.gender === "male" ? <MaleAvatar /> : <FemaleAvatar />}
                </td>
                <td
                  style={{ color: user.gender === "male" ? "blue" : "brown" }}
                >
                  {user.name}
                </td>
                <td>{user.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
