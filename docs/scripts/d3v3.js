// set the dimensions and margins of the graph
const width = 600;
const height = 400;
const margin = {top: 25, right: 75, bottom: 25, left: 50};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("div#plot")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

// add background rectangle 
svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "lightyellow")
    
// create inner plot group
const g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

const parseTime = d3.timeParse("%H:%M");

const pos_close_time = [ ["09:30", 4128.25], ["09:45", 4159], ["10:00", 4163.5], ["10:15", 4156], ["10:30", 4159], ["10:45", 4172.75], ["11:00", 4188.75], ["11:15", 4178.75], ["11:30", 4169.25], ["11:45", 4189], ["12:00", 4163.75], ["12:15", 4166], ["12:30", 4177], ["12:45", 4165], ["13:00", 4180.5], ["13:15", 4167.25], ["13:30", 4182.5], ["13:45", 4191.5], ["14:00", 4199.5], ["14:15", 4209.25], ["14:30", 4228], ["14:45", 4237], ["15:00", 4249.5], ["15:15", 4241], ["15:30", 4263], ["15:45", 4283], ["16:00", ] ];

const neg_close_time = [ ["09:30", 4235.5], ["09:45", 4265.25], ["10:00", 4249.25], ["10:15", 4216.75], ["10:30", 4214], ["10:45", 4213], ["11:00", 4208.75], ["11:15", 4214.75], ["11:30", 4222.75], ["11:45", 4211.25], ["12:00", 4198.5], ["12:15", 4194.5], ["12:30", 4188], ["12:45", 4183.25], ["13:00", 4187.25], ["13:15", 4194.25], ["13:30", 4189.25], ["13:45", 4183.25], ["14:00", 4178.5], ["14:15", 4173.25], ["14:30", 4169.25], ["14:45", 4162.75], ["15:00", 4147.25], ["15:15", 4146.5], ["15:30", 4148], ["15:45", 4132.75], ["16:00", ] ];

pos_close_time.forEach(function(d) {
      d[0] = parseTime(d[0]);
      });

neg_close_time.forEach(function(d) {
      d[0] = parseTime(d[0]);
      });

xScale = d3.scaleTime().range([0, innerWidth]);

yScale = d3.scaleLinear()
    .domain([4100, 4300])
    .range([innerHeight, 0]);

const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickFormat(d3.timeFormat("%H:%M"));

const line = d3.line()
    .x(d => xScale(d[0]))
    .y(d => yScale(d[1]));

xScale
  .domain(d3.extent(pos_close_time, d => d[0]));

g.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(xAxis);

g.append("g")
    .call(d3.axisLeft(yScale))
    
g.append("path")
    .datum(pos_close_time)
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 2)
    .attr("d", line);
    
g.append("path")
    .datum(neg_close_time)
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 2)
    .attr("d", line);
    
// Build Initial Red Circle
g.append("circle")
    .attr("cx", 458)
    .attr("cy", 295)
    .attr("r", 3)
    .style("fill", "red")
    
// Build 5 Additional Red Circles
svg.append("circle")
    .attr("id", "red")
    .attr("cx", 508)
    .attr("cy", 320)
    .attr("r", 3)
    .style("fill", "red")

svg.append("circle")
    .attr("id", "red")
    .attr("cx", 508)
    .attr("cy", 320)
    .attr("r", 3)
    .style("fill", "red")
    
svg.append("circle")
    .attr("id", "red")
    .attr("cx", 508)
    .attr("cy", 320)
    .attr("r", 3)
    .style("fill", "red")
    
svg.append("circle")
    .attr("id", "red")
    .attr("cx", 508)
    .attr("cy", 320)
    .attr("r", 3)
    .style("fill", "red")
    
svg.append("circle")
    .attr("id", "red")
    .attr("cx", 508)
    .attr("cy", 320)
    .attr("r", 3)
    .style("fill", "red")
    
// Build Initial Green Circle
g.append("circle")
    .attr("cx", 458)
    .attr("cy", 27)
    .attr("r", 3)
    .style("fill", "green")
    
// Build 5 Additional Green Circles
svg.append("circle")
    .attr("id", "green")
    .attr("cx", 508)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", "green")
    
svg.append("circle")
    .attr("id", "green")
    .attr("cx", 508)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", "green")
    
svg.append("circle")
    .attr("id", "green")
    .attr("cx", 508)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", "green")
    
svg.append("circle")
    .attr("id", "green")
    .attr("cx", 508)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", "green")
    
svg.append("circle")
    .attr("id", "green")
    .attr("cx", 508)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", "green")
    
// Bind Green Data then Transition
const green_circ = d3.select("svg")
  .selectAll("circle#green")
  .data([52, 62, 67, 76, 90]);

// Bind Red Data then Transition
const red_circ = d3.select("svg")
  .selectAll("circle#red")
  .data([322, 312, 308, 300, 296]);

// Interactivity

d3.select("svg")
  .on("click", function () {
    red_circ.transition()
      .duration(3000)
      .attr("cx", 538)
      .attr("cy", d => d)    
    green_circ.transition()
      .duration(3000)
      .attr("cx", 538)
      .attr("cy", d => d)
  });
    




  

    

    



  
