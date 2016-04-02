// ==UserScript==
// @name         RobinNoSpam
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  Fuck the robin vote spam that some india developers made
// @author       GiveMeAllYourCats
// @match        *.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var filter = ["Robin Autovoter","Robin-Grow","Confuzet Auto stay voter 1.0","I automatically voted to grow, and so can you!","Vote Stay!","Voted to","voting will end in approximately","Robin Autogrower","robin-grow","people in the room voting grow","total participants","__","--","No vote: ","auto-grow","~~"];
    
    $(document).bind('DOMNodeInserted', function(e) {
      if(!$(e.target).attr('class')) return;
      if($(e.target).attr('class').indexOf("robin-message")==-1) return;
      
      var lastMsg = $('.robin-message:last .robin-message--message');
      for(var i=0;i<filter.length;i++){
        var toFilter = filter[i].toLowerCase();
        var toMatch = lastMsg.html().toLowerCase();
        
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
    
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
})();