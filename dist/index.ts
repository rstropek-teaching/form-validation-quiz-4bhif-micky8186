$("#emailMandatory").hide();
$("#otherMediaChannel").hide();
let errorVar = 0b011;
// Remember: Don't repeat yourself. Save the result of the jQuery selection in a local
// variable. You can access this variable whenever you need access to the submit button.
(<HTMLButtonElement>$('input[type="submit"], input[type="button"], button')[0]).disabled = true;

$("#firstName").on("change", function(){
    // !(<HTMLInputElement>this).value would also be possible
    if((<HTMLInputElement>this).value === ""){
        $("#firstNameMandatory").show();
        // Consider using JavaScript's |= operator
        errorVar = errorVar | 0b001;
        // Recommended practice: Remove console.log statements before checking in code
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
        // "don't repeat yourself" again. The if and the else clauses of your change handler look
        // very similar. You could consider using a function instead.
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
