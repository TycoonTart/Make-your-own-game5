function createTiger(x,y,width,height){
    tiger=createSprite(x,y,width,height)
                tiger.addImage(tigerImg)
                tiger.visible=false
                tiger.scale=0.4 
}
function createPolarBear(x,y,width,height){
            polarBear=createSprite(x,y,width,height)
            polarBear.addImage(polarBearImg)
            polarBear.scale=0.1
            polarBear.visible=false

}
function createFlag(x,y,width,height){
    flag=createSprite(x,y,width,height)
    flag.addImage(flagImg)
    flag.scale=0.5
    

}
/*function createEnd(x,y,width,height){
    end=createSprite(x,y,width,height)
    end.addImage(endImg)
    end.scale=2

}*/
function createGameEnd(x,y,width,height){
    gameEnd=createSprite(x,y,width,height)
    gameEnd.addImage(endImg)
    
}
function createInvisibleBlock(x,y,width,height){
    invisibleBlock=createSprite(x,y,width,height)
}
    
