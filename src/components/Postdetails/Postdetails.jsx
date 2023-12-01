import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Postdetails = () => {
    // step 11
    const post = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    console.log(postId);

    const { id, title, body } = post;

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>post id: {id}</h3>
            <p>post title: {title}</p>
            <p><small>post body: {body}</small></p>
            <button onClick={handleGoBack}>go back</button>
            
        </div>
    );
};

export default Postdetails;