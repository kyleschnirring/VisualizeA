function letsDoIt(){
  for(var i = 0; i < 1; i++){
    setInterval(function(){
      var xposition = Math.floor(Math.random() * 500);
      var yposition = Math.floor(Math.random() * 500);

      elbox = document.createElement('div');
      elbox.style.position = 'absolute';
      elbox.style.left = xposition+'px';
      elbox.style.top = yposition+'px';

      document.body.appendChild(elbox);
    }, 3000);
  }
}
