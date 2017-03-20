# Implement Google Maps in Lightning Components


<a href="https://githubsfdeploy.herokuapp.com?owner=jrattanpal&repo=Blog-GoogleMapsSample">
  <img alt="Deploy to Salesforce" src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
<br/><br/>

GogoleMaps.vfp: Visualforce Page
- Google Maps library 
- Listen to “message” event for window.postMessage
- Send “message” event to Lightning Component

GoogleMaps.cls: Apex Class
- Return list of all accounts with BillingLongitude and Billing Latotude

GoogleMaps.cmp: Lightning Component
- Accept data to draw on Google Map
- Listen to “message” event for window.postMessage
- Send data to iFramed Visualforce after iFrame has loded successfully

DemoApp.app
- Fetches account list from Apex class
- Prepares data in proper format
- Send data to GoogleMaps.cmp to draw Google Map

## Architecture
![Architecture](https://github.com/jrattanpal/Blog-GoogleMapsSample/blob/master/Resources/Assets/GoogleMapsLightningComponents-Architecture.png?raw=true&new)