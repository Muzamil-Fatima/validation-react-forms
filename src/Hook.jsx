import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};
const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};
export default function Hook() {
  const [state, dispatch] = useReducer(reducer, emptyData);
  console.log(state);

  return (
    <div>
      <h1 className="text-2xl font-bold">useReducer Hook</h1>
      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        className=" border border-gray-300 p-1.5 gap-3 m-2"
        type="text"
        placeholder="Enter Name"
      />
      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "password" })
        }
        className=" border border-gray-300 p-1.5 gap-3 m-2"
        type="password"
        placeholder="Enter Password"
      />
      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        className=" border border-gray-300 p-1.5 gap-3 m-2"
        type="email"
        placeholder="Enter Email"
      />
      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        className=" border border-gray-300 p-1.5 gap-3 m-2"
        type="text"
        placeholder="Enter City"
      />
      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "address" })
        }
        className=" border border-gray-300 p-1.5 gap-3 m-2"
        type="text"
        placeholder="Enter Address"
      />
      <ul>
        <li>Name:{state.name}</li>
        <li>Password:{state.password}</li>
        <li>Email:{state.email}</li>
        <li>City:{state.city}</li>
        <li>Address:{state.address}</li>
      </ul>
      <button
        onClick={() => console.log(state)}
        className="bg-blue-500 p-2 m-2 hover:bg-blue-600"
      >
        Add Details
      </button>
    </div>
  );
}
