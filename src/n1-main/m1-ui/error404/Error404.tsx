import React from 'react';
import styles from './error404.module.css'
import Typewriter from 'typewriter-effect';

const Error404 = () => {
    return (
        <div className={styles.mainBlock}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('404, page not found...')
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
};

export default Error404;
