import React from 'react';
import style from './error404.module.css'

const Error404 = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.firstSymbol}>4</div>
                    <div className={style.secondSymbol}>0</div>
                    <div className={style.thirdSymbol}>4</div>
                </div>
                <span className={style.description}> an error occurred, please try again later</span>
            </div>
        </div>
    );
};

export default Error404;
