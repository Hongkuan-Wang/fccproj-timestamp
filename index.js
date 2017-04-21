const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/:time',(req,res) => {

    var natural = /^(January|February|March|April|May|June|July|August|September|October|November|December)(0[1-9]|1[0-9]|2[0-9]|3[01])\$(\d{4})\,\$(0[0-9]|1[0-9]|2[0-3])(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])$/;
    var unix = /^\d+$/;
    var time = req.params.time;

    if (natural.test(time)){
        var splitTime = natural.exec(time);
        var d = new Date(splitTime[3],gMonthNum(splitTime[1]),splitTime[2],splitTime[4],splitTime[5]);
        res.send({unix : d.getTime(), natural : splitTime[1] + ' ' + splitTime[2] + ' ' + splitTime[3]});
    }else if (unix.test(time)){
        var d = new Date(Number(time));
        res.send({unix : time, natural : gMonthAlp(d.getMonth())  + ' ' + d.getDate() + ' ' + d.getFullYear()});
    }else{
        res.send({unix: null, natural: null});
    }

});


app.listen(3000,() => {
    console.log("You are listening to port 3000!");
});


var gMonthNum = x => {
    switch (x){
        case "January":
            return 0;
        case "February":
            return 1;
        case "March":
            return 2;
        case "April":
            return 3;
        case "May":
            return 4;
        case "June":
            return 5;
        case "July":
            return 6;
        case "August":
            return 7;
        case "September":
            return 8;
        case "October":
            return 9;
        case "November":
            return 10;
        case "December":
            return 11;
    }
}

var gMonthNum = x => {
    switch (x){
        case "January":
            return 0;
        case "February":
            return 1;
        case "March":
            return 2;
        case "April":
            return 3;
        case "May":
            return 4;
        case "June":
            return 5;
        case "July":
            return 6;
        case "August":
            return 7;
        case "September":
            return 8;
        case "October":
            return 9;
        case "November":
            return 10;
        case "December":
            return 11;
    }
};


var gMonthAlp = x => {
    switch (x){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
};
