var posts=["2026/02/13/滚动猫咪中的细节/","2025/12/27/小兔鲜项目中学到的细节知识/","2025/12/24/html/","2026/06/09/行人重识别-论文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };