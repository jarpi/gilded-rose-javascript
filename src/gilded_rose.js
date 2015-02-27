function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

this.items = []; 

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6)); 


function update_quality(items) { 
  var types = {
  normal : 'Normal',
  backStage:'Backstage passes to a TAFKAL80ETC concert', 
  agedBrie:'Aged Brie', 
  sulfuras:'Sulfuras, Hand of Ragnaros'
  }; 

  for (var i = 0; i < items.length; i++) { 
    var item = items[i]; 
    item.sell_in = getNextSellIn( item );
    item.quality = getNextQuality( item ); 
  }

  function getItemType( itemIn ){
    if( itemIn.name == 'Backstage passes to a TAFKAL80ETC concert' )
      return types.backStage;
    else if( itemIn.name == 'Aged Brie' )
      return types.agedBrie;
    else if( itemIn.name ==  'Sulfuras, Hand of Ragnaros' )
      return types.sulfuras;
    else 
      return types.normal
  }

  function getNextSellIn(item){
    var type = getItemType( item );

    if( type == types.sulfuras)
      return item.sell_in;
    else
      return (item.sell_in - 1);
  }

  function getNextQuality(item) {
    var type = getItemType(item); 
    var itemQuality = item.quality;  
    if (type == types.sulfuras) 
        itemQuality = 80;  
    if (type == types.agedBrie) 
        itemQuality += 1;  
    if (type == types.backStage) 
        itemQuality += getNextBackstageQuality(item); 
    if (type == types.normal)  
        itemQuality -=1;
    if (type != types.sulfuras) {
      if (itemQuality > 50) 
        itemQuality = 50; 
      if (itemQuality <= 0) 
        itemQuality = 0; 
    } 
    return itemQuality;  
  } 

  function getNextBackstageQuality(item) {
    var toAdd = 1; 
    if (item.sell_in < 11) 
      toAdd = 2; 
    if(item.sell_in < 6) 
      toAdd = 3; 
    if(item.sell_in <= 0)
      toAdd = item.quality * -1; 
    return toAdd; 
  } 
} 

