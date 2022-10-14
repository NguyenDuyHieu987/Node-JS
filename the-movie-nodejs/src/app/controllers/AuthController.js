const List = require('../models/List');
const Account = require('../models/Account');
const config = require('../../../package.json');
const API_KEY = config.projectConfig.apiKey;
const errorMsg = require('../../until/errorMsg');

const { multipleMongooseToObject } = require('../../until/mongoose');
const { mongooseToObject } = require('../../until/mongoose');

class ListController {
  // GET /

  signin(req, res, next) {
    try {
      if (req.query.api == API_KEY) {
        List.findOne({ id: req.params.slug })
          .then((listResponse) => {
            res.json(mongooseToObject(listResponse));
          })
          .catch((error) => {
            res.status(400).json(errorMsg.errDefault);
            next(error);
          });
      } else {
        res.status(400).json(errorMsg.errApiKey);
      }
    } catch (error) {
      res.status(400).json(errorMsg.errDefault);
    } finally {
    }
  }

  signup(req, res, next) {
    try {
      if (req.query.api == API_KEY) {
        Account.find({
          email: req.body.email,
        })
          .then((dataAccount) => {
            if (dataAccount.length == 0) {
              const formData = req.body;
              const account = new Account(formData);
              account.save();
              res.json({ result: 'Sign up successfully' });
            } else {
              res.json({ result: 'Email already exist' });
            }
          })
          .catch((error) => {
            res.status(400).json(errorMsg.errDefault);
            next(error);
          });
      } else {
        res.status(400).json(errorMsg.errApiKey);
      }
    } catch (error) {
      res.status(400).json(errorMsg.errDefault);
    } finally {
    }
  }

  newList(req, res, next) {
    try {
      if (req.query.api == API_KEY) {
        List.findOneAndUpdate(
          { id: req.params.slug },
          { $pull: { items: { id: req.body.media_id } } },
          { new: true },
          (err, doc) => {
            if (err) {
              console.log('Something wrong when updating data!');
            }
          }
        );
      } else {
        res.status(400).json(errorMsg.errApiKey);
      }
    } catch (error) {
      res.status(400).json(errorMsg.errDefault);
    } finally {
    }
  }
}

module.exports = new ListController();
