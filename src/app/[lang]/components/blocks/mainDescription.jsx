import React from 'react';
import { getDictionary } from '../../../../../getDictionary';
import ImageSwiper from '../swipers/ImageSwiper';
import imagesForSwiper from '../../data/data';
import BuyButton from '../button/buyButton';
import BulletedList from '../lists/bulletedList';

import styles from '../../scss/blocks/description.module.scss';

const MainDescription = async (props) => {

    const lang = await getDictionary(props.passedValue.lang);

    const itemsForBullets = {
        items: [lang.bulleted.bulletedItem1, lang.bulleted.bulletedItem2, lang.bulleted.bulletedItem3, lang.bulleted.bulletedItem4, lang.bulleted.bulletedItem5]
    };

    return (
        <>
            <div className={styles.description}>
                <div className={styles.description__container}>
                    <div className={styles.description__title}>{lang.description.title}</div>
                    <BulletedList passedValue={props.passedValue} bullets={itemsForBullets} />
                    <ImageSwiper info={imagesForSwiper} />
                    <div className={styles.paragraph}>
                        <span>{lang.description.paragraph3}</span>
                        <span>{lang.description.paragraph4}</span>
                    </div>
                    <BuyButton passedValue={props.passedValue} />
                </div>
            </div>
        </>
    );
};

export default MainDescription;