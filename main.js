let line ='  ';
let drop = '[+]';
let raqam = +prompt('Raqam kiriting');
for (let i = 0; i < raqam; i++) {
   let column = '';
   for (let a = 0; a < raqam; a++) {
      if (i==0 || i == raqam-1) {
          column += drop;
      } else if (a == 0 || i==a || a==raqam-1) {
          column += drop;
      } else{
          column += "   ";
      }
   }
      console.log(column);
}


let num = +prompt("Uhlashingizga yordam beraman :)")
let end = 0
for (let i = 0; i < num; i++) {
    end = end + 1;
    console.log( end + ' Ta Qo`y :)^');
}