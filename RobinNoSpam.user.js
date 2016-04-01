// ==UserScript==
// @name         RobinNoSpam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fuck the robin vote spam that some india developers made
// @author       GiveMeAllYourCats
// @match        *.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() { $('.robin-message:contains("¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦")').css('display', 'none')}, 10);
    setInterval(function() { $('.robin-message:contains("Robin Autovoter")').css('display', 'none')}, 10);
})();