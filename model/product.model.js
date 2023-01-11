const mongo=require('mongoose')

const schema=mongo.Schema({
    name:{
        type:String,
    }
})

module.exports=mongo.model('products',schema)