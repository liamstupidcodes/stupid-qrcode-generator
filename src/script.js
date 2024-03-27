import inquirer from "inquirer";

var file = require("fs");
var qr = require("qr-image");
var crypto = require("crypto");

function generateQR(url, name) {
  var qr_svg = qr.image(url, { type: "svg" });

  qr_svg.pipe(file.createWriteStream(`${name}.svg`));

  var svg_string = qr.imageSync(name, { type: "svg" });
}

function generateID() {
  return crypto.randomBytes(16).toString("hex");
}

console.log(generateID());
