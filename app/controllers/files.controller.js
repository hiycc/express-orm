const db = require('../models')
const oss_client = require('../config/ali-oss.config')
const Files = db.files
const { v4: uuidv4 } = require('uuid')

exports.upload = async (req, res) => {
  console.log('trying to upload file...')
  console.log(req.file)
  const format = req.file.originalname.split('.').pop()
  const result = await oss_client.put('zheye/'+ uuidv4()+ '.'+ format, req.file.buffer)
  console.log(result.url)
  res.status(200).send({
    msg: 'upload file successfully!',
    data: {
      url: result.url
    }
  })
  // Files.create({
  //   userId: req.user.id,
  //   url: req.file.path
  // }).then(file => {
  //   res.send(file)
  // }).catch(err => {
  //   res.send(err)
  // }).finally(() => {
  //   res.end()
  // }).done()
}