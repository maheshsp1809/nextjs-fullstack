"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from 'swr';

interface User {
    id: number,
    firstName: String
}
const fetcher = (...args) => fetch(...args).then(res => res.json());
const UsersDetails = () => {
    const [users, setUsers] = useState<User[]>([]);
    const { data, error }= useSWR<User[]>("https://dummyjson.com/users", fetcher);
    console.log("data", data)
    // useEffect(() => {
    //     async function fetchUsers() {
    //         const response = await fetch("https://dummyjson.com/users")
    //         const data = await response.json()
    //         setUsers(data.users);
    //     }
    //     fetchUsers();
    // }, [])
    return (<>{data.users && data.users.map((user) => <li key={user.id}><Link href={`/users/${user.id}`}>{user.firstName}</Link></li>)}

    </>);
}

export default UsersDetails;