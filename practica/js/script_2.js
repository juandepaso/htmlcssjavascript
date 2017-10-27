var x= +prompt('dame un número', '');
var y= +prompt('dame otro número', '');
var z= +prompt('dame otro número', '');

document.write('el resultado de '+x+' + '+y+' es: '+ ( x+y ));

if (x>y&&x>z) {
document.write('<br/> el numero mayor es ' + x)}

else if (y>x&&y>z) {
document.write('<br/> el número mayor es ' + y)}

else {
document.write('<br/> el número mayor es ' + y)}
