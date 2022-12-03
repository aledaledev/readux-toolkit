import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-zinc-500 text-slate-200 p-4 flex justify-end gap-5">
      <Link className="hover:underline hover:text-white font-normal hover:font-medium" to="/">dashboard</Link>
      <Link className="hover:underline hover:text-white font-normal hover:font-medium" to="/create-task">create your task</Link>
    </header>
  );
};

export default Navigation;
