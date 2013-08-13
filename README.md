# force-secure

  Redirect users on plain HTTP connections to HTTPS.
  For Express apps.

## API

  `app.use(require('force-secure'))`
  Make sure to put it before any other middleware, especially `app.router`!

## Proxies

  If you're behind a reverse proxy or load balancer (such as on the awesome [Nodejitsu](http://nodejitsu.com) PaaS), you'll have to tell Express to trust the proxy's `X-Forwarded-Proto` header.
  `app.enable('trust proxy')`

  If you're not using Express, you can use the [trust-proxy](http://npm.im/trust-proxy) middleware for this.
