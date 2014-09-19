;(function ($, window, document, undefined) {

defaults = {
  fontColor: "#477050",       // the font color
  fontFamily: "sans-serif",   // the font family
  fontSize: 16,        // the font size, dynamically calulated if omitted in options
  fontWeight: 700,            // the font weight
  autostart: true,            // start the countdown automatically
  startTime: null,
  stopTime: "00:00:00",                // on this minute pause
  onComplete: function () { return; }
};

function CountDown(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._init();
}

CountDown.prototype = {

    _init: function () {
        if(this.settings.startTime)
        {
            this.element.innerText = this.settings.startTime;
            this.startTime = this.settings.startTime;
        }
        else
        {
            this.startTime = this.element.innerText;
        }
        
        this.stopTime = this.settings.stopTime;
        this.element.style.fontSize = this.settings.fontSize + "px ";
        this.element.style.color = this.settings.fontColor;
        this.element.style.fontWeight = this.settings.fontWeight;
        if (this.settings.autostart) { this.start(); }
    },

    start: function () {
        var $this = this;
        
        $this.time_list = $this.element.innerText.split(':');
        $this.hr = parseInt($this.time_list[0]);
        $this.min = parseInt($this.time_list[1]);
        $this.sec = parseInt($this.time_list[2]);
    
        $this.id = setInterval(function(){
            h = $this.hr.toString();
            m = $this.min.toString();
            s = $this.sec.toString();
            
            if ($this.hr == 0 && $this.min == 0 && $this.sec == 0)
                {
                    $this.stop();
                }
            else if ($this.stopTime == timeString(h,m,s))
                {
                    $this.stop(); 
                }
            else
                { 
                if($this.sec == 0)
                    $this.sec = 60
                if($this.min == 0 && $this.hr > 0)
                    $this.min = 60
                if($this.sec == 60)
                {
                    $this.sec = $this.sec - 1
                    if($this.min == 60)
                    {
                    $this.min = $this.min - 1
                    $this.hr = $this.hr - 1
                    }
                    else
                    {
                    $this.min = $this.min - 1
                    }

                }
                else
                {
                    $this.sec = $this.sec - 1
                }
           

                h = $this.hr.toString();
                m = $this.min.toString();
                s = $this.sec.toString();
                
                $this.element.innerText = timeString(h,m,s);

                }
            },1000); // calls count() function every 1 second
    },

    proceed: function () {
                clearInterval(this.id);
                this.start();
            },

    restart: function () {
                clearInterval(this.id);
                this.element.innerText = this.startTime;
                this.start();
            },

    stop: function (cb) {
            clearInterval(this.id);
            this.settings.onComplete();
            if (cb) { cb(); }
        },
};

function timeString(h,m,s){
    if (m == '60')
        {m = '00';}
    h = pad(h);
    m = pad(m);
    s = pad(s);

    time = h+":"+m+":"+s ;
    return time;
}

function pad (str) {
    return str.length < 2 ? pad("0" + str) : str;
}

$.fn.timer = function( options ) {
    var plugin;
    this.each( function() {
        plugin = new CountDown(this, options);
    });
    return plugin;
};

}( jQuery, window, document ));
