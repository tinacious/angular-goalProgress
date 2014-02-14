'use strict';

angular.module('tinacious.goalProgress', [])
  .directive('goalProgress', function () {
    return {
      link: function (scope, elem, attrs) {
        var goal = parseFloat(attrs.goal),
            current = parseFloat(attrs.current),
            before = elem.attr('before'),
            after = elem.attr('after');
 
        // make sure we have numbers to work with
        if (isNaN(goal)) {
          console.error('Please specify a numerical value for the goal amount, e.g. goal="150"');
        }
 
        if (isNaN(current)) {
          console.error('Please specify a numerical value for the current amount, e.g. current="100"');
        }
 
        // initialize
        if( !isNaN(goal) && !isNaN(current) ) {
          elem.goalProgress({
            goalAmount: goal,
            currentAmount: current,
            textBefore: before,
            textAfter: after
          });
        }
       
      }
    };
  });