    // sto gia caricando la seconda pagina 
    function pulisci(){
      document.getElementById("myData").innerHTML = "";
        document.getElementById("picture").innerHTML = "";
        document.getElementById("pulsante").innerHTML = "";
        document.getElementById("zaino").innerHTML = "";
    }


//------------------2 Presentatiom----------
    function fetchPresentation(){    // fino a qua funziona tutto
      console.log("Carico Presentation -> 2");
        fetch("./json/dino/dino.json  ")
        .then(function(res){
        return res.json(); // pars the json in a regular js obj
        }).then(function(obj){

        pulisci();


        appendDatamyData2(obj);
        appendDataPicture2(obj);
        appendDataButton2(obj);
        console.log("Andato a buon fine")

        }).catch(function(err){
        console.error(err);
        })
    }
    
    function appendDatamyData2(obj){
        var mainContainer = document.getElementById("myData");
      for (var i = 0; i < obj.length; i++) {
        var introduzione = document.createElement("p");
        mainContainer.appendChild(introduzione);
        introduzione.innerHTML = obj[i].Presentation.text;
      }/*
      console.log(introduzione);
      console.log("----");*/
  
    }


    function appendDataPicture2(obj){
        var picContainer = document.getElementById("picture");
    
        for (var j = 0; j < obj.length; j++) {
          var urlvalue = JSON.stringify(obj[j].Presentation.img_url);
          var stripped = urlvalue.replace(/['"]+/g, "");
          var img_url = document.createElement("IMG");
          img_url.setAttribute("src", stripped);
          img_url.setAttribute("width", "640");
          img_url.setAttribute("height", "220");
          //img_url.setAttribute("alt", "The Pulpit Rock");
          //document.body.appendChild(img_url);
          picContainer.appendChild(img_url);
          img_url.innerHTML = obj[j].Presentation.img_url;
        }
      /*
        console.log(img_url);
        console.log(urlvalue);
        console.log(stripped);
        console.log(picContainer);
        console.log("----");*/
      }
      function appendDataButton2(obj){
    
        var pulsContainer = document.getElementById("pulsante");
    
        for (var i = 0; i < obj.length; i++) {
          var urlvalue = JSON.stringify(obj[i].Presentation.botFunc);
    
          var stripped = urlvalue.replace(/['"]+/g, "");
    
          var puls = document.createElement("button");
    
          puls.setAttribute("onclick", stripped);
    
          pulsContainer.appendChild(puls);
    
          puls.innerHTML = obj[i].Presentation.botName;
        }
    /*
        console.log(puls);
        console.log(urlvalue);
        console.log(stripped);
        console.log(pulsContainer);*/
    }

      //------------------------ 3 HideAndSeek-------------------------

      function fetchNascondigli(){    // fino a qua funziona tutto
        console.log("Carico Nascondigli -> 3");
          fetch("./json/dino/dino.json")
          .then(function(res){
          return res.json(); // pars the json in a regular js obj
          }).then(function(obj){

          pulisci();


          appendDatamyData3(obj);
          appendDataPicture3(obj);
          appendDataButton3(obj);
          console.log("Andato a buon fine")

          }).catch(function(err){
          console.error(err);
          })
    }
    
    function appendDatamyData3(obj){
        var mainContainer = document.getElementById("myData");
      for (var i = 0; i < obj.length; i++) {
        var introduzione = document.createElement("p");
        mainContainer.appendChild(introduzione);
        introduzione.innerHTML = obj[i].HideAndSeek.text;
      }
      /*
      console.log(introduzione);
      console.log("----");*/
  
    }


    function appendDataPicture3(obj){
        var picContainer = document.getElementById("picture");
    
        for (var j = 0; j < obj.length; j++) {
          var urlvalue = JSON.stringify(obj[j].HideAndSeek.img_url);
          var stripped = urlvalue.replace(/['"]+/g, "");
          var img_url = document.createElement("IMG");
          img_url.setAttribute("src", stripped);
          img_url.setAttribute("width", "640");
          img_url.setAttribute("height", "220");
          //img_url.setAttribute("alt", "The Pulpit Rock");
          //document.body.appendChild(img_url);
          picContainer.appendChild(img_url);
          img_url.innerHTML = obj[j].HideAndSeek.img_url;
        }
      /*
        console.log(img_url);
        console.log(urlvalue);
        console.log(stripped);
        console.log(picContainer);
        console.log("----");*/
      }




      function appendDataButton3(obj){
    
        var pulsContainer = document.getElementById("pulsante");
    
        for (var i = 0; i < obj.length; i++) {
          var urlvalue = JSON.stringify(obj[i].HideAndSeek.botFunc);
    
          var stripped =  urlvalue.replace(/['"]+/g, "");
          
          var puls = document.createElement("button");
          var puls2 = document.createElement("button");
          var puls3 = document.createElement("button");

    
          puls.setAttribute("onclick", stripped);
          puls2.setAttribute("onclick", stripped);
          puls3.setAttribute("onclick", stripped);  

    
          pulsContainer.appendChild(puls);
          pulsContainer.appendChild(puls2);
          pulsContainer.appendChild(puls3);

    
          puls.innerHTML = obj[i].HideAndSeek.botName;
          puls2.innerHTML = obj[i].HideAndSeek.botName2;
          puls3.innerHTML = obj[i].HideAndSeek.botName3;


        }
    /*
        console.log(puls);
        console.log(urlvalue);
        console.log(stripped);
        console.log(pulsContainer);*/
    }
    
    //----------------------------------- 4 FindMap--------------------------
    function fetchFindMap(){
      
      
      console.log("Carico trova mappa -> 4");
      
      fetch("./json/dino/dino.json")
      .then(function(res){
      return res.json(); // pars the json in a regular js obj
      }).then(function(obj){

      pulisci();


      appendDatamyData4(obj);
      appendDataPicture4(obj);
      appendDataButton4(obj);
      console.log("Andato a buon fine")

      }).catch(function(err){
      console.error(err);
      })

    }

    function appendDatamyData4(obj){
      var mainContainer = document.getElementById("myData");
    for (var i = 0; i < obj.length; i++) {
      var introduzione = document.createElement("p");
      mainContainer.appendChild(introduzione);
      introduzione.innerHTML = obj[i].FindMap.text;
    }/*
    console.log(introduzione);
    console.log("----");*/

    }


    function appendDataPicture4(obj){
        var picContainer = document.getElementById("picture");
    
        for (var j = 0; j < obj.length; j++) {
          var urlvalue = JSON.stringify(obj[j].FindMap.img_url);
          var stripped = urlvalue.replace(/['"]+/g, "");
          var img_url = document.createElement("IMG");
          img_url.setAttribute("src", stripped);
          img_url.setAttribute("width", "640");
          img_url.setAttribute("height", "220");
          //img_url.setAttribute("alt", "The Pulpit Rock");
          //document.body.appendChild(img_url);
          picContainer.appendChild(img_url);
          img_url.innerHTML = obj[j].FindMap.img_url;
        }
    /*
      console.log(img_url);
      console.log(urlvalue);
      console.log(stripped);
      console.log(picContainer);
      console.log("----");*/
    }
    function appendDataButton4(obj){
  
      var pulsContainer = document.getElementById("pulsante");
  
      for (var i = 0; i < obj.length; i++) {
        var urlvalue = JSON.stringify(obj[i].FindMap.botFunc);
  
        var stripped = urlvalue.replace(/['"]+/g, "");
  
        var puls = document.createElement("button");
  
        puls.setAttribute("onclick", stripped);
  
        pulsContainer.appendChild(puls);
  
        puls.innerHTML = obj[i].FindMap.botName;
      }
      /*
      console.log(puls);
      console.log(urlvalue);
      console.log(stripped);
      console.log(pulsContainer);*/
  }

  //-----------------------5 fetchPreareBackpack------------------//
  function fetchPreareBackpack(){

    console.log("Carico Zaino -> 5");
        fetch("./json/dino/dino.json")
        .then(function(res){
        return res.json(); // pars the json in a regular js obj
        }).then(function(obj){

        pulisci();


        appendDatamyData5(obj);
        appendDataPicture5(obj);
        appendDataButton5(obj);
        console.log("Andato a buon fine")

        }).catch(function(err){
        console.error(err);
        })

    }

    function appendDatamyData5(obj){
        var mainContainer = document.getElementById("myData");
      for (var i = 0; i < obj.length; i++) {
        var introduzione = document.createElement("p");
        mainContainer.appendChild(introduzione);
        introduzione.innerHTML = obj[i].PrepareBackpack.text;
      }/*
      console.log(introduzione);
      console.log("----");*/  

    }


  function appendDataPicture5(obj){
      var picContainer = document.getElementById("picture");
  
      for (var j = 0; j < obj.length; j++) {
        var urlvalue = JSON.stringify(obj[j].FindMap.img_url);
        var stripped = urlvalue.replace(/['"]+/g, "");
        var img_url = document.createElement("IMG");
        img_url.setAttribute("src", stripped);
        img_url.setAttribute("width", "640");
        img_url.setAttribute("height", "220");
        //img_url.setAttribute("alt", "The Pulpit Rock");
        //document.body.appendChild(img_url);
        picContainer.appendChild(img_url);
        img_url.innerHTML = obj[j].PrepareBackpack.img_url;
      }
    /*
      console.log(img_url);
      console.log(urlvalue);
      console.log(stripped);
      console.log(picContainer);
      console.log("----");*/
    }
    function appendDataButton5(obj){
  
      var pulsContainer = document.getElementById("pulsante");
  
      for (var i = 0; i < obj.length; i++) {
        var urlvalue = JSON.stringify(obj[i].PrepareBackpack.botFunc);
  
        var stripped = urlvalue.replace(/['"]+/g, "");
        var stripped2 = urlvalue.replace(/['"]+/g, "");
        var stripped3 = urlvalue.replace(/['"]+/g, "");
        var stripped4 = urlvalue.replace(/['"]+/g, "");
        var stripped5 = urlvalue.replace(/['"]+/g, "");
        var stripped6 = urlvalue.replace(/['"]+/g, "");

  
        var puls = document.createElement("button");
        var puls2 = document.createElement("button");
        var puls3 = document.createElement("button");
        var puls4 = document.createElement("button");
        var puls5 = document.createElement("button");
        var puls6 = document.createElement("button");

        puls.setAttribute("onclick", stripped);
        puls2.setAttribute("onclick", stripped2);
        puls3.setAttribute("onclick", stripped3);
        puls4.setAttribute("onclick", stripped4);
        puls5.setAttribute("onclick", stripped5);
        puls6.setAttribute("onclick", stripped6);
  
        
        pulsContainer.appendChild(puls);
        pulsContainer.appendChild(puls2);
        pulsContainer.appendChild(puls3);
        pulsContainer.appendChild(puls4);
        pulsContainer.appendChild(puls5);
        pulsContainer.appendChild(puls6);
  
        puls.innerHTML = obj[i].PrepareBackpack.botName;
        puls2.innerHTML = obj[i].PrepareBackpack.botName2;
        puls3.innerHTML = obj[i].PrepareBackpack.botName3;
        puls4.innerHTML = obj[i].PrepareBackpack.botName4;
        puls5.innerHTML = obj[i].PrepareBackpack.botName5;
        puls6.innerHTML = obj[i].PrepareBackpack.botAvanti;


      }
  /*
      console.log(puls);
      console.log(urlvalue);
      console.log(stripped);
      console.log(pulsContainer);*/
  }


  //------------------PrepareBackpack--------------//

  function addBottle (){
    console.log("Carico trova mappa -> 6");
    fetch("./json/dino/dino.json")
    .then(function(res){
    return res.json(); // pars the json in a regular js obj
    }).then(function(obj){

    pulisci();


    appendDatamyData6(obj);
    appendDataPicture6(obj);
    appendDataButton6(obj);
    console.log("Andato a buon fine")

    }).catch(function(err){
    console.error(err);
    })

  }

  function appendDatamyData6(obj){
    var mainContainer = document.getElementById("myData");
  for (var i = 0; i < obj.length; i++) {
    var introduzione = document.createElement("p");
    mainContainer.appendChild(introduzione);
    introduzione.innerHTML = obj[i].FriendIntro.text;
  }/*
  console.log(introduzione);
  console.log("----");*/

}


function appendDataPicture6(obj){
    var picContainer = document.getElementById("picture");

    for (var j = 0; j < obj.length; j++) {
      var urlvalue = JSON.stringify(obj[j].FriendIntro.img_url);
      var stripped = urlvalue.replace(/['"]+/g, "");
      var img_url = document.createElement("IMG");
      img_url.setAttribute("src", stripped);
      img_url.setAttribute("width", "640");
      img_url.setAttribute("height", "220");
      //img_url.setAttribute("alt", "The Pulpit Rock");
      //document.body.appendChild(img_url);
      picContainer.appendChild(img_url);
      img_url.innerHTML = obj[j].FriendIntro.img_url;
    }
  /*
    console.log(img_url);
    console.log(urlvalue);
    console.log(stripped);
    console.log(picContainer);
    console.log("----");*/
  }
  function appendDataButton6(obj){

    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < obj.length; i++) {
      var urlvalue = JSON.stringify(obj[i].FriendIntro.botFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);

      pulsContainer.appendChild(puls);

      puls.innerHTML = obj[i].FriendIntro.botName;
    }
/*
    console.log(puls);
    console.log(urlvalue);
    console.log(stripped);
    console.log(pulsContainer);*/
}

function addCorda(){
  console.log("Carico trova mappa -> 6");
  fetch("./json/dino/dino.json")
  .then(function(res){
  return res.json(); // pars the json in a regular js obj
  }).then(function(obj){

  pulisci();


  appendDatamyData7(obj);
  appendDataPicture7(obj);
  appendDataButton7(obj);
  console.log("Andato a buon fine")

  }).catch(function(err){
  console.error(err);
  })

}

function appendDatamyData7(obj){
  var mainContainer = document.getElementById("myData");
for (var i = 0; i < obj.length; i++) {
  var introduzione = document.createElement("p");
  mainContainer.appendChild(introduzione);
  introduzione.innerHTML = obj[i].FriendIntro.text;
}/*
console.log(introduzione);
console.log("----");*/

}


function appendDataPicture7(obj){
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < obj.length; j++) {
    var urlvalue = JSON.stringify(obj[j].FriendIntro.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "640");
    img_url.setAttribute("height", "220");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = obj[j].FriendIntro.img_url;
  }
/*
  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");*/
}
function appendDataButton7(obj){

  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < obj.length; i++) {
    var urlvalue = JSON.stringify(obj[i].FriendIntro.botFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = obj[i].FriendIntro.botName;
  }
/*
  console.log(puls);
  console.log(urlvalue);
  console.log(stripped);
  console.log(pulsContainer);*/
}
function addForbici (){
  console.log("Carico trova mappa -> 6");
  fetch("./json/dino/dino.json")
  .then(function(res){
  return res.json(); // pars the json in a regular js obj
  }).then(function(obj){

  pulisci();


  appendDatamyData8(obj);
  appendDataPicture8(obj);
  appendDataButton8(obj);
  console.log("Andato a buon fine")

  }).catch(function(err){
  console.error(err);
  })

}

function appendDatamyData8(obj){
  var mainContainer = document.getElementById("myData");
for (var i = 0; i < obj.length; i++) {
  var introduzione = document.createElement("p");
  mainContainer.appendChild(introduzione);
  introduzione.innerHTML = obj[i].FriendIntro.text;
}/*
console.log(introduzione);
console.log("----");*/

}


function appendDataPicture8(obj){
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < obj.length; j++) {
    var urlvalue = JSON.stringify(obj[j].FriendIntro.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "640");
    img_url.setAttribute("height", "220");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = obj[j].FriendIntro.img_url;
  }
/*
  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");*/
}
function appendDataButton8(obj){

  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < obj.length; i++) {
    var urlvalue = JSON.stringify(obj[i].FriendIntro.botFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = obj[i].FriendIntro.botName;
  }
/*
  console.log(puls);
  console.log(urlvalue);
  console.log(stripped);
  console.log(pulsContainer);*/
}

function addCanocchiale (){
  console.log("Carico trova mappa -> 6");
  fetch("./json/dino/dino.json")
  .then(function(res){
  return res.json(); // pars the json in a regular js obj
  }).then(function(obj){

  pulisci();


  appendDatamyData9(obj);
  appendDataPicture9(obj);
  appendDataButton9(obj);
  console.log("Andato a buon fine")

  }).catch(function(err){
  console.error(err);
  })

}

function appendDatamyData9(obj){
  var mainContainer = document.getElementById("myData");
for (var i = 0; i < obj.length; i++) {
  var introduzione = document.createElement("p");
  mainContainer.appendChild(introduzione);
  introduzione.innerHTML = obj[i].FriendIntro.text;
}/*
console.log(introduzione);
console.log("----");*/

}


function appendDataPicture9(obj){
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < obj.length; j++) {
    var urlvalue = JSON.stringify(obj[j].FriendIntro.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "640");
    img_url.setAttribute("height", "220");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = obj[j].FriendIntro.img_url;
  }
/*
  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");*/
}
function appendDataButton9(obj){

  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < obj.length; i++) {
    var urlvalue = JSON.stringify(obj[i].FriendIntro.botFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = obj[i].FriendIntro.botName;
  }
/*
  console.log(puls);
  console.log(urlvalue);
  console.log(stripped);
  console.log(pulsContainer);*/
}

function addKitMedico (){
  console.log("Carico trova mappa -> 6");
  fetch("./json/dino/dino.json")
  .then(function(res){
  return res.json(); // pars the json in a regular js obj
  }).then(function(obj){

  pulisci();


  appendDatamyData10(obj);
  appendDataPicture10(obj);
  appendDataButton10(obj);
  console.log("Andato a buon fine")

  }).catch(function(err){
  console.error(err);
  })

}

function appendDatamyData10(obj){
  var mainContainer = document.getElementById("myData");
for (var i = 0; i < obj.length; i++) {
  var introduzione = document.createElement("p");
  mainContainer.appendChild(introduzione);
  introduzione.innerHTML = obj[i].FriendIntro.text;
}/*
console.log(introduzione);
console.log("----");*/

}


function appendDataPicture10(obj){
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < obj.length; j++) {
    var urlvalue = JSON.stringify(obj[j].FriendIntro.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "640");
    img_url.setAttribute("height", "220");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = obj[j].FriendIntro.img_url;
  }
/*
  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");*/
}
function appendDataButton10(obj){

  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < obj.length; i++) {
    var urlvalue = JSON.stringify(obj[i].FriendIntro.botFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = obj[i].FriendIntro.botName;
  }
/*
  console.log(puls);
  console.log(urlvalue);
  console.log(stripped);
  console.log(pulsContainer);*/
}
    function fetchFriendIntro (){
      console.log("Carico trova mappa -> 6");
      fetch("./json/dino/dino.json")
      .then(function(res){
      return res.json(); // pars the json in a regular js obj
      }).then(function(obj){

      pulisci();


      appendDatamyData11(obj);
      appendDataPicture11(obj);
      appendDataButton11(obj);
      console.log("Andato a buon fine")

      }).catch(function(err){
      console.error(err);
      })

    }

    function appendDatamyData11(obj){
      var mainContainer = document.getElementById("myData");
    for (var i = 0; i < obj.length; i++) {
      var introduzione = document.createElement("p");
      mainContainer.appendChild(introduzione);
      introduzione.innerHTML = obj[i].FriendIntro.text;
    }/*
    console.log(introduzione);
    console.log("----");*/

  }


  function appendDataPicture11(obj){
      var picContainer = document.getElementById("picture");
  
      for (var j = 0; j < obj.length; j++) {
        var urlvalue = JSON.stringify(obj[j].FriendIntro.img_url);
        var stripped = urlvalue.replace(/['"]+/g, "");
        var img_url = document.createElement("IMG");
        img_url.setAttribute("src", stripped);
        img_url.setAttribute("width", "640");
        img_url.setAttribute("height", "220");
        //img_url.setAttribute("alt", "The Pulpit Rock");
        //document.body.appendChild(img_url);
        picContainer.appendChild(img_url);
        img_url.innerHTML = obj[j].FriendIntro.img_url;
      }
    /*
      console.log(img_url);
      console.log(urlvalue);
      console.log(stripped);
      console.log(picContainer);
      console.log("----");*/
    }
    function appendDataButton11(obj){
  
      var pulsContainer = document.getElementById("pulsante");
  
      for (var i = 0; i < obj.length; i++) {
        var urlvalue = JSON.stringify(obj[i].FriendIntro.botFunc);
  
        var stripped = urlvalue.replace(/['"]+/g, "");
  
        var puls = document.createElement("button");
  
        puls.setAttribute("onclick", stripped);
  
        pulsContainer.appendChild(puls);
  
        puls.innerHTML = obj[i].FriendIntro.botName;
      }
  /*
      console.log(puls);
      console.log(urlvalue);
      console.log(stripped);
      console.log(pulsContainer);*/
  }
//----------------------------FriendIntro---------------------//




  