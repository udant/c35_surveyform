class Data{
constructor(){
this.name = null;
this.email = null;
this.answer1 = null;
this.answer2 = null;
this.answer3 = null;
this.index = null;
}
getCount(){
    var voteCountRef = database.ref('voteCount');
    voteCountRef.on("value",function(data){
       voteCount = data.val();
    });
    console.log("Data: getcount: voteCount: "+voteCount);

}
updateCount(count){
    database.ref('/').update({
        voteCount:count
    });
    console.log("Data: updatecount: count: "+count);
}
update(){
    var voterIndex = "votes/vote" +this.index;
    database.ref(voterIndex).set({
       name:this.name, 
       email:this.email,
       answer1:this.answer1,
       answer2:this.answer2,
       answer3:this.answer3,
    });
    console.log("Data: update: voterIndex: "+voteCount, "  Name: "
     + this.name + " email: "+ this.email,"answer1: "+ this.answer1,
     "answer2: "+this.answer2,"answer3: " + this.answer3);

}
async start(){
      var voteCountRef = await database.ref('voteCount').once("value");
      if(voteCountRef.exists()){
        voteCount = voteCountRef.val();
        console.log("voteCount"+voteCount)
        data.getCount();
      }
      form = new Form()

      form.display();
      console.log("voteCountRef" + voteCountRef);
  }
   

}
/*
update(name){
        var playerIndex = "players/player" +this.index;
        database.ref(playerIndex).set({
           name:this.name, 
           distance:this.distance
        })
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    



































class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    
    }
    getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    });
    
    }

    
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=> {
            allPlayers = data.val()
        });   
    }
    
    
    }*/