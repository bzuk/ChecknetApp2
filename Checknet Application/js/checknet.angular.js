/* var myApp = angular.module('checkApp', ['kendo.directives']);
          $(window).load(function () {
              var app = new kendo.mobile.Application($(document.body), {
                  skin: "nova"
              });
          });

*/


/*angular.module('checkApp', ['kendo.directives'])*/

/*var myApp = angular.module('checkApp', ['kendo.directives']);
         $(window).load(function () {
             var app = new kendo.mobile.Application($(document.body), {
                 skin: "nova",
             });
         });*/

/*var app = new kendo.mobile.Application($(document.body), { skin: 'nova' });*/

angular.module('checkApp', ['kendo.directives'])
    .controller('test', function($scope) {
        $scope.focusTextbox = function() {
          console.log(1);
            $("#input").focus().select();
         
        }
    })

angular.module('directivesModule').directive('focusOnClear', [
    '$timeout',
    function (timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var id = attrs.focusOnClear;
                var $inputSearchElement = $(element).parent().find('#' + id);
                element.on('click', function (event) {
                    event.preventDefault();
                    timeout(function () {
                        $inputSearchElement.focus();
                    }, 500);
                });
            }
        };
    }
]);


