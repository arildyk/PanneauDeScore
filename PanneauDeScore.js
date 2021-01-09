var s = 0;
var ss = 0;
var minutes = 0;
const c = 0;
var secondes = 0;
var clique = 0;
var cliqueDeux = 0;
var cliqueTrois = 0;
var cliqueQuatre = 0;
var cliqueQ = 0;
var cliqueQD = 0;
var cliqueQT = 0;
var cliqueQQ = 0;
var tClique = 0;
var qClique = 0;
 
var tCache = true;
var estPetit = true;
var estPetitAussi = true;
var tGrand = false;
 
var commence = setInterval(commencer, 1000);
clearInterval(commence);
 
document.addEventListener("keydown", function(event) {
     
        switch (event.keyCode) {
            case 38:
                s++;
                document.getElementById('score').innerHTML = s;
                if (estPetit === true) {
                    if (s > 99) {
                        document.getElementById('score').style.fontSize = '280px'
                    }        
                } else if (estPetit === false) {
                    if (s > 99) {
                        document.getElementById('score').style.fontSize = '340px'
                    }
                }
            break;
            case 40:
                s--;
                if (s < 0) {
                    s = 0;
                }
                
                if (estPetit === true) {
                    if (s < 100) {
                        document.getElementById('score').style.fontSize = '333px'
                    }        
                } else if (estPetit === false) {
                    if (s < 100) {
                        document.getElementById('score').style.fontSize = '420px'
                    }
                }
                document.getElementById('score').innerHTML = s;
            break;
            case 37:
                ss--;
                if (ss < 0) {
                    ss = 0;
                }
                
                if (estPetitAussi === true) {
                    if (ss < 100) {
                        document.getElementById('scoreDeux').style.fontSize = '333px'
                    }        
                } else if (estPetitAussi === false) {
                    if (ss < 100) {
                        document.getElementById('scoreDeux').style.fontSize = '420px'
                    }
                }
                document.getElementById('scoreDeux').innerHTML = ss;
            break;
            case 39:
                ss++;
                document.getElementById('scoreDeux').innerHTML = ss;
                if (estPetitAussi === true) {
                    if (ss > 99) {
                        document.getElementById('scoreDeux').style.fontSize = '280px'
                    }        
                } else if (estPetitAussi === false) {
                    if (ss > 99) {
                        document.getElementById('scoreDeux').style.fontSize = '340px'
                    }
                }
            break;
            case 81:
                minutes++;
                if (secondes < 10) {
                 document.getElementById('temps').innerHTML = minutes + ":" + c + secondes;          
                } else {
                document.getElementById('temps').innerHTML = minutes + ":" + secondes;
                }
            break;
            case 65:
                minutes--;
                if (minutes < 0) {
                    minutes = 0;
                } else if (secondes < 10) {
                 document.getElementById('temps').innerHTML = minutes + ":" + c + secondes;          
                } else {
                document.getElementById('temps').innerHTML = minutes + ":" + secondes;
                }
            break;
            case 69:
                secondes++;
                if (secondes > 59) {
                    secondes = 59;
                } else if (secondes < 10) {
                    document.getElementById('temps').innerHTML = minutes + ":" + c + secondes;          
                } else {
                    document.getElementById('temps').innerHTML = minutes + ":" + secondes;
                }
            break;
            case 68:
                secondes--;
                if (secondes < 0) {
                    secondes = 0;
                } else if (secondes < 10) {
                    document.getElementById('temps').innerHTML = minutes + ":" + c + secondes;          
                } else {
                    document.getElementById('temps').innerHTML = minutes + ":" + secondes;
                }
            break;
            case 32:
                clique++;
                if (clique === 1) {
                  commence = setInterval(commencer, 1000);
                } else if (clique === 2) {
                  clearInterval(commence);    
                  clique = 0;
                }
            break;
            case 49:
                cliqueQ++;
                document.getElementById('un').style.color = 'black'
                document.getElementById('deux').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('trois').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('quatre').style.color = 'rgba(255, 255, 255, 0.3)'
                if (cliqueQ === 2) {
                    document.getElementById('un').style.color = 'rgba(255, 255, 255, 0.3)'
                    cliqueQ = 0;
                }
                cliqueQD = 0;
                cliqueQT = 0;
                cliqueQQ = 0;
            break;
            case 50:
                cliqueQD++;
                document.getElementById('un').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('deux').style.color = 'black'
                document.getElementById('trois').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('quatre').style.color = 'rgba(255, 255, 255, 0.3)'
                if (cliqueQD === 2) {
                    document.getElementById('deux').style.color = 'rgba(255, 255, 255, 0.3)'
                    cliqueQD = 0;
                }
                cliqueQ = 0;
                cliqueQT = 0;
                cliqueQQ = 0;
            break;
            case 51:
                cliqueQT++;
                document.getElementById('un').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('deux').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('trois').style.color = 'black'
                document.getElementById('quatre').style.color = 'rgba(255, 255, 255, 0.3)'
                if (cliqueQT === 2) {
                    document.getElementById('trois').style.color = 'rgba(255, 255, 255, 0.3)'
                    cliqueQT = 0;
                }
                cliqueQ = 0;
                cliqueQD = 0;
                cliqueQQ = 0;
            break;
            case 52:
                cliqueQQ++;
                document.getElementById('un').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('deux').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('trois').style.color = 'rgba(255, 255, 255, 0.3)'
                document.getElementById('quatre').style.color = 'black'
                if (cliqueQQ === 2) {
                    document.getElementById('quatre').style.color = 'rgba(255, 255, 255, 0.3)'
                    cliqueQQ = 0;
                }
                cliqueQ = 0;
                cliqueQD = 0;
                cliqueQT = 0;
            break;    
        }
});
 
