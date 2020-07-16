

var canvas = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);


var circle = canvas.append('circle')
            .attr('cx', 250)
            .attr('cy', 250)
            .attr('r', 5)
            .attr('fill', 'indigo');


var rect = canvas.append('rect')
            .attr('width', 100)
            .attr('height', 50)
            .attr('fill', 'cyan');


var line = canvas.append('line')
            .attr('x1', 0)
            .attr('x2', 400)
            .attr('y1', 100)
            .attr('y2', 400)
            .attr('stroke', 'magenta')
            .attr('stroke-width', 10);






// Learn Javascript in 12 minutes - https://www.youtube.com/watch?v=Ukg_U3CnJWI
// Complete D3 (v4) API reference - https://github.com/d3/d3/blob/master/API.md

// -------------------------------------- //
// ##  TUTORIAL 2 - Select and Append  ## // - https://www.youtube.com/watch?v=qIIKw2RFNlU
// -------------------------------------- //

// replace text in DOM element of class 'one' ( any css selector will work )
d3.select('.one').text("02 - Select and Append");

// create new paragraph element in the body element and set its text 
d3.select('body').append('p').text("new element created with this text!");

// check d3 version 
d3.select('body').append('p').text("Current D3 version = " + d3.version);

// setting element style text color to red
d3.select('body').append('p').style('color', 'red').text('setting element style text color to red');

// ------------------------------------- //
// ##  TUTORIAL 3 - Basic SVG Shapes  ## // - https://www.youtube.com/watch?v=TR39nfAW1dw
// ------------------------------------- //

// line break
d3.select('body').append('hr');
// title
d3.select('body').append('h2').text("03 - Basic SVG Shapes");

// make simple svg graphic ( 100 x 100 pixels )
var canvas = d3.select('body').append('svg').attr('width', 100).attr('height',80);

// create a circle inside the svg graphic
var circle = canvas.append('circle')
	.attr('cx',50) // x center position
	.attr('cy',15) // y center position
	.attr('r',15) // circle radius 
	.attr('fill','green'); // fill css color ( can be a hex value #00FF00 ) 

// rectangle example 
var rect = canvas.append('rect').attr('width',30).attr('height',30).attr('fill','red');

// line example 
canvas.append('line').attr('x1',75).attr('y1',10).attr('x2',95).attr('y2',80).attr('stroke','blue').attr('stroke-width',10);

// ------------------------------------- //
// ##  TUTORIAL 4 - Visualizing data  ## // - https://www.youtube.com/watch?v=4haBbPEClP4
// ------------------------------------- //

// line break
d3.select('body').append('hr');
// title
d3.select('body').append('h2').text("04 - Visualizing data");

// target data that is going to be visualized
var myData = [100,50,250,125,150];

// create new canvas element
canvas = d3.select('body').append('svg').attr('width', 400).attr('height',100);

// select All will return an empty array / selection, since there are no objects within the new canvas element.
var bars = canvas.selectAll('rect')
	// use the empty selection to connect / bind to myData array 
	.data( myData )
	// the enter method returns placeholders for each data element if they have no attached DOOM elements.
	.enter()
	// for each of the placeholders add a rectangle
	.append('rect')
		// d is the function argument for myData variable at each index 
		// ( basicly every item from the array is being passed to the function, 
		// since the item is a number we can simply return its value as the width of the rectangle )
		.attr('width', function(d) {return d } )
		.attr('height', 10 )
		.attr('y', function(d,i) { return i * 20 } );


// --------------------------- //
// ##  TUTORIAL 5 - Scales  ## // - https://www.youtube.com/watch?v=iMYkVLWc3y0
// --------------------------- //

// read more about scales here : https://github.com/d3/d3-scale

