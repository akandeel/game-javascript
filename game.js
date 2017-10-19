// DRAGON SLAYER

//BUILT IN JAVASCRIPT


$(function() {

  var slaying = true;
  var youHit = Math.floor(Math.random() * 2);
  var damageThisRound = Math.floor(Math.random() * 5 + 1);
  var totalDamage = 0;

  while (slaying) {
    if (youHit){
      console.log("Good knight You have struck the dragon and did" + damageThisRound + "damage!");
      totalDamage += damageThisRound;
    }
  }
})
