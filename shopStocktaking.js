const shopStocktaking = (goodsArray) => {
    //Validate the data
    const chek = (currentObj) => {
      const {item, type, quantity, weight = quantity, pricePerKilo, pricePerItem : price = pricePerKilo} = currentObj;
      const typeItem = (typeof item) === 'string';
      const typeType = (typeof type) === 'string';
      const typeWeight = (typeof weight) === 'number';
      const typePrice = ((typeof price) === 'string') && (price.startsWith('$')) && ((typeof parseFloat(price.slice(1))) === 'number');
      return typeItem && typeType && typeWeight && typePrice;
    }
    const validateData = goodsArray.filter(chek);
    if (goodsArray.length !== validateData.length) {
      return false;
    }
    //total quantity of all watermelons
    const arrayWatMelons = goodsArray.filter(Fruit => Fruit.item === "watermelon");
    const watermelonQuant = arrayWatMelons.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
    console.log(`Watermelons - ${watermelonQuant}`);
    //total weight of all apples
    const arrayApples = goodsArray.filter(Fruit => Fruit.item === "apple");
    const applesQuant = arrayApples.reduce((acc, currentValue) => acc + currentValue.weight, 0);
    console.log(`Apples - ${applesQuant}`);
    //Sort the array in alphabetical order
    const sortAlphabetArray = goodsArray.sort((a, b) => (a.item > b.item) ? 1 : -1);
    console.log(sortAlphabetArray);
    //Sort the array by cost
    const sortByCost = (a, b) => {
      const lastItemA = Object.keys(a)[Object.keys(a).length - 1];
      const lastItemB = Object.keys(b)[Object.keys(b).length - 1];
      return parseFloat(a[lastItemA].replace(/,/gi, '.').slice(1)) > parseFloat(b[lastItemB].replace(/,/gi, '.').slice(1)) ? 1 : -1;
    }
    const sortCostArray = goodsArray.sort(sortByCost);
    console.log(sortCostArray);
    //Print the type of oranges with the least price
    const arrayOranges = goodsArray.filter(Fruit => Fruit.item === "orange");
    const cheapestOrange = arrayOranges.sort((a, b) => parseFloat(a.pricePerKilo.replace(/,/gi, '.').slice(1)) > parseFloat(b.pricePerKilo.replace(/,/gi, '.').slice(1)) ? 1 : -1);
    console.log(cheapestOrange[0]);
    //Print the cost of the goods by item name 
    const costWatermelons = arrayWatMelons.reduce((acc, currentValue) => acc + parseFloat(currentValue.pricePerItem.replace(/,/gi, '.').slice(1)) * currentValue.quantity, 0);
    const costApples = arrayApples.reduce((acc, currentValue) => acc + parseFloat(currentValue.pricePerKilo.replace(/,/gi, '.').slice(1)) * currentValue.weight, 0);
    const costOranges = arrayOranges.reduce((acc, currentValue) => acc + parseFloat(currentValue.pricePerKilo.replace(/,/gi, '.').slice(1)) * currentValue.weight, 0);
    const arrayPineapples = goodsArray.filter(Fruit => Fruit.item === "pineapple");
    const costPineapples = arrayPineapples.reduce((acc, currentValue) => acc + parseFloat(currentValue.pricePerItem.replace(/,/gi, '.').slice(1)) * currentValue.quantity, 0);
    console.log(`Apples - ${Math.round(costApples, -1)}, Pineapples - ${Math.round(costPineapples, -1)}, Watermelons - ${Math.round(costWatermelons, -1)}, Oranges - ${Math.round(costOranges, -1)}`);
    //Print the result of the execution of this function
    };
    
    const goodsArray = 
    [
      {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
      {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
      {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
      {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
      {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
      {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
      {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
      {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
      {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
      {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
      {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
      {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
    ];
    
    shopStocktaking(goodsArray);
    