// line break
d3.select('body').append('hr');
// title
d3.select('body').append('h2').text("05 - Scales");
d3.select('body').append('p').append('a').text('read more about color interpolate functions').on("click", function() { window.open("https://github.com/d3/d3-scale/blob/master/README.md#interpolateWarm"); });
d3.select('body').append('p').append('a').text('read more about scales').on("click", function() { window.open("https://github.com/d3/d3-scale"); });

// ------------------------------------------------------------

// find maximum value from the data set 
var myData_max_value = 0; 
for( var i = 0; i < myData.length; ++i ) 
	if (myData[i] > myData_max_value) 
		myData_max_value = myData[i];
// -----------------------------------

// canvas size variables 
var canvas_width = 400;
var canvas_height = 100;

// the values in the calculated range are the result of a linear function applied to the domain values
var widthScale = d3.scaleLinear()
	// define the scale domain ( min-value, max-value )
  // `myData_max_value` is used here since it's the largest value in the data set 
	.domain([0,myData_max_value])
	// define the resulting range same as above but this time the maximum is relative to the canvas width 
	.range([0,canvas_width]);

// create new canvas element using the canvas_width & canvas_height variables 
canvas = d3.select('body').append('svg').attr('width', canvas_width).attr('height', canvas_height);
// same as tutorial 4 
bars = canvas.selectAll('rect').data( myData ).enter().append('rect')
	.attr('width', function(d) {return widthScale(d); } )
	.attr('height', 10 )
	.attr('y', function(d,i) { return i * 20 } )
	// calculate unterpolate value based on current data value relative the maximum data value.
	.attr('fill', function(d) {return d3.interpolateWarm(d/myData_max_value)} );
	// read more about interpolateWarm function here:
	// https://github.com/d3/d3-scale/blob/master/README.md#interpolateWarm

// ------------------------------------ //
// ##  TUTORIAL 6 - Groups and axis  ## // - https://www.youtube.com/watch?v=SYuFy1j8SGs
// ------------------------------------ //

// read more about axis - https://github.com/d3/d3-axis/blob/master/README.md#_axis

// line break
d3.select('body').append('hr');
// title
d3.select('body').append('h2').text("06 - Groups and axes");
d3.select('body').append('p').append('a').text('read more about axis').on("click", function() { window.open("https://github.com/d3/d3-axis/blob/master/README.md#_axis"); });

// --------------------------------------------------

// change canvas size 
canvas_width = 700;
canvas_height = 200;

// create new scale to match the new canvas size 
widthScale = d3.scaleLinear().domain([0,myData_max_value]).range([0,canvas_width]);

// Create the axis object with 7 steps
var axis = d3.axisTop(widthScale).ticks(7);

// ?
// https://cdnjs.cloudflare.com/ajax/libs/d3-axis/1.0.8/d3-axis.js
// 

canvas = d3.select('body').append('svg').attr('width', canvas_width).attr('height', canvas_height)
	// create a new svg element tag with the name of 'g'
	.append('g')
	// move the group 10 pixels to the left and 30 pixels down
  // if this values are set to 0,0 the axis numbers will not be visible
	.attr("transform", "translate(10,30)")
	// attach the axis object 
	.call(axis);

bars = canvas.selectAll('rect').data( myData ).enter().append('rect')
	.attr('width', function(d) {return widthScale(d); } )
	.attr('height', 20 )
	.attr('y', function(d,i) { return i * 30 + 10 } ) // shift the bars additional 10 pixels 
	.attr('fill', function(d) {return d3.interpolateViridis(d/myData_max_value)} );

// ---------------------------------------- //
// ##  TUTORIAL 7 - Enter, Update, Exit  ## // - https://www.youtube.com/watch?v=OZXYk_bgQGQ
// ---------------------------------------- //

// enter & exit functions reference - https://github.com/d3/d3-selection#selection_enter

// line break
d3.select('body').append('hr');
// title
d3.select('body').append('h2').text("07 - Enter, Update, Exit");
d3.select('body').append('p').append('a').text('read more about enter & exit functions').on("click", function() { window.open("https://github.com/d3/d3-selection#selection_enter"); });

