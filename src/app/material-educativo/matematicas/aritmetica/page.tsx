import Main from "@/components/Main/Main";
import React from "react";
const page = () => {
  return (
    <Main>
      <h1 className="text-2xl font-semibold">Aritmetica</h1>
      <section className="mt-4">
        <article className="">
          <h2 className="text-lg font-medium">1. Ejercicio</h2>
          <p>
            Al multiplicar {"\\(\\frac{4}{3}\\)"} y 3.25 se obtiene un numero
            entre
          </p>
          <ol className="ml-8 mt-4 list-[upper-alpha]">
            <li>2 y 3</li>
            <li>3 y 4</li>
            <li>4 y 5</li>
            <li>5 y 6</li>
          </ol>
          <h2 className="text-lg font-medium mt-4">Solucion</h2>
        </article>
      </section>
    </Main>
  );
};

export default page;
