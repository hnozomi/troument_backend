import mongoose from 'mongoose'

mongoose.Promise = global.Promise
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

//  スキーマの作成
//  今回保存したいドキュメントはname(String)とage(Number)の２つのフィールドを持つ
const UserSchema = new mongoose.Schema({
    user_name: String,
    // icon: String,
    sessionID: String,
    password: String,
    user_id: String,
    thumbnail: JSON,
    // list: { type: ObjectId, ref: 'List' },
    // goodlist: [{ type: Schema.Types.String, ref: 'List' }],
    goodlist: [{ type: Schema.Types.ObjectId, ref: 'List' }],
})

// モデルの作成
// mongoose.modelの第一引数の複数形の名前（今回だと'characters'）のコレクションが生成される
const User = mongoose.model('User', UserSchema)

// モデルをexport
export default User