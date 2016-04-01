// ==UserScript==
// @name         RobinNoSpam
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Fuck the robin vote spam that some india developers made
// @author       GiveMeAllYourCats
// @match        *.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var filter = ["¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦","Robin Autovoter","Robin-Grow","Confuzet Auto stay voter 1.0","I automatically voted to grow, and so can you!","Vote Stay!","voted to","卐"];
    
    $(document).bind('DOMNodeInserted', function(e) {
      for(var i=0;i<filter.length;i++){
        $('.robin-message:contains("'+filter[i]+'")').remove();
      }
    });
})();