// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process
window.onload=function(e){
    init();
}
function init() {
  $( "#inputMonnaie" ).change(function(){
    var monnaieA = $("input[name='monnaieA']:checked").val();
    var monnaieD = $("input[name='monnaieD']:checked").val();

    if (monnaieD && monnaieD === monnaieA){
      $("#result").html($("#inputMonnaie").val())

    } else if(monnaieD === "CHF" && monnaieD === "CHF"){

    } else {
      $("#result").html("error")
    }
  })
}
