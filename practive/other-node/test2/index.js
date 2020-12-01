var http = require("http");
var serve = http.createServer(function (req, res) {
    res.end("testsss~~");
});
serve.listen(9900);
