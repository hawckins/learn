// Interpolation Javascript
document.addEventListener('DOMContentLoaded', function() {
  var interpolationMatch = ['{','}'];
  
  var hasBinding = function(element) {
    return element.textContent.indexOf(interpolationMatch[0]) > -1 &&
           element.textContent.indexOf(interpolationMatch[1]) > -1
  }
  
  var interpolate = function(properties) {
    var elementObjects = Array.from(document.querySelectorAll('[myData]'));
    console.log(elementObjects);
    
    elementObjects.forEach(function(elementObject) {
      console.log(hasBinding(elementObject));
      if(hasBinding(elementObject) === true) {
        var bindingValue = elementObject.textContent.slice(1, elementObject.textContent.lastIndexOf(interpolationMatch[1]));
        console.log(bindingValue);
        if(properties.hasOwnProperty(bindingValue) && bindingValue != null) {
          elementObject.textContent = properties[bindingValue];
          console.log(elementObject.textContent);
        }
      }
    });
  }
  
  setTimeout(function() {
    interpolate({
      name: "Hello Interpolate",
      age: 2018
    });
  }, 3000);
  
});
