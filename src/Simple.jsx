import { useState } from "react";

function Simple() {
  // const [name, setName] = useState();
  const [nameErr, setNameErr] = useState();
  // const [password, setPassword] = useState();
  const [passErr, setPassErr] = useState();
  const handleName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 5) {
      setNameErr("Please enter valid username, only 5 characters allowed");
    } else {
      setNameErr("");
    }
  };
  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setPassErr("");
    } else {
      setPassErr(
        "Please Enter valid password. only number character are allowed"
      );
    }
  };
  return (
    <div className="flex gap-2 flex-col max-w-2xl mx-auto justify-center items-center ">
      <input
        onChange={handleName}
        className={`border px-2 py-1 flex-1  rounded w-full 
    ${nameErr ? "border-red-500 bg-red-100 text-red-700" : "border-gray-300"}
  `}
        type="text"
        placeholder="Enter name"
      />
      <span>{nameErr && nameErr}</span>
      <input
        onChange={handlePassword}
        className={`border px-2 py-1 flex-1 rounded w-full 
    ${passErr ? "border-red-500 bg-red-100 text-red-700" : "border-gray-300"}
  `}
        type="password"
        placeholder="Enter Password"
      />
      <span>{passErr && passErr}</span>
      <button
        className="bg-blue-500 p-2 m-2 text-white hover:bg-blue-600"
        disabled={passErr || nameErr}
      >
        Login
      </button>
    </div>
  );
}
export default Simple;
