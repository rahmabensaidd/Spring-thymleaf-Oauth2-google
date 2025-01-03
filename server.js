const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware pour ajouter l'en-tête x-total-count
server.use((req, res, next) => {
  if (req.method === 'GET' && req.query._page && req.query._limit) {
    const totalItems = router.db.get('products').size();
    res.setHeader('x-total-count', totalItems);
  }
  next();
});

server.use(router);

server.listen(8089, () => {
  console.log('JSON Server is running on http://localhost:8089');
});
