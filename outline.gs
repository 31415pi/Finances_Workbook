function myFunction() {
 var book = SpreadsheetApp.getActiveSheet();
 var overview = book.getSheetByName("OVERVIEW");
 var income = book.getSheetByName("INCOME");
 var bills = book.getSheetByName("RECURRINGBILLS");
 var spend = book.getSheetByName("SPENDING");

 var row = 3;                   // FIRST ROW WITH ANY DATA IN IT...
                                // from row:row; col:1, get 1 row, get 4 columns
                                // col   desc
                                // 0     realized
                                // 1     day intervals
                                // 2     amount
                                // 3     last realized
                                // 7     logbook date  
                                // 8     logbook amount
//  WHERE TO PUT WEEKLY_SUM
//  MAKE THE FOLLOWING MODULAR FOR INCOME, RECURRINGBILLS, AND SPENDING... THEN USE GETSHEETNO, INCREMENT SHEETNO.
 var range = income.getDataRange().getValues();   
 var check_in_items = 1;
                                //  get last logbook row / first empty logbook row.... (logrow)
 do {
   if(range[row][0]=="true")    // start logging realized income 
   {
     // (today() - last_realized) >= day_interval?
     //   yes
     //     add to log, increment logrow
     //     reset last_realized to today()12:01AM       
     //     weekly_sum += row_amount
     //     row++
   } else(                      // update overview sheet
/*     if(today() % 7 == 0)     // check for beginning of week{};
     {
       //put weekly_sum to OVERVIEW NEW ROW 
       //reset WEEKLY_SUM to 0
     }    */
     check_in_items = 0)        // break condition for dowhile WHEN NO MORE REALIZED ITEMS
 }
 while(check_in_items == 1)
/*
                                // ON CHECKBOX/ONEVENT CHANGE		
ON REALIZE CHANGE 0-->1	SEND TO LOG	NOTE DATE TO LAST DATE REALIZED AS 00:01AM MORNING OF TODAY()
ON REALIZE CHANGE 1-->0	PROMPT IF DESIRED	
ON RECURRING CHANGE 0-->1	SET NEW # OF INCOME STREAMS	
	CHECK IF ALL TIME HIGH MATCHES CURRENT	
	IF ATH<CUR, SET NEW ATH	
ON RECURRING CHANGE 1-->0	PROMPT IF DESIRED	
	*/	
} 


