var selColor = ['red', 'blue']

var heartResponse = [
    {
        correct: "blue",
        userResponse: undefined
    },
    {
        correct: "blue",
        userResponse: undefined
    },
    {
        correct: "blue",
        userResponse: undefined
    },
    {
        correct: "blue",
        userResponse: undefined
    },
    {
        correct: "blue",
        userResponse: undefined
    }, {
        correct: "red",
        userResponse: undefined
    },
    {
        correct: "red",
        userResponse: undefined
    },
    {
        correct: "red",
        userResponse: undefined
    },
    {
        correct: "red",
        userResponse: undefined
    }]

var divs = d3.selectAll("div#palette")
    .data(selColor)
    .style("background",
        function (d) {
            return d;
        })
    .on("click", function (d) {
        currentColor = d;

    })


d3.selectAll("g#heart g")
    .data(heartResponse)
    .on("click", function (d, i) {
        console.log(d, i)
        d3.select(this).style("fill", currentColor);
        d.userResponse = currentColor;
        console.log(d);
        check(d);
        //results();
    })


var clickCount = 0;
var currentColor = "white";


function check(d) {
    console.log('i am here')
    console.log(d)
    console.log(d.correct == d.userResponse)
    if (d.correct === d.userResponse) {
        console.log("u got it");
    }

}

function results() {
    var x = 0;
    heartResponse.forEach(function (obj) {
        if (obj.userResponse === obj.correct) {
            x += 1;
        }

    })

    var divided = (x / 9) * 100;

    d3.select("#talkingbox2 p").text(divided + '%')

}

d3.select("#submitbutton").on("click", function () {
    console.log('you clicked submit');
    results();
});
