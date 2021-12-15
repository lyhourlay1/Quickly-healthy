const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Image = require('../../models/Image');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile, getFileStream } = require('../../s3');

router.get('/images/:key', (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

router.post('/images', upload.single('image'), async (req, res) => {
  const result = await uploadFile(req.file);
  await unlinkFile(req.file.path);
  res.send({
    imagePath: `/images/${result.Key}`
  });
});

module.exports = router;
