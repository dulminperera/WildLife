let products = {
    price : [5000,2500,1000,500,4500,15000],
    duration : [0,500,1000],
    extras : [500],

    durForeign : [0,500,1000],
    durLocal : [0,250,500]
}
var num_Of_Tickets = 0;


function calculateCost(){
    var ticket_price = products["price"];
   // var duration_price = products["duration"];
    var extra_price = products["extras"];

    var duration_foreiner = products["durForeign"];
    var duration_local = products ["durLocal"];

    var tCost = 0;

    var ticketType = document.getElementById("txtTicket").value;
    var duration = document.getElementById("duration").value;
    var numTkts = document.getElementById("number").value;
    
    var foodTokens = document.getElementById("foodTokens").value;

if(numTkts){
    if(ticketType == ""){
        alert("Select the Ticket Type");
        document.getElementById("txtTicket").focus();
        return;
    }
    /*
    if(duration == ""){
        alert("Select the Duration")
        document.getElementById("duration")
        return;

    }*/
}

    if(numTkts == ""){
        numTkts = 0;
    }
    else{
        numTkts=parseInt(numTkts);

    }
    //validation
    if(numTkts<0){
        alert("Enter a Possitive Number")
    }


    if(foodTokens == ""){
        foodTokens = 0;
    }
    else{
        foodTokens=parseInt(foodTokens);

    }
    //validation
    if(foodTokens<0){
        alert("Enter a Possitive number for Food Tokens")
    }
    
    totalPrice = 0;
    ticketType = parseInt(ticketType);


    if (ticketType == 0){
        totalPrice = (numTkts*(ticket_price[0] + duration_foreiner[duration]));

    }
    else if(ticketType==1){
        totalPrice = (numTkts*(ticket_price[1] + duration_foreiner[duration]));
        
    }
    else if(ticketType==2){
        totalPrice = (numTkts*(ticket_price[2] + duration_local [duration]));

    }
    else if(ticketType==3){
        totalPrice = (numTkts*(ticket_price[3] + duration_local [duration]));

    }
    else if(ticketType==4){
        totalPrice = (numTkts*ticket_price[4]);
        
    }
    else if(ticketType==5){
        totalPrice = (numTkts*ticket_price[5]);
    }

//testing duration 
    /*
    if (duration!= ""){
        
        totalPrice = totalPrice + duration_price[duration];
    }
    */
     

    

   
    totFoodT = foodTokens* extra_price[0];

    tCost = parseFloat(totalPrice + totFoodT);
    document.getElementById("spCost").innerHTML = tCost.toFixed(2);


    num_Of_Tickets = numTkts;

   // extras();
   //extras2();
   
}


function extras(){
    var divExtras = document.getElementById("divExtras");
    divExtras.style.display = optional.checked? "block" : "none";

   /* var divExtras2 = document.getElementById("hideDuraExtras");
    divExtras2.style.display =  optional.checked? "block" : "none"*/
}
/*
function extras2(select){
    if(select.value==5){
        document.getElementById('hideDuraExtras').style.display = "block";
       } else{
        document.getElementById('hideDuraExtras').style.display = "none";
       }
}*/


function addToOrder(){

    var cost = parseFloat(document.getElementById("spCost").innerHTML);
    if(cost == 0){
        alert("Please select Ticket Category, Duration and Number of Passes");
        return;
    }
        
    document.getElementById("divAddOrder").style = "display : block";

    var grand_total = parseFloat(document.getElementById("GrandTot").innerHTML);

    var ctrl_ticketType = document.getElementById("txtTicket");
    var ticket_pricetxt = ctrl_ticketType.options[ctrl_ticketType.selectedIndex].text;
   
    var ctrl_duration_price = document.getElementById("duration");
    var duration_price_name = ctrl_duration_price.options[ctrl_duration_price.selectedIndex].text;


    /*Adding Rows to the table body*/

    var tbody = document.getElementById("tbody_update");
    var trow = tbody.insertRow(-1);

    td1 = trow.insertCell(0);
    td1.innerHTML = ticket_pricetxt;

    td2 = trow.insertCell(1);
    td2.innerHTML = document.getElementById("number").value;

    td3 = trow.insertCell(2);
    td3.innerHTML = duration_price_name;

    td4 = trow.insertCell(3);
    td4.innerHTML = document.getElementById("foodTokens").value;

    var total = parseFloat(document.getElementById("spCost").innerHTML);
    grand_total = grand_total + total;

    td5 = trow.insertCell(4);
    td5.innerHTML = total.toFixed(2);

    td6 = trow.insertCell(5);
    td6.innerHTML = "<a href='javascript:void(0)' style='color:red;font-weight:bold' onclick='removeRecord(this.parentElement);'>X</a>";

    document.getElementById("GrandTot").innerHTML = grand_total.toFixed(2);
    
  
    calcLoyaltyPoints();
    resetPurchaseForm();
    extras();
   
}

