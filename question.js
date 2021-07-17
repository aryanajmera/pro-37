class Question {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Submit');
        this.title = createElement('h2');
    }

    hide(){
        this.title.hide();
        this.button.hide();
        this.input1.hide();
    }

    display(){
      this.title.html("MyQuiz Game");
      this.title.position(350,0);

      this.question.html("Question:- What starts and Ends with Letter 'E', but has only one Letter?");
      this.question.position(150,80);
      this.option1.html("1: Everyone");
      this.option1.position(150,100);
      this.option2.html("2: Envelop");
      this.option2.position(150,120);

      this.input1.position(150,230);

      this.button.mousePressed(()=>{
        this.title.hide();
        this.button.hide();
        this.input1.hide();
        contestent.name = this.input1.value();
        contestentCount+=1;
        contestent.index = contestentCount;
        contestent.update();
        contestent.updateCount(contestentCount);
      });
      }
    }


    
