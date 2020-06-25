const http = new EasyHTTP();

// GET Request
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Sample Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com",
};

// POST Request
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// PUT Request
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// DELETE Request
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err));
