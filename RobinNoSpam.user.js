// ==UserScript==
// @name         RobinNoSpam
// @namespace    http://tampermonkey.net/
// @version      3.7
// @description  Fuck the robin vote spam that some india developers made
// @author       GiveMeAllYourCats
// @match        *.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // You can add your own filters if you want:
    var filter = ["Robin Autovoter","Robin-Grow","Confuzet Auto stay voter 1.0","I automatically voted to grow, and so can you!","Vote Stay!","Voted to","Voted for","voting will end in approximately","Robin Autogrower","robin-grow","people in the room voting grow","total participants","__","--","No vote: ","auto-grow","~~","super voter pro","twitch.tv","**","autovoted","voting will end soon","==","- -","_-"," . ","O-o","stay stay","ooo","The best thing to do is to stay","chapebrone","to recreate 4chan","sexbots","autovoter","aaaa","users: ","Sword of potatkek: ","room:","=^·.·^=","automaton","\\/","voted automatically","bots","spam","vape","vaping","vote","Joinrhino"];
    
    var users = {};
    
    $(document).bind('DOMNodeInserted', function(e) {
      if(!$(e.target).attr('class')) return;
      if($(e.target).attr('class').indexOf("robin-message")==-1) return;
      
      var lastMsg = $('.robin-message:last .robin-message--message');
      var lastUser = $('.robin-message:last .robin-message--from');
      if(users[lastUser.html()]){
        if(users[lastUser.html()] == lastMsg.html()) lastMsg.parent().remove();
      }
      var userSpace = users[lastUser.html()] = lastMsg.html();
      
      for(var i=0;i<filter.length;i++){
        var toFilter = filter[i].toLowerCase();
        var toMatch = lastMsg.html().toLowerCase();
        
        if(longWords(lastMsg.html())) lastMsg.parent().remove();
        if(toMatch.indexOf(toFilter)>-1) lastMsg.parent().remove();
        if(/[\u0600-\u06FF]/.test(toMatch)) lastMsg.parent().remove();
        if(isDoubleByte(toMatch)) lastMsg.parent().remove();
        lastMsg.html(capitalizeFirstLetter(lastMsg.html().toLowerCase()));
      }
    });
    
    function isDoubleByte(str) {
      for (var i = 0, n = str.length; i < n; i++) {
        if (str.charCodeAt( i ) > 255) { return true; }
      }
      return false;
    }
    
    function longWords(str){
      var strSplit = str.split(" ");
      var longDetected = false;
      for(var i=0;i<strSplit.length;i++){
        if(strSplit[i].length>=20 && strSplit[i].indexOf("http")==-1) longDetected = true;
        if(i>=2){
          if(strSplit[i]==strSplit[i-1]) longDetected = true;
        }
      }
      return longDetected;
    }
    
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
})();