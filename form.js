/*Might need this to show today's date...I'm thinking of using as the place holder for a date input...

const today = new Date();
today.now()*/

let named = document.getElementById("name");
let namedError = document.querySelector("#name + span.error");
let another = document.querySelector('input[value="from"]');
let from = document.getElementById('from');
let checker = document.getElementsByClassName("require-active");
let fudge = document.getElementById("hook");
let brokenHeart = document.querySelector('#hook + span.error')
let noWay = document.querySelector('input[value="hangup"]');
let hangup = document.getElementById('hangup');
let off = document.getElementById("you-not");
var phoney = document.getElementById('phoney');
let phoneProb = document.querySelector('#phoney + span.error')
let offHookProb = document.querySelector('#you-not + span.error')
const ree = new RegExp(/^(?:\(?([0-9]{3})\)?[-.*\s]?)?([0-9]{3})[-.*\s]?([0-9]{4})$/g);
const meow = document.getElementById("meow");


var transcribble
var lou = /502/;
var tommy = /[\(\)]|\s|\-/g; 
var matchCar = /^(\d{3})?(\d{3})(\d{4})$/;
var jenny
var tutone
var mathis 
var walter
copierDeux = document.getElementById('copierDeux')


function setup() {
let callMee = document.querySelectorAll('input[type="tel"]');
const forms = document.getElementsByTagName('form');
for(let c = 0; c < callMee.length; c++) {
  callMee[c].setAttribute('pattern', ree.source)
}


for(let f = 0; f < forms.length; f++) {
  forms[f].setAttribute('novalidate', true);
}
}


let erroneous = (field) => {
  if (from.checked != true || hangup.checked != true || field.type === '' ) return;
}

