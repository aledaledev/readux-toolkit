import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeCompleted, deleteTask } from "../features/tasks/taskSlice";

const List = ({ task: { id, title, description, completed }}) => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks)
  const {completed:curCompleted} = tasks.find(task => task.id === id)

  const handleDelete = (id) => {
    dispatch(deleteTask({ id }));
  };

  const handleCompleted = (id) => {
    dispatch(changeCompleted({id}))
    console.log(curTask);
  }

  return (
    <li className={`border-4 border-solid ${curCompleted?"border-green-400":"border-yellow-400"}  bg-gray-400 p-2`} key={id}>
      <h3 className="font-medium text-gray-100 text-xl">{title}</h3>
      <p className="font-normal text-gray-200">{description}</p>
      <div className="flex justify-between w-full pt-2">
      <input
        type="checkbox"
        value={curCompleted}
        onChange={() => handleCompleted(id)}
        defaultChecked={completed}
      />
      <div className="inline-flex gap-2">
      {curCompleted? <button className="px-1 rounded-md bg-red-600 text-white font-normal" onClick={() => handleDelete(id)}>delete</button> : null}
      <Link className="p-1 rounded-md bg-purple-500 text-white font-normal" to={`/edit-task/${id}`}>edit</Link>
      </div>
      </div>
    </li>
  );
};

export default List;
