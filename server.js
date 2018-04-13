const applicationFacade = require('./api/application-facade');
const applicationBootstrapper = require('./api/application-bootstrapper');
const app = applicationBootstrapper.bootstrap();

app.get('/api/books', applicationFacade.getBooks);
app.post('/api/books', applicationFacade.addBook);
app.post('/api/signin', applicationFacade.signIn);
