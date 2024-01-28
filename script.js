    document.addEventListener('DOMContentLoaded', function () {
    
        var dynamicTextOptions = ['BUSINESS TEMPLATE', 'BUSINESS SOLUTIONS', 'BUSINESS SERVICES'];

       
        var introTextElement = document.getElementById('introText');
        var dynamicTextElement = document.getElementById('dynamicText');

        
        var index = 0;

        
        function changeDynamicText() {
            dynamicTextElement.textContent = dynamicTextOptions[index];
            index = (index + 1) % dynamicTextOptions.length;
        }

       
        setInterval(changeDynamicText, 2000);
    });
