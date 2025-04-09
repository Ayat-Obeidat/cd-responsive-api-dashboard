async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const posts = document.getElementById("posts");

    data.slice(0, 5).forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      posts.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