function commencer(){  
    
    secondes--;
         
        if (secondes < 0) {
            secondes = 59;
            minutes--;
            if (minutes < 0) {
                document.getElementById('buzzer').play();
                clearInterval(commence);
                minutes = 0;
                secondes = 0;
                clique = 0;
            }
        }
     
        document.getElementById('temps').innerHTML = minutes + ":" + secondes;
        if (secondes < 10) {
            document.getElementById('temps').innerHTML = minutes + ":" + c + secondes;
        } 
}
 
document.addEventListener("mousedown", function(event) { 
    document.getElementById('score').onclick = function() {
         
        cliqueDeux++;
         
        if (cliqueDeux === 1) {
            this.style.width = '615px'
            this.style.height = '510px'
            this.style.lineHeight = '510px'
            this.style.fontSize = '420px'
            document.getElementById('Equi').style.left = '5px'
            document.getElementById('qUn').style.width = '635px'
            document.getElementById('Equi').style.width = '465px'
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
            this.style.color = 'white'
            this.style.textShadow = 'rgb(204, 204, 204) 0px 1px 0px, rgb(201, 201, 201) 0px 2px 0px, rgb(187, 187, 187) 0px 3px 0px, rgb(185, 185, 185) 0px 4px 0px, rgb(170, 170, 170) 0px 5px 0px, rgba(0, 0, 0, 0.098) 0px 6px 1px, rgba(0, 0, 0, 0.098) 0px 0px 5px, rgba(0, 0, 0, 0.298) 0px 1px 3px, rgba(0, 0, 0, 0.2) 0px 3px 5px, rgba(0, 0, 0, 0.247) 0px 5px 10px, rgba(0, 0, 0, 0.2) 0px 10px 10px, rgba(0, 0, 0, 0.15) 0px 20px 20px'
            document.getElementById('parent').style.width = '1274px'
            estPetit = false;
            
            if (s > 99) {
                this.style.fontSize = '340px' 
            }
             
        } else {
            this.style.width = '500px'
            this.style.height = '400px'
            this.style.lineHeight = '400px'
            this.style.fontSize = '333px'
            document.getElementById('Equi').style.left = '110px'
            document.getElementById('qUn').style.width = '540px'
            document.getElementById('Equi').style.width = '370px'
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
            this.style.color = 'black'
            this.style.textShadow = '0px 0px #000000'
            cliqueDeux = 0;
            estPetit = true;
            
            if (s > 99) {
                this.style.fontSize = '280px'
            }
        }
        
        if ((estPetit === true) && (estPetitAussi === true)) {
            document.getElementById('parent').style.width = '1084px'
        }
         
    }
     
    document.getElementById('scoreDeux').onclick = function() {   
         
        cliqueTrois++;
         
        if (cliqueTrois === 1) {
            this.style.width = '615px'
            this.style.height = '510px'
            this.style.fontSize = '420px'
            this.style.lineHeight = '510px'
            document.getElementById('qDeux').style.width = '635px'
            document.getElementById('Visiteurs').style.width = '465px'
            document.getElementById('Visiteurs').style.left = '1080px'
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
            this.style.color = 'white'
            this.style.textShadow = 'rgb(204, 204, 204) 0px 1px 0px, rgb(201, 201, 201) 0px 2px 0px, rgb(187, 187, 187) 0px 3px 0px, rgb(185, 185, 185) 0px 4px 0px, rgb(170, 170, 170) 0px 5px 0px, rgba(0, 0, 0, 0.098) 0px 6px 1px, rgba(0, 0, 0, 0.098) 0px 0px 5px, rgba(0, 0, 0, 0.298) 0px 1px 3px, rgba(0, 0, 0, 0.2) 0px 3px 5px, rgba(0, 0, 0, 0.247) 0px 5px 10px, rgba(0, 0, 0, 0.2) 0px 10px 10px, rgba(0, 0, 0, 0.15) 0px 20px 20px'
            document.getElementById('parent').style.width = '1274px'
            estPetitAussi = false;
            
            if (ss > 99) {
                this.style.fontSize = '340px' 
            }
             
        } else {
            this.style.width = '500px'
            this.style.height = '400px'
            this.style.lineHeight = '400px'
            this.style.fontSize = '333px'
            document.getElementById('qDeux').style.width = '540px'
            document.getElementById('Visiteurs').style.width = '370px'
            document.getElementById('Visiteurs').style.left = '980px'
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
            this.style.color = 'black'
            this.style.textShadow = '0px 0px #000000'
            cliqueTrois = 0;
            estPetitAussi = true;
            
            if (ss > 99) {
                this.style.fontSize = '280px'
            }
        }
        
        if ((estPetit === true) && (estPetitAussi === true)) {
            document.getElementById('parent').style.width = '1084px'
        }
    }
     
    document.getElementById('temps').onclick = function() {
         
        cliqueQuatre++;
         
        if (tCache) {
            if (cliqueQuatre === 1) {
                this.style.height = '220px'
                this.style.width = '1000px'
                this.style.fontSize = '183px'
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
                this.style.color = 'white'
                this.style.textShadow = 'rgb(204, 204, 204) 0px 1px 0px, rgb(201, 201, 201) 0px 2px 0px, rgb(187, 187, 187) 0px 3px 0px, rgb(185, 185, 185) 0px 4px 0px, rgb(170, 170, 170) 0px 5px 0px, rgba(0, 0, 0, 0.098) 0px 6px 1px, rgba(0, 0, 0, 0.098) 0px 0px 5px, rgba(0, 0, 0, 0.298) 0px 1px 3px, rgba(0, 0, 0, 0.2) 0px 3px 5px, rgba(0, 0, 0, 0.247) 0px 5px 10px, rgba(0, 0, 0, 0.2) 0px 10px 10px, rgba(0, 0, 0, 0.15) 0px 20px 20px'
                tGrand = true;
            } else {
                this.style.height = '205px'
                this.style.width = '460px'
                this.style.fontSize = '170px'
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
                this.style.color = 'black'
                this.style.textShadow = '0px 0px #000000'
                cliqueQuatre = 0;
                tGrand = false;
            }
        }
    }
     
    document.getElementById('temps').oncontextmenu = function() {
         
        tClique++;
         
        if (tClique === 1) {
            this.style.opacity = '0'
            this.style.height = '110px'
            alert("En faisant un clic-droit, le chronomètre sera caché. Cliquez sur le même bouton pour sa réapparation.");
            tCache = false;
        } else {
            this.style.opacity = '1'
            this.style.height = '205px'
            tClique = 0;
            tCache = true;
            if (tGrand === true) {
                this.style.height = '220px'
            }
        }
         
        return false;
    }
});
 
