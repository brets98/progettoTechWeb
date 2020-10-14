//const { json } = require("express");

  function logz() {
      console.log("faccio qualcosa di globale");
    }



  function agePicker() {
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

    document.getElementById("myData").innerHTML = "";
    document.getElementById("picture").innerHTML = "";
    document.getElementById("pulsante").innerHTML = "";
    document.getElementById("zaino").innerHTML = "";

    //Servono per modificare i dive di #game con i nuovi oggetti che sono presenti in din.json
    appendDatamyData(obj);
    appendDataPicture(obj);
    appendDataButton(obj);

  }).catch(function(err){
    console.error(err);
  })

  }


  function appendDatamyData(obj){
      var mainContainer = document.getElementById("myData");
    for (var i = 0; i < obj.length; i++) {
      var introduzione = document.createElement("p");
      mainContainer.appendChild(introduzione);
      introduzione.innerHTML = obj[i].Intro.text;
    }
    console.log(introduzione);
    console.log("----");

  }
  
  function appendDataPicture(obj){
    var picContainer = document.getElementById("picture");

    for (var j = 0; j < obj.length; j++) {
      var urlvalue = JSON.stringify(obj[j].Intro.img_url);
      var stripped = urlvalue.replace(/['"]+/g, "");
      var img_url = document.createElement("IMG");
      img_url.setAttribute("src", stripped);
      img_url.setAttribute("width", "300");
      img_url.setAttribute("height", "300");
      //img_url.setAttribute("alt", "The Pulpit Rock");
      //document.body.appendChild(img_url);
      picContainer.appendChild(img_url);
      img_url.innerHTML = obj[j].Intro.img_url;
    }
  
    console.log(img_url);
    console.log(urlvalue);
    console.log(stripped);
    console.log(picContainer);
    console.log("----");
  }

  function appendDataButton(obj){ 
    
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < obj.length; i++) {
      var urlvalue = JSON.stringify(obj[i].Intro.botFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);

      pulsContainer.appendChild(puls);

      puls.innerHTML = obj[i].Intro.botName;
    }

    console.log(puls);
    console.log(urlvalue);
    console.log(stripped);
    console.log(pulsContainer);
  }

  



