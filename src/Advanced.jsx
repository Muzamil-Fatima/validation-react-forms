import { useActionState } from "react";

export default function Advanced() {
  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error:
          "Name can't empty, Name should not contain more then 5 character",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "Password should contain only numbers and alphabets",
        name,
        password,
      };
    } else {
      return {
        message: "Login Done",
        name,
        password,
      };
    }
  };
  const [data, action] = useActionState(handleLogin);
  console.log(data);
  return (
    <div>
      <h1>Validation with useAction in React</h1>
      {data?.message && <span className="text-green-400">{data?.message}</span>}
      {data?.error && <span className="text-red-500">{data?.error}</span>}
      <br />
      <form action={action}>
        <input
          defaultValue={data?.name}
          name="name"
          className=" border border-gray-300 p-1.5 gap-3 m-2"
          type="text"
          placeholder="Enter User Name"
        />
        <br />
        <input
          defaultValue={data?.password}
          name="password"
          className=" border border-gray-300 p-1.5 gap-3 m-2"
          type="password"
          placeholder="Enter User Password"
        />
        <br />
        <button
          // disabled={data?.error}
          onClick={handleLogin}
          className="bg-blue-500 p-2 m-2 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
