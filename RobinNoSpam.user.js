// ==UserScript==
// @name         RobinNoSpam
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fuck the robin vote spam that some india developers made
// @author       GiveMeAllYourCats
// @match        *.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var filter = ["¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦","Robin Autovoter","Robin-Grow","Confuzet Auto stay voter 1.0","I automatically voted to grow, and so can you!","Vote Stay!","voted to","卐","Voting will end in approximately"];
    
    $(document).bind('DOMNodeInserted', function(e) {
      for(var i=0;i<filter.length;i++){
        var lastMsg = $('.robin-message:last .robin-message--message');
        $('.robin-message:last:contains("'+filter[i]+'")').remove();
        if(/[\u0600-\u06FF]/.test(lastMsg.html())) lastMsg.parent().remove();
      }
    });
})();