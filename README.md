# password-generator

https://mdgragg.github.io/password-generator/

Including promts to find out how long/what the user wants to included in their password. 
HTML and CSS provided.

Added 4 arrays: uppercass letters, lowercase letteres, numbers, and special characters.

Added promt for asking how long of a password the user wants. --- if users doesn't enter a number they recieve an alert to "Enter a number!".

After the user enters a number between 8 - 128 then it will continue to ask 4 more questions: if the password will include uppercase, lowercase, numbers, and special characters.

"if" statement --- if users doesn't say ok to any of the questions then they'll recieve an alert to "Say 'OK' to something!". 

"else if" statement --- if user answers ok to all the promts.

4 "else if" statements --- if user answers ok to 3/4 the promts. identifing which 3 confirms were picked and then using "concat" to combind those arrays

6 "else if" statements --- if user answers ok to 2/4 the promts. identifing which 2 confirms were picked and then using "concat" to combind those arrays

4 "else if" statements --- if user answers ok to 1/4 the promts. identifing which confirm was picked then linking it to the right array to use.

After if else statements and determining which arrays to use or combind a for loop is used to randomize the characters.

Added ".join" to combined the array and "document.querySelector("#password").textContent = password;" to write the password.




