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
let rowAndSubject = document.getElementById("rowAndSubject");
let rowAndSubjectError = document.querySelector('#rowAndSubject + span.error')
var local = /502/;
var parenthesisAndDash = /[\(\)]|\s|\-/g; 
var formatMatch = /^(\d{3})?(\d{3})(\d{4})$/;
var digitsToFormat
var fullyFormattedPhoneOne 
var fullyFormattedPhoneTwo


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
}

function erroneous(field) {
  if (from.checked != true || hangup.checked != true || field.type === '' ) return;
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


function namingError() {
  if (name.validity.valueMissing) {
    nameError.textContent = 'Need a name. "None", "None given" or somehting of the sort will work, too.';
  }
}

function rowAndSubjectErrorFunc() {
  if (rowAndSubject.validity.valueMissing) {
    rowAndSubjectError.textContent = "Need the row number. One more than the actual row, remember"
  } else if (rowAndSubject.validity.patternMismatch) {
    "Can't be a decimal or negative number. Rows can't be either of those."
  }
}

function hungUp() {
  if (message.validity.valueMissing) {
    messageError.textContent = "Check that 'Hang Up' box or enter something"
  }
}

function phoneMatchError() {
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

let theCopyMachine = (id) => {
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

let submitName = (e) => {
  e.preventDefault()
  if(!name.validity.valid) {
    namingError()
  } else {
    nameError.innerHTML = '';
    nameError.className = 'error'
    document.getElementById('copyName').innerHTML = '<span>Name: <pre id="nameToCopy" class="preStyles">' + name.value + '</pre></span>'
    + '<button id="copyNameButton" type="button" class="inputs buttonStyle">Copy</button>'
    var copyNameClicked = document.getElementById('copyNameButton');
    copyNameClicked.addEventListener('click', (e) => {
      e.preventDefault()
      theCopyMachine(namer)});
    var namer = document.querySelector('#nameToCopy');
    }  
} 

let rowAndSubjectSubmit = (e) => {
  e.preventDefault()
  if (!rowAndSubject.validity.valid) {
    rowAndSubjectErrorFunc()
  } else {
    rowAndSubjectError.innerHTML = '';
    rowAndSubjectError.className = 'error'
    document.getElementById('numberAndSubjectCopy').innerHTML = '<span>Call Number: <pre id="sheetRowNum" class="preStyles">' + rowAndSubject.value + '</pre></span><button id="subject" type="button" class="inputs buttonStyle">Copy</button>   <span>Subject: <pre id="emailSubject" class="preStyles">#' + rowAndSubject.value + '</pre></span><button id="row" type="button" class="inputs buttonStyle">Copy</button>'
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


let messageDisplay = () => {
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
    //createTranscribeForEmailButton()
  }
}

let phoneFormatOne = () => {
  var phoneToFormat
  var phoneRaw = phone.value
  phoneToFormat = phoneRaw.replace(parenthesisAndDash, "");
  if(local.test(phoneToFormat) == true) {
    phoneToFormat = phoneToFormat.slice(3)
   } else {
      phoneToFormat
   }
   digitsToFormat = phoneToFormat.match(formatMatch)
  if (digitsToFormat[1] != undefined) {
    //fullyFormattedPhoneOne = digitsToFormat[2] + '-' + digitsToFormat[3]
    fullyFormattedPhoneOne = digitsToFormat[1] + '-' + digitsToFormat[2] + '-' + digitsToFormat[3]
  } else if (digitsToFormat[1] == undefined) {
      //fullyFormattedPhoneOne = digitsToFormat[1] + '-' + digitsToFormat[2] + '-' + digitsToFormat[3]
      fullyFormattedPhoneOne = digitsToFormat[2] + '-' + digitsToFormat[3]
  } 
  //phoneFormatTwo(fullyFormattedPhoneOne)
  createPhoneNumberSection(fullyFormattedPhoneOne)
}

let phoneFormatTwo = () => {
  var phoneToFormat
  var phoneRawTwo = callBack.value
  phoneToFormat = phoneRawTwo.replace(parenthesisAndDash, "");
  if(local.test(phoneToFormat) == true) {
     phoneToFormat = phoneToFormat.slice(3)
    } else {
      phoneToFormat
    }
    digitsToFormat = phoneToFormat.match(formatMatch)
  if (digitsToFormat[1] != undefined) {
    fullyFormattedPhoneTwo = digitsToFormat[1] + '-' + digitsToFormat[2] + '-' + digitsToFormat[3]
    //fullyFormattedPhoneTwo = digitsToFormat[2] + '-' + digitsToFormat[3]
  } else if (digitsToFormat[1] == undefined) {
      //fullyFormattedPhoneTwo = digitsToFormat[1] + '-' + digitsToFormat[2] + '-' + digitsToFormat[3]
      fullyFormattedPhoneTwo = digitsToFormat[2] + '-' + digitsToFormat[3]
    
  }
  //phoneFormatOne(fullyFormattedPhoneTwo) 
  createPhoneNumberSection(fullyFormattedPhoneTwo)
}

let createPhoneNumberSection = () => {
  if(fromValue.checked == true) {
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoneNum" class="preStyles">' + fullyFormattedPhoneOne + ' called from; ' + fullyFormattedPhoneTwo + ' call back number</pre></span>' + '<button id="copyPhoneNum" type="button" class="inputs buttonStyle">Copy</button>'
    var copyPhoneNum = document.getElementById('copyPhoneNum');
  } else {
    document.getElementById('copyPhoneOne').innerHTML = '<span>Phone: <pre id="phoneNum" class="preStyles">' + fullyFormattedPhoneOne + '</pre></span>' + '<button id="copyPhoneNum" type="button" class="inputs buttonStyle">Copy</button>'
    var copyPhoneNum = document.getElementById('copyPhoneNum');
    }
    copyPhoneNum.addEventListener('click', (e) => {
      e.preventDefault()
      var phoneNum = document.getElementById('phoneNum')
      theCopyMachine(phoneNum)})
}  

  let transcribeForEmail = () => {
    var copierName = document.getElementById('copierName')
    var copierPhoneOne = document.getElementById('copierPhoneOne')
    var copierMsg = document.getElementById('copierMsg')
    var transcribeForEmailBox = document.querySelector('#transcribeForEmailBox')
    var copierForEmail = document.querySelector('#copierForEmail')
    copierForEmail.style.display = 'block';
  transcribeForEmailBox.style.display = 'block';
    copierName.innerHTML = 'Name: ' + name.value;
    if(hangup.checked == true) {
      copierMsg.innerHTML = "Message: Hang Up"
    } else {
      copierMsg.innerHTML = "Message: " + message.value
    }
    if(fromValue.checked == true) {
      copierPhoneOne.innerHTML = 'Phone: ' + fullyFormattedPhoneOne + ' called from; ' + fullyFormattedPhoneTwo + ' call back number' 
    } else {
      copierPhoneOne.innerHTML = 'Phone: ' + fullyFormattedPhoneOne
    }
    copierForEmail.addEventListener('click', (e) => {
      e.preventDefault();
      theCopyMachine(transcribeForEmailBox)
    })
  }

  let submitPhoneNum = (e) => {
    e.preventDefault()
    if(!phone.validity.valid) {
      phoneMatchError()
    } else {
      phoneError.innerHTML = '';
      phoneError.className = 'error' 
      phoneFormatOne()
      
    }
  }
  //document.addEventListener('submit', displayCallBackError)

let submitCallbackNumber = (e) =>{
  e.preventDefault()
  if(!callBack.validity.valid) {
    displayCallBackProblem() 
  } else {
    callBackError.innerHTML = '';
    callBackError.className = 'error'
    phoneFormatTwo()
  }
}

document.addEventListener('submit', submitCallbackNumber)
document.addEventListener('submit', createPhoneNumberSection)

setup()
hungUpMsg.addEventListener('change', didTheyHangUp);
fromValue.addEventListener('change', calledFromAnotherNum);
document.addEventListener('submit', submitMsg);
document.addEventListener('submit', submitPhoneNum);
document.addEventListener('submit', submitName);
document.addEventListener('submit', transcribeForEmail)
document.addEventListener('submit', rowAndSubjectSubmit)
document.addEventListener('submit', tooltips)



