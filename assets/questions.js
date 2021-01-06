var questions = [
    {
        title: "The most popular CSS Framework for developing responsive and mobile-first websites?",
        choices: ["Bootshoes", "Bootstrap", "Beltstrap", "Bootcamp"],
        answer: "Bootstrap",
    },
    {
       title: "What does HTML stand for?",
        choices: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Home Text Markup Language", "Hyper Text Markup Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        title: "What does CSS stand for?",
        choices: ["Creative Style Sheets", "Colourful Style Sheets", "Cascading Style Sheets", "Computer Sttyle Sheets"],
        answer: "Cascading Style Sheets",
    },
    {
        title: "Where is the correct place to insert Javascript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> and <body> section", "The <footer> section"],
        answer: "The <body> section",
    },
    {
        title: "How can you add a comment in a Javascript?",
        choices: ["//This is a comment", "||This is a comment", "<!--This is a comment-->", "&&This is a comment&&"],
        answer: "//This is a comment"
    }

];


//function to start start quiz 
function start(){
    i = 0
    score = 0
    num1 = 60;
    populate(i);
    home.style.display = 'none';
    end.style.display = 'none';
    hscore.style.display = 'none';
    ask.style.display = 'block';
    feedback.innerHTML = "";
    
  }
  
  
  //finish div hide question and display end
  function finish(){
    ask.style.display = 'none';
    end.style.display = 'block';
    playerInput.focus();
    save.disabled = true;
    mark.textContent = score;
  
        
  }
