/*Might need this to show today's date...I'm thinking of using as the place holder for a date input...

const today = new Date();
today.now()*/

let name = document.getElementById("name");
let nameError = document.querySelector("#name + span.error");
let fromValue = document.querySelector('input[value="from"]');
let from = document.getElementById('from');
let message = document.getElementById("message");
let messageError = document.querySelector('#message + span.error')
let hungUpMsg = document.querySelector('input[value="hangup"]');
let hangup = document.getElementById('hangup');
let callBack = document.getElementById("callBack");
var phone = document.getElementById('phone');
let phoneError = document.querySelector('#phone + span.error')
let callBackError = document.querySelector('#callBack + span.error')
//const digit = new RegExp(/\d+/);
let rowAndSubject = document.getElementById("rowAndSubject");
let rowAndSubjectError = document.querySelector('#rowAndSubject + span.error')
var transcribeForEmailBox
var lou = /502/;
var parenthesisAndDash = /[\(\)]|\s|\-/g; 
var formatMatch = /^(\d{3})?(\d{3})(\d{4})$/;
var digitsToFormat
var phoneToFormat
var mathis 
var fullyFormatedPhoneFrom
copierForEmail = document.getElementById('copierForEmail')
//var copied = document.querySelectorAll('[data-copier]')


function tooltips() {
var btns = document.querySelectorAll('button[type="button"]');
for (var i = 0; i < btns.length; i++) {
  btns[i].classList.add('tooltip');
  btns[i].setAttribute('title', 'Copied');
  }
}


function setup() {
let phoneToCheck = document.querySelectorAll('input[type="tel"]');
const forms = document.getElementsByTagName('form');
let digit = new RegExp(/\d+/);
const phoneRegEx = new RegExp(/^(?:\(?([0-9]{3})\)?[-.*\s]?)?([0-9]{3})[-.*\s]?([0-9]{4})$/g);
for(let c = 0; c < phoneToCheck.length; c++) {
  phoneToCheck[c].setAttribute('pattern', phoneRegEx.source)
}

for(let f = 0; f < forms.length; f++) {
  forms[f].setAttribute('novalidate', true);
}
rowAndSubject.setAttribute('pattern', digit.source);
  /*function newFunction() {
    for (let n = 0; n < rowAndSubject.length; n++) {
      rowAndSubject[n].setAttribute('pattern', digit.source);
    }
  }*/
}

function erroneous(field) {
  if (from.checked != true || hangup.checked != true || field.type === '' ) return;
}




function theCopyMachine(id) {
  if (!navigator.clipboard) {
    // Clipboard API not available
    console.log("F Bomb!")
    return
  }
  const textToCopy = id.innerText
  try {
    navigator.clipboard.writeText(textToCopy)
   console.log('Copied to clipboard', textToCopy)
  } catch (err) {
    console.error('Failed to copy!', err)
  }
}

function submitName(e) {
  e.preventDefault()
  if(!name.validity.valid) {
    namingError()
  } else {
    nameError.innerHTML = '';
    nameError.className = 'error'
    document.getElementById('copyName').innerHTML = '<span>Name: <pre data-copier="name" id="preOne" class="preStyles">' + name.value + '</pre></span>'
    + '<button id="diddly" type="button" class="inputs buttonStyle">Copy</button>'
    
    var namedWerk = document.getElementById('diddly');
    
} 
namedWerk.addEventListener('click', (e) => {
  e.preventDefault()
  theCopyMachine(namer)});
var namer = document.querySelector('#preOne');
//theCopyMachine(e, namer)
} 


function namingError() {
  if (name.validity.valueMissing) {
    nameError.textContent = 'Need a name. "None", "None given" or somehting of the sort will work, too.';
  }
}

function numeralError() {
  if (rowAndSubject.validity.valueMissing) {
    rowAndSubjectError.textContent = "Need the row number. One more than the actual row, remember"
  } else if (rowAndSubject.validity.patternMismatch) {
    "Can't be a decimal or negative number. Rows can't be either of those."
  }
}



