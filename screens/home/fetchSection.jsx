'use client'


import { useState } from 'react';
import { getClientData } from 'services/analytics/query';

import styles from './home.module.scss'


export const FetchSection = () => {
    const [text, setText] = useState('')

    const onClickHandler = async () => {

        try {
            const response = await getClientData()
            setText(response[0].title.rendered) 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles.block}>
            <h2>CSR without caching fetch</h2>
            <div>{text}</div>
            <button className={styles.blockButton} onClick={onClickHandler}>
                Axios Client Query
            </button>
        </section>
    )
}