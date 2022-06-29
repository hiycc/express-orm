const OSS = require('ali-oss')

const client = new OSS({
  region: 'oss-cn-guangzhou',
  accessKeyId: 'LTAI5tQWnriUne1SYQfQHfu4',
  accessKeySecret: 'bjjaQbU62o27mZ38WsFIHbzdCU6bSi',
  bucket: 'luxiwong-photo'
})
  
module.exports = client
