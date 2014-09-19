
# Jquery Count Down Timer


Here you will find Jquery Plugin for Count Down Timer in HH:MM:SS format.
I have demonstrated the use of this plugin by using it in a Demo HTML file called `index.html`.
This Plugin can be used only when we need the count down in HH:MM:SS  format.

## How to use jQuery Count Down timer:

First, get a copy of the git repo by running:

```shell
git clone git@github.com:K-7/jquery_count_down_timer.git
```

### Example use


```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery-1.9.1.js"> </script>
<script src="timer.js"></script> <!-- include these two jquery scripts in the html page -->
</head>
<body>
<div id="time">02:00:10</div> //Give the time in HH:MM:SS format itself
</body>
</html>
```

### Example use of Plugin

```html
<div id="time">02:00:10</div> //Give the time in HH:MM:SS format itself
```

### Jquery's to be added in the head section

```html
<script src="jquery-1.9.1.js"> </script>
<script src="timer.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        
        var t1 = $("#time").timer({
            fontSize    : 25,		 // the font size
            fontWeight  : 900,		// the font weight
            fontColor   : '#000', 	// the font color
            autostart	: true,  	// start the countdown automatically
            startTime   : "00:01:10", // Give the time for count down
            stopTime    : "00:00:00", // on this minute pause
            onComplete  : function () { alert("Hurray !!! have a blessed life.") } //On complete this function
            																	   // triggers
        });
        
    });
```
<br><br>
			
            ```html
             Stop the timer : 
              t1.stop();
            ```
            <br>
            <br>
            ```html
             Restart the timer : 
              t1.restart();
            ```
            <br>
            <br>
            ```html
             After stopping allows to continue : 
              t1.proceed();
            ```
            <br>  
<br><br><br>

Copyright &copy; 2014. All Rights Reserved to kenith [K2A]
