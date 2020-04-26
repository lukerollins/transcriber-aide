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

var lou = /502/;
const forms = document.getElementsByTagName('form');
let callMee = document.querySelectorAll('input[type="tel"]');



for(let c = 0; c < callMee.length; c++) {
  callMee[c].setAttribute('pattern', ree.source)
}


for(let f = 0; f < forms.length; f++) {
  forms[f].setAttribute('novalidate', true);
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
    document.getElementById('copyName').innerHTML = "Name: " + named.value
    + '<button id="diddly" type="button">Copy</button>'
    var werk = document.getElementById('diddly');
    werk.addEventListener('click', () => {
    console.log("I werk!")
})
  }
}

document.addEventListener('submit', nameSub)

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

var blab = () => {
  if(another.checked == true) {
    document.getElementById('copyPhoneOne').innerHTML = "Phone: " + phoney.value + " called from; " + off.value + " call back number"
  } else {
    document.getElementById('copyPhoneOne').innerHTML = "Phone: " + phoney.value
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
    
  }
}

document.addEventListener('submit', londonCalling)

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

function daVille() {
  var tommy = /[\(\)]|\s|\-/g;
  let tutone = phoney.value.replace(tommy, "")
  //let goodTime = tutone.match(/^(\d{3})?(\d{3})(\d{4})$/)
   if(lou.test(tutone) == true) {
    return tutone.slice(3)
   } else {
     return tutone
   }
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
    document.getElementById("copyMsg").innerHTML = "Message: Hang Up" 
  } else {
    document.getElementById("copyMsg").innerHTML = "Message: " + fudge.value
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
document.addEventListener('submit', msgBox)



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
    

noWay.addEventListener('change', oogh);
another.addEventListener('change', ugh);


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




