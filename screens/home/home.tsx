// "use client";

import React from "react";


export async function Home({ dataFromGraph, dataFromAxios, pathname, error, errorText }: any) {

  console.log("dataFromGraph", dataFromGraph[0].title);
  console.log("dataFromAxios", dataFromAxios);
  console.log("pathname", pathname);
  console.log("error", error);
  console.log("errorText", errorText);

  const title = dataFromGraph[0].title

  return (
    <>
      <div>
        {title}
      </div>
    </>
  );
};