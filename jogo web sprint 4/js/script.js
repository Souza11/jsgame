main();

function main() {
    
    let canvas = document.querySelector('#arena');
    var cnv = canvas.getContext('2d');
    
    
    
    let mvLeft = mvUp = mvRight = mvDown = false;
    
    let plLeft = plUp = plRight = plDown = false;
    
    const A = 65;
    const W = 87;
    const D = 68;
    const S = 83;
    
    
    var a=0;
    var posX= 200;
    var posY =200;
    
    var Xinitial = 0;
    var Yinitial = 0;
    var Wrecorte= 200;
    var Hrecorte= 200;
    var Wimage=200;
    var Himage=200;
    
    var Xinitial2 = 0;
    var Yinitial2 = 0;
    var Wrecorte2 = 200;
    var Hrecorte2 = 200;
    var Wimage2 = 200;
    var Himage2 = 200;
    
    var posX2 = 900;
    var posY2 = 200;
    
    let sprites=[];
    
    var velocidade = 20; 
    
    var imagem1 = new Image();
    var imagem2 = new Image();
    
    var nome1 = '';
    var nome2 ='';
    
    var vidaRobo1= 100;
    var vidaRobo2= 100;
    
    var barraHp1= document.querySelector('#barraHp1')
    var barraHp2= document.querySelector('#barraHp2')
    
    imagem1.src = "../img/player 1 - Copia.png"
    imagem2.src = "../img/player 2 - Copia.png"
    
    
    var jogador1 = new Sprite(posX,posY);
    sprites.push(jogador1);
    
    
    var jogador2 = new Sprite(posX2,posY2);
    sprites.push(jogador2);
    window.addEventListener('load',()=>{
        
        renderize();
        
    })
    
    
    
    window.addEventListener('keydown',
    
    
    function(event){
        var key = event.keyCode ;
        
        if (key == '38') {
            mvUp=true;
            
            
        }
        else if (key == '40') {
            mvDown=true;
            
        }
        else if (key == '37') {
            mvLeft=true;
            
        }
        else if (key == '39') {
            mvRight=true;
        }
        if (key == W) {
            plUp=true;
            
            
        }
        else if (key == S) {
            plDown=true;
            
        }
        else if (key == A) {
            plLeft=true;
            
        }
        else if (key == D) {
            plRight=true;
        }
        
        renderize();
        
    }) 
    
    
    window.addEventListener('keyup',
    
    
    function(event){
        var key = event.keyCode ;
        
        if (key == '38') {
            mvUp=false;
            
            
        }
        else if (key == '40') {
            mvDown = false;
            
        }
        else if (key == '37') {
            mvLeft = false;
            
        }
        else if (key == '39') {
            mvRight = false;
        }
        if (key == W) {
            plUp = false;
            
            
        }
        else if (key == S) {
            plDown = false;
            
        }
        else if (key == A) {
            plLeft = false;
            
        }
        else if (key == D) {
            plRight = false;
        }
        
        
        
        
    })  
    
    
    
    function loop() {   
        
        gerencia();
        window.requestAnimationFrame(loop, canvas);
        update();
        update2();
        renderize();
        colidir1();        
        controlaHp();
        
    }
    nomes();
    
    function controlaHp() {
        barraHp1.style.width = vidaRobo1 + 'px';
        barraHp2.style.width = vidaRobo2 + 'px';
    }
    
    function nomes() {
        nome1= prompt('digite o nome do jogador 1 ')
        nome2= prompt('digite o nome do jogador 2 ')
        document.querySelector('#jogador1').textContent = nome1; 
        document.querySelector('#jogador2').textContent = nome2; 
    }
    
    
    function colidir1() {
        
        var Wcenter1 = posX + 100
        var Hcenter1 = posY + 100
        
        
        var Wcenter2 = posX2 +100
        var Hcenter2 = posY2 +100
        
        var posicaoX = Wcenter1 - Wcenter2;
        var posicaoY = Hcenter1 - Hcenter2;
        
        var posicaoX2 = Wcenter2 - Wcenter1;
        var posicaoY2 = Hcenter2 - Hcenter1;
        
        var somaMetadeWidth = 50 + 50;
        var somaMetadeHeight = 50 + 50;
        
        if (Math.abs(posicaoX) < somaMetadeWidth && Math.abs(posicaoY) < somaMetadeHeight) {
            
            var overlapX = somaMetadeWidth - Math.abs(posicaoX);
            var overlapY = somaMetadeHeight - Math.abs(posicaoY);
            
            
            if (overlapX >= overlapY) {
                if (posicaoY > 0) {
                    posY += overlapY;
                    
                    a++;
                    const mostrar1 = Math.floor(Math.random() * 20);
                    vidaRobo2 -= mostrar1;
                } else {
                    posY -= overlapY;
                    
                    const mostrar1 = Math.floor(Math.random() * 20);
                    
                    a++;
                    vidaRobo2 -= mostrar1;
                }
            } else {
                if (posicaoX > 0) {
                    posX += overlapX;
                    
                    a++;
                    const mostrar1 = Math.floor(Math.random() * 20);
                    
                    vidaRobo2 -= mostrar1;
                } else {
                    posX -= overlapX;
                    
                    a++;
                    
                    const mostrar1 = Math.floor(Math.random() * 20);
                    
                    vidaRobo2 -= mostrar1;
                }
            }
        }
        if (Math.abs(posicaoX2) < somaMetadeWidth && Math.abs(posicaoY2) < somaMetadeHeight) {
            
            overlapX = somaMetadeWidth - Math.abs(posicaoX2);
            overlapY = somaMetadeHeight - Math.abs(posicaoY2);
            
            
            if (overlapX >= overlapY) {
                if (posicaoY2 > 0) {
                    posY2 += overlapY;
                    
                    
                    const mostrar = Math.floor(Math.random() * 20);
                    
                    
                    
                    vidaRobo1 -= mostrar;
                } else {
                    posY2 -= overlapY;
                    
                    const mostrar = Math.floor(Math.random() * 20);
                    
                    
                    vidaRobo1 -= mostrar;
                }
            } else {
                if (posicaoX2 > 0) {
                    posX2 += overlapX;
                    
                    
                    const mostrar = Math.floor(Math.random() * 20);
                    
                    
                    vidaRobo1 -= mostrar;
                } else {
                    posX2 -= overlapX;
                    
                    
                    
                    const mostrar = Math.floor(Math.random() * 20);
                    
                    
                    vidaRobo1 -= mostrar;
                }
            }
        }
    }
    
    
    function gerencia() {
        if (a > 5) {
            if (vidaRobo1 > vidaRobo2) {
                alert(`Vencedor do jogo ${ nome1 }`)
                a=0
                window.location.reload()
            } else if (vidaRobo2 > vidaRobo1) {
                alert(`Vencedor do jogo ${ nome2 }`)
                a=0
                window.location.reload()
            } else {
                alert(`Empate`)
                a=0
                window.location.reload()
            }

        }
        
    }
    
    
    
    function renderize(){
        
        cnv.clearRect(0,0,canvas.width,canvas.height);        
        
        for (let i in sprites) {
            let spr = sprites[i];
            if (spr.visible) {
                
                cnv.drawImage(imagem1,Xinitial,Yinitial,Wrecorte,Hrecorte,posX,posY,Wimage,Himage);
                cnv.drawImage(imagem2, Xinitial2, Yinitial2, Wrecorte2, Hrecorte2, posX2, posY2, Wimage2, Himage2);
                
            }
        }		
    }
    function update() {
        if (mvLeft && !mvRight) {
            posX -= velocidade;
        }
        if (mvRight && !mvLeft) {
            posX +=velocidade;
        }
        if (mvUp && !mvDown) {
            posY -= velocidade;
        }
        if (mvDown && !mvUp) {
            posY += velocidade;
        }
        posX = Math.max(0, Math.min(canvas.width - 150, posX));
        posY = Math.max(0, Math.min(canvas.height - 150,posY));
        
    }
    
    function update2() {
        if (plLeft && !plRight) {
            posX2 -= velocidade;
        }
        if (plRight && !plLeft) {
            posX2 +=velocidade;
        }
        if (plUp && !plDown) {
            posY2 -= velocidade;
        }
        if (plDown && !plUp) {
            posY2 += velocidade;
        }
        
        posX2 = Math.max(0, Math.min(canvas.width - 150, posX2));
        posY2 = Math.max(0, Math.min(canvas.height - 150, posY2));

        
    }
    
    
    
    loop();
    
    
    
}

