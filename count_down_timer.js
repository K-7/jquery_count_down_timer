	

$(document).ready(function(){

    var h,m,s;
    var time = $('#time').text().split(':');
    var hr = parseInt(time[0]);
    var min = parseInt(time[1]);
    var sec = parseInt(time[2]);
    
    $('#count_down_mess').css('display','none');

    var count_down = self.setInterval(function(){count()},1000); // calls count() function every 1 second

    $('#stop').click(function(){
        count_down = window.clearInterval(count_down);
        $('#count_down_mess').show();
        $('#count_down_mess').text("Count down stopped !! "); // You can give any message here to be 
                                                       //displayed when count down stopped by clicking the link
        });

    function count()
    {

        if (hr == 0 && min == 0 && sec == 0)
            {
            count_down = window.clearInterval(count_down);
            $('#count_down_mess').show();
            }
        else
            { 
            if(sec == 0)
                sec = 60
            if(min == 0 && hr > 0)
                min = 60
            if(sec == 60)
            {
                sec = sec - 1
                if(min == 60)
                {
                min = min - 1
                hr = hr - 1
                }
                else
                {
                min = min - 1
                }

            }
            else
            {
                sec = sec - 1
            }
       

            h = hr.toString();
            m = min.toString();
            s = sec.toString();
            
            if (m == '60')
                {m = '00';}
            h = pad(h);
            m = pad(m);
            s = pad(s);

            time = h+":"+m+":"+s ;
             $('#time').text(time);

            }
    }
    
    function pad (str) {
        return str.length < 2 ? pad("0" + str) : str;
    }

   
});