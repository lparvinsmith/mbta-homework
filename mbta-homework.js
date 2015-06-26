/*- Create a function to caclulate the number of stop between stations on the "MBTA". Right sub-functions as needed.
- The function takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and **returns the total number of stops for the trip**.
- There are 3 subway lines:
 - The Red line has the following stops: south station, park st, kendall, central, harvard, porter, davis, alewife
 - The Green line has the following stops: haymarket, government center, park st, bolyston, arlington, copley
 - The Orange line has the following stops:  north station, haymarket, park st, state, downtown crossing, chinatown, back bay, forest hills
 - All 3 subway lines intersect at *park st*, but there are no other intersection points. Some of this MBTA is fictionalized. haymarket does not connect the orange/green lines. */

var redLine = ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'];
var greenLine = ['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'];
var orangeLine = ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'backbay', 'forest hills'];
//array preserves order, where as object may not
var subwayLines = {
  'red' : redLine,
  'green' : greenLine,
  'orange' : orangeLine,
};
var intersection = 'park st'

//CLASS DEMO:
//find function replaces indexOf
var find = function(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return - 1;
}

var sameLineDistace = function(line, firstStop, secondStop) {
  //find the indices of firstStop and secondStop, and subtract them
  var diff = find(line, firstStop) - find(line, secondStop);
  if (diff < 0) {
    diff *= -1; //gets absolute value
  }
  return diff;
}

var tester = function() {
  console.log('find');
  console.log('* should return 2, actually returns' + find(['a','b','c'], 'c'));
  console.log('* should return -1, actually returns' + find(['a','b','c'], 'z'));
  console.log('* should return 1, actually returns' + sameLineDistace(redLine, 'south station', 'park st'));
  console.log('* should return 3, actually returns' + sameLineDistace(greenLine, 'arlington', 'government center'));
  console.log('* should return 2, actually returns' + sameLineDistace(orangeLine, 'state', 'haymarket'));
}

tester();



//END CLASS DEMO

var stopsToIntersection = function(line, stop) {
  //if line === 'red', find difference between indeces stop and park st in redLine

    return Math.abs(subwayLines[line].indexOf(stop) - subwayLines[line].indexOf(intersection));
}
//console.log(stopsToParkSt('orange', 'haymarket'));

var numberOfTStops = function(entryLine, entryStop, endLine, endStop) {
  var totalStops = 0;

  totalStops = stopsToIntersection(entryLine, entryStop) + stopsToIntersection(endLine, endStop);

  return totalStops;
}

//console.log(numberOfTStops('red', 'harvard', 'orange', 'north station'));

//try for more than one intersection


