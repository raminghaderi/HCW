/**
 * Created by Raminho on 11/14/2015.
 */
var VAR = {
    myvalue: document.getElementById("search").value
};

function mast () {


    var ID = Parse.Object.extend("IDs");
    var query = new Parse.Query(ID);



    var search = document.getElementById("search").value;

    query.equalTo("ids", search);
    query.find({
        success: function (results) {

            if(results.length<=0)
            {
                alert("Invalid Patient ID ");
            }
            else {

                window.location.href="../patientInfo.html";
            }
        },
        error: function (error) {
            alert("Invalid Patient ID " + error.code + " " + error.message);
        }
    });
}