var file = require('fs')

var qr = require('qr-image');

function generateQR(url, name) {
  
  var qr_svg = qr.image(url, {type: 'svg'});

  qr_svg.pipe(file.createWriteStream(`${name}.svg`));

  var svg_string = qr.imageSync(name, {type:'svg'});

}


generateQR("www.google.com","Google");
