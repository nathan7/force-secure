exports = module.exports =
function forceSecure(req, res, next) {
  if (req.secure) return next()
  res.statusCode = 301
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Location', 'https://' + req.headers.host + req.url)
  res.end('redirecting you to the secure site')
}
