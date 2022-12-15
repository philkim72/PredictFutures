// Create SVG element
  var svg = d3.select("div#plot")
      .append("svg")
      .attr("width", "600")
      .attr("height", "400")
      
// Add elements

  svg.append("rect")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", "400")
    .attr("height", "400")
    .attr("fill", "cornflowerblue")

  svg.append("circle")
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", "5")
    .attr("fill", "crimson")