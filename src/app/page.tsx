import { homeStaticProps } from "screens/home/serverData";
import React from "react";
import { Home } from "screens/home/home";
// import { getDataFromHeaders } from 'services/headersHelper';


export async function getData() {
  const response = await homeStaticProps();

  return response.props;
}

export default async function Page() {
  // const { serverPathname: pathname } = await getDataFromHeaders();

  //Next caching is not working if we use next/headers 
  //readMore 
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

  const propsData = await getData();
  const dataFromGraph = propsData?.dataFromGraph;
  const dataFromFetch = propsData?.dataFromFetch;

  return <Home
    dataFromGraph={dataFromGraph}
    dataFromFetch={dataFromFetch}
    // pathname={pathname}
    />
}
