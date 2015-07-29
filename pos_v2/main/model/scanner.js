function Scanner() {}
Scanner.prototype.scan = function(str) {
  var barcode = str.split("-")[0];
  var count = parseFloat(str.split("-")[1]) || 1;
  var cartItem = new CartItem(barcode, count);
  return cartItem;
};
