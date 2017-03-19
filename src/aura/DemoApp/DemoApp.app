<aura:application controller="GoogleMap" extends="force:slds"> 
	<aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    
    <aura:attribute name="acc" type="Account[]" />
    <aura:attribute name="mapOptions" type="Object" default='{"zoom": 2}' />
    <aura:attribute name="mapOptionsCenter" type="Object" />
    <aura:attribute name="mapData" type="Object[]" />
    
    
    <aura:if isTrue="{!v.acc.length > 0}">
	    <c:GoogleMap mapOptions="{!v.mapOptions}" mapOptionsCenter="{!v.mapOptionsCenter}" mapData="{!v.mapData}" />
    </aura:if>
</aura:application>