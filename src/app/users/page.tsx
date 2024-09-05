"use client";

import Link from "next/link";
import { useState } from "react";
import useSWR from 'swr';
// lightweight cacheing provides

interface User {
    id: number;
    firstName: string;
}



const fetcher = (url: string) => fetch(url).then(res => res.json());

const UsersDetails = () => {
    const { data, error } = useSWR<User[]>("https://dummyjson.com/users", fetcher);

    if (error) return <div>Failed to load users</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
            {data && data.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.firstName}</Link>
                </li>
            ))}
        </>
    );
}

export default UsersDetails;
