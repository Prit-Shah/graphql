const express=require('express')
const path=require('path')
// const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const mongoose=require('mongoose')
const PORT=process.env.PORT || 3002;

const {makeExecutableSchema} = require('@graphql-tools/schema')
const {loadFilesSync}=require('@graphql-tools/load-files')
const app=express();
const typesarr=loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolvearr=loadFilesSync(path.join(__dirname,'**/*.resolver.js'))
const schema=makeExecutableSchema({
    typeDefs:typesarr,
    resolvers: resolvearr
    }    
); 
async function connectmongo( ){
    await mongoose.connect('mongodb+srv://dcsprit:ItYwlknxVupjiHbf@cluster0.rdssz3x.mongodb.net/Practice?retryWrites=true&w=majority')
}

connectmongo()

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql:true
}))

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
})
