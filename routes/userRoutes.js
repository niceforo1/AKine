module.exports = (app, mongoose, bcrypt, jwt) => {
  const User = mongoose.model('user');

  app.get('/api/users', async (req, res) => {
    try {
      const user = await User.find();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/users', async (req, res) => {
    try {
      const { user, password, role } = req.body;

      const users = await new User({
        user,
        password,
        role
      });
      users.password = bcrypt.hashSync(password);
      console.log('passwordHash: ', users.password);
      await users.save();
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/login', async (req, res) => {
    try {
      const { username, password, gethash } = req.body;
      console.log('Busca Usuario base', username, password, gethash);
      const userDB = await User.findOne({ user: username });

      //COMPROBAR CONTRASEña
      console.log('compara contrasenias');
      try {
        let compare = bcrypt.compareSync(password, userDB.password);
        if (compare) {
          if (gethash) {
            res.status(200).send({
              token: jwt.createToken(userDB)
            });
          } else {
            res.status(200).send({ user: userDB });
          }
        } else {
          throw true;
        }
      } catch (err) {
        res.status(401).send({ message: 'Usuario y/o password incorrecto.' });
      }
    } catch (err) {
      console.log('ERROR: ', err);
    }
  });
};
