var express = require('express');
var router = express.Router();

// How to shoot a bow well

var information = {
  title: "how to shoot a bow",
    firstSteps: [
        "start by renting a bow",
        "go regularly, because you use unusual muscles",
        "do wide angle pushups to strengthen upper back"],
    secondSteps: [
        "get your draw length measured by a professional",
        "if you can, try different draw weights",
        "look at different bows"],
    thirdSteps: [
        "try different arrows but have a pro help pick the stiffness",
        "practice regularly,practice regularly, practice regularly",
        "go get your eyes checked",
        "practice with other people" ]
}

console.log(information);

// returns random pic file name by inserting a random num into name
//format: download ('randomNumber').jpeg
function getRandomPic() {
    var randomPicNumber = Math.floor(Math.random() * 7);
    var picFileName = '/../images/download-' + randomPicNumber +'.jpeg';
    return picFileName;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: information.title,
      picture: getRandomPic()});
});

router.get('/how-to-shoot-a-bow', function(request, response){
  response.render('how-to-shoot-a-bow', { steps: information.firstSteps,
    title: 'First Steps',
    back: '/how-to-shoot-a-bow-part-3',
    next: "/how-to-shoot-a-bow-part-2"})
});

router.get('/how-to-shoot-a-bow-part-2', function(request, response) {
  response.render('how-to-shoot-a-bow-part-2', { steps: information.secondSteps,
    title: 'Second Steps',
    back: 'how-to-shoot-a-bow',
    next: "how-to-shoot-a-bow-part-3"})
});

router.get('/how-to-shoot-a-bow-part-3', function(request, response) {
  response.render('how-to-shoot-a-bow-part-3', { steps: information.thirdSteps,
    title: 'Third Steps',
    back: 'how-to-shoot-a-bow-part-2',
    next: "how-to-shoot-a-bow"})
});

module.exports = router;
