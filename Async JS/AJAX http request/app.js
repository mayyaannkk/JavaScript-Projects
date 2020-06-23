const http = new easyHTTP();

//GET Request

// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//Using params with GET Request to get specific data

// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Sample data to test POST and PUT Request
const data = {
  title: "Sample Title",
  body: "Body of sample data",
};

// POST Request
// http.post("https://jsonplaceholder.typicode.com/posts", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//PUT Request to update specific data whose id is passed through params
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//DELETE Request
// http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
