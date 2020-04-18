class Form {
    constructor(){
        this.name = createInput("Name");
        this.email = createInput("Email");
        this.answer1 = createInput("yes/no");
        this.answer2 = createInput("yes/no");
        this.answer3 = createInput("yes/no");
        this.text1 = createP("Enter your email id");
        this.text2 = createP("Enter your name");
        this.text3 = createP("Do you think children should have online classes ?");
        this.text4 = createP("Do you think schools should have educational games like 'Minecraft Education Edition' ?");
        this.text5 = createP("Do you think  children should be taught cooking in schools ?");
        this.submitButton = createButton('Submit');
        this.getVoteCount = createButton('Get Vote Count');
        this.greeting = createElement('h3');
    }
    

    display(){
        var title = createElement('h2')
        title.html(" Survey Form ");
        title.position(250,-15);
        this.text1.position(5,15);
        this.text2.position(5,35);
        this.text3.position(5,55);
        this.text4.position(5,75);
        this.text5.position(5,97);
        this.name.position(600,50);
        this.email.position(600,30);
        this.answer1.position(600,70);
        this.answer2.position(600,90);
        this.answer3.position(600,110);
        this.getVoteCount.position(200,250);
        this.submitButton.position(315,250);
        console.log("Form: display : "+ "  Name: "
        + this.name + " email: "+ this.email,"answer1: "+ this.answer1,
        "answer2: "+this.answer2,"answer3: " + this.answer3);

        this.submitButton.mousePressed(()=>{
                data.email=this.email.value();
                data.name=this.name.value();
                data.answer1=this.answer1.value();
                data.answer2=this.answer2.value();
                data.answer3=this.answer3.value();
                voteCount = voteCount+1;
                data.index = voteCount;

               if ((this.answer2.value() === "no" || this.answer2.value() === "yes") &&
                   (this.answer1.value() === "no" || this.answer1.value() === "yes") && 
                   (this.answer3.value() === "no" || this.answer3.value() === "yes") ) {
                        data.update();
                        data.updateCount(voteCount);    
                        text("Form submtted'",200,200) ; 
                        this.answer2.data=" ";
               } else {
                 stroke("red");
                 fill("red");
                 //strokeWeight(4)  
                 text("Answers should be in 'yes' or 'no'",200,200) ; 
               }
               
        });   
        this.getVoteCount.mousePressed(()=>{
           //for (var i = 1; i <=voteCount; i++) {
            values.on("value", getVoteInfo); 

            //data.getVoteInfo();
               
          // } 
                                       
                 
    });  
    }
   


}
    