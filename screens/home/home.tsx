import React from "react";
import styles from './home.module.scss'
import {FetchSection} from './fetchSection'


export async function Home({dataFromFetch, dataFromGraph}: any) {

  const titleGraph = dataFromGraph[0].title
  const titleFetch = dataFromFetch[0].title.rendered
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.block}>
            <h2>Apollo</h2>
            <div>{titleGraph}</div>
          </section>
          <section className={styles.block}>
            <h2>Fetch</h2>
            <div>{titleFetch}</div>
          </section>
          <FetchSection/>
        </div>
      </div>
    </>
  );
};