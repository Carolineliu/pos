function Cart() {
  this.cartItems = [];
}
Cart.prototype.add = function(cartitem) {
  var judge = 1;
  this.cartItems
    .forEach(function(val) {
      if (val.barcode === cartitem.barcode) {
        val.count += cartitem.count;
        judge = 0;
      }
    });
  if (judge) this.cartItems.push(cartitem);
};
Cart.prototype.getTotal = function() {

  var total = 0;
  this.cartItems.forEach(function(val) {
    total += (val.count - val.getPromotionCount()) * val.getPrice();
  });
  return total;
};
Cart.prototype.getSaving = function() {
  var that = this;
  var savings = 0;
  that.cartItems.forEach(function(val) {
    savings += val.getPromotionCount() * val.getPrice();
  });
  return savings;
};
