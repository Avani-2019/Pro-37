class Question{
    constructor()
{
this.input1 = createInput("Name");
this.input2 = createInput("Option");
this.button = createButton('Submit');

}
hide()
{
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
}

display()
{
    var title = createElement('h2');
   title.html("My Quiz Game");
    title.position(350,0);
    
    var question = createElement('h3')
  question.html("Question :- What starts with letter 'E' and ends with letter 'E',but has only one letter?");
  question.position(100,70);
  var option1 = createElement('h4');
  option1.html("1 :- Everyone");
  option1.position(150,120);
  var option2 = createElement('h4');
  option2.html("2 :- Envelope");
  option2.position(150,150);
  var option3 = createElement('h4');
  option3.html("3 :- Estimate");
  option3.position(150,180);
  var option4 = createElement('h4');
  option4.html("4 :- Example");
  option4.position(150,210); 

    this.input1.position(150,310);
    this.input2.position(390,310);
    this.button.position(600,355);

    this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        ContestCount+=1;
        contestant.index = ContestCount;
       contestant.update();
       contestant.updateCount(ContestCount);

    })
    
}
}