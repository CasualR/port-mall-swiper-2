import React from 'react';
import { getDictionary } from '../../../../../getDictionary';

const BuyButton = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    return (
        <>
            <div className='buy-button__container'>
                <a href="#" className="buy-button">{lang.description.button}</a>
            </div>
        </>
    );
};

export default BuyButton;