d3.select('body').append('p').text('Try clicking the buttons in the following sequences:');
d3.select('body').append('p').text('Example 2, Example 1, Clear All');
d3.select('body').append('p').text('Clear All, Example 1, Example 2, Example 1');
d3.select('body').append('p').text('Clear All, Example 2, Example 1, Example 3');
d3.select('body').append('p').text('Clear All, Example 2, Example 3, Example 4');

var buttonContainer = d3.select('body').append('div');

// ------------------------------------------------

// add circle counter text 
d3.select('body').append('p')
	.classed('p_07',true); // add class `p_07` to paragraph

// create the canvas 
canvas_width = 420;canvas_height = 60;
var canvas_07 = d3.select('body').append('svg').attr('width', canvas_width).attr('height', canvas_height)

// give the canvas a background color by making a colored rectangle that will fill the entire canvas
var rect = canvas_07.append('rect').attr('width',canvas_width).attr('height',canvas_height).attr('fill','#CCC');

// simple circle making function 
function makeCircle(x,y,color,r=20) {
	return canvas_07.append('circle').attr('cx',x).attr('cy',y).attr('r',r).attr('fill',color);
}

var circleArray_1 = ['red', 'green', 'blue', 'orange', 'black' ];
var circleArray_2 = ['purple', 'white', 'yellow', 'red' ];

// make 3 circles 
makeCircle(30,30,'red');
makeCircle(90,30,'green');
makeCircle(150,30,'blue');
d3.select('p.p_07').text('Total of 3 Circles in context'); // display the current amount of circles 

buttonContainer.append('button').text('CLEAR ALL').on("click", function() 
{ 
	var div = canvas_07.selectAll("circle").remove();
	
	_07_update_circle_count();
});

// select all -> enter -> append circles
buttonContainer.append('button').text('Example 1').on("click", function() 
{ 
	var div = canvas_07
		.selectAll("circle")
  	.data( circleArray_1 )
  	.enter()
			.append('circle')
				.attr('cy', 30).attr('r',20)
				.attr('cx', function(d,i) { return 30 + 60 * i } )
   			.attr('fill',function(d) { return d; });
	
	_07_update_circle_count();
});

// select all -> remove -> exit -> enter -> append circles
buttonContainer.append('button').text('Example 2').on("click", function() 
{ 
	var div = canvas_07
		.selectAll("circle")
		.remove()
		.exit()
  	.data( circleArray_2 )
  	.enter()
			.append('circle')
				.attr('cy', 30).attr('r',15)
				.attr('cx', function(d,i) { return 30 + 60 * i } )
   			.attr('fill',function(d) { return d; });
	
	_07_update_circle_count();
});
// select all -> exit -> remove -> enter -> append circles
buttonContainer.append('button').text('Example 3').on("click", function() 
{ 
	var div = canvas_07
		.selectAll("circle")
		.exit()
		.remove()
  	.data( ['lime','lime','lime','lime','lime','lime','lime'] )
  	.enter()
			.append('circle')
				.attr('cy', 30).attr('r',10)
				.attr('cx', function(d,i) { return 30 + 60 * i } )
   			.attr('fill',function(d) { return d; });
	
	_07_update_circle_count();
});
// select all -> update
buttonContainer.append('button').text('Example 4').on("click", function() 
{ 
	var div = canvas_07
		.selectAll("circle")
				.attr('r', 15)
				.attr('opacity', 0.75) // 75% opacity
   			.attr('fill','black');
	
	_07_update_circle_count();
});

function _07_update_circle_count()
{
	var circle_count = canvas_07.selectAll("circle").size(); // get the count of total circles in canvas_07
	d3.select('p.p_07').text('Total of ' + circle_count + ' Circles in context'); // display the current amount of circles 
}

