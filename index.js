var checksum  = require('./checksum');
var express = require('express');
var app  = new express();
app.use(express.json());
app.post('/api/getchecksum',(req,response) =>{
    var params 						= {};
    params['MID'] 					= 'ErRnVK16888702152308';
    params['WEBSITE']				= 'WEBSTAGING';
    params['CHANNEL_ID']			= 'WEB';
    params['INDUSTRY_TYPE_ID']	= 'Retail';
    params['ORDER_ID']			= 'abc495060709';
    params['CUST_ID'] 			= 'Customer001';
    params['TXN_AMOUNT']		= '100.00';
    params['CALLBACK_URL']		= 'https://funny-dev-ed--c.ap5.visual.force.com/apex/paytmrequestpage';
    params['EMAIL']				= 'abc@mailinator.com';
    params['MOBILE_NO']			= '7777777777';
    var mkey = '@bAfJ2kINKpKZPmY';
    checksum.genchecksum(params,mkey, function (err, res) {
     if(!err){
            return response.json(res)
       }
    });
});
const port = process.env.PORT || 3000;
app.listen(port  , () => console.log(`listeing to po ${port}`));