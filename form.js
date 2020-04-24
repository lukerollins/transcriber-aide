/*Might need this to show today's date...I'm thinking of using as the place holder for a date input...

const today = new Date();
today.now()*/

//let hangUp = document.getElementById('hangup-yes');
//let hangOn = document.getElementById('hangup-no');

/*function phoney() {
    //let valUp = hangUp.value;
    //console.log(valUp); 

}
// /^\d{7}(?:\d{3})?$/*/

//let caller = document.getElementById("phoney");
let named = document.getElementById("name");
let namedError = document.querySelector("#name + span.error");
let another = document.querySelector('input[value="from"]');
let from = document.getElementById('from');
let checker = document.getElementsByClassName("require-active");
let show = document.querySelectorAll('[data-phone]');
//let tell = noWay.getAttribute('data-reveal');
//let x = document.getElementById("hook");
let fudge = document.getElementById("hook");
let noWay = document.querySelector('input[value="hangup"]');
let hangup = document.getElementById('hangup');
let off = document.getElementById("you-not");
let phoney = document.querySelector('#phoney');
//let phoneyTwo = phoney.value;
let phoneProb = document.querySelector('#phoney + span.error')
//let ringu = document.getElementById('ringu');
//let who =
var tommy = new RegExp(/[\(\)]|\s|\-/g);
//const ree = new RegExp(/^\d{7}(?:\d{3})?$/g);
const ree = new RegExp(/^(\d{3})?(\d{3})(\d{4})$/);
const meow = document.getElementById("meow");
var lou = /502/;
const forms = document.getElementsByTagName('form');
let callMee = document.querySelectorAll('input[type="tel"]')


//const chek = document.querySelectorAll('input[type="checkbox"]')

/*function regPhone(e) {
    e.preventDefault();

}*/
var phoneBlargh = () => {
  var baloney = phoney.value.replace(tommy, "");
  if (ree.test(baloney) != true) {
    return;
  }
    
  
}

for(let c = 0; c < callMee.length; c++) {
  callMee[c].setAttribute('pattern', ree.source)
}


for(let f = 0; f < forms.length; f++) {
  forms[f].setAttribute('novalidate', true);
}

let erroneous = (field) => {
  if (from.checked != true || hangup.checked != true || field.type === '' ) return;
}

/*function validation() {
  if(ree.test(phoney.value))
  {
    phoney.setCustomValidity(console.log('Yup'))
  } else {
    phoney.setCustomValidity(console.log('Nope'))
  }
}

function validator() {
  if(another.checked == true) {
    if(ree.test(off.value)) {
       off.setCustomValidity(console.log('Okiley dokily'))
    } else {
       off.setCustomValidity(console.log("D'oh"))
    }
  } else {
     console.log("Don't have a cow")
  }
}*/
/*var constraint = new RegExp(ree);
console.log(constraint);
phoney.addEventListener('input', validation)
off.addEventListener('input', validator)
function subMission(e) {
  e.preventDefault();
  let hooked = hangUp()
  let junk = conjunc()
  let train = conduct()
  console.log(hooked);
  console.log(named.value);  
  console.log(junk);
  console.log(train);  
}*/

/*function youI() {
  addEventListener('click', conditional)
  console.log('frack')
}*/



/*function conditional() {
  //var bank = document.getElementsByClassName('require-active')

show.forEach((checker) => {
if (checker.checked == !true) {
checker.setAttribute('required', 'required')}
else {
checker.removeAttribute('required')}})
console.log("ugh")
}*/

//addEventListener('change', conditional)
//addEventListener('click', bindUI)

/*function conjunc() {
  var baloney = phoney.value.replace(tommy, "");
  if (ree.test(baloney) == true) {
    if (lou.test(baloney) == true)
    { return baloney.slice(3) && phoney.setCustomValidity(console.log('Yum'))}
    else {
      return baloney && phoney.setCustomValidity(console.log('Still yummy'))}
  } 
   else {
     return "Oscar Meyer!" && phoney.setCustomValidity(console.log('Hungry'))
   }
      
  }*/

/*function conduct() {
  if (lou.test(cheese) == true)
    {return cheese.slice(3)
    } else {
      return cheese
    } 
}*/

/*function conduct() {
  var cheese = off.value.replace(tommy, "");
  if (another.checked == true)
  { if (ree.test(cheese) == true)
    { if(lou.test(cheese) == true) {
      return cheese.slice(3)
    } else {return cheese}
  }
  } else {
    return "Rats!!!"
  }
}

function hangUp() {
  if (fudge.hasAttribute('required')) {
    return fudge.value
  } else {
    return "Nope!"
  }
}*/

document.addEventListener('submit', (e) => {
  e.preventDefault()
  if(!named.validity.valid) {
    namingError()
  } else {
    namedError.innerHTML = '';
    namedError.className = 'error'
  }
})

function namingError() {
  if (named.validity.valueMissing) {
    namedError.textContent = 'Need a name. "None", "None given" or somehting of the sort will work, too.';
  }
}

document.addEventListener('submit', (e) => {
  e.preventDefault()
  if(!phoney.validity.valid) {
    phoneyError()
  } else {
    phoneProb.innerHTML = '';
    phoneProb.className = 'error'
  }
})

function phoneyError() {
  if (phoney.validity.valueMissing) {
    phoneProb.textContent = 'Need a number'
  } else if (phoney.validity.patternMismatch)
  { phoneProb.textContent = "That kinda number"}
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
    
//console.log(baloney)
//console.log(cheese)
//meow.addEventListener('click', subMission);
/*named.addEventListener('', () => {
  if(named.validity.valid) {
    namedError.innerHTML = '';
    namedError.className = 'error'
  } else {
    namingError();
  }
})*/
noWay.addEventListener('change', oogh);
another.addEventListener('change', ugh);
//document.addEventListener('input')
//document.addEventListener('input', regPhone)

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




