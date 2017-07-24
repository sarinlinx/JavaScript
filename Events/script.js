//Assign <ul> list to a variable
var jukebox = document.querySelector('ul.player');

//Add event listener to the var storing the <ul>
jukebox.addEventListener('click', function(e) {

  //Create var songName to store the name of the song
  //from the data-src= tag
  var songName = e.target.getAttribute('data-src');

  //Add var to check if element with id='player' is playing
  //This was changed in the last video
  //The var used to be called songPlaying

  /*
  Now, if audioPlayer exists, it will test to see if
  the audioPlayer src and current song name are the same
  */
  var audioPlayer = document.querySelector('#player');


  //If song is playing, do something
  if (audioPlayer) {

    //If what you clicked on has same name of what's playing
    if (songName===audioPlayer.getAttribute('src')) {

      //Create a toggle to play/pause song
      //This paused method sets or returns if the audio is paused or not
      if (audioPlayer.paused) {
        //if it is paused, play it
        audioPlayer.play();
        //set id of element you clicked to 'playing'
        e.target.id = 'playing';

      } else {
        //If it is playing, pause it
        audioPlayer.pause();
        //style the element
        e.target.id = 'paused';
      }

    } else {
      //If what you clicked on has different name than what's playing
      //Play new song
      //set src attrb of song playing to new song name
      audioPlayer.src = songName;
      //Then play it
      audioPlayer.play();

      //Fix CSS for paused song
      if (document.querySelector('#playing')) {
        //Remove CSS from formerly played song
        //Find current song with an id='playing', remove id
        document.querySelector('#playing').id='';
    } else {
      //id of what was playing
      document.querySelector('#paused').id='';
    }
    //Add CSS to currently playing song
    e.target.id = 'playing';
  }
} else {
  //use <audio> tag to create audio player
  var audioPlayer = document.createElement('audio');

  //Give the audioPlayer var an 'id' of player
  //<audio id='player'>
  audioPlayer.id = 'player';

  //Identify id of song playing
  //This changes color of button when clicked
  e.target.id = 'playing';

  //Tell the player what song name to play
  audioPlayer.src = songName;

  /*
  We're attaching the element to the body. I don't want to put it right
  into a list element because we could be clicking on any one of these
  songs and I don't want the auto player to be on the first list item
  I click on. I just want it to be somewhere on the page. "
  */
  document.body.appendChild(audioPlayer);

  //Run the play method to play the song
  audioPlayer.play();

  //Add event listener for when audio player has ended
  audioPlayer.addEventListener('ended', function() {
    //Remove audio player
    audioPlayer.parentNode.removeChild(audioPlayer);
    //Change CSS of current playing button back to nothing
    //This reverts the CSS change
    e.target.id = '';

  }, false);
}
}, false);
