var scores = [78 , 14, 23, 72, 86, 94, 27, 83, 26, 99];
var fruits = ["portocale", "mandarine", "mere", "nuci", "banane", "kiwi"];

var max = 0;
var position;

for(var i = 0; i<scores.length; i++ ) {
    if(scores[i] > max) {
        max = scores[i];
        position = i;
    }
}
document.write( max + "bule pe pozitia" + position);

max=fruits[0];

for(var i = 0; i<fruits.length; i++ ) {
    if(fruits[i] > max) {
        max = fruits[i];
        position = i;
    }
}
    document.write( max + "sunt cele mai mari fructe sunt" + position);
    