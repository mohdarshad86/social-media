
const router = require('express').Router();
const { createUser, getUser, updateUser, deleteUser } = require("../controllers/userController")

//-------userAPIs-----------
router.post("/user", createUser);
router.get("/user/:userId", getUser);
router.put("/user/:userId", updateUser);
router.delete("/user/:userId", deleteUser)

//-------postsAPIs-----------


router.post("/user", createUser);
router.get("/user/:userId", getUser);
router.put("/user/:userId", updateUser);
router.delete("/user/:userId", deleteUser)

//-------commentsAPIs-------------






//-------deleteAPIs---------





router.all('*', (req, res) => {
    return res.status(400).send('Invalid URL')
})


module.exports = router

