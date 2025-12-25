var posts=["2025/12/24/hello-world/","2025/12/24/html/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };