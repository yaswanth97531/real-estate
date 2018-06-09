require("./config/config.js");

const _ = require("lodash");
const { ObjectID } = require("mongodb");

const express = require("express");
const bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { User } = require("./models/user");
var { authenticate } = require("./middleware/authenticate");

var app = express();
var port = process.env.PORT;
var cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

// app.post('/todos', authenticate, (req, res) => {
//   var todo = new Todo({
//     text: req.body.text,
//     _creator: req.user._id,
//   });

//   todo.save().then((doc) => {
//     res.send(doc);
//   });
// }, (e) => {
//   res.status(400).send(e);
// });

// app.get('/todos', authenticate, (req, res) => {
//   Todo.find({
//     _creator: req.user._id,
//   }).then((todos) => {
//     res.send({ todos });
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });

// app.get('/todos/:id', authenticate, (req, res) => {
//   var id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send(e);
//   }

//   Todo.findOne({
//     _id: id,
//     _creator: req.user._id,
//   }).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }

//     res.send({ todo });
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });

// app.delete('/todos/:id', authenticate, (req, res) => {
//   var id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   Todo.findOneAndRemove({
//     _id: id,
//     _creator: req.user._id,
//   }).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }

//     res.send({ todo });
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });

// app.patch('/todos/:id', authenticate, (req, res) => {
//   var id =  req.params.id;
//   var body = _.pick(req.body, ['text', 'completed']);

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   if (_.isBoolean(body.completed) && body.completed) {
//     body.completedAt = new Date().getTime();
//   } else {
//     body.completed = false;
//     body.completedAt = null;
//   }

//   Todo.findOneAndUpdate({
//     _id: id,
//     _creator: req.user._id,
//   }, { $set: body }, { new: true }).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }

//     res.send({ todo });
//   }).catch((e) => {
//     res.status(400).send(e);
//   });
// });

// app.post('/users', (req, res) => {
//   var body = _.pick(req.body, ['email', 'password']);
//   var user = new User(body);

//   user.save().then(() => user.generateAuthToken()).then((token) => {
//     res.header('x-auth', token).send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   });
// });

// app.post('/users', (req, res) => {
//    console.log('In server.js file before saving the data  user');
//   var body = _.pick(req.body, ['email', 'password']);
//   var user = new User(body);

//   user.save().then(() => {
//     res.send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   });
// });

app.post("/users", (req, res) => {
  console.log("In server.js file before saving the data user");
  var body = _.pick(req.body, ["firstName", "lastName", "email", "password"]);
  var user = new User(body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

// app.get('/users/me', authenticate, (req, res) => {
//   res.send(req.user);
// });

app.post("/user/login", (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);
  var user = new User(body);

  User.findByCredentials(body.email, body.password)
    .then(user => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send();
      }
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.delete("/users/me/token", authenticate, (req, res) => {
  req.user.removeToken(req.token).then(
    () => {
      res.status(200).send();
    },
    () => {
      res.status(400).send();
    }
  );
});
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

app.get("/xyz", (req, res) => {
  res.status(200).send("Connected");
});

module.exports = { app };
