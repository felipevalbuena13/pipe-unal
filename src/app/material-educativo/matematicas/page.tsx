import Main from "@/components/Main/Main";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Main className="grid grid-cols-4">
      <section className="border-2 border-y-green-500 p-4">
        <h2>aritmetica</h2>
        <Link
          className="hover:text-blue-400"
          href="/material-educativo/matematicas/aritmetica"
        >
          mas...
        </Link>
      </section>
    </Main>
  );
};

export default page;
