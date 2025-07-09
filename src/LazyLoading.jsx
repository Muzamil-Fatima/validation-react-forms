import { Suspense, useState, lazy} from "react";
// import User from "./User";
const User =lazy(()=>import('./User'));

export default function LazyLoading() {
    const [load, setLoad]=useState(false)
  return (
    <div>
      <h1 className="text-2xl font-bold">LazyLoading in React JS</h1>
      {
        load? <Suspense fallback={<h3>Loading</h3>}><User /></Suspense> :null
      }
      
      <button
      className="bg-blue-500 p-2 m-2 hover:bg-blue-600 text-white "
      onClick={()=>setLoad(true)}
      >Load User</button>
      {/* {load?<User />:nullp} */}
    </div>
  );
}
