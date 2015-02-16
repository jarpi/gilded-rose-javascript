function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []; 

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6)); 

var types = {
normal:'Normal Item',
backStage:'Backstage passes to a TAFKAL80ETC concert', 
agedBrie:'Aged Brie', 
sulfuras:'Sulfuras, Hand of Ragnaros'
};

function update_quality(items) { 
    for (var i = 0; i < items.length; i++) {
      var currentItem = items[i];
      var currentItemType = getItemType(currentItem.name);
      if (currentItemType == 'normal' && currentItem.quality > 0){
        currentItem.quality = currentItem.quality - 1;
      } 
      else 
        if (currentItem.quality < 50) { 
      	var toAdd = 1; 
      	if (currentItemType == types.backStage) {
      		if (currentItem.sell_in < 11) toAdd+=1; 
      		if (currentItem.sell_in < 6) toAdd +=1; 
      	} 
        if (currentItemType == types.backStage && currentItem.sell_in < 11 && currentItem.quality < 50) { 
          toAdd+= 1;  
          if (currentItem.sell_in<6) toAdd+=1; 
        }  
        currentItem.quality = currentItem.quality + toAdd; 
      }

      if (currentItem.name != types.sulfuras) {
        currentItem.sell_in = currentItem.sell_in - 1;
      }

      if (currentItem.sell_in < 0 && currentItemType == Types.normal && currentItemQuality>0) {
      	currentItem.quality = currentItem.quality - 1
        if (currentItemType == types.backStage) {
          currentItem.quality = currentItem.quality - currentItem.quality
        } 
        if (currentItemType == types.agedBrie) {
          if (currentItem.quality < 50) {
            currentItem.quality = currentItem.quality + 1
        }
      }
    }
  }
}


function getQuality(item) { 

}

function getItemType(itemName){
  var type = types.normal;
  if (itemName==types.backStage){
    type = types.backStage;
  }
  else if(itemName==types.agedBrie){
    type = types.agedBrie;
  }
  else if(itemName==type.sulfuras){
    type = types.sulfuras;
  }

  return type;
}