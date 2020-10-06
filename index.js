var ivar = 24;

var fontsize;
fontsize = $("#second").css('font-size');
console.log(fontsize);
$("#inc").click(() =>{
    ivar++;
    $("#second").css('font-size',ivar);
    console.log(ivar);
});
$("#dec").click(() =>{
    ivar--;
    $("#second").css('font-size',ivar);
    console.log(ivar);
});
