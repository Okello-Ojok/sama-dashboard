

$(function(){
  $.get('/api/main', function(data){
  //  console.log(JSON.stringify(data));

//chart one
var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Iganga Parents Secondary School",
        "Bukooli College, Bugiri",
        "Green Hill Academy School",
        "Taibah International School",
        "Kibuli Secondary School",
        "St. Mary's College Kisubi",
        "Kawempe Muslim Secondary School",
        "Our Lady of Africa Secondary School, Namilyango",
        "Wanyange Girls Secondary School",
        "Uganda Martyrs High School, Rubaga",
      ],
      datasets: [{
          label: "Tuition",
          backgroundColor: "#FFCE56",
          data: [3549000, 3102400, 1600000, 1600000, 1040000, 900000, 800000, 790000, 780000, 780000],
          borderColor: "blue",
        }

      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Level of Tuition across all partner schools.'
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


  //Code for chart tuition against school
  var noS=[];
  var sch=[];
    $.each(data, function(key, value){
      noS.push(value.dFeeS3);
      sch.push(value.name)
    });

    var ctx1 = document.getElementById("myChart1").getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: sch,
            datasets: [{
                label: '# of Votes',
                data: noS,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        autoSkip: false
                    }
                }]
            }
        }
    });



//CODE FOR STACKED BAR CHART SCHOOL against NUMBER OF STUDENTS
var school = [];
var num = [];

for (var i in data) {

  /*if (data[i].noStudents < 100) {
    continue
  }*/
  school.push(data[i].name);
  num.push(data[i].noStudents);
}

var ctx2 = document.getElementById('myStacked');
var stackedBar = new Chart(ctx2, {
  type: 'bar',
  //data: data,
  data: {
    labels: school,
    datasets: [{
      label: "Number of Students",
      backgroundColor: "#FFCE56",
      data: num
    }]
  },

  options: {
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          autoSkip: false
        }
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
});











  });
});
