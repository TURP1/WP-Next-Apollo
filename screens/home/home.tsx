import React from "react";
import styles from './home.module.scss'
import { getFetchData } from "services/analytics/query";



export async function Home({ dataFromGraph, dataFromAxios, pathname, error, errorText }: any) {

  console.log("pathname", pathname);
  console.log("error", error);
  console.log("errorText", errorText);

  const dataFromFetch = await getFetchData();

  const titleGraph = dataFromGraph[0].title
  const titleAxios = dataFromAxios[0].title.rendered
  const titleFetch = dataFromFetch[0].title.rendered
  console.log(titleFetch, 'titleFetch');
  
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.block}>
            <h2>Apollo</h2>
            <div>{titleGraph}</div>
          </section>
          <section className={styles.block}>
            <h2>Axios</h2>
            <div>{titleAxios}</div>
          </section>
          <section className={styles.block}>
            <h2>Fetch</h2>
            <div>{titleFetch}</div>
          </section>
          {/* <FetchSection /> */}
        </div>
      </div>
    </>
  );
};