import PostMessage from '../models/postMessage.js'

export const getPosts = async (req,res)=>
{
    try {
        const response = await PostMessage.find();
        if(response)
            res.status(200).json(response);
        
    } catch (error) {
        res.status(404).json(error);
    }
}


export const createPost = async (req,res) =>
{
    const post = req.body;
    try {
        const response = await PostMessage.create(post);
        if(response)
        {
            res.status(201).json(response);
        }
    } catch (error) {
        res.status(409).json(error);
    }
}