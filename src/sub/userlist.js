import React from "react";

function User({ user, onRemove }) {
  return (
    <div>
      <b className="u_name">{user.username}</b>
      <span>({user.email})</span>
      <span>({user.date})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function Userlist({ users1, onRemove }) {
  let html = [];
  html.push(<p className="dot"></p>);
  return (
    <div>
      {users1.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Userlist;
