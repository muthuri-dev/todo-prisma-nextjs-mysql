import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

//server action functions;
async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid Title");

  await prisma.todos.create({ data: { title, isComplete: false } });
  redirect("/");
}

export default function page() {
  return (
    <React.Fragment>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
        <Link
          href="/"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within::bg-slate-700 outline-none"
        >
          Home
        </Link>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="rounded bg-transparent border border-slate-300 px-2 py-1 outline-none focus-within:border-slate-900"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within::bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within::bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
