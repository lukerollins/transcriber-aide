# Transcriber Aide

I've been volunteering for a not for profit orgainization and one of the things I do is transcribing calls. Obviously, I wondered if there was a way to make this easier. I then remembered a talk given by [Michael Ducharm](https://ducharm.dev/) at a [JS Lou meetup](https://www.meetup.com/JSLouKY). At this particular meetup, he talked about getting started with Vue.js. He also demonstrated a [data entry app](https://mducharm.github.io/VueCallHelper/) that helped him and his fellow financial aid counselors at the Learning House save 30 minutes per day. That's what inspired me to make this handy dandy tool.

It consists of a form where you enter the call number, the name of the caller \(or something like "None" or "None given" if there isn't a name given\), the phone number, and an approximation of the message that was left. There are checkboxes in case the caller gave another number to call back, as well as one in case the call was a hang up. The former makes an input appear where one can enter the second phone number and the latter causes the textarea where one would write the message to disappear.

After everything has been entered, you click the submit button at the bottom of the form. This will create two new sections. One to right of the form that has the information you entered with a button to copy the info to the clipboard, piecemeal style. \(On github, you can copy the address of the github repo you'd like to clone to your system's clipboard by clicking a button. Essentially, this section is setup kind of like that.\) The reason for this is to allow you just copy these items to the clipboard one by one to make it easier to fill in the necessary columns. Also, if there are two phone numbers, text denoting the numbers that caller "called from" and the number to "call back" have already been created, so you don't have to write it into the phone number column yourself. Also, if you clicked the "Hang Up" checkbox, the message part will say so, and you'll be able to copy it by click just the same. In this section there's also two areas to copy the call number as both a normal number, as well one with a number and hashmark \(\#\). The former is useful when finding if the phone number(s) has called before and the latter is due to the fact the call number plus hashmark is the subject of for an e\-mail copy of the call that was made. This e\-mail will be sent to the staff.

Speaking of that e\-mail, that's where this bottom part comes in. It has parts with "Name:", "Phone:", "Message:", and pertinent information ready to be copied for the e\-mail.

When you're finally through and want to move on to the next message, all you have to do is refresh your browser and you're all set.

# A few notes:

- This thing has no frills for a reason. Namely, I wanted it to be a tool anyone could use, quickly and easily. While I might be able to host it online, I'm not 100% certain I can, so I thought I'd keep it as simple as possible. So no libraries, no frameworks, nothing that'd require a server. Just HTML, CSS, and JavaScript. That way, all you've got to do is download the \.zip file, uzip it, and open the 'index.html' in your browser.

- I used some front end validation in hopes of making this tool more intuitive. That being said, I'm not sure if my validation is all that great. If something isn't entered it won't be displayed to the right or \(in the case of a phone nubmer\) display "undefined" instead of just not displaying anything at all, except for something to tell you that you left something out or entered to wrong type of information some where.

- In a weird twist, we've been getting referrals from other agency's, and these don't always have a phone number. That means I'll have to make a checkbox similar to the one I made for the "Message"\\"Hang Up" section. This means that the whole phone number undefined thing/non-display thing actually works out for now. 

- Occasionally we get people who leave two phone numbers and either of them could be used to call them back \(like a cellphone and landline number\). This means the transcriber have to do some extra editing after the fact. I'll have to see if there's a remedy. I'm guessing select boxes?



