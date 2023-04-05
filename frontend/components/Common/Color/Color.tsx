import React from 'react';
import styles from './Color.module.scss'



const Color = () => {
    return (
        <div>
            <ul className={`${styles.colors} ps-0`}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Color;