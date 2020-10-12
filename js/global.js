//const { json } = require("express");

  function logz() {
      console.log("faccio qualcosa di globale");
    }
  function agePicker() {
    console.log("ciao");
    var sel = document.getElementById("eta");
    var userAge = sel.options[sel.selectedIndex].value;
    console.log(userAge);
    if (userAge === "1") {
      console.log("7-10");
      $("#giocoElementari").removeClass("hidden");
      $("#etaContainer").removeClass("hidden").addClass("hidden");

    } else if (userAge === "2") {
      console.log("11-14");

    } else if (strUser === "3") {
      console.log("15-18");

    }
  }

  function playElementary(){
    console.log("elementari");
    $("#game").removeClass("hidden");
    $("#giocoElementari").removeClass("hidden").addClass("hidden");

    fetchElementary();

  console.log("inizio gioco delle elementari");

  }

  function fetchElementary(){
  fetch("./json/dino/dino.json  ")
  .then(function(res){
    return res.json(); // pars the json in a regular js obj
  }).then(function(obj){
    console.log(obj);
    /*
    document.getElementById("myData").innerHTML = "";
    document.getElementById("picture").innerHTML = "";
    document.getElementById("pulsante").innerHTML = "";
    document.getElementById("zaino").innerHTML = "";

  */

  }).catch(function(err){
    console.error(err);
  })

  }

/*
  function appendDatamyData(){

  }
*/


