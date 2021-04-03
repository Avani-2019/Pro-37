class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();

        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('ContestCount').once("value");
            if(contestantCountRef.exists()){
                ContestCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
    //THIS IS FOR ADDITIONAL GOAL 2
    /* play(){                           
        question.hide();
        textSize(30);
        text("Quiz Result",350,0);
        Contestant.getContestantInfo();
        background("yellow")
        if(allContestants !== undefined){
            textSize(20);
            text("NOTE :- Contestant who answered correct are highlighted in green color ",30,250);
        for(var plr in allContestants){
            var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
            fill("Green");
        
        else
            fill("Red");
        
        }
    }

    }  */ 
}