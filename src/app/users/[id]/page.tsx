"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
}

interface prop {
    id: string
}

function UserDetail({ params }: { params: prop }) {

    const [userdata, setUserDetails] = useState<User | null>(null);

    useEffect(() => {
        async function fetchSingleUser(id: string) {
            const res = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await res.json();
            setUserDetails(data);
        }
        fetchSingleUser(params.id)

    }, []);

    return (
        <>
            {userdata && (
                <ul>
                    <li><strong>ID:</strong> {userdata.id}</li>
                    <li><strong>First Name:</strong> {userdata.firstName}</li>
                    <li><strong>Last Name:</strong> {userdata.lastName}</li>
                    <li><strong>Maiden Name:</strong> {userdata.maidenName}</li>
                    <li><strong>Age:</strong> {userdata.age}</li>
                    <li><strong>Gender:</strong> {userdata.gender}</li>
                    <li><strong>Email:</strong> {userdata.email}</li>
                </ul>
            )}
        </>
    );
}

export default UserDetail;