// -------------------------------- //
// ##  TUTORIAL 8 - Transitions  ## // - https://www.youtube.com/watch?v=EpeOzq8eDYk
// -------------------------------- //

// Transitions - https://github.com/d3/d3-transition

d3.select('body').append('hr');
// title
d3.select('body').append('h2').text("08 - Transitions");
d3.select('body').append('p').append('a').text('read more about transitions').on("click", function() { window.open("https://github.com/d3/d3-transition"); });
var btns_08 = d3.select('body').append('div');

// ------------------

var canvas_08 = d3.select('body').append('svg').attr('width', 400).attr('height', 200 );

var circle_08 = canvas_08.append('circle').attr('cx', 50 ).attr('cy', 50 ).attr('r', 20).attr('fill', 'red');

btns_08.append('button').text('Example 1').on("click", function() 
{
	circle_08.transition()
		.attr('cx', 350 )
		.delay(700)
		.duration(1000);
});

btns_08.append('button').text('Example 2').on("click", function() 
{
	circle_08
		.transition()
			.attr('cx', 100 )
			.duration( 1000 )
			.attr('fill','red')
		.transition()
			.attr('cx', 350 )
			.duration( 1000 )
			.attr('fill','black')
		.transition()
			.attr('fill','green')
			.duration( 1000 )
			.attr('cx', 50 );
});

btns_08.append('button').text('Example 3').on("click", function() 
{
	var rand_color = function() { 
		circle_08.attr('fill',d3.interpolateWarm( Math.random() ) );
	};
	
	circle_08
		.attr('fill', d3.interpolateRainbow( Math.random() ) )
		.transition()
			.attr('r', 10 )
			.on('end', rand_color )
		.transition()
			.attr('r', 400 )
			.duration( 400 )
			.on('end', rand_color )
		.transition()
			.attr('r', 20 )
			.on('end', function() { 
				d3.select(this).attr('fill', 'red' );
			});
});




// ------------------------------------------- //
// ##  TUTORIAL 10 - Loading external data  ## // - https://www.youtube.com/watch?v=2S1AbEWX85o
// ------------------------------------------- //

d3.select('body').append('hr');
d3.select('body').append('h2').text("10 - Loading external data");
d3.select('body').append('p').append('a').text('Data from mysafeinfo.com').on("click", function() { window.open("https://mysafeinfo.com/content/options/worldcitiesbypop_2015"); });
d3.select('body').append('p').append('a').text('read more about requests').on("click", function() { window.open("https://github.com/d3/d3-request"); });

d3.select('body').append('div').classed('div10',true);

// ------------------------------------------------------------

d3.json('https://mysafeinfo.com/api/data?list=worldcitiesbypop_2015&format=json', function( data ){
	
	// convert data object to array 
	var data_population = [];
	for (var key in data )
		// loop through data and extract population value 
		data_population.push( data[key]['pop'] );
	
	canvas_width = 400;
	bar_height = 20;
	canvas_height = bar_height * data_population.length; // calculate canvas size 
	
	// d3 build in max function 
	var max_value = d3.max(data_population);
	widthScale = d3.scaleLinear()
		.domain([0,max_value]) 
		.range([0,canvas_width]);
	
	var canvas_10 = d3.select('div.div10').append('svg').attr('width', canvas_width).attr('height', canvas_height);
	
	canvas_10.selectAll('rect').data( data ).enter().append('rect')
		.attr('width', function(d) {return widthScale(d['pop']); } ) 
		.attr('height', bar_height )
		.attr('y', function(d,i) { return i * bar_height } )
		.attr('fill', function(d) {return d3.interpolateRainbow(d['pop']/max_value)} )
	
	canvas_10.selectAll('text').data( data ).enter().append('text')
		.attr('fill','black')
		.attr('y', function(d,i) { return i * bar_height + bar_height/1.2 } )
		.text(function(d){ return d['pop'] + " - " + d['ct'] + ", " +  d['cn'] })
		.attr('font-size',"12px")
	
});

