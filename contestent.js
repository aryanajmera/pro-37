class Contestent {
    constructor(){}

    getCount(){
        var contestentCountRef = database.ref('contestentCount');
        contestentCountRef.on("value",(data)=>{
            contestentCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
            contestentCount: count
        });
      }
    
      update(){
        var contestentIndex = "contestents/contestent" + this.index;
        database.ref(contestentIndex).set({
          name:this.name,
        });
      }
    
      static getcontestentInfo(){
        var contestentrInfoRef = database.ref('contestents');
        contestentInfoRef.on("value",(data)=>{
          allcontestents = data.val();
        })
      }

}