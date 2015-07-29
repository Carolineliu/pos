function printReceipt(inputs) {
  var scanner = new Scanner();
  var cart = new Cart();
  inputs.forEach(function(val) {
    var cartitem = scanner.scan(val);
    cart.add(cartitem);
  });
  var pos = new Pos();
  var result = pos.getItemString(cart);
  console.log(result);
}
