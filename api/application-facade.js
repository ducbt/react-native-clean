const books = [
  {ISBN: 2134, name: 'Dracula'},
  {ISBN: 2335, name: 'The wind in the willows'},
  {ISBN: 1222, name: 'Tin tin'},
  {ISBN: 5532, name: 'Shindlers List'},
];

function getBooks(req, res) {
  success(res, 'got visits')(books);
}

function addBook(req, res) {
  books.push(req.body.book);
  success(res, 'updated books')(books);
}

function signIn(req, res) {
  if (req.body.password === 'password1') {
    success(res, 'got activity stages')(
        {success: true, message: 'user signIn successful', token: '123'});
  } else {
    success(res, 'got activity stages')(
        {success: false, message: 'user signIn failed'});
  }
}

function success(res, successMessage) {
  return function(arg) {
    res.send(arg);
  };
}

exports.getBooks = getBooks;
exports.addBook = addBook;
exports.signIn = signIn;
