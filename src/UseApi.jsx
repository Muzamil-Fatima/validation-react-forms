import React, { Suspense, use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((response) => response.json());
console.log(fetchData());

const userResource = fetchData();

export default function UseApi() {
  return (
    <div>
      <h1 className="text-2xl font-medium">useApi It's Not state its Api</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  );
}

const Users = () => {
  const userData = use(userResource);
  console.log(userData.users);

  return (
    <div>
      <h1>User List</h1>
      {userData?.users?.map((user) => (
        <h1>{user.firstName}</h1>
      ))}
    </div>
  );
};
