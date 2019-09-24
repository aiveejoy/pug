var fs = require('fs');
exports.numberOfRequest = function (req,res,url) {
  fs.appendFile('Rurl.txt',url+",",function(err){
    fs.readFile('Rurl.txt',function(err,data){
      var dataS= data.toString();
      var Sdata= dataS.split(",");
      console.log(dataS);
      console.log(Sdata);
      fs.writeFile('request.txt',Sdata.length-1,function(err){
        console.log('Saved!');
  })
  })

  })
    
};