

// doi tuong
function Validator(options) {

    var formElement = document.querySelector(options.form);

    if(formElement){

        options.rules.forEach(function (rules){
            var inputElement = formElement.querySelector(rules.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');

            if (inputElement){
                inputElement.onblur = function () {

                    var errorMessage = rules.test(inputElement.value);
                    if(errorMessage) {
                        errorElement.innerText = errorMessage;
                    } else{
                        errorElement.innerText = '';
                    }
                    

                }
            }
        })

    }

}


//dinh nghia rules

Validator.isRequired = function (selector) {
    return{
        selector: selector,
        test: function() {
    
        }
    }

}



Validator.isEmail = function () {
    return{
        selector: selector,
        test: function(value) {
            return value.trim () ? undefined: 'Please enter your Email';
    
        }
    }

}