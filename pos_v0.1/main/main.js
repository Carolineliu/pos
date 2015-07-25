function collect_count_numbers(collection) {
  var newarray = [];
  collection.forEach(function(val) {
    for (var i in newarray) {
      if (newarray[i].name === val.name) {
        newarray[i].count++;
        return;
      }
    }
    newarray.push({
      barcode: val.barcode,
      name: val.name,
      unit: val.unit,
      price: val.price,
      count: 1
    });
  });
  return newarray;
}

function printReceipt(inputs) {
  var sum = 0;
  var result = [];
  var right = collect_count_numbers(inputs);
  result = "***<没钱赚商店>收据***\n";

  right.forEach(function(val) {
    var totalpricre = (val.price * val.count).toFixed(2);
    result = result + "名称：" + val.name + "，" + "数量：" + val.count +
      val.unit + "，" + "单价：" + (val.price).toFixed(2) + "(元)" + "，" +
      "小计：" + totalpricre + "(元)" + "\n";
    sum = sum + (totalpricre - 0);
  });
  result += "----------------------\n" + "总计：" + sum.toFixed(2) + "(元)\n" +
    "**********************";
  console.log(result);
  return result;

}
