import React from 'react';


export default function TodoItem({id, title, isComplete}:ITodoItemProps) {
  return (
    <React.Fragment>
      <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" />
        <label
          htmlFor={id}
          className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
        >
          {title}
        </label>
      </li>
    </React.Fragment>
  );
}
