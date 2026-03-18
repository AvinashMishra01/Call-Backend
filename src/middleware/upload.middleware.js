// import multer from 'multer'

// const storage = multer.memoryStorage()

// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 } // 10MB
// })

// export default upload


import multer from 'multer';
import path from 'path';
// const fs = require('fs');

import fs from 'fs';

// Ensure folder exists
const uploadPath = 'callLogFile';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // const uniqueName = Date.now() + '-' + file.originalname;
    // cb(null, uniqueName);
    const ext = path.extname(file.originalname)
  const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext
  cb(null, uniqueName)

  }
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

