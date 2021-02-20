class Game{
    constructor(){

    }
    play(){
        
        player1.update()
        

           
       if(player1.distance===500 || player1.distance===4000){
            polarBear.visible=true
            polarBear.x=mountaineer.x+100
            polarBear.y=mountaineer.y
            polarBear.velocityX=-1
           
           
        }
        if(mountaineer.y+75<polarBear.y){
            polarBear.destroy()
           createPolarBear(880,936,10,10)
        }
            
            if(player1.distance===2000|| player1.distance===6000){     
                tiger.visible=true
                tiger.x=mountaineer.x
                tiger.y=mountaineer.y-100
                tiger.velocityY=+0.7
             }
             if(mountaineer.y+200<tiger.y){
                tiger.destroy()
                console.log("hello")
                createTiger(1000,1000,10,10)
            }

    }
    }