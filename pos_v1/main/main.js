function discount(result) {
  var information = loadPromotions()[0];
  var newarray = [];
  result.forEach(function(val) {
    for (var i in information.barcodes) {
      if (information.barcodes[i] === val.barcode) {
        newarray.push({
          barcode: val.barcode,
          name: val.name,
          unit: val.unit,
          count: parseInt(val.count / 3),
          newcount: val.count - parseInt(val.count / 3)
        });
        return;
      }
    }
  });
  return newarray;
}

function count_same_elements(str) {
  if (str.indexOf("-") !== -1) {
    return parseInt(str.slice(str.indexOf("-") + 1));
  } else {
    return 1;
  }
}

function collect_count_numbers(result) {
  var content = loadAllItems();
  var count = [];
  result.forEach(function(val) {
    for (var i in content) {
      if (content[i].barcode === val.barcode) {
        count.push({
          barcode: val.barcode,
          name: content[i].name,
          unit: content[i].unit,
          price: content[i].price,
          count: val.count,

        });
        return;
      }
    }
  });
  return count;
}

function count_numbers(collection) {
  var result = [];
  var obj = {};
  collection.forEach(function(val) {
    var bar = val.split("-", 1);
    obj[bar] = obj[bar] + count_same_elements(val) || count_same_elements(val);
  });
  for (var x in obj) {
    result.push({
      barcode: x,
      count: obj[x]
    });
  }
  return result;
}

function output(right){
  var result = '';
  right.forEach(function(val) {
    var count=val.count/3>0?val.count-parseInt(val.count/3):val.count;
    var sum=count * val.price;
    result += "名称：" + val.name + "，" + "数量：" + val.count +
      val.unit + "，" + "单价：" + (val.price).toFixed(2) + "(元)" + "，" +
      "小计：" +sum.toFixed(2)+ "(元)" + "\n";
  });
  return result;
}
function funct(val){


}
function counttotal(val,discounttotal){
  discounttotal.forEach(function(e){
    if(e.name===val.name)
    t=e.price*e.newcount;
    return ;
  });
  t=val.count*val.price;
  return t;
}

function output1(discounttotal) {
  var info = '';
  discounttotal.forEach(function(val) {
    info += "名称：" + val.name + "，" + "数量：" + val.count + val.unit + "\n";
  });
  return info;
}

function discountprice(right, discounttotal) {
  var sum = 0;
  var t = 0;
  var result = '';
  right.forEach(function(val) {
    for (var i in discounttotal) {
      if (discounttotal[i].barcode === val.barcode) {
        sum += discounttotal[i].newcount * val.price;
        t += val.price * val.count;
        return;
      }
    }
    sum = sum + val.count * val.price;
    t += val.price * val.count;
  });
  result = "总计：" + sum.toFixed(2) + "(元)\n" + "节省：" + (t - sum).toFixed(2) +
   "(元)\n";
  return result;
}

function printReceipt(inputs) {
  var sum = 0;
  var result = [];
  var right1 = count_numbers(inputs);
  var right = collect_count_numbers(right1);
  var discounttotal = discount(right);


  result = "***<没钱赚商店>收据***\n" + output(right) + "----------------------\n" +
    "挥泪赠送商品：\n" + output1(discounttotal) + '----------------------\n' +
    discountprice(right, discounttotal) +'**********************';
  console.log(result);
  return result;
}
