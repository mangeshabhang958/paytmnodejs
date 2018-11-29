var checksum  = require('./checksum');
var express = require('express');
var app  = new express();
app.use(express.json());
app.post('/api/getchecksum',(req,response) =>{
    console.log('called from  postman'+ req.body.mid);
    var params 						= {};
    params['MID'] 					= req.body.mid;
    params['ORDER_ID']			= req.body.orderID;
    params['CUST_ID'] 			= req.body.custID;
    params['INDUSTRY_TYPE_ID']	= req.body.industryID;
    params['CHANNEL_ID']			= req.body.channelId;
    params['TXN_AMOUNT']		= req.body.taxamount;
    params['WEBSITE']				= req.body.website;
    params['CALLBACK_URL']		= req.body.callbackurl;
    var mkey = req.body.mkey;
    console.log(params);
    checksum.genchecksum(params,mkey, function (err, res) {
     if(!err){
            return response.json(res)
       }
    });


});
const port = process.env.PORT || 3000;
app.listen(port  , () => console.log(`listeing to po ${port}`));