function rotateImage(a) {
var tmp = new Array();
  
    for (var i = 0; i < a.length; i++){
        tmp[i] = new Array();
        for (var j = 0; j < a.length; j++){
        tmp[i][j] = a[j][i];     
        }
      tmp[i].reverse();
    }
return tmp;
}
