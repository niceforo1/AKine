module.exports = (app, mongoose) => {
  const User = mongoose.model('user');

  app.get('/api/users', async (req, res) => {
    try {
      const user = await User.find()
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
};
