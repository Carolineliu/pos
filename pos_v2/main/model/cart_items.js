var allItems = loadAllItems();
var allpromotions = loadPromotions();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
}
CartItem.prototype.getName = function() {
  var that = this;
  return allItems.filter(function(val) {
    return val.barcode === that.barcode;
  })[0].name;
};
CartItem.prototype.getUnit = function() {
  var that = this;
  return allItems.filter(function(val) {
    return val.barcode === that.barcode;
  })[0].unit;
};
CartItem.prototype.getPrice = function() {
  var that = this;
  return allItems.filter(function(val) {
    return val.barcode === that.barcode;
  })[0].price;
};
CartItem.prototype.getPromotionCount = function() {
  var that = this;
  var promotionCount = 0;
  allpromotions[0].barcodes.forEach(function(val) {
    if (val === that.barcode) {
      promotionCount = Math.floor(that.count / 3);
    }
  });
  return promotionCount;
};
CartItem.prototype.getSubTotal = function() {
  var subTotal = (this.count - this.getPromotionCount()) * this.getPrice();
  return subTotal;
};
