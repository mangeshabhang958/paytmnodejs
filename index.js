var checksum  = require('./checksum');
var express = require('express');
var app  = new express();
app.use(express.json());
app.post('/api/getchecksum',(req,response) =>{
    console.log('called from  postman'+ req.body.mid);
    var params 						= {};
    params['MID'] 					= req.body.mid;
    params['WEBSITE']				= 'webstaging';
    params['CHANNEL_ID']			= 'WEB';
    params['INDUSTRY_TYPE_ID']	= 'Retail';
    params['ORDER_ID']			= 'TEST_'  + new Date().getTime();
    params['CUST_ID'] 			= 'Customer001';
    params['TXN_AMOUNT']			= req.body.taxamount;
    params['CALLBACK_URL']		= 'http://localhost:'+port+'/callback';
    params['EMAIL']				= req.body.email;
    params['MOBILE_NO']			= req.body.mobilen;

    var mkey = req.body.mkey;
    checksum.genchecksum(params,mkey, function (err, res) {
    console.log('sddfhyrtty');
     if(!err){
            return response.json(res)
       }
    });


});
const port = process.env.PORT || 3000;
app.listen(port  , () => console.log(`listeing to po ${port}`));