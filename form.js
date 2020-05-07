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
//const digit = new RegExp(/\d+/);
let theNumbers = document.getElementById("theNumbers");
let numberError = document.querySelector('#theNumbers + span.error')
var transcribble
var lou = /502/;
var tommy = /[\(\)]|\s|\-/g; 
var matchCar = /^(\d{3})?(\d{3})(\d{4})$/;
var jenny
var tutone
var mathis 
var walter
copierDeux = document.getElementById('copierDeux')


var tooltips = () => {
//e.preventDefault()

var btns = document.querySelectorAll('button[type="button"]');
for (var i = 0; i < btns.length; i++) {
  btns[i].classList.add('tooltip');
  btns[i].setAttribute('title', 'Copied');
}

}


function setup() {
let callMee = document.querySelectorAll('input[type="tel"]');
const forms = document.getElementsByTagName('form');
let digit = new RegExp(/\d+/);
for(let c = 0; c < callMee.length; c++) {
  callMee[c].setAttribute('pattern', ree.source)
}

  //newFunction();

for(let f = 0; f < forms.length; f++) {
  forms[f].setAttribute('novalidate', true);
}
theNumbers.setAttribute('pattern', digit.source);
  /*function newFunction() {
    for (let n = 0; n < theNumbers.length; n++) {
      theNumbers[n].setAttribute('pattern', digit.source);
    }
  }*/
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
    document.getElementById('copyName').innerHTML = '<span>Name:<pre id="naming" class="previous">' + named.value + '</pre></span>'
    + '<button id="diddly" type="button" class="inputs">Copy</button>'
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

function namingError() {
  if (named.validity.valueMissing) {
    namedError.textContent = 'Need a name. "None", "None given" or somehting of the sort will work, too.';
  }
}

function numeralError() {
  if (theNumbers.validity.valueMissing) {
    numberError.textContent = "Need the row number. One more than the actual row, remember"
  } else if (theNumbers.validity.patternMismatch) {
    "Can't be a decimal or negative number. Rows can't be either of those."
  }
}

let numberSubs = (e) => {
  e.preventDefault()
  if (!theNumbers.validity.valid) {
    numeralError()
  } else {
    numberError.innerHTML = '';
    numberError.className = 'error'
    document.getElementById('numberedCopy').innerHTML = '<span>Row Number: <pre id="numbering" class="previous">' + theNumbers.value + '</pre></span><button id="chalmers" type="button" class="inputs">Copy</button> /// <span>Subject: <pre id="subjective" class="previous">#' + theNumbers.value + '</pre></span><button id="skinner" type="button" class="inputs">Copy</button>'
    var chalmers = document.getElementById('chalmers');
    var skinner = document.getElementById('skinner');
    var copyNum = () => {
      //ev.preventDefault();
      var numbering = document.getElementById('numbering');
      var range = document.createRange();
      range.selectNode(numbering);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    chalmers.addEventListener('click', copyNum);
    var copySubject = () => {
      var subjective = document.getElementById('subjective');
      var range = document.createRange();
        range.selectNode(subjective);
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }
    skinner.addEventListener('click', copySubject);
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

  function blob() {
    var bugSpray = off.value
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
    document.getElementById('copyMsg').innerHTML = '<span>Message: <pre id="msging" class="previous">Hang Up</pre></span><button id="doodly"type="button" class="inputs">Copy</button>'
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
  + '<button id="doodly" type="button" class="inputs">Copy</button>'
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
    dysfunctional()
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
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoning" class="previous">' + mathis + ' called from; ' + walter + ' call back number</pre></span>' + '<button id="riddly" type="button" class="inputs">Copy</button>'
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
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoning" class="previous">' + mathis + '</pre></span>' + '<button id="riddly" type="button" class="inputs">Copy</button>'
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
   
  var transcribe = document.querySelector('.transcribe')
  //var hOne = document.createElement('h1')
  var but = document.createElement('button')
  //var  = document.querySelector('body')
  transcribe.appendChild(but)
  //transcribe.appendChild(hOne)
  //hOne.innerText = 'Singular'
  but.innerText = 'Copy'
  copierDeux.style.display = 'block'
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
setAttributes(but, {"type": "button", "id": "copierDeux"});
}
//document.addEventListener('submit', dysfunctional);

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
/*function showTooltip(elem, msg) {
  elem.setAttribute('class', 'tooltip');
  elem.setAttribute('title', msg);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute('class', 'btn');
  e.currentTarget.removeAttribute('title');
}*/
 
setup()
noWay.addEventListener('change', oogh);
another.addEventListener('change', ugh);
document.addEventListener('submit', msgBox);
document.addEventListener('submit', londonCalling);
document.addEventListener('submit', nameSub);
copierDeux.addEventListener('click', copyScribble)
document.addEventListener('submit', numberSubs)
document.addEventListener('submit', tooltips)