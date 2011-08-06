function handleScroll(event) {

      var area = document.documentElement.scrollHeight - window.innerHeight;

      var p = document.body.scrollTop / area * 100;

      if(p < 10) {
         p = '0' + p;
      }

      if(p == 100 || p == '00') {
         p = '----'; 
      }

      chrome.extension.sendRequest({percentage: p});  
};

      chrome.extension.onRequest.addListener(function(req, sender, response){
            handleScroll({});
      });  


      document.addEventListener('scroll', handleScroll);