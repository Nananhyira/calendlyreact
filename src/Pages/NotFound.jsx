import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
        <h1> Page is not found</h1>
        <p>Go to the <Link to="/" >Homepage</Link>  </p>
        </div>
    )
}

export default NotFound;