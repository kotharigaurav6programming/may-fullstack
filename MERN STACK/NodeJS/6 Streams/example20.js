// example showing the concept of transform stream

var {Duplex} = require("stream");
const duplexStream = new Duplex({
    write(chunk){
        // console.log("Data going to write : "+chunk);
        this.data = chunk;
    },read(){
        this.push(this.data);
        this.push(null);
    }
});

duplexStream.write("This is an example of Duplex Stream");
duplexStream.on('data',(chunk)=>{
    console.log("Going to read data : "+chunk);
})