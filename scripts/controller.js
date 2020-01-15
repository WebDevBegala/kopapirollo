var results = [];

const fs = require('fs') 


function start() {
    $("#hand1").html("");
    $("#val1").text("");
   let name1 = $("#name1").val()
   let name2 = $("#name2").val()
    let rndHand1 = (Math.floor(Math.random() * 4) + 1)
    let rndHand2 = (Math.floor(Math.random() * 4) + 1);
    console.log(rndHand1,rndHand2)
    setuser(1, rndHand1)
    setuser(2, rndHand2)
    addRow(pictures[rndHand1].name,pictures[rndHand2].name,compare(pictures[rndHand1].name,pictures[rndHand2].name))
    let string = name1+" :"+pictures[rndHand1].name+"     "+name2+" :"+pictures[rndHand2].name+" => "+compare(pictures[rndHand1].name)
    results.push(string)
}

function setuser(index, rnd) {
    $("#hand" + index).html("");
    $("#val" + index).text("");
    $("#hand" + index).append(pictures[rnd].img);
    $("#val" + index).text(pictures[rnd].name);
   
}

function compare(type1, type2) {
    result = null;
    switch (type1) {
        case "Kő":
            if (type2 == "Kő") {
                result = "döntetlen";
            } else if (type2 == "Gyík" || type2 == "Olló") {
                result = type1;
            } else {
                result = type2;
            }
            break;
        case "Papír":
            if (type2 == "Papír") {
                result = "döntetlen";
            } else if (type2 == "Kő" || type2 == "Spock") {
                result = type1;
            } else {
                result = type2;
            }
            break;
        case "Olló":
            if (type2 == "Olló") {
                result = "döntetlen";
            } else if (type2 == "Gyík" || type2 == "Papír") {
                result = type1;
            } else {
                result = type2;
            }
            break;
        case "Gyík":
            if (type2 == "Gyík") {
                result = "döntetlen";
            } else if (type2 == "Papír" || type2 == "Spock") {
                result = type1;
            } else {
                result = type2;
            }
            break;
        case "Spock":
            if (type2 == "Spock") {
                result = "döntetlen";
            } else if (type2 == "Kő" || type2 == "Olló") {
                result = type1;
            } else {
                result = type2;
            }

    }
    console.log(result)
    return result;
}


function addRow(userName1, userName2, val) {
    $(".table-frame").append(`
    <div class="data-row">
        <p>`+userName1+`</p>
        <p>`+userName2+`</p>
        <p>`+val+`</p>
    </div>
    `);
}

function writeFile(){
    let string = "";
    for (let i = 0; i < results.length; i++) {
       string += results[i]+"\n"
    }
    fs.writeFile('../game.txt', string, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
}