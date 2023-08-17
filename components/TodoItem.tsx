"use client"
import React from "react";

export default function TodoItem({
  id,
  title,
  isComplete,
  toggleTodo,
}: ITodoItemProps) {
  return (
    <React.Fragment>
      <li className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isComplete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
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