document.addEventListener("mouseover", function(event){
    document.getElementById('Instructions').onmouseover = function() { 
        this.style.width = '525px'
        document.getElementById('sectionUn').style.width = '475px'
        document.getElementById('sectionDeux').style.width = '475px'
        document.getElementById('sectionTrois').style.width = '475px'
        document.getElementById('sectionQuatre').style.width = '475px'
        document.getElementById('instrTitre').style.opacity = '1'
        document.getElementById('Instr1').style.width = '475px'
        document.getElementById('Instr2').style.width = '475px'
        document.getElementById('Instr3').style.width = '475px'
        document.getElementById('Instr4').style.width = '475px'
    }
});
 
document.addEventListener("mouseout", function(event){
    document.getElementById('Instructions').onmouseout = function() { 
        this.style.width = '0.5px'
        document.getElementById('sectionUn').style.width = '0.5px'
        document.getElementById('sectionDeux').style.width = '0.5px'
        document.getElementById('sectionTrois').style.width = '0.5px'
        document.getElementById('sectionQuatre').style.width = '0.5px'
        document.getElementById('instrTitre').style.opacity = '0'
        document.getElementById('Instr1').style.width = '0.5px'
        document.getElementById('Instr2').style.width = '0.5px'
        document.getElementById('Instr3').style.width = '0.5px'
        document.getElementById('Instr4').style.width = '0.5px'
    }
});