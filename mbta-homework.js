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
var subwayLines = {
  'red' : redLine,
  'green' : greenLine,
  'orange' : orangeLine,
};
var intersection = 'park st'

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

console.log(numberOfTStops('red', 'harvard', 'orange', 'north station'));

//try for more than one intersection


