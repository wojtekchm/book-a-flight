import React from "react";
import styles from "./UserInfo.module.scss";
import users from "../../data/users.json";

const UserInfo = () => {
  const { users: usersList } = users;
  console.log(usersList);
  return (
    <div className={styles.infoBox}>
      {usersList.map((user) => (
        <div key={user.email} className={styles.userP}>
          <p>email: {user.email}</p>
          <p>hasło: {user.password}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