// --------------------------- //
// ##  TUTORIAL 11 - Paths  ## // - https://www.youtube.com/watch?v=H3WsXg622WA
// --------------------------- //

d3.select('body').append('hr');
d3.select('body').append('h2').text("11 - Paths");
d3.select('body').append('p').append('a').text('read more about paths').on("click", function() { window.open("https://github.com/d3/d3-path"); });

d3.select('body').append('p').append('a').text('curve interpolation comparison').on("click", function() { window.open("https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529"); });



var canvas_11 = d3.select('body').append('svg').attr('width', 600 ).attr('height',300 );

var path_11 = [
	{x:00,y:10},
	{x:70,y:30},
	{x:00,y:45},
	{x:75,y:70}
];

// draw black path

// create group to draw the into 
var group_11 = canvas_11.append('g')
	.attr('transform','translate(10, 10)');

// d3 line 
var line_11 = d3.line()
	.x( function(d) { return d.x; } )
	.y( function(d) { return d.y; } );

// draw lines as path into group 
group_11.selectAll('path')
	.data([path_11]) // pass path data inside array of path's 
	.enter() // create new elements from data if none were found 
	.append("path")  // create new path
	.attr('d', line_11) // bind path data 
	.attr('fill', 'none') // style 
	.attr('stroke', '#000') // style 
	.attr('stroke-width', 10); // style 

// simple function to draw {x,y}-data path to target canvas 
function draw_path( canvas_target, path, x=0, y=0 )
{
	var g = canvas_target.append('g').attr('transform','translate('+x+','+y+')');
	var l = d3.line().x( function(d) { return d.x; } ).y( function(d) { return d.y; } );
	return g.selectAll('path').data([path]).enter().append("path").attr('d', l);
}

// draw red path 
draw_path( canvas_11, path_11, 100, 20 )
	.attr('fill', 'none')
	.attr('stroke', '#F00')
	.attr('stroke-width', 5);

// draw 3 green path's  
for( var i=1;i<4;++i)
{
	draw_path( canvas_11, path_11, i * 100+100, 0 )
		.attr('fill', 'none')
		.attr('stroke', '#0F0')
		.attr('stroke-width', 15);
}

// curves examples 

// example from : https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529

var line_data_11 = [ 
	{ x: 1,   y: 5},  { x: 20,  y: 20},
  { x: 40,  y: 10}, { x: 60,  y: 40},
  { x: 80,  y: 5},  { x: 100, y: 60}];

function draw_path_2( canvas_target, path, x=0, y=0, curve=null )
{
	// default linear curve 
	if( curve == null) curve = d3.curveLinear;
	
	var g = canvas_target.append('g').attr('transform','translate('+x+','+y+')');
	var l = d3.line()
		.x( function(d) { return d.x; } )
		.y( function(d) { return d.y; } )
		.curve( curve ); // change line curve method 
	
	return g.selectAll('path').data([path]).enter().append("path").attr('d', l);
}

draw_path_2( canvas_11, line_data_11, 0, 100, d3.curveLinear )
		.attr('fill', 'none')
		.attr('stroke', '#00F')
		.attr('stroke-width', 5);

draw_path_2( canvas_11, line_data_11, 110, 100, d3.curveStep )
		.attr('fill', 'none')
		.attr('stroke', '#00F')
		.attr('stroke-width', 5);

draw_path_2( canvas_11, line_data_11, 220, 100, d3.curveBasis )
		.attr('fill', 'none')
		.attr('stroke', '#00F')
		.attr('stroke-width', 5);

// all curves : d3.curveLinear, d3.curveStepBefore, d3.curveStepAfter, d3.curveBasis, d3.curveCardinal, d3.curveMonotoneX, d3.curveCatmullRom

// alternative way to draw a path ( as read from github )

