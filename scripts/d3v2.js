// set the dimensions and margins of the graph
const width = 600;
const height = 400;
const margin = {top: 25, right: 25, bottom: 25, left: 25};
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

const dataset = [ [0, 60], [1, 43], [2, 43], [3, 56], [4, 45], [5, 62], [6, 49] ];

const pos_close = [ [0, 4128.25], [1, 4159], [2, 4163.5], [3, 4156], [4, 4159], [5, 4172.75], [6, 4188.75], [7, 4178.75], [8, 4169.25], [9, 4189], [10, 4163.75], [11, 4166], [12, 4177], [13, 4165], [14, 4180.5], [15, 4167.25], [16, 4182.5], [17, 4191.5], [18, 4199.5], [19, 4209.25], [20, 4228], [21, 4237], [22, 4249.5], [23, 4241], [24, 4263], [25, 4283] ];

const neg_close = [ [0, 4235.5], [1, 4265.25], [2, 4249.25], [3, 4216.75], [4, 4214], [5, 4213], [6, 4208.75], [7, 4214.75], [8, 4222.75], [9, 4211.25], [10, 4198.5], [11, 4194.5], [12, 4188], [13, 4183.25], [14, 4187.25], [15, 4194.25], [16, 4189.25], [17, 4183.25], [18, 4178.5], [19, 4173.25], [20, 4169.25], [21, 4162.75], [22, 4147.25], [23, 4146.5], [24, 4148], [25, 4132.75] ];


const mylinegen = d3.line()

const xScale = d3.scaleBand()
    .domain(d3.range(pos_close.length + 1))
    .range([0, innerWidth])
    
const yScale = d3.scaleLinear()
    .domain([d3.min(pos_close, d => d[1]) - 20,
             d3.max(pos_close, d => d[1]) + 20])
    .range([innerHeight, 0]); 
    
const xAxis = d3.axisBottom()
        .scale(xScale)
    
mylinegen
    .x(d => xScale(d[0]))
    .y(d => yScale(d[1]));
    
g.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

g.append("g")
    .call(d3.axisLeft(yScale))
    
g.append("path")
    .datum(pos_close)
    .attr("d", mylinegen)
    .attr("fill", "none")
    .attr("stroke", "teal")
    .attr("stroke-width", "5");