let rowAndSubjectSubmit = (e) => {
  e.preventDefault()
  if (!rowAndSubject.validity.valid) {
    numeralError()
  } else {
    rowAndSubjectError.innerHTML = '';
    rowAndSubjectError.className = 'error'
    document.getElementById('numberAndSubjectCopy').innerHTML = '<span>Row Number: <pre data-copier="numerals" id="sheetRowNum" class="preStyles">' + rowAndSubject.value + '</pre></span><button id="subject" type="button" class="inputs buttonStyle">Copy</button>   <span>Subject: <pre id="emailSubject" class="preStyles">#' + rowAndSubject.value + '</pre></span><button id="row" type="button" class="inputs buttonStyle">Copy</button>'
    var subject = document.getElementById('subject');
    var row = document.getElementById('row');
    row.addEventListener('click', (e) =>{
      e.preventDefault()
      var emailSubject = document.getElementById('emailSubject')
      theCopyMachine(emailSubject)});
    subject.addEventListener('click', (e) =>{
      e.preventDefault()
      var sheetRowNum = document.getElementById('sheetRowNum')
      theCopyMachine(sheetRowNum)});
  }
} 

let displayCallBackError = (e) => {
  e.preventDefault()
  if(!callBack.validity.valid) {
    displayCallBackProblem() 
  } else {
    callBackError.innerHTML = '';
    callBackError.className = 'error'
  }
}

document.addEventListener('submit', displayCallBackError)

function phoneFormatTwo() {
  var bugSpray = callBack.value
  phoneToFormat = bugSpray.replace(parenthesisAndDash, "");
  if(lou.test(phoneToFormat) == true) {
    phoneToFormat = phoneToFormat.slice(3)
    } else {
      phoneToFormat
    }
    digitsToFormat = phoneToFormat.match(formatMatch)
  if (digitsToFormat[1] == undefined) {
    fullyFormatedPhoneFrom = digitsToFormat[2] + '-' + digitsToFormat[3]
  } else if (digitsToFormat[1] != undefined) {
      fullyFormatedPhoneFrom = digitsToFormat[1] + '-' + digitsToFormat[2] + '-' + digitsToFormat[3]
    
  }
  phoneFormatOne(fullyFormatedPhoneFrom) 
}


function phoneyProblem() {
  if (phone.validity.valueMissing) {
    phoneError.textContent = 'Need a number'
  } else if(phone.validity.patternMismatch) {
    phoneError.textContent = "Not that number"
  }
}

function displayCallBackProblem() {
  if (callBack.validity.valueMissing) {
    callBackError.textContent = 'Need a number'  
  } else if(callBack.validity.patternMismatch) {
    callBackError.textContent = "Not that number"
  }
}

function hungUp() {
  if (message.validity.valueMissing) {
    messageError.textContent = "Check that 'Hang Up' box or enter something"
  }
}

function messageDisplay() {
  if (hangup.checked == true) {
    document.getElementById('copyMsg').innerHTML = '<span>Message: <pre id="msging" class="preStyles">Hang Up</pre></span><button id="msgDisplayCopyButton" type="button" class="inputs buttonStyle">Copy</button>'
    var msgDisplayCopied = document.getElementById('msgDisplayCopyButton')
} else {
  document.getElementById('copyMsg').innerHTML = '<span>Message: <pre id="msging" class="preStyles">' + message.value + '</pre></span>'
  + '<button id="msgDisplayCopyButton" type="button" class="inputs buttonStyle">Copy</button>'
  var msgDisplayCopied = document.getElementById('msgDisplayCopyButton');
  }
  msgDisplayCopied.addEventListener('click', (e) => {
    e.preventDefault()
    var msging = document.getElementById('msging')
    theCopyMachine(msging)});
    
  }



let submitMsg = (e) => {
  e.preventDefault()
  if(!message.validity.valid) {
    hungUp()
  } else {
    messageError.innerHTML = '';
    messageError.className = 'error'
    messageDisplay()
    dysfunctional()
  }
}

function calledFromAnotherNum() {
  if(fromValue.checked != true) {
      console.log('unchecked')
      callBack.removeAttribute('required')
  } else {
      console.log('checked')
      callBack.setAttribute('required', 'required')
  }
}
    
