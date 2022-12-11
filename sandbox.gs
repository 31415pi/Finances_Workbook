

/* https://stackoverflow.com/questions/32432269/how-to-get-week-number-in-google-apps-script#:~:text=Add%20this%20to%20the%20top%20of%20your%20Apps,getWeek%20method%2C%20for%20example%20to%20get%20this%20week%3A
  Usage:
    var now = new Date();
    Logger.log(now.getWeek());
*/ 
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
} // Ill use this later
/* TODO:
MAKE DYNAMIC:
  GROSS, TAX/SAVINGS, SUBTOTAL, TAX, SAVE PAID AND DEBT REMAINING.
  BASICALLY JUST INCREMENT EACH PORTION AND FOLLOW A RULE FOR THAT COLUMN POSITION...
  STATEMACHINE AND ENUMS POSSIBLY
  colpos["GROSS", "TAX/SAVINGS", ETC....]
*/
function printLOG(toprint)
{
 Logger.log(toprint);
}

function myFunction() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var row = 3;
 var col = 8;
 var debtROW = 9;
 var debtCOL = 16;
 let debtPOLL = "TRUE";
 let checkCHECK = sheet.getRange(row,col).getValue();
 let debtNOW = sheet.getRange(debtROW,debtCOL).getValue(); //Debt sum loc $P$9
 let monthlybillsNOW = sheet.getRange(debtROW+6,debtCOL-4).getValue();//
 let subtNOW = sheet.getRange(row,col-4).getValue(); // get cur subtot
 let grossNOW = sheet.getRange(row,col-6).getValue(); // get cur gross
printLOG(checkCHECK);
//Check for first unchecked box, fill with current debt, then exit loop
   while(debtPOLL == "TRUE"){
     if(!checkCHECK){
       debtPOLL = "FALSE";
       let debtSET = sheet.getRange(row,col+1).setValue(debtNOW); // set the debt at start of that period, aka rem debt from last month plus new debt
       let netSET = sheet.getRange(row,col-3).setValue(grossNOW - (monthlybillsNOW/2)); // calculate the real net in pocket after removing monthly bills divided by half, from the subtotal, the subtotal is what remains after taxes and my savvings. debt is paid from savings removal.
       }else{ 
         row++;
         checkCHECK = sheet.getRange(row,col).getValue();
        }
   }   
} 


