import { useParams } from "react-router-dom"
import React, { useEffect } from 'react';

function Users() {
    const { username } = useParams()
    console.log(username)
    return <h1>Users</h1>
}

export default Users