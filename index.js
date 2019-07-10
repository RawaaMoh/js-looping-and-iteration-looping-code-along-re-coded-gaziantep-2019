// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
 
function wrıteCards(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);