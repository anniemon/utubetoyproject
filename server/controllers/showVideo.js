const { posts, users, videos } = require("../models");

module.exports = {
  get: (req, res) => {
    //posts 테이블 안에 findOne으로 {where: {id : req.body.id}}
    //posts 영상들과 정보들이 있는디,
    //videos
    const postId = req.params.postId;

    if (!postId) {
      return res.status(401).send("invalid video");
    } else {
      posts
        .findOne({
          where: { id: postId },
          include: [
            { model: users, attributes: ["username", "picture"] },
          ],
        })
        .then((response) => {
          response
            .update({ views: response.views + 1 })
            .then((data) => {
              res.status(200).json(data.dataValues);
            });
        });
    }
  },
};
//get:=> posts, videos 를 가져와야된다고 생각합니다.
// get 읽기
// post 쓰기
