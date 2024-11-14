function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5V4vnI2V7Y3":
        Script1();
        break;
      case "5YOVVzqnf8R":
        Script2();
        break;
      case "6aKlTZ7IQYe":
        Script3();
        break;
      case "6YPtfUcENWN":
        Script4();
        break;
      case "5ubWfALOSqU":
        Script5();
        break;
      case "62HNxHEecho":
        Script6();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=1;
}

function Script2()
{
  var player = GetPlayer();
var volumeLevel = player.GetVar("Volume");
var audio = document.getElementById('bgSongku');
if (audio) {
    audio.volume = volumeLevel;
}

}

function Script3()
{
  var player = GetPlayer();
var musicStatus = player.GetVar("MusicPlaying");
var audio = document.getElementById('bgSongku');
if (audio && musicStatus) {
    audio.play();
}
}

function Script4()
{
  var player = GetPlayer();
var musicStatus = player.GetVar("MusicPlaying");
var audio = document.getElementById('bgSongku');
if (audio && musicStatus) {
    audio.play();
}
}

function Script5()
{
  var audio = document.getElementById('bgSongku');

if (audio) {
    
audio.pause();

}
}

function Script6()
{
  var player = GetPlayer();
var musicStatus = player.GetVar("MusicPlaying");
var audio = document.getElementById('bgSongku');
if (audio && musicStatus) {
    audio.play();
}
}

