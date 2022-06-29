const oss_client = require('./app/config/ali-oss.config')

async function putBuffer() {
  try {
    // 上传文件到oss
    // 第一个参数 oss路径
    // uuid.v4() 生成唯一的文件名
    const result = await oss_client.put('zheye/test-object', new Buffer('hello world'))
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

putBuffer()