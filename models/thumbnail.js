import mongoose from 'mongoose'

mongoose.Promise = global.Promise

//  スキーマの作成
//  今回保存したいドキュメントはname(String)とage(Number)の２つのフィールドを持つ
const ThumbnailSchema = new mongoose.Schema({
  thumbnail: String,
  username: String,
})

// モデルの作成
// mongoose.modelの第一引数の複数形の名前（今回だと'characters'）のコレクションが生成される
const Thumbnail = mongoose.model('Thumbnail', ThumbnailSchema)

// モデルをexport
export default Thumbnail