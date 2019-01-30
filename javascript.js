var intro = [
    "I'm gonna",
    "I should",
    "I think I'm gonna",
    "I'm thinking I should",
    "I plan to"
]
var action = [
    "solve",
    "create",
    "make",
    "invent",
    "discover"
];

var object = [
    "cancer",
    "IOI Gold",
    "econ essays",
    "world hunger",
    "malaria",
    "100% in all classes",
    "end catholic schools in Ontario"
];

var timeframe = [
    "this summer",
    "this winter",
    "next week",
    "by the time CCC rolls around",
    "by fall",
    "before I get accepted",
    "tomorrow"
];

function getRandomNum(arr) {
    return arr[Math.floor(Math.random() * (arr.length))];
}

function newQuote() {
    msg = getRandomNum(intro) + " " + getRandomNum(action) + " " + getRandomNum(object) + " " + getRandomNum(timeframe);

    document.getElementById('quoteDisplay').innerHTML = msg;
}
