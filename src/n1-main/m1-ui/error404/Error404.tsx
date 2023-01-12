import React from 'react';
import styles from './error404.module.css'
import Typewriter from 'typewriter-effect';

const Error404 = () => {
    return (
        <div className={styles.mainBlock}>
            <Typewriter
                options={{
                    strings: ['Error 404', 'Page not found...'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default Error404;
