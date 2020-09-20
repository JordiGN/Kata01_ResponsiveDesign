let isMenuOpen = false;
function showMenu(){
    let menumorado= document.getElementById('menumorado');
    let sButton = document.getElementById('signButton');
    if(!isMenuOpen){
        menumorado.style.display = "block";
        menumorado.style.padding= "15px";
        sButton.style.display= "inline-block";
    }else{
        menumorado.style.display = "none";
        menumorado.style.padding= "0px";
        sButton.style.display= "none";
    }
    isMenuOpen=!isMenuOpen;
}


function btncopy(){

    //this.style.backgroundColor = "white";
}



let shordiv;
function filllinks(){
    // shortdiv=document.getElementById(shortenedlinksdiv);
    // shordiv.innerHTML+="<div class='cards-shortened'>"+
    //     "<div class='div-center'>"
    //       "<span>"+inputvar+"</span>"+
    //     "</div>"+
    //     <div class="rayita-shorten"></div>
    //     <div class="grid-cont">
    //       <div class="div-center">
    //         <span class="cyan-color">https://shoretn/url</span>
    //       </div>
    //       <div class="div-center">+
    //         "<button  onclick="+btncopy(+id+1)" class="btn-short-it btn-copy">Copy</button>"
    //       </div>
    //     </div>
    //   </div>

}