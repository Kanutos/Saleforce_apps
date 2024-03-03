({
    doInit: function(component, event, helper) {
        var cssURL = "{! $Resource.calculatorStyles }";
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssURL;
        head.appendChild(link);
    },

    addToDisplay : function(component, event, helper) {
        var clickedButton = event.getSource().get("v.value");
        var currentDisplay = component.get("v.display");
        component.set("v.display", currentDisplay + clickedButton);
    },

    clearDisplay : function(component, event, helper) {
        component.set("v.display", "");
    },

    calculateResult : function(component, event, helper) {
        var currentDisplay = component.get("v.display");
        try {
            var result = eval(currentDisplay);
            component.set("v.display", result);
        } catch(e) {
            component.set("v.display", "Error");
        }
    }
})
