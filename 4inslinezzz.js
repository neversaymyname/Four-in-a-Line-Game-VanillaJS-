
var red = prompt("red's name?")+":"
var blue = prompt("blue's name?")+":"
$("h3").html("<h3> <span id='player'></span> <span id='final'>it is your turn, please pick a column to drop your</span><span id='chip'></span> chip.</h3>");
var players= {playerredname:red,playerNameblue:blue,playerredchip:"red",playerbluechip:"blue"};
$("#player").text(players["playerNameblue"]);
$("#chip").text(players["playerbluechip"]);

var flag = 0;
function theTogggler(group) {
  if (flag==0) {
  group.classList.add('bg-info');
  group.classList.remove('bg-danger');
  $("#player").text(players["playerredname"]);
  $("#chip").text(players["playerredchip"]);
  flag = 1;
  }
  else {
    group.classList.remove('bg-info');
    group.classList.add('bg-danger');
    $("#player").text(players["playerNameblue"]);
    $("#chip").text(players["playerbluechip"]);
    flag = 0;
  }
}



function oneforAll(l) {
  for (var i = 0; i < 6; i++) {
    var sevencolumn = [];
    $(".col-lg-12").eq(i).children().eq(l).on("click",
    function() {
      for (var j = 0; j < 6; j++) {
        if($(".col-lg-12").eq(j).children().eq(l).css("background-color")=="rgb(221, 230, 142)"){
        sevencolumn.push($(".col-lg-12").eq(j).children().eq(l))
      }
      }
      theTogggler(sevencolumn[sevencolumn.length-1][0]);
      realCheck();
    })
  }
}

// the real deal**

  theRealDeal();




function theRealDeal() {
  for (var l = 0; l < 7; l++) {
    oneforAll(l);
  }
}

// the real deal**


function realCheck() {
  for (var l = 0; l < 7; l++) {
    check(arr1=[],arr2=[],arr3=[],l);
  }
  for (var l = 0; l < 6; l++) {
    checkRow(arr1=[],arr2=[],arr3=[],arr4=[],l);
  }
  for (var l = 5; l >=3 ; l--) {
    checkDiagnol(arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],arr9=[],arr10=[],l);
  }
}



function check(arr1=[],arr2=[],arr3=[],l){
   for (var i = 0; i < 4; i++) {
    arr1.push($(".col-lg-12").eq(i).children().eq(l).css("background-color"));
    arr2.push($(".col-lg-12").eq(i+1).children().eq(l).css("background-color"));
    arr3.push($(".col-lg-12").eq(i+2).children().eq(l).css("background-color"));
    }

   if ((arr1.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr1.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
   ||(arr2.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr2.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
   ||(arr3.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr3.every( (val, p, arr) => val === "rgb(220, 53, 69)"))) {
    console.log("uncheckmate");
    alert("you won");
    $("#final").text("congrats.. the looser had ");
   }
   else {
     return true;
   }
}



function checkRow(arr1=[],arr2=[],arr3=[],arr4=[],l){
   for (var i = 0; i < 4; i++) {
    arr1.push($(".col-lg-12").eq(l).children().eq(i).css("background-color"));
    arr2.push($(".col-lg-12").eq(l).children().eq(i+1).css("background-color"));
    arr3.push($(".col-lg-12").eq(l).children().eq(i+2).css("background-color"));
    arr4.push($(".col-lg-12").eq(l).children().eq(i+3).css("background-color"));
    }

   if ((arr1.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr1.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
   ||(arr2.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr2.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
   ||(arr3.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr3.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
   ||(arr4.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr4.every( (val, p, arr) => val === "rgb(220, 53, 69)"))) {
    alert("you won");
    $("#final").text("congrats.. the looser had ");
   }
   else {
     return true;
   }
}


function checkDiagnol(arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],arr9=[],arr10=[],l){
  for (var j=l; j >=l-3; j--) {
   var i = Math.abs(j-5);
   var io = Math.abs(j+1);
     arr1.push($(".col-lg-12").eq(j).children().eq(i).css("background-color"));
     arr2.push($(".col-lg-12").eq(j-1).children().eq(i).css("background-color"));
     arr3.push($(".col-lg-12").eq(j-2).children().eq(i).css("background-color"));
     arr4.push($(".col-lg-12").eq(j).children().eq(i+1).css("background-color"));
     arr5.push($(".col-lg-12").eq(j).children().eq(i+2).css("background-color"));
     arr6.push($(".col-lg-12").eq(j).children().eq(i+3).css("background-color"));
     arr7.push($(".col-lg-12").eq(j).children().eq(io).css("background-color"));
     arr8.push($(".col-lg-12").eq(j).children().eq(io-1).css("background-color"));
     arr9.push($(".col-lg-12").eq(j).children().eq(io-2).css("background-color"));
     arr10.push($(".col-lg-12").eq(j).children().eq(io-3).css("background-color"));
}


if ((arr1.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr1.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
 ||(arr2.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr2.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
 ||(arr3.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr3.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr4.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr4.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr5.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr5.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr6.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr6.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr7.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr7.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr8.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr8.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr9.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr9.every( (val, p, arr) => val === "rgb(220, 53, 69)"))
||(arr10.every( (val, p, arr) => val === "rgb(23, 162, 184)")||arr10.every( (val, p, arr) => val === "rgb(220, 53, 69)")))
{
  alert("you won");
  $("#final").text("congrats.. the looser had ");
 }

 else {
   return true;
 }

}
