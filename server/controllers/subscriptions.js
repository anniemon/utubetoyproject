const { posts, users, subscriptions } = require("../models");

module.exports = {
  post: async (req, res) => {
    //사용자가 users 1번 John이라는 가정.
    const username = req.body.username;
    const subscribername = req.body.subscribername;
    //유저 아이디를 받아왔으니 이제 유저 아이디로 유저를 찾는다
    //유저가 이미 있다면 구독 중! 없으면 subscription에 넣어준다.

    // const user = await users.findOne({
    //   where: { id: username },
    //   include: [{ model: users, attributes: ["userId"] }],
    // });
    const subscriber = await subscriptions.findOne({
      where: { subscriberId: subscribername, userId: username },
      //   include: [{ model: users, attributes: ["subscriberId"] }],
    });

    // console.log("----", user.dataValues);

    //save
    if (subscribername !== 1 && !subscriber) {
      subscriptions.create({
        userId: 1,
        subscriberId: subscribername,
      });
      res.status(200).send({ data: subscribername, message: "구독 완료!" });

    } else {
      res.status(404).send({ message: "Can Not Subscribe" });
    }
  },

  delete: async (req, res) => {
    console.log('!!!!!!!!', req.body);
    username = req.body.username;
    subscribername = req.body.subscribername;

    const subscriber = await subscriptions.findOne({
      where: { subscriberId: subscribername, userId: username },
      //   include: [{ model: users, attributes: ["subscriberId"] }],
    });

    // console.log("----", user.dataValues);

    //delete
    subscriptions.destroy({
      where: { userId: 1, subscriberId: subscribername },
    });
    res.status(200).send({ data: subscribername, message: "구독 취소!!" });
  },

  get: (req, res) => {
    //흐름 posts도 userId(2,3,4)를 담고있다.
    //posts에서 (2,3,4)
    const userId = req.params.userId;

    subscriptions.findAll({
      where: { userId: userId },
    })
      .then(response => {
        res.status(200).json(response)
      })
    //console.log('~~~~~~~~~~~', result);
    //console.log("----------", user);
    // res.status(200).json(result);
    //res.status(200).json(result);

    // const user = await posts.findAll({
    //   include: [{ model: subscriptions, attributes: ["userId"] }],
    //   where: { userId: userId },
    // });
    // console.log(user);
  },
};
/* users id를 와일치하는 , subscriptions에 userid와 subscriberId를 찾아서 있으면 이미 구독, 없으면 구독 */
