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

function update_quality(items) { 
var types = {
'backStage':'Backstage passes to a TAFKAL80ETC concert', 
'agedBrie':'Aged Brie', 
'sulfuras':'Sulfuras, Hand of Ragnaros'
}; 
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != types.agedBrie && items[i].name != types.backStage) {
      if (items[i].quality > 0) {
        if (items[i].name != types.sulfuras) {
          items[i].quality = items[i].quality - 1
        }
      } 
    } else { 
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == types.backStage) {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != types.sulfuras) {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != types.agedBrie) {
        if (items[i].name != types.backStage) {
          if (items[i].quality > 0) {
            if (items[i].name != types.sulfuras) {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
