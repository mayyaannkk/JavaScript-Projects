posts = [{ title: "first" }, { title: "second" }];

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    }, 1000);
    document.body.innerHTML = output;
  });
}

function putPost(post, cb) {
  setTimeout(function () {
    posts.push(post);
    cb();
  }, 2000);
}

putPost({ title: "third" }, getPosts);