let nameSub = (e) => {
  e.preventDefault()
  if(!named.validity.valid) {
    namingError()
  } else {
    namedError.innerHTML = '';
    namedError.className = 'error'
    document.getElementById('copyName').innerHTML = '<span> Name: <pre id="naming" class="previous">' + named.value + '</pre></span>'
    + '<button id="diddly" type="button">Copy</button>'
    var namedWerk = document.getElementById('diddly');
    var copiedName = () => {
      //ev.preventDefault();
      
      var naming = document.getElementById('naming');
      var range = document.createRange();
      range.selectNode(naming);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    namedWerk.addEventListener('click', copiedName);
}
  } 

 
/*
Code to copy to clipboard....
  var copyToClipboard = function(secretInfo) {
  secretInfo.select();
  document.execCommand('copy');
  btnCopy.addEventListener('click', function(ev) {
    copyToClipboard(secretInfo);
  });
}*/

/*document.addEventListener('submit', (e) => {
  e.preventDefault()
  if(!named.validity.valid) {
    namingError()
  } else {
    namedError.innerHTML = '';
    namedError.className = 'error'
    document.getElementById('copyName').innerHTML = "Name: " + named.value  + '<button id="diddly" type="button">Copy</button>'
    var werk = document.getElementById('diddly');
werk.addEventListener('click', (e) => {
  console.log("I werk!")
})
  }
})*/

function namingError() {
  if (named.validity.valueMissing) {
    namedError.textContent = 'Need a name. "None", "None given" or somehting of the sort will work, too.';
  }
}

let talkTalk = (e) => {
  e.preventDefault()
  if(!off.validity.valid) {
    phoneMalfunction() 
  } else {
    offHookProb.innerHTML = '';
    offHookProb.className = 'error'
  }
}

document.addEventListener('submit', talkTalk)
/*document.addEventListener('submit', (e) => {
  e.preventDefault()

  if(!phoney.validity.valid) {
    phoneyError()
  } else {
    phoneProb.innerHTML = '';
    phoneProb.className = 'error'
    blab()
     
  }
})*/

/*function daVille() {
  var goodTime = phoney.value
  var lou = /502/;
  var tommy = /[\(\)]|\s|\-/g;  
  tutone = goodTime.replace(tommy, "");
  
  
   if(lou.test(tutone) == true) {
    tutone = tutone.slice(3)
   } else {
      tutone
   } 
   
}

function call() {
  
  var matchCar = /^(\d{3})?(\d{3})(\d{4})$/;
  var jenny
  jenny = tutone.match(matchCar)
  
  if (jenny) {
    mathis = jenny[1] + '-' + jenny[2] + '-' + jenny[3]
  } else {
    null
  }
}*/
  function blob() {
    var bugSpray = off.value
    //var lou = /502/;
    //var tommy = /[\(\)]|\s|\-/g; 
    //var matchCar = /^(\d{3})?(\d{3})(\d{4})$/;
    //var jenny
    //var tutone
      
   
    tutone = bugSpray.replace(tommy, "");
    if(lou.test(tutone) == true) {
      tutone = tutone.slice(3)
     } else {
        tutone
     }
     jenny = tutone.match(matchCar)
    if (jenny[1] == undefined) {
      walter = jenny[2] + '-' + jenny[3]
    } else if (jenny[1] == undefined) {
        walter = jenny[1] + '-' + jenny[2] + '-' + jenny[3]
      
    }
    blab(walter) 
    }

/*document.addEventListener('submit', (e) => {
  e.preventDefault()
  if(another.checked == true && off.validity.valid) {
    document.getElementById('copyPhoneTwo').innerHTML = " " + off.value + " call back number"
  } else {
    return null
  }
})*/

/*document.addEventListener('submit', (e) => {
  e.preventDefault()
    if(!off.validity.valid) {
      phoneMalfunction() 
    } else {
      offHookProb.innerHTML = '';
      offHookProb.className = 'error'
      
    }
})*/


function phoneyError() {
  
  if (phoney.validity.valueMissing) {
    phoneProb.textContent = 'Need a number'
  } else if(phoney.validity.patternMismatch) {
    phoneProb.textContent = "Not that number"
  }
}

function phoneMalfunction() {
  
    if (off.validity.valueMissing) {
      offHookProb.textContent = 'Need a number'  
    } else if(off.validity.patternMismatch) {
      offHookProb.textContent = "Not that number"
    }
  }

function hungUp() {
  if (fudge.validity.valueMissing) {
    brokenHeart.textContent = "Check that 'Hang Up' box or enter something"
  }
}

function messenger() {
  if (hangup.checked == true) {
    /*document.getElementById("copyMsg").innerHTML = "Message: Hang Up" + '<button id="doodly" type="button">Copy</button>'
    var doodly = document.getElementById('doodly');
    doodly.addEventListener('click', () => {
    console.log("I werk, as well!")})*/
    document.getElementById('copyMsg').innerHTML = '<span>Message: <pre id="msging" class="previous">Hang Up</pre></span><button id="doodly" type="button">Copy</button>'
    var msgWerk = document.getElementById('doodly');
    var copiedMsg = () => {
      
      var range = document.createRange();
      range.selectNode(msging);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    msgWerk.addEventListener('click', copiedMsg);
} else {
  document.getElementById('copyMsg').innerHTML = '<span>Message: <pre id="msging" class="previous">' + fudge.value + '</pre></span>'
  + '<button id="doodly" type="button">Copy</button>'
  var msgWerk = document.getElementById('doodly');
  var copiedMsg = (msging) => {
    
      var msging = document.getElementById('msging');
      
      var range = document.createRange();
      range.selectNode(msging);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
  }
  msgWerk.addEventListener('click', copiedMsg);
}
}

let msgBox = (e) => {
  e.preventDefault()
  if(!fudge.validity.valid) {
    hungUp()
  } else {
    brokenHeart.innerHTML = '';
    brokenHeart.className = 'error'
    messenger()
  }
}




function ugh() {
    
    if(another.checked != true) {
       console.log('unchecked')
       off.removeAttribute('required')
    } else {
        console.log('checked')
        off.setAttribute('required', 'required')
    }
    }
    
    function oogh() {
        
        if(noWay.checked == true) {
            console.log('checked_another')
            fudge.removeAttribute('required')
        } else {
            fudge.setAttribute('required', 'required')
            console.log('no check')
        } 
        }
let londonCalling = (e) => {
  e.preventDefault()
  if(!phoney.validity.valid) {
    phoneyError()
  } else {
    phoneProb.innerHTML = '';
    phoneProb.className = 'error'
    blab()
    blob()
  }
}

function blab() {
  var goodTime = phoney.value
   
 
  tutone = goodTime.replace(tommy, "");
  if(lou.test(tutone) == true) {
    tutone = tutone.slice(3)
   } else {
      tutone
   }
   jenny = tutone.match(matchCar)
  if (jenny[1] == undefined) {
    mathis = jenny[2] + '-' + jenny[3]
  } else if (jenny[1] != undefined) {
      mathis = jenny[1] + '-' + jenny[2] + '-' + jenny[3]
    
  } 

  if(another.checked == true) {
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoning" class="previous">' + mathis + ' called from; ' + walter + ' call back number</pre></span>' + '<button id="riddly" type="button">Copy</button>'
    var riddly = document.getElementById('riddly');
    var copyPhoning = (phoning) => {
      var phoning = document.getElementById('phoning');
      var range = document.createRange();
      range.selectNode(phoning);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    riddly.addEventListener('click', copyPhoning) 
  

  } else {
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone:<pre id="phoning" class="previous">' + mathis + '</pre></span>' + '<button id="riddly" type="button">Copy</button>'
    var riddly = document.getElementById('riddly');
    var copyPhoning = (phoning) => {
    var phoning = document.getElementById('phoning');
    var range = document.createRange();
    range.selectNode(phoning);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    }
    riddly.addEventListener('click', copyPhoning) 
  } 
  
    var copierName = document.getElementById('copierName')
    var copierPhoneOne = document.getElementById('copierPhoneOne')
    var copierMsg = document.getElementById('copierMsg')
    copierName.innerHTML = 'Name: ' + named.value;
    if(hangup.checked == true) {
      copierMsg.innerHTML = "Message: Hang Up"
    } else {
      copierMsg.innerHTML = "Message: " + fudge.value
    }
    if(another.checked == true) {
      copierPhoneOne.innerHTML = 'Phone: ' + mathis + ' called from; ' + walter + ' call back number' 
    } else {
      copierPhoneOne.innerHTML = 'Phone: ' + mathis
    };
}
  var dysfunctional = (transcribe) => { 
   //e.preventDefault()
  var transcribe = document.querySelector('.transcribe')
  var but = document.createElement('button')
  //var  = document.querySelector('body')
  transcribe.appendChild(but)
  but.innerText = 'Copy'
  copierDeux.style.display = 'block'
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
setAttributes(but, {"type": "button", "id": "copierDeux"});
}
document.addEventListener('submit', dysfunctional);

var copyScribble = (transcribble) => {
  transcribble = document.querySelector('.transcribble');
  
 
  
  var range = document.createRange();
  range.selectNode(transcribble);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  console.log("Pressed");
  

  //copyScribble();
}





  
setup()
noWay.addEventListener('change', oogh);
another.addEventListener('change', ugh);
document.addEventListener('submit', msgBox);
document.addEventListener('submit', londonCalling);
document.addEventListener('submit', nameSub);
copierDeux.addEventListener('click', copyScribble)

/* var jenny = "812-867-5309";
var tommy = new RegExp('[\(\)]|-', 'g');

jenny.replace(tommy, "") 

round 2 

var jenny = "(812) 867-5309";
var tommy = new RegExp('[\(\)]|\\s|-', 'g');

jenny.replace(tommy, "")

*/

/* var n = "1234567899";
n.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"); */


/*  Possible way to recombine number after checking it...

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}
*/

/*  Visual Studio Code is turning into my scratchpad ....
var jenny = "(812) 867-5309";
var tommy = new RegExp('[\(\)]|\\s|-', 'g');

var tutone = jenny.replace(tommy, "");

var goodTime = tutone.match(/^(\d{3})?(\d{3})(\d{4})$/)

if (goodTime) {
   goodTime[1] + '-' + goodTime[2] + '-' + goodTime[3]
  }
*/

/* Mister Tutone, you got issues... 
var jenny = "502-867-1805";
var tommy = /[\(\)]|\\s|-/g;
var ree = /^\d{7}(?:\d{3})?$/g;
var tutone = jenny.replace(tommy, "");

function check () {
if(ree.test(tutone) == true) {
  return "Got it!"
} else {
 return "Nope!"
}
}
function call() {
var goodTime = tutone.match(/^(\d{3})?(\d{3})(\d{4})$/)

if (goodTime) {
   return goodTime[1] + '-' + goodTime[2] + '-' + goodTime[3]
  } return null
}
call()
*/

/* 
//var blank = document.querySelectorAll('[data-phone]')
var bank = document.getElementsByClassName('require-active')

show.forEach((bank) => {
if (bank.checked != true) {
bank.setAttribute('required', 'required')}
else {
bank.removeAttribute('required')}})
*/
/*  
It never ends...how to remove the first three digits...
var baloney = phoney.value.replace(tommy, "")
var sammich = baloney.slice(3)
sammich

Trying to remove the 502. If any phone numbers have 502 as the area code, they are considered local and the 502 is omitted.

var baloney = phoney.value.replace(tommy, "")
var cheese = /502/
function conjunc() {
if (cheese.test(baloney) == true)
  { return baloney.slice(3)}
  else {
    return baloney}

}
conjunc()

var regex = /\d{5}/;
element.setAttribute("pattern", regex.source);
*/
/*potential RegEx with and without area code ^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$ */




