const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const sanitize = require('mongo-sanitize');

exports.getLoggedUser = async (req, res) => {
  const { login } = req.user;
  try {
    res.json('You logged: ' + login);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { login, password, email } = req.body;

    const isLogin = login && typeof login === 'string';
    const isEmail = email && typeof email === 'string';
    const isPassword = password && typeof password === 'string';
    const isDataValid = isLogin && isPassword && isEmail;

    if (isDataValid) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        return res
          .status(409)
          .json({ message: 'User with this login already exists' });
      }

      const user = new User({
        login,
        password: await bcrypt.hash(password, 10),
        email,
      });
      await user.save();
      res.status(201).json({ message: 'User created ' + user.login });
    } else {
      res
        .status(400)
        .json({ message: 'Bad request' + login + password + email });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { login, password } = sanitize(req.body);
    const isLogin = login && typeof login === 'string';
    const isPassword = password && typeof password === 'string';

    if (isLogin && isPassword) {
      const user = await User.findOne({ login });
      if (!user) {
        res.status(400).json({ message: 'Login or password are incorrect!' });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.login = user.login;
          res.status(200).json({ message: 'Login successful ' + login });
        } else {
          res.status(400).json({ message: 'Login or password are incorrect!' });
        }
      }
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    req.session.destroy();
    res.json({ message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
