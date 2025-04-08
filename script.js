fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    document.getElementById("posts").innerHTML = posts
      .slice(0, 5)
      .map((post) => `<div><h3>${post.title}</h3><p>${post.body}</p></div>`)
      .join("");
  })
  .catch((error) => console.error("Error:", error));
