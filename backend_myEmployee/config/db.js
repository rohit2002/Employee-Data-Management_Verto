const mongoose=require('mongoose');


const mongoURL='mongodb://localhost:27017/myemployeeDB';
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb Server');
})

db.on('error',(err)=>{
    console.log('error occured');
})

db.on('disconnected',()=>{
    console.log('disconnected to mongodb Server');
})

module.exports=db;