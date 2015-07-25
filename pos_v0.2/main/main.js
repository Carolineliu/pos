function collect_count_numbers(result, content) {
  var newarray = [];
  result.forEach(function(val) {
    for (var i in content) {
      if (content[i].barcode === val.barcode) {
        newarray.push({
          barcode: val.barcode,
          name: content[i].name,
          unit: content[i].unit,
          price: content[i].price,
          count: val.count
        });
        return;
      }
    }
  });
  return newarray;
}

function count_numbers(collection) {
  var result = [];
  var obj = {};
  collection.forEach(function(val) {
    obj[val] = obj[val] + 1 || 1;
  });
  for (var x in obj) {
    result.push({
      barcode: x,
      count: obj[x]
    });
  }
  var content = loadAllItems();
  return collect_count_numbers(result, content);
}

function printReceipt(inputs) {
  var sum = 0;
  var result = [];
  var right = count_numbers(inputs);
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
