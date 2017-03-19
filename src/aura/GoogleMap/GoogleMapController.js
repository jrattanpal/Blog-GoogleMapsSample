({
	doInit : function(component, event, helper) {
	    //Send LC Host as parameter to VF page so VF page can send message to LC; make it all dynamic
        component.set('v.lcHost', window.location.hostname);
                      
  		//Add message listener
        window.addEventListener("message", function(event) {
            //Can enable origin control for more security
            //if (event.origin != vfOrigin) {
                //console.log('Wrong Origin');
                // Not the expected origin: Reject the message!
                //return;
            //}
            
            // Handle the message
            if(event.data.state == 'LOADED'){
                //Set vfHost which will be used later to send message
                component.set('v.vfHost', event.data.vfHost);
                
                //Send data to VF page to draw map
                helper.sendToVF(component, helper);
            }
        }, false);
	}
})