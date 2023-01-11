const products=require('./model/product.model')

async function getAllProducts(){
    return await products.find()
}
async function getProduct(n){
    return await products.findOne({name:n})
}

async function addaproduct(name){
    await products.insertMany([{
        name:name
    }])
    return "{status:'succes'}";
}
async function deleteaproduct(name){
    await products.deleteOne({name:name})
    return "{status:'deleted'}"
}
module.exports={
    getAllProducts,
    getProduct,
    addaproduct,
    deleteaproduct
}