const http=require("http")

const serve=http.createServer((req,res)=>{
    res.end("testsss222222~~")
})

serve.listen(9910);