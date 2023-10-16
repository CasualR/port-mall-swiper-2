import React from 'react';
import { getDictionary } from '../../../../../getDictionary';

import styles from '../../scss/buttons/buy_button.module.scss'

const BuyButton = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    return (
        <>
            <div className={styles.buy__buttonContainer}>
                <a href="#" className={styles.buy__button}>{lang.description.button}</a>
            </div>
        </>
    );
};

export default BuyButton;