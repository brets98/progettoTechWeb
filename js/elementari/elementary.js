    // sto gia caricando la seconda pagina 
    
    //variabili globali
   
    var iterazione = 0; // viene utilizzata nella parte di aggiunta dei vari oggetti nello zaino e sta ad indicare quanti oggetti si sono inseriti fino a quel momento 
    var backpack = [{}]
    
    
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
      }

  
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
        var urlvalue2 = JSON.stringify(obj[i].PrepareBackpack.botFunc2);
        var urlvalue3 = JSON.stringify(obj[i].PrepareBackpack.botFunc3);
        var urlvalue4 = JSON.stringify(obj[i].PrepareBackpack.botFunc4);
        var urlvalue5 = JSON.stringify(obj[i].PrepareBackpack.botFunc5);
        
        var stripped = urlvalue.replace(/['"]+/g, "");
        var stripped2 = urlvalue2.replace(/['"]+/g, "");
        var stripped3 = urlvalue3.replace(/['"]+/g, "");
        var stripped4 = urlvalue4.replace(/['"]+/g, "");
        var stripped5 = urlvalue5.replace(/['"]+/g, "");

  
        var puls = document.createElement("button");
        var puls2 = document.createElement("button");
        var puls3 = document.createElement("button");
        var puls4 = document.createElement("button");
        var puls5 = document.createElement("button");

        puls.setAttribute("onclick", stripped);
        puls2.setAttribute("onclick", stripped2);
        puls3.setAttribute("onclick", stripped3);
        puls4.setAttribute("onclick", stripped4);
        puls5.setAttribute("onclick", stripped5);
  
        
        pulsContainer.appendChild(puls);
        pulsContainer.appendChild(puls2);
        pulsContainer.appendChild(puls3);
        pulsContainer.appendChild(puls4);
        pulsContainer.appendChild(puls5);
  
        puls.innerHTML = obj[i].PrepareBackpack.botName;
        puls2.innerHTML = obj[i].PrepareBackpack.botName2;
        puls3.innerHTML = obj[i].PrepareBackpack.botName3;
        puls4.innerHTML = obj[i].PrepareBackpack.botName4;
        puls5.innerHTML = obj[i].PrepareBackpack.botName5;


      }
  /*
      console.log(puls);
      console.log(urlvalue);
      console.log(stripped);
      console.log(pulsContainer);*/
  }


  //------------------PrepareBackpack--------------//

  function addObjToBackpack(n){
    switch(iterazione){
      case 0:   
      switch(n){
        case 1:
          console.log("inizio ad aggiungere la bottiglia di acqua");
          backpack.push({obj1:"Borraccia"});
          iterazione++;
          break;
        case 2:
          console.log("inzio ad aggiungere la corda");
          backpack.push({obj1:"Corda"});
          iterazione++;
          break;
        case 3:
          console.log("inizo ad aggiungere le forbici");
          backpack.push({obj1:"Forbici"});
          iterazione++;
          break;
        case 4:
          console.log("inzio ad aggiungere il cannocchiale");
          backpack.push({obj1:"Cannocchiale"});
          iterazione++;
          break;
        case 5:
          console.log("inizo ad aggiungere il kit medico");
          backpack.push({obj1:"Kit medico"});
          iterazione++;
          break;
      }
        break;
      case 1:
        switch(n){
          case 1:
            console.log("inizio ad aggiungere la bottiglia di acqua");
            backpack.push({obj2:"Borraccia"});
            iterazione++;
            break;
          case 2:
            console.log("inzio ad aggiungere la corda");
            backpack.push({obj2:"Corda"});
            iterazione++;
            break;
          case 3:
            console.log("inizo ad aggiungere le forbici");
            backpack.push({obj2:"Forbici"});
            iterazione++;
            break;
          case 4:
            console.log("inzio ad aggiungere il cannocchiale");
            backpack.push({obj2:"Cannocchiale"});
            iterazione++;
            break;
          case 5:
            console.log("inizo ad aggiungere il kit medico");
            backpack.push({obj2:"Kit medico"});
            iterazione++;
            break;
        }
        break;
      case 2:
        switch(n){
          case 1:
            console.log("inizio ad aggiungere la bottiglia di acqua");
            backpack.push({obj3:"Borraccia"});
            iterazione++;
            break;
          case 2:
            console.log("inzio ad aggiungere la corda");
            backpack.push({obj3:"Corda"});
            iterazione++;
            break;
          case 3:
            console.log("inizo ad aggiungere le forbici");
            backpack.push({obj3:"Forbici"});
            iterazione++;
            break;
          case 4:
            console.log("inzio ad aggiungere il cannocchiale");
            backpack.push({obj3:"Cannocchiale"});
            iterazione++;
            break;
          case 5:
            console.log("inizo ad aggiungere il kit medico");
            backpack.push({obj3:"Kit medico"});
            iterazione++;
            break;
        }
        break;
    }
    console.log(backpack); 

  }
//----------------------------FriendIntro---------------------//
  function fetchFriendIntro(){
    console.log("caricamento dell'introdzione dell'amico");
    
  }




  