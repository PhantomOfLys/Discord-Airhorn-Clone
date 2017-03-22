const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

// Variables
var gAirhornVC;
var gAirhornAS;
var gAirhornDS;

// Config
var gToken = 'mytoken';
var gPrefix = '!';

client.on('message', message => {
  if (message.content.startsWith(gPrefix) && !(message.member.voiceChannel === undefined) && AinsleyVC === undefined && message.content.length > gPrefix.length)
  {
    
    fs.readdir(message.content.substr(gPrefix.length), (err, audioFiles) => {
      if(audioFiles===undefined) return;
      var audioFile = message.content.substr(gPrefix.length) + '/' + audioFiles[Math.floor(Math.random()*audioFiles.length)];
      gAirhornVC = message.member.voiceChannel;
      gAirhornVC.join().then(connection => {
        gAirhornAS = connection;
        gAirhornDS = gAirhornAS.playFile(audioFile);
        gAirhornDS.on('end', reason => {
          gAirhornVC.leave();
          gAirhornVC = undefined;        
        });
      }); 
    });
  }
});

client.login(gToken);
