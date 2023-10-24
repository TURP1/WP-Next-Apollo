import { homeStaticProps } from "screens/home/serverData";
import React from "react";
import { Home } from "screens/home/home";
import { getDataFromHeaders } from 'services/headersHelper';
import { apolloClient } from "services/apolo/client";


export async function getData() {
  const response = await homeStaticProps();

  return response.props;
}

export default async function Page() {
  const { serverPathname: pathname } = await getDataFromHeaders();

  const propsData = await getData();
  const dataFromGraph = propsData?.dataFromGraph;
  const dataFromAxios = propsData?.dataFromAxios;
  const dataFromFetch = propsData?.dataFromFetch;
  const error = propsData?.error;
  const errorText = propsData?.errorText;


  return <Home
    dataFromGraph={dataFromGraph}
    dataFromAxios={dataFromAxios}
    dataFromFetch={dataFromFetch}
    error={error}
    errorText={errorText}
    pathname={pathname}
    />
}
