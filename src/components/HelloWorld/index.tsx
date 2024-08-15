import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';



const HelloWorld: React.FC = () => {
    const { id } = useParams();


    return (
        <div>
            <h1>Hello World! {id}</h1>
            <Link to="/">Go back</Link>
            <Link to="/123">Go to 123</Link>
        </div>
    );
}

export default HelloWorld;
