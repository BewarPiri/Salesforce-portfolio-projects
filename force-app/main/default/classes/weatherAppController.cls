public with sharing class weatherAppController {
    
    @AuraEnabled(cacheable=true)
    public static String getWeatherDetails(String input) {

        String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + getKey();
        

        System.debug('Request URL: ' + url);
        

        String response = getResponse(url);
        
        System.debug('Weather data response: ' + response);
        
        return response;
    }

    public static String getResponse(String strUrl) {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint(strUrl);
        req.setTimeout(120000); 
        HttpResponse res = h.send(req);
        
      
        System.debug('Response Status: ' + res.getStatus());
        System.debug('Response Body: ' + res.getBody());
        
        return res.getBody();
    }

    public static String getKey() {
  
        String key = 'eede2a913a5deb1114bc8653a9673ec0';
        String output = '&appid=' + key;
        return output;
    }
}
