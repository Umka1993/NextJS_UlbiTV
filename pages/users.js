import React, {useEffect, useState} from 'react';
import Link from "next/link";
import styles from '../styles/user.module.scss'
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {



    return (
        <MainContainer keywords={'users page'}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((user) =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>
                                {user.name}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;


export async function getStaticProps(context) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await resp.json()


    return {
        props: {users},
    }
}