$("#emailMandatory").hide();
$("#otherMediaChannel").hide();
let errorVar = 0b011;
(<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = true;

$("#firstName").on("change", function(){
    if((<HTMLInputElement>this).value === ""){
        $("#firstNameMandatory").show();
        errorVar = errorVar | 0b001;
        console.log(errorVar);
        (<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = true;
    }else{
        $("#firstNameMandatory").hide();
        errorVar = errorVar & 0b110;
        checkSubmit();
    }
});
$("#lastName").on("change", function(){
    if((<HTMLInputElement>this).value === ""){
        $("#lastNameMandatory").show();
        errorVar = errorVar | 0b010;
        console.log(errorVar);
        (<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = true;
    }else{
        $("#lastNameMandatory").hide();
        errorVar = errorVar & 0b101;
        checkSubmit();
    }
});
$("#newsletter").on("change", function(){
    if((<HTMLInputElement>this).checked && $("#email").val() === ""){
        $("#emailMandatory").show();
        errorVar = errorVar | 0b100;
        (<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = true;
    }else{
        $("#emailMandatory").hide();
        errorVar = errorVar & 0b011;
        checkSubmit();
    }
});
$("#email").on("change", function(){
    if((<HTMLInputElement>this).value === "" && (<HTMLInputElement>$("#newsletter")[0]).checked){
        $("#emailMandatory").show();
        errorVar = errorVar | 0b100;
        (<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = true;
    }else{
        $("#emailMandatory").hide();
        errorVar = errorVar & 0b011;
        checkSubmit();
    }
});
$("#mediaChannelSelect").on("change", function(){
    if((<HTMLInputElement>this).value === "Other"){
        $("#otherMediaChannel").show();
    }else{
        $("#otherMediaChannel").hide();
    }
});
function checkSubmit(){
    if(errorVar === 0)(<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = false;
}