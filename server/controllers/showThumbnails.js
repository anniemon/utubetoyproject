const { Sequelize } = require("sequelize");
const { posts, users } = require("../models");
const Op = Sequelize.Op;

module.exports = {
  get: async (req, res) => {
    // console.log("~~~~~~~~", req.body);
    // const data = await posts
    //   .find()
    //   .populate("writer")
    //   .exec((err, videos) => {
    //     if (err) return res.status(400).send(err);
    //     console.log(videos);
    //     res.status(200).json({ videos });
    //   });
    // const result = await posts.findOne({ where: { user_id: 1 } });
    // console.log("%%%%%%%%", result);
    const result = await posts.findAll({
      include: [{ model: users, attributes: ["username"] }],
    });
    // console.log("----------", result);
    res.status(200).json(result);
  },

  //     //res.status(200).json(result);

  //     // (req, res) => {
  //     //   posts.get((err, result) => {
  //     //     console.log("~~~~~~~~~~", result);
  //     //     if (err) {
  //     //       res.status(400).send("err");
  //     //     } else {
  //     //       res.status(200).json(result);
  //     //     }
  //     //   });

  //     // console.log("getVideo", req.body.id);

  //     // res.status(200).json("ok");
  //   },
};
