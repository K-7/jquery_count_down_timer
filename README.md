
# Jquery Count Down Timer


Here you will find Jquery Plugin for Count Down Timer in HH:MM:SS format.
I have demonstrated the use of this plugin by using it in a Demo HTML file called `timer.html`.
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
<script src="count_down_timer.js"></script> <!-- include these two jquery scripts in the html page -->
</head>
<body>
<div id="time">02:00:10</div> //Give the time in HH:MM:SS format itself
<br><br><br>
<h2 id="count_down_mess">TIME OUT !!</h2><br> //Put message in any tag having the id="count_down_mess" which will be 
                                                  displayed when count down stops
<br><br><br><br>
<a id="stop" href="#stop">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stop the count down</a> //Onclick of this Link the count down 	
																						stops. Onclick of any tag having id="stop" can stop the count down
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
<script src="count_down_timer.js"></script>
```
<br><br><br>

Copyright &copy; 2013. All Rights Reserved to kenith

