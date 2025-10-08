import React, { useEffect, useState} from "react";
import {Container, PostForm} from "../components";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from '../appwrite/config';

function EditPost() {
    const [posts, setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug) {
            appwriteService.getpost(slug).then((posts) => {
                if(posts){
                    setPosts(posts);
                }
            })
        } else {
            navigate('/')
        }
    },[slug, navigate]);
    return posts ? (
        <div className="py-8">
            <Container>
                <PostForm post={posts} />

            </Container>
        </div>
    ) : null;
}

export default EditPost;