/*
This file loads any interactions provided by the user and manages their local controls when they've chosen them
*/

console.log("Extension loaded.");

//tells whether or not the extension is activated (the controls drop down)
var dropDownShown = false;

/*chrome.browserAction.onClicked.addListener(function() {
    console.log("Some click");
});*/

//this loads the extension view (add on chrome click thing later lol)
var loadHTML = function () {

    //if it isn't shown already display the drop down controls
    if(dropDownShown == false) {
        dropDownShown = true;

        var newHTML = '';

        newHTML += '<div id="topbar" class="noHighlight">';
        newHTML +=      '<h1 id="wristTitle">Wrist Control</h1>';
        newHTML +=      '<p id="another">Key input</p>';
        newHTML +=      '<input id="okay" placeholder="Key"/>';
        newHTML += '</div>';

        $('body').addClass('moveDown');
        $('body').prepend(newHTML);
    }
    else {
        dropDownShown = false;

        var element = document.getElementById("topbar");
        element.parentNode.removeChild(element);

        $('body').removeClass('moveDown');
    }
}

$(document).on('click', function(e){
  if ($(e.target).hasClass("outlineElement")){
    e.preventDefault();
    console.log(e);
    var newHTML = '';
    newHTML += '<div class="popup">';
    newHTML += '<input placeholder="Which pebble button"/>';
    newHTML += '</div>';
    var el = $(newHTML);
    el.css('top', e.pageY - el.height());
    el.css('left', e.pageX);
    $('body').append(el);
  }
});

//hover over elements when the extension is live (for the clicks)
$(document).mouseover(function(event) {
    //target.parents('div#hello').length
    if(dropDownShown && $(event.target).hasClass("noHighlight") == false && $(event.target).parents('#topbar').length == 0) {
        $(event.target).addClass('outlineElement');
    }
})
.mouseout(function(event) {
    $(event.target).removeClass('outlineElement');
})

//var userID = '1234'; //TO BE STORED IN THE CHROME INSTANCE

//var fb = new Firebase('ADD IN THE LINK TO THE USER'S FIREBASE HERE');// (based on the user id in the chrome instance)

// so we don't get one unless it's new
var first = true;

/* WHEN A USER INPUTS A PEBBLE COMMAND (firebase update)
fb.endAt().limitToLast(1).on('child_added', function(snapshot) {
    if(!first) {
        handleMessage(snapshot.val());
    } else {
        first = false;
    }
});
*/
//$('body').prepend('<div id="topbar"><h1>test</h1><p>MORE WORDS OMG</p></div>');

//handles the message - does a command from the fb based on the key
var handleMessage = function(data) {
    var msg = data.message;
    switch(msg) {
        case "up":

            break;
        case "select":

            break;
        case "down":

            break;
        default:
            console.log("Sorry, that message isn't recognized. (Is that even a pebble button?!)");
            break;
    }
};
//$('#').click();
