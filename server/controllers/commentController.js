const commentModel = require("../models/commentModel");

const createComment = async (req, res) => {
    try {

        let { content, postId, userId } = req.body;

        let commentDetails = await commentModel.create(req.body);

        return res.status(201).send({ status: true, data: commentDetails })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

const getComment = async (req, res) => {
    try {
        let commentId = req.params.commentId
        if (!commentId) return res.status(400).send({ status: false, message: "user id is required" });
        if (!mongoose.isValidObjectId(commentId)) return res.status(400).send({ status: false, message: "Invalid commentId" });

        const userDetails = await userModel.findOne({ _id: commentId, isDeleted: false }).select({ __v: 0 }).lean();


        const postsDetails = await userModel.find({ commentId: commentId, isDeleted: false });

        let userData = { ...userDetails, postsData: postsDetails };


        return res.status(400).send({ status: true, message: "userDetails", data: userData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const updateComment = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }


}

const deleteComment = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }


}