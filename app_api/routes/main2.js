router.get('/main', graphs);

function graphs(req, res) {


  queue()
    .defer(d3.json, "/api/main")
    .await(drawGraphs);
  function drawGraphs(err, apiData) {

  //Start transformations
    var dataSet = apiData;
    var dataFormat = d3.time.format("%m/%d/%Y");
    dataSet.forEach(function (d) {
      d.date = dateFormat.parse(d.date);

    });

  //Create a crossfilter instance
  var ndx = crossfilter(dataSet);

  //Define dimensions
  var dateEnrolled = ndx.dimension(function (d) {
    return d.date;
  })
  var schName = ndx.dimension(function (d) {
    return d.name;
  })
  var commUnit = ndx.dimension(function (d) {
    return d.cUnit;
  })
  var oLevel = ndx.dimension(function (d) {
    return d.olevel;
  })
  var aLevel = ndx.dimension(function (d) {
    return d.alevel;
  })
  var boStudents = ndx.dimension(function (d) {
    return d.bStudents;
  })
  var daStudents = ndx.dimension(function (d) {
    return d.dStudents;
  })
  var maleStudents = ndx.dimension(function (d) {
    return d.mStudents;
  })
  var femStudents = ndx.dimension(function (d) {
    return d.fStudents;
  })
  var boFeeS3 = ndx.dimension(function (d) {
    return d.bFeeS3;
  })
  var students = ndx.dimension(function (d) {
    return d.noStudents;
  })
  var teachers = ndx.dimension(function (d) {
    return d.noTeachers;
  })
  var loc = ndx.dimension(function (d) {
    return d.location;
  })
  var dayFeeS3 = ndx.dimension(function (d) {
    return d.dFeeS3;
  })
  var dayFeeS5 = ndx.dimension(function (d) {
    return d.dFeeS5;
  })
  var id = ndx.dimension(function (d) {
    return d.schoolID;
  })
  var boFeeS5 = ndx.dimension(function (d) {
    return d.bFeeS5;
  })
  //Calculate metrics
  var byDate = dateEnrolled.group();
  var bySchool = schName.group();
  var byCommu = commUnit.group();
  var byOlevel = oLevel.group();
  var byAlevel = aLevel.group();
  var byBod = boStudents.group();
  var byDay = daStudents.group();
  var byMale = maleStudents.group();
  var byFemale = femStudents.group();
  var byBoFeeS3 = boFeeS3.group();
  var byStudents = students.group();
  var byTeachers = teachers.group();
  var byLocation = loc.group();
  var byDaFeeS3 = dayFeeS3.group();
  var byDaFeeS5 = dayFeeS5.group();
  var byID = id.group();
  var byBoFeeS5 = boFeeS5.group();

  var all = ndx.groupAll();



  //Calculate Groups
  	var oLevelOnly = oLevel.group().reduceSum(function(d) {
  		return d.olevel;
  	});

  	var oAnda = aLevel.group().reduceSum(function(d) {
  		return d.alevel;
  	});


      //Charts
  	var ratioChart = dc.numberDisplay("#ratio-chart");
  	var horizBargraph = dc.rowChart("#horBar-chart");
  	var stackedBarChart = dc.rowChart("#stacked-chart");
  	var timeSeriesChart = dc.lineChart("#time-chart");


  	horizBargraph
          //.width(300)
          .height(220)
          .dimension(schName)
          .group(bySchool)
          .elasticX(true)
          .xAxis().ticks(5);


      dc.renderAll();


  }





}
