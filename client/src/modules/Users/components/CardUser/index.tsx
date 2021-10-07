import React from 'react';

interface MyUser {
 id: number,
    firstname: string,
    lastname: string,
    isMentor: boolean,
    company: string,

    // technology: {}
}
interface userProps{
  users: MyUser[]
}

const CardUser: React.FC<userProps> = ({ users }) => (
  <div>
    {users.map((user) => <div key={user.id}>{user.firstname}</div>)}
  </div>
);

export default CardUser;
