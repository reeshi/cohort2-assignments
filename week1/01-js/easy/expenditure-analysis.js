/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  const obj = transactions.reduce((acc, transaction) => {
    if(acc[transaction.category]){
      acc[transaction.category] += transaction.price;
    }else{
      acc[transaction.category] = transaction.price;
    }
    return acc;
  }, {});

  const ans = Object.entries(obj).map((val) => {
    return {
      category: val[0],
      totalSpent: val[1]
    }
  });

  return ans;
}

module.exports = calculateTotalSpentByCategory;
