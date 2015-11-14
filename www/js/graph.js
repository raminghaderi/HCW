/**
 * Created by Raminho on 11/14/2015.
 */
window.onload = function () {

    //var patient = Var.myvalue;

  /*  var graph = Parse.Object.extend("patient1");
    var query = new Parse.Query(graph);
    query.greaterThan("heartBeat", 0);
    query.find({
        success: function(results) {
        //   alert("Successfully retrieved " + results.length + " scores.");

    */

            var dataPoints = [];
            var y = 0;
            var limit = results.length;
           // var object = results[results.length];

            for ( var i = 0; i < results.length; i++ ) {

                y += results[i];
                dataPoints.push({ y: y});
            }

            var chart = new CanvasJS.Chart("chartContainer",
                {
                    animationEnabled: true,
                    zoomEnabled: true,

                    title:{
                        text: "Performance Demo with 50,000 DataPoints"
                    },
                    data: [
                        {
                            type: "line",
                            dataPoints: dataPoints
                        }
                    ]
                });
            chart.render();


/*

        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

*/

//------------------------------------------

}