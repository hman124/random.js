function generateStr(length) {
  // 50/50 Chance It will be a letter or a number
  var chance = Math.floor(Math.random() * 2);
  // List of letters
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  // Variables
  var alphacase = "", randomString = "", letterIndex = "";
  // Main Loop
  for (var i = 0; i < length; i++) {
    // Letters
    if (chance == 1) {
      letterIndex = Math.floor(Math.random() * 26);
      alphacase = Math.floor(Math.random() * 2);
      if (alphacase == 1) {
        randomString += letters[letterIndex].toUpperCase();
      } else {
        randomString += letters[letterIndex];
      }

    }
    // Numbers
    else {
      randomString += Math.floor(Math.random() * 10);
    }
    chance = Math.floor(Math.random() * 3);
  }
	if(length == undefined){
		return "You Need to Specify A Length";
	}
else{
	return randomString;
}}
