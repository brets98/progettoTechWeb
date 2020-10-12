    function fetchPresentation(){    // fino a qua funziona tutto
        fetch("./json/dino/dino.json  ")
        .then(function(res){
        return res.json(); // pars the json in a regular js obj
        }).then(function(obj){
        console.log(obj);

        document.getElementById("myData").innerHTML = "";
        document.getElementById("picture").innerHTML = "";
        document.getElementById("pulsante").innerHTML = "";
        document.getElementById("zaino").innerHTML = "";


        appendDatamyData2(obj);
        appendDataPicture2(obj);
        appendDataButton2(obj);

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
      }
      console.log(introduzione);
      console.log("----");
  
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
      
        console.log(img_url);
        console.log(urlvalue);
        console.log(stripped);
        console.log(picContainer);
        console.log("----");
      }
      function appendDataButton(obj){
    
        var pulsContainer = document.getElementById("pulsante");
    
        for (var i = 0; i < obj.length; i++) {
          var urlvalue = JSON.stringify(obj[i].Presentation.botFunc);
    
          var stripped = urlvalue.replace(/['"]+/g, "");
    
          var puls = document.createElement("button");
    
          puls.setAttribute("onclick", stripped);
    
          pulsContainer.appendChild(puls);
    
          puls.innerHTML = obj[i].Presentation.botName;
        }
    
        console.log(puls);
        console.log(urlvalue);
        console.log(stripped);
        console.log(pulsContainer);
    }

    function fetchNascondigli(){
        console.log("caricamento della pagina dei nascondigli");
    }
