const p=require('../Products.model')

module.exports={
    Query:{
        product: ()=>{
           return p.getAllProducts();
        },
        oneproduct: (_,args)=>{
             return p.getProduct(args.n);
        }
    },
    Mutation:{
        addproduct: (_,args)=>{
           return p.addaproduct(args.n)
        },
        deleteproduct:(_,args)=>{
            return p.deleteaproduct(args.n)
        }
    }
}