function didTheyHangUp() {   
  if(hungUpMsg.checked == true) {
      console.log('checked_another')
      message.removeAttribute('required')
  } else {
      message.setAttribute('required', 'required')
      console.log('no check')
  } 
}

let submitPhoneNum = (e) => {
  e.preventDefault()
  if(!phone.validity.valid) {
    phoneyProblem()
  } else {
    phoneError.innerHTML = '';
    phoneError.className = 'error'
    phoneFormatOne()
    phoneFormatTwo()
  }
}

function phoneFormatOne() {
  var phoneRaw = phone.value
  phoneToFormat = phoneRaw.replace(parenthesisAndDash, "");
  if(lou.test(phoneToFormat) == true) {
    phoneToFormat = phoneToFormat.slice(3)
   } else {
      phoneToFormat
   }
   digitsToFormat = phoneToFormat.match(formatMatch)
  if (digitsToFormat[1] == undefined) {
    mathis = digitsToFormat[2] + '-' + digitsToFormat[3]
  } else if (digitsToFormat[1] != undefined) {
      mathis = digitsToFormat[1] + '-' + digitsToFormat[2] + '-' + digitsToFormat[3]
    
  } 

  if(fromValue.checked == true) {
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoneNum" class="preStyles">' + mathis + ' called from; ' + fullyFormatedPhoneFrom + ' call back number</pre></span>' + '<button id="copyPhoneNum" type="button" class="inputs buttonStyle">Copy</button>'
    var copyPhoneNum = document.getElementById('copyPhoneNum');
  } else {
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoneNum" class="preStyles">' + mathis + '</pre></span>' + '<button id="copyPhoneNum" type="button" class="inputs buttonStyle">Copy</button>'
    var copyPhoneNum = document.getElementById('copyPhoneNum');
    }
    copyPhoneNum.addEventListener('click', (e) => {
      e.preventDefault()
      var phoneNum = document.getElementById('phoneNum')
      theCopyMachine(phoneNum)}) 

  
  
  
  
    var copierName = document.getElementById('copierName')
    var copierPhoneOne = document.getElementById('copierPhoneOne')
    var copierMsg = document.getElementById('copierMsg')
    copierName.innerHTML = 'Name: ' + name.value;
    if(hangup.checked == true) {
      copierMsg.innerHTML = "Message: Hang Up"
    } else {
      copierMsg.innerHTML = "Message: " + message.value
    }
    if(fromValue.checked == true) {
      copierPhoneOne.innerHTML = 'Phone: ' + mathis + ' called from; ' + fullyFormatedPhoneFrom + ' call back number' 
    } else {
      copierPhoneOne.innerHTML = 'Phone: ' + mathis
    }
    
  }
  var dysfunctional = (transcriberTwo) => {
  transcribeForEmailBox = document.querySelector('.transcribeForEmailBox') 
  transcribeForEmailBox.style.display = 'block'; 
  var transcriberTwo = document.querySelector('.transcriberTwo')
  var createButton = document.createElement('button')
  transcriberTwo.appendChild(createButton)
  createButton.innerText = 'Copy'
  copierForEmail.style.display = 'block'
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
setAttributes(createButton, {"type": "button", "id": "copierForEmail"});
}
function copyForEmailBox() {
  transcribeForEmailBox = document.querySelector('.transcribeForEmailBox');
    if (!navigator.clipboard) {
      // Clipboard API not available
      console.log("F Bomb!")
      return
    }
    const textToCopy = transcribeForEmailBox.innerText
    try {
     navigator.clipboard.writeText(textToCopy)
     console.log('Copied to clipboard', textToCopy)
    } catch (err) {
      console.error('Failed to copy!', err)
    } 
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
hungUpMsg.addEventListener('change', didTheyHangUp);
fromValue.addEventListener('change', calledFromAnotherNum);
document.addEventListener('submit', submitMsg);
document.addEventListener('submit', submitPhoneNum);
document.addEventListener('submit', submitName);
copierForEmail.addEventListener('click', copyForEmailBox)
document.addEventListener('submit', rowAndSubjectSubmit)
document.addEventListener('submit', tooltips)
/*document.getElementById('transcriberOne').addEventListener('click', (e) => {
  console.log(e.target)
})*/


