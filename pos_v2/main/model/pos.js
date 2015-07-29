function Pos() {}
Pos.prototype.getItemString = function(cart) {
  var dates = new DateTime();
  var result = '';
  result = '***<没钱赚商店>收据***\n' + '打印时间：' + dates.getDate() + "\n" +
    '----------------------\n';
  cart.cartItems.forEach(function(val) {
    result += "名称：" + val.getName() + "，" + "数量：" + val.count +
      val.getUnit() + "，" + "单价：" + (val.getPrice()).toFixed(2) + "(元)" +
      "，" + "小计：" + val.getSubTotal().toFixed(2) + "(元)" + "\n";
  });

  result += '----------------------\n' + '挥泪赠送商品：\n';
  cart.cartItems.forEach(function(val) {
    var temp = val.getPromotionCount();
    if (val.getPromotionCount()) {
      result += "名称：" + val.getName() + "，" + "数量：" +
        val.getPromotionCount() + val.getUnit() + "\n";
    }
  });
  result += "----------------------\n";
  result += '总计：' + cart.getTotal().toFixed(2) + '(元)\n' + '节省：' +
    cart.getSaving().toFixed(2) + '(元)\n';
  result += '**********************';
  return result;
};
