
    var data = [
  {
    value: 60,
    color:"#4169e1"
  },
  {
    value : 21,
        // Draw with background color
    color : "#fff"
  }
];
var ctx = document.getElementById("myChart2").getContext("2d");
new Chart(ctx).Doughnut(data,{
  segmentShowStroke : false,
  segmentStrokeColor : "#eee",
  segmentStrokeWidth : 1,
  percentageInnerCutout : 80, // **** Border width
  animation : true,
  animationSteps : 100,
  animationEasing : "easeOutBounce",
  animateRotate : true,
  animateScale : false,
  onAnimationComplete : null
});
