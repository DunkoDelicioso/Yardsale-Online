let songOn = false;

function preload(){
  song = loadSound('Sprinkler.mp3');
}

function setup() {
  
  let button = select('#submit')
  let user_input = select('#user_input')
  let output = select('#output')
  let bot = new RiveScript();
  bot.loadFile("mind.rive").then(loading_done).catch(loading_error);
  
  
  

  function loading_done() {
    console.log("Bot has finished loading!");
    // speech.setVoice("Google UK English Female")

    bot.sortReplies();
    // Now the replies must be sorted!
    
  
    // And now we're free to get a reply from the brain!
  
    // RiveScript remembers user data by their username and can tell
    // multiple users apart.
    let username = "local-user";
  
    // NOTE: the API has changed in v2.0.0 and returns a Promise now.
    bot.reply(username, "Hello, bot!").then(function(reply) {
      console.log("The bot says: " + reply);
    });
  }

  function loading_error(error, filename, lineno) {
    console.log("Error when loading files: " + error);
  }

    document.body.onclick = function() {

    console.log("I'm listening...");
  }

  // button.mousePressed(speech.stop())
  button.mousePressed(chat);


  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        chat()
    }
});

  function chat(){
    //let input = speechRec.resultString;
    // speech.stop();
    let input = document.getElementById("input").value
    bot.reply("local-user", input).then(function(reply) {
      console.log("Bot>", reply);

      let One = document.getElementById("One");
      let Two = document.getElementById("Two");
      let Three = document.getElementById("Three");
      let Four = document.getElementById("Four");
      let Five = document.getElementById("Five");
      let Six = document.getElementById("Six");
      let Seven = document.getElementById("Seven");
      let Eight = document.getElementById("Eight");
      let Nine = document.getElementById("Nine");
      One.innerHTML = reply;
      Two.innerHTML = reply;
      Three.innerHTML = reply;
      Four.innerHTML = reply;
      Five.innerHTML = reply;
      Six.innerHTML = reply;
      Seven.innerHTML = reply;
      Eight.innerHTML = reply;
      Nine.innerHTML = reply;
      // speech.speak(reply)
      document.getElementById("input").value = ""
      if(songOn == false){
        song.loop();
        songOn = true
      }

    });
  }
 
}

function draw() {
  
}
