class Quiz {
    constructor(){}


getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestent = new Contestent();
      var contestentCountRef = await database.ref('contestentCount').once("value");
      if(contestentCountRef.exists()){
        contestentCount = contestentCountRef.val();
        contestent.getCount();
      }
      question = new Question()
      question.display();
      
    }
}
}