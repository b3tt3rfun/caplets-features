function onRequest(req, res){
  req.SetHeader("referer", "http://127.0.0.1");
}
function onResponse(req, res){
  res.SetHeader("Date", "Test");
}