// draw orange path

group_11 = canvas_11.append('g').attr('transform','translate(0,200)');

var path_11 = d3.path();
path_11.moveTo(0,0);
path_11.lineTo(50,0);
path_11.lineTo(100,50);
path_11.arcTo(20,20,60,00,40);

group_11.append("path").attr('d', path_11)
	.attr('fill', 'none')
	.attr('stroke', '#FF4500')
	.attr('stroke-width', 5);

// --------------------------- //
// ##  TUTORIAL 12 - Paths  ## // - https://www.youtube.com/watch?v=oOu8y51VwMM
// --------------------------- //

d3.select('body').append('hr');
d3.select('body').append('h2').text("12 - Arcs");
d3.select('body').append('p').append('a').text('read more about arcs').on("click", function() { window.open("https://github.com/d3/d3-shape/blob/master/README.md#arc"); });
d3.select('body').append('p').append('a').text('centroid example').on("click", function() { window.open("https://bl.ocks.org/d3indepth/c9fd848b9410cc543a437b34c266ac64"); });
d3.select('body').append('p').append('a').text('corners example').on("click", function() { window.open("https://bl.ocks.org/mbostock/b7671cb38efdfa5da3af"); });

// ---------------------------------

var canvas_12 = d3.select('body').append('svg').attr('width', 400 ).attr('height',100 );



var group_12 = canvas_12.append('g').attr('transform','translate(50,50)');

var arc_12 = d3.arc()
	.innerRadius(40)
	.outerRadius(50)
	.startAngle(0)
	.endAngle(2*Math.PI * 4/5);

// draw a single arc 

group_12.append('path')
	.attr('d', arc_12);


// centroid example base on : https://bl.ocks.org/d3indepth/c9fd848b9410cc543a437b34c266ac64

var arcData = [
	{label: 'A', startAngle: 0.0, endAngle: 1.2},
	{label: 'B', startAngle: 1.2, endAngle: 1.4},
	{label: 'C', startAngle: 1.4, endAngle: 3.0},
	{label: 'D', startAngle: 3.0, endAngle: 4},
	{label: 'E', startAngle: 4, endAngle: 2* Math.PI}
];

// Create an arc generator with configuration
var arc_12 = d3.arc()
	.innerRadius(10)
	.outerRadius(50);

group_12 = canvas_12.append('g').attr('transform','translate(160,50)');

// Create a path element and set its d attribute
group_12
	.selectAll('path')
	.data( arcData )
	.enter()
	.append('path')
	.attr('fill', 'orange')
	.attr('stroke', '#FFF')
	.attr('stroke-width', 2)
	.attr('d', arc_12);

// Add labels, using .centroid() to position
group_12
	.selectAll('text')
	.data(arcData)
	.enter()
	.append('text')
	.each(function(d) {
		var centroid = arc_12.centroid(d);
		d3.select(this)
			.attr('x', centroid[0] - 4 )
			.attr('y', centroid[1] )
			.attr('dy', '0.33em')
			.text(d.label);
	});


// corner radius example

arc_12 = d3.arc()
	.innerRadius(10)
	.cornerRadius( 20 ) // SET ARC CORNER RADIUS 
	.outerRadius(50);

group_12 = canvas_12.append('g').attr('transform','translate(280,50)');
group_12.selectAll('path').data( arcData ).enter().append('path')
	.attr('stroke', '#FFF')
	.attr('stroke-width', 2)
	.attr('d', arc_12)
	// color each arc relative to its angular size
	.attr('fill', function(d)
	{ 
		var arcSize = (d.endAngle - d.startAngle);
		var maxArcSize = Math.PI * 2;
		var arcSizeValue = arcSize / maxArcSize;
		return d3.interpolateViridis(arcSizeValue);
	});

//--------------------------------------------
//console.clear();
window.scrollTo(0,document.body.scrollHeight);
//--------------------------------------------