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
          var stripped2 = urlvalue.replace(/['"]+/g, "");
          var stripped3 = urlvalue.replace(/['"]+/g, "");
          
          var puls = document.createElement("button");
          var puls2 = document.createElement("button");
          var puls3 = document.createElement("button");

    
          puls.setAttribute("onclick", stripped);
          puls2.setAttribute("onclick", stripped2);
          puls3.setAttribute("onclick", stripped3);

    
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

//-----------------------------------4 FindMap--------------------------
    function fetchFindMap(){
      console.log("Carico trova mappa -> 4");
    }
