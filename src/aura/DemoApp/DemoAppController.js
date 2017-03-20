({
	doInit: function(component, event, helper) {
        console.log('Here 1');
        var action = component.get('c.getAccounts');
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log('state:', state);
            if (state == "SUCCESS") {
                var acc = response.getReturnValue();
                if(acc.length > 0){
                    var mapOptionsCenter = {"lat":parseFloat(acc[0].BillingLatitude), "lng":parseFloat(acc[0].BillingLongitude)};
                    var mapData = Array();
                    //cmp.set("v.opportunities", response.getReturnValue());
                    for(var i=0; i<acc.length; i++){
                        mapData.push({"lat":parseFloat(acc[i].BillingLatitude), "lng":parseFloat(acc[i].BillingLongitude), "markerText":acc[i].Name})
                    }
                    
                    component.set('v.mapOptionsCenter', mapOptionsCenter);
                    component.set('v.mapData', mapData);
                    component.set('v.acc', acc);
                }
            }

        });
        $A.enqueueAction(action);
	}
})