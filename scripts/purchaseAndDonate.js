                             //Validations for Donate

function inputValidation(){

    var name = document.getElementById("txtname").value;
    var address = document.getElementById("txtadd").value;
    var cdname = document.getElementById("cdnametxt").value;
    var cdnum = document.getElementById("cdnumtxt").value;
    var cvcnum = document.getElementById("cvcnumtxt").value;
    var exp = document.getElementById("exptxt").value;
    
    
    var name_pattern = /^[A-Za-z\s\.]{10,}$/;
    var add_pattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
    var cdname_pattern = /^[A-Za-z\s\.]{10,}$/;


    if(!name.match(name_pattern)){
        if(name.length<10){
            alert("Please enter your full name");
        }
        else{
            alert("Please enter a valid name");
        }
        document.getElementById("txtname").focus();
        return false;
    }

    if(!address.match(add_pattern)){
        alert("Please enter a valid address");
        document.getElementById("txtadd").focus();
        return false;
    }
    

    if(cdnum=="" || cdnum.length<19){
        alert("Invalid Card number. Please Check the Card number");
        document.getElementById("cdnumtxt").focus();
        return false;
    }

    if(!cdname.match(cdname_pattern)){
        if(cdname.length<10){
            alert("Please enter the Name Properly");
        }
        else{
            alert("Please enter the Name as printed on the Card");
        }
        document.getElementById("cdnametxt").focus();
        return false;
    }

    if(exp==""){
        alert("Please Enter the Card's expire Month & Year");
        document.getElementById("exptxt").focus();
        return false;
    }


    if(cvcnum=="" || cvcnum.length<3){
        alert("Invalid CVC. Please enter a 3 Digit number");
        document.getElementById("cvcnumtxt").focus();
        return false;
    }
    resetDonationBttn();
}

function resetDonationBttn(){
    document.getElementById("donate").reset();
    alert("Thank you for your Donation");
}