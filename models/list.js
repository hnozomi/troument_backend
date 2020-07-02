import mongoose from 'mongoose'

mongoose.Promise = global.Promise
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

//  スキーマの作成
//  今回保存したいドキュメントはname(String)とage(Number)の２つのフィールドを持つ
const ListSchema = new mongoose.Schema({
  // _id: Schema.Types.ObjectId,
  username: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  tag: JSON,
  worry: JSON,
  status: Boolean,
  worry_id: String,
  time: Date,
  count: Number, 
  // count: JSON, 
  resolve: JSON,
  // site: String
})

// モデルの作成
// mongoose.modelの第一引数の複数形の名前（今回だと'characters'）のコレクションが生成される
const List = mongoose.model('List', ListSchema)

// モデルをexport
export default List