const aws = require('aws-sdk');
const multer = require('koa-multer');
const multerS3 = require('multer-s3');
const moment = require('moment');


const s3 = new aws.S3({
  accessKeyId: 's3 access_key', // 생성한 s3의 accesskey 
  secretAccessKey: 's3 secret_access_key', // 생성한 s3의 secret key 
  region: 'ap-northeast-2'  // 지역설정 
})

const mask_storage = multerS3({
  s3: s3,
  bucket: 'shot-py-test', // s3 생성시 버킷명
  acl: 'public-read',   // 업로드 된 데이터를 URL로 읽을 때 설정하는 값입니다. 업로드만 한다면 필요없습니다.
  metadata: function (req, file, cb) {
    cb(null, {fieldName: file.fieldname}); // 파일 메타정보를 저장합니다.
  },
  key: function (req, file, cb) {
    cb(null, "mask/"+moment().format('YYYYMMDDHHmmss')+'.png') //+ "_" + file.originalname) // key... 저장될 파일명과 같이 해봅니다.
  }
})


const upload_s3 = multer({ storage: mask_storage }).single("file");


module.exports = upload_s3;