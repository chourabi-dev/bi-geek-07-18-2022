var switchBtn = document.getElementById('switch-btn');
var app = document.getElementById('app');

/*
localStorage.getItem("key")

localStorage.setItem("key","value")

localStorage.removeItem("key")

localStorage.clear();*/

function initDisplay(){
    const mode = localStorage.getItem('mode');

    if (mode == 'dark') {
        switchBtn.className="switch active"

        app.className="app dark-mode";
    }
}


switchBtn.addEventListener('click',function(){
   
    

    
    if ( switchBtn.className.split(" ").indexOf("active") != -1  ) {
        
        
        switchBtn.className="switch"

        app.className="app";
         
        localStorage.setItem('mode','day')
        
    } else {
        switchBtn.className="switch active"

        app.className="app dark-mode";

        localStorage.setItem('mode',"dark");
        
    }
})




initDisplay();