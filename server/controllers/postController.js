const postModel = require("../models/postModel");

const createPost = async (req, res) => {
    try {

        let { title, content, image, userId } = req.body;

        let postsDetails = await postModel.create(req.body);

        return res.status(201).send({ status: true, data: postsDetails })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

const getPost = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const updatePost = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const deletePost = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}