function removeRecord(item){
    var result = confirm("Do you want to remove this record?");
    
    if(result == true){
        var table = document.getElementById("tbl_order");
        var grand_total = parseFloat(document.getElementById("GrandTot").innerHTML);
        
        var total = parseFloat(item.parentElement.cells[4].innerHTML);
       
        grand_total = grand_total - total;
        
        document.getElementById("GrandTot").innerHTML = grand_total.toFixed(2);
        table.deleteRow(item.parentElement.rowIndex);
    }
   
}

function placeOrder(){

    var Table = document.getElementById("tbody_update");
    var grandTotal = document.getElementById("GrandTot");
    Table.innerHTML = "";
  
    grandTotal.innerHTML = "0.00";

    alert("Thank You for Purchasing");
  }


function resetPurchaseForm(){
    document.getElementById("frmPurchase").reset();
    document.getElementById("spCost").innerHTML = "0.00";
}




   //Local Storage


   const formId = "frmPurchase";
   const formDetector = `${formId}`; 
   const saveButton = document.querySelector("#addFavourite"); 
   const retrieveButton = document.querySelector("#retrieveFavourite");
   const alertBox = document.querySelector(".alert");
   let form = document.querySelector(`#${formId}`);
   let formElements = form.elements;
   
   
    const getFormData = () => {
     let data = { [formDetector]: {} };
     for (const element of formElements) {
       if (element.name.length > 0) {
         data[formDetector][element.name] = element.value;
       }
     }
     return data;
   };
   
   saveButton.onclick = event => {
     event.preventDefault();
     data = getFormData();
     localStorage.setItem(formDetector, JSON.stringify(data[formDetector]));
     alert("Your order has been saved as a Favorite.") ;
     
   };
   
   
   
    const formautoRefill = () => {
     if (localStorage.key(formDetector)) {
       const savedData = JSON.parse(localStorage.getItem(formDetector));
       for (const element of formElements) {
         if (element.name in savedData) {
           element.value = savedData[element.name];
         }
       }
       alert("Your order has been Retrived from Favourites.")
       
     }
   };
   
   
   
   retrieveButton.onclick = function(){
       formautoRefill(); 
       calculateCost();
   
   }
   
   
   
   
   //Calculate Loyalty points and save it in the local storage
   
   
   var grand_loyaltyPoints = 0;
   var loyaltyPoints = 0;
   var totalTicket = 0;
   
   
   function calcLoyaltyPoints(){
   
     totalTicket = totalTicket + num_Of_Tickets;
   
     if(totalTicket > 3){
   
         loyaltyPoints = 20 * totalTicket;
   
         grand_loyaltyPoints = grand_loyaltyPoints + loyaltyPoints;
   
         localStorage.setItem("loyalty",grand_loyaltyPoints);
   
     }
   
   }
   
   
   function showLoyaltyPoints(){
   
     grand_loyaltyPoints = JSON.parse(localStorage.getItem(`loyalty`));
   
     if(grand_loyaltyPoints>0){
   
         alert("Congratulations! You have earned "+  grand_loyaltyPoints + " loyalty points so far");
   
     }
   
     else{
   
         alert("Sorry! You don't have any loyalty points so far");
   
     }
   }
   