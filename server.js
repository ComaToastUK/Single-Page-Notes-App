var http = require('http')
var fs=require('fs');
var server = http.createServer(engine).listen(1337);

server.listen(1337, function() {
  console.log('Server received request')
})
//
// function engine(request,response){
//   console.log(request.method)
//     esponse.writeHead(202,{"Content-type":"text/html"});
//      console.log(request.url)
//          }
//
// console.log("Poopy pants")
//
// //

function engine(request,response){

  if(request.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

    fs.readFile(__dirname + '/public/style.css', function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(data);
      response.end();
    });

  }



  if(request.url === '/store_note'){ //req.url has the pathname, check if it conatins '.css'



                var mysql = require('mysql');

                var con = mysql.createConnection({
                  host: "localhost",
                  user: "root",
                  password: "stubbz",
                  database: "PingPongDB_dev"
                });


                con.connect(function(err) {
                  if (err) throw err;
                  console.log("Connected!");
                  var sql = "INSERT INTO note (id, body) VALUES ('342', 'Hi Mencheng')";
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                  });
                });


                fs.readFile("./" + request.url,function(error,data){
                console.log(request.method)
                       if(error){
                           response.writeHead(404,{"Content-type":"text/plain"});
                           response.end("Sorry the page was not found");
                       }else{
                           response.writeHead(202,{"Content-type":"text/html"});
                           response.end(data);

                       }
                   });

}





  fs.readFile("./" + request.url,function(error,data){
  console.log(request.method)
         if(error){
             response.writeHead(404,{"Content-type":"text/plain"});
             response.end("Sorry the page was not found");
         }else{
             response.writeHead(202,{"Content-type":"text/html"});
             response.end(data);

         }
     });
  console.log(request.url)
}
