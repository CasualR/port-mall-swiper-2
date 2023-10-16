import React from 'react';
import { getDictionary } from '../../../../../getDictionary';
import styles from '../../scss/list/bulleted_list.module.scss';

const BulletedList = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    const bullets = props.bullets.items;

    console.log(bullets, 'from bullets');

    return (
        <>
            <ul className={styles.bulleted__list}>
                {bullets.map((text, index) => (
                    <li key={index}>
                        <div className={styles.bulleted__item}>{text}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default BulletedList;