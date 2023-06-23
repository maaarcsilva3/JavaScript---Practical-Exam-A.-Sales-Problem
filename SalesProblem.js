let productProfitArray = [
  { product: "Product A", profit: -21 },
  { product: "Product B", profit: 35 },
  { product: "Product C", profit: -81 },
  { product: "Product D", profit: -1 },
  { product: "Product E", profit: -55 },
  { product: "Product F", profit: -75 },
  { product: "Product G", profit: 1 },
];

window.onload = function() {

  let container = document.getElementById("productContainer");

  productProfitArray.forEach(function(item) {
    let productName = item.product;
    let profit = item.profit;

    let pElement = document.createElement("p");
    pElement.textContent = `${productName}: ${profit}`;

    container.appendChild(pElement);
  });
  
};

function topProduct() {
  if (productProfitArray.length === 0) {
    return "No Data";
  } else {
    let largest = productProfitArray[0].profit;

    for (let i = 1; i < productProfitArray.length; i++) {
      if (productProfitArray[i].profit > largest) {
        largest = productProfitArray[i].profit;
        topProductName = productProfitArray[i].product;
      }
    }
    document.getElementById("display").innerText=`${topProductName}: ${largest}`;     
  }
}

function bottomProduct() {
  if (productProfitArray.length === 0) {
    return "No Data";
  } else {
    let smallest = productProfitArray[0].profit;

    for (let i = 1; i < productProfitArray.length; i++) {
      if (productProfitArray[i].profit < smallest) {
        smallest = productProfitArray[i].profit;
        smallestProductName = productProfitArray[i].product;
      }
    }
    document.getElementById("display").innerText=`${smallestProductName}: ${smallest}`;     
  }
}

function zeroProfitProduct(){
  if (productProfitArray.length === 0) {
    return "No Data";
  } else {
    let productClosestZero = productProfitArray[0].product;
    //math.abs return absolute value 
    let profitClosestZero = Math.abs(productProfitArray[0].profit);

    for (let i = 1; i < productProfitArray.length; i++) {
      const currentProfit = Math.abs(productProfitArray[i].profit);

      if (currentProfit < profitClosestZero || (currentProfit === profitClosestZero && productProfitArray[i].profit > 0)) {
        productClosestZero = productProfitArray[i].product;
        profitClosestZero = currentProfit;
      }
    }
    document.getElementById("display").innerText=`${productClosestZero}: ${profitClosestZero}`; 
  }
}
