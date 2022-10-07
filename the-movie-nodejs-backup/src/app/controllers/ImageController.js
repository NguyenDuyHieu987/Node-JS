const config = require('../../../package.json');
const API_KEY = config.projectConfig.apiKey;
const errorMsg = require('../../until/errorMsg');

const { multipleMongooseToObject } = require('../../until/mongoose');
const { mongooseToObject } = require('../../until/mongoose');

class ImageController {
  // GET /
  index(req, res, next) {
    try {
      if (req.query.api == API_KEY) {
        res.sendFile(`/images/${req.params.slug}`, { root: 'src/public' });
      } else {
        res.status(400).json(errorMsg.errApiKey);
      }
    } catch (error) {
      res.status(400).json(errorMsg.errDefault);
    } finally {
    }
  }
}

module.exports = new ImageController();
