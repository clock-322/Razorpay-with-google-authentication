const express=require('express')
const app=express()
const port=process.env.PORT || 3000 
var cors = require('cors')
const Razorpay = require('razorpay');
var bodyParser=require('body-parser')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const instance = new Razorpay({
  key_id: 'rzp_test_***************',  //you can generate your razorpay API from setting section of your razorpay dahsboard.
  key_secret: 'YSF********************bY'
})

app.get('/',(req,res)=>{
  res.json('this is testing API......')
})

  app.get('/api/v1/rzp_capture/:payment_id/:amount', (req, res) => {
    const {payment_id } = req.params;
    const amount = Number(req.params.amount*100);
    instance.payments.capture(payment_id, amount).then((data) => {
      res.json(data);
    }).catch((error) => {
      res.json(error);
    });
  });

app.listen(port,()=>{
  console.log('this is running on port '+port)
})