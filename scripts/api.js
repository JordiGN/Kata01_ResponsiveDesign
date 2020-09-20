var sptxt ="0";
let divInput;
var inptVar;
var idinput=0;
function addElemento(text){
    let me = this;
    divInput = document.getElementById("div-input");
    inptVar = document.getElementById("input-short");
    if(text==""){
        inptVar.classList.add('inputWarning');
        if (sptxt=="0"){
            sptxt = document.createElement("SPAN");
            sptxt.innerHTML = "Please add a link";
            sptxt.classList.add('span-short');
            divInput.appendChild(sptxt);
        }
    }else{
        if (inptVar.classList.contains('inputWarning')){
            inptVar.classList.remove('inputWarning');
            divInput.removeChild(sptxt);
            sptxt ="0";
        }
        
        console.log(text);
        let url_post = 'https://rel.ink/api/links/'
        axios.post(url_post, {
            "url": text,
        })
        .then(function (response) {
            let shortdiv = document.getElementById('linksContainer');
            console.log(shortdiv);
            let divchild = document.createElement("div")
            let hashid = response.data.hashid;
            let contSpan = document.getElementById("input-short")
            console.log(hashid);
            me.idinput++;
            shortdiv.innerHTML+=`<div class='cards-shortened'>
                <div class='div-center'>
                <span>${response.data.url}</span>
                </div>
                <div class='rayita-shorten'></div>
                <div class='grid-cont'>
                <div class='div-center'>
                    <span id="str_${idinput}" class='cyan-color'>https://rel.ink/${hashid}</span>
                </div>
                <div class='div-center'>
                    <button id="btn_${idinput}" onclick="copiarAlPortapapeles('str_${idinput}','btn_${idinput}')" class='btn-short-it btn-copy'>Copy</button>
                </div>
                </div>
            </div>`;
            
            addItemToStorage(response.data.url, response.data.hashid);
            contSpan.value = "";

            // shortdiv.appendChild(divchild);
            /*var capa = document.getElementById("capa");
            var h1 = document.createElement("h1");
            var button = document.createElement("button");
            h1.classList.add('blanco');
            h1.innerHTML = response.data.hashid;
            button.innerHTML = "copied";
            capa.appendChild(h1);
            capa.appendChild(button);*/
        })
        .catch(function (error) {
            console.log(error);
        });
        } 
}


function addItemToStorage(url, hashid){
    sessionStorage.setItem(url, hashid); 
    console.log(sessionStorage)
}


for(var i=0;i<sessionStorage.length;i++){

        var url=sessionStorage.key(i);
        var hashid=sessionStorage.getItem(url);
        console.log(url +", "+hashid)
        idinput++;
        let shortdiv = document.getElementById('linksContainer');
        shortdiv.innerHTML+=`<div class='cards-shortened'>
                <div class='div-center'>
                <span>${url}</span>
                </div>
                <div class='rayita-shorten'></div>
                <div class='grid-cont'>
                <div class='div-center'>
                    <span id="str_${idinput}" class='cyan-color'>https://rel.ink/${hashid}</span>
                </div>
                <div class='div-center'>
                    <button  id="btn_${idinput}" onclick="copiarAlPortapapeles('str_${idinput}','btn_${idinput}')" class='btn-short-it btn-copy'>Copy</button>
                </div>
                </div>
            </div>`;
}

function copiarAlPortapapeles(id_elemento, idbtn) {
    console.log(id_elemento)
    console.log(idbtn)
    var aux = document.createElement("input");
    aux.value=document.getElementById(id_elemento).innerHTML;

    //aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    var btnCColor = document.getElementById(idbtn);
    btnCColor.style.backgroundColor = "hsl(257, 27%, 26%)";
    btnCColor.innerHTML = "Copied";


  }