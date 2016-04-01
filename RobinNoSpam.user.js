// ==UserScript==
// @name         RobinNoSpam
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Fuck the robin vote spam that some india developers made
// @author       GiveMeAllYourCats
// @match        *.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() { 
      $('.robin-message:contains("¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦")').remove()
      $('.robin-message:contains("Robin Autovoter")').remove()
      $('.robin-message:contains("Robin-Grow")').remove()
    }, 10);
})();