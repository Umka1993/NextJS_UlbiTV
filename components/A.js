import React from 'react';
import Link from "next/link";
import styles from '../styles/link.module.css'

const A = ({text, href}) => {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    );
};

export default A;