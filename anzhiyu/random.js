var posts=["2025/12/27/小兔鲜项目中学到的细节知识/","2025/12/24/html/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };