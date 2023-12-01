import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const { name, website } = user;
    return (
        <div>
            <h2>details about user: {name}</h2>
            <p>details user website: {website}</p>
            
        </div>
    );
};

export default UserDetails;