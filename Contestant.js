class Contestant {
    constructor(){
      this.index = null;
      this.answer = null;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('ContestCount');
      contestantCountRef.on("value",(data)=>{
        ContestCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        ContestCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var ContestantInfoRef = database.ref('contestants');
      ContestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  