//nodezhix
const http =require("http")

const serve=http.createServer((req,res)=>{
    res.end("testsss~~")
})

serve.listen(9900);