import express from 'express'

const PORT =process.env.PORT || 80
const app = express()

app.get('/',(req,res)=>{res.send("Hello World From AWS EC2")})
app.listen(PORT,()=>{
    console.log(`connected to port : ${PORT}`);
})