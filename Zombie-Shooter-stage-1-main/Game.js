class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    /*player1 = createSprite(200,500);
    player1.addImage("player1",shooterImg);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", shooterImg);
    players=[player1,player2];**/

        }
    
    play(){
        
   form.hide();

    player1 = createSprite(100,400);
    player1.addImage("player1",shooterImg);
    player1.scale=0.15;
    
    player2 = createSprite(200,400);
    player2.addImage("player2", shooterImg);
    player2.scale=0.15;
    players=[player1,player2];

    heart = createSprite(450,50);
    heart.addImage("heart",heartImg3);
    heart.scale=0.15;

    

   
    

                Player.getPlayerInfo();
                 //image(bgImg, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;

                 if (frameCount%100===0){
                    zombie = createSprite(windowWidth-30,random(400,600),40,40)
                    var r = Math.round(random(1,4));
                    switch(r){
                
                      case 1: zombie.addImage(zombieImg1);
                      break;
                      case 2: zombie.addImage(zombieImg2);
                      break;
                      case 3: zombie.addImage(zombieImg3);
                      break;
                      case 4: zombie.addImage(zombieImg4);
                      break;
                    }
                    
                    /*if(keyIsDown(UP_ARROW)){
                        players[index-1].y =players[index-1].y -5;
                    }
                    if(keyIsDown(DOWN_ARROW)){
                        players[index-1].y = players[index-1].y+5;
                    }**/
                    
                    
                    if(zombieGroup.overlap(player1)){
                        l=l+1;
                        loseSound.play();
                    }
                    if(l==1){
                        heart.addImage("h",heartImg2);
                        zombie.visible=false;
                    }
                    if(l==2){
                        heart.addImage("h",heartImg1);
                        zombie.visible=false;
                    }
                    


                    
                    zombie.scale= 0.15;
                    zombie.velocityX=-3;
                    zombieGroup.add(zombie);

                    if(zombieGroup.overlap(bullet)){

                        bullet.visible = false;
                        zombie.visible = false;
                        winSound.play();
                        score = score+10;
                    }
                    if(zombieGroup.collide(players[index-1])){
                        l=l+1;
                        loseSound.play();
                    }
                
                  }

                 drawSprites();
                 textSize(50);
                 fill("white");
                 text("Scores :" +score,850,50);

                    //var plr;
                    
                     index = index+1;
                     //x = 500-allPlayers[plr].distance;
                    // y=500;
                     
                     //players[index -1].x = x;
                     //players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("white");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);

                 
                 }

        
                
                
                 

                if (keyWentDown("space") && player.index !== null) {
                    //player.addImage(shooter_shooting)
                     bullet = createSprite(100,350,20,10);
                    bullet.addImage(bulletImg);
                    bullet.velocityX = 10;
                    bullet.scale=0.5;
                    
                    explosionSound.play();

                    image(shooter_shooting,70,350,100,100);
                    player.depth=bullet.depth;
                    player.depth=player.depth+2;

                    image(shooter_shooting,170,350,20,10)

                }
                
            /*
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < fruitGroup.length; i++) {
                          if (fruitGroup.get(i).isTouching(players)) {
                              fruitGroup.get(i).destroy();
                              
                               // calculate the score. 
                                //player.score = 1;
                                //player.score = player.score - 1;
                                player.score = player.score + 1;
                                //score = score + 1;

                                //Update the score in the database

                                //score.update()
                                player.score.update()
                                //player.update();
                                //update();
                                    
                          }
                          
                      }
                  }**/
      
  
    }

    end(){
       console.log("Game Ended");
    }
}