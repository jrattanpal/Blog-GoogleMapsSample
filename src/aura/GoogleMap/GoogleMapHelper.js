({
    sendToVF : function(component, helper) {
        //Prepare message in the format required in VF page
        var message = {"mapData": component.get('v.mapData'), 
                       "mapOptions": component.get('v.mapOptions'),  
                       'mapOptionsCenter': component.get('v.mapOptionsCenter')} ;//component.get("v.message");}
        
        //Send message to VF
        helper.sendMessage(component, helper, message);
    },
    sendMessage: function(component, helper, message){
        //Send message to VF
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
        vfWindow.postMessage(message, component.get("v.vfHost"));
    }
})