const replyModel = require("../models/replyModel");

const createReply = async (req, res) => {
    try {

        let { content, postId, userId } = req.body;

        let replyDetails = await replyModel.create(req.body);

        return res.status(201).send({ status: true, data: replyDetails })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}


const getReply = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

const updateReply = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }


}


const deleteReply = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}