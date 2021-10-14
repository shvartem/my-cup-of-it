const multer = require('multer');
const dayjs = require('dayjs');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../client/public/images');
  },
  filename(req, file, cb) {
    const date = dayjs().format('DDMMYYYY_HHmmss_SSS');

    cb(null, `${date}-${file.originalname}`);
  },
});

const fileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

const fileFilter = (req, file, cb) => {
  if (fileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  limit: 1024 * 1024 * 5,
};

module.exports = multer({
  storage,
  fileFilter,
  limits,
});
