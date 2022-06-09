import React from 'react';
import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

const User = ({user}) => {

    const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <h1>User with id {query.id}</h1>
            <p>User name: {user.name}</p>
        </MainContainer>
    );
};

export default User;

export async function getServerSideProps({params}) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await resp.json()
    return {
        props: {user},
    }
}