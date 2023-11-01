$(document).ready(function () {
    // executes after page is loaded
    //prompt for favorite team and least favorite team
    var team1 = prompt("What is your favorite Dallas Sports team: Mavericks, Cowboys, Rangers or Stars?");
    /* switch statement used to interpret responses by selecting just the first letter 
    and setting consistent variable names for use in script
    which prevents from having to choose from all variations of a name.
     */
    switch (team1.charAt(0).toLowerCase()) {
        case "m":
            fav = "mavericks";
            team1 = "Dallas Mavericks";
            break;
        case "c":
            fav = "cowboys";
            team1 = "Dallas Cowboys";
            break;
        case "r":
            fav = "rangers";
            team1 = "Texas Rangers";
            break;
        case "s":
            fav = "stars";
            team1 = "Dallas Stars";
            break;
        default:
            alert("I don't understand your answer. I'll assume your favorite is the Cowboys");
            fav = "cowboys";
            team1 = "Dallas Cowboys";
    };

    var team4 = prompt("what is you least favorite Dallas Sports team: Mavericks, Cowboys, Rangers or Stars?");
    switch (team4.charAt(0).toLowerCase()) {
        case "m":
            least = "mavericks";
            break;
        case "c":
            least = "cowboys";
            break;
        case "r":
            least = "rangers";
            break;
        case "s":
            least = "stars";
            break;
        default:
            alert("I don't understand your answer. I'll assume your least favorite is the Stars");
            least = "stars";
    };

    // call a function change the text on the page for the selected favorite team
    changeText(team1, fav);
    // call a function change the image on the page for the selected favorite team
    changePhoto(fav);
    // call a function change the css on the page for the selected favorite team
    changeCSS(fav);
    // rearranges the logos in the sidebar with the favorite team on top and least favorite on bottom
    adjustLogos(fav, least);

    // custom 'each' function to pull the links from the sidebar to create a navigation bar in the footer
    // $('aside a') selects all a elements in the aside element
    $('aside a').each(function () {
        // gets the href value and the text value for the current a element and stores in variables
        teamlink = $(this).attr('href');
        teamname = $(this).text();
        // adds a node in the #footnav navigation area in the footer for each link by appending a node
        $('#footnav').append(`<a href="${teamlink}" class="${fav}">${teamname}</a> | `);
    })
});

// changeText function selects various text on the page and replaces it with the favorite team info
function changeText(team, fav) {
    // change the text in the h3 element in the header element to include the user's name and favorite team name
    $('header > h2').text(`${team} Fan Page`);
    // replace the text in any element on the page with class="Dallas" to the team name   
    $('.dallas').text(team);
    // create a teamlogo variable to use as an id selector by concatenating the # the team identifier and the word logo
    teamlogo = `#${fav}logo`;
    // the team logo variable is used to retrieve the href value to use as the link and text for the link in the body of the page (#site)
    teamlink = $(teamlogo).attr('href');
    $('#site').attr('href', teamlink).text(`the ${team} Web Page`).addClass(fav);
}

// changePhoto creates the image filename by concatenating the team identifier with image1.jpg and replaces the src attribute for #photo1
function changePhoto(team) {
    var newImage = `images/${team}_logo.png`
    $('#photo1').attr('src', newImage);
}

// changeCSS replaces css attributes on the page to values appropriate for each team
function changeCSS(team) {
    // adds the class for the selected team to the section on the page
    $('section a').addClass(team);
    // uses a switch statement to change the color of the header text to the appropriate color for the team
    // (note: this could have been done with the class also, but I wanted to demonstrate the css function)
    switch (team) {
        case 'mavericks':
            $('h1, h2, h3').css('color', '#005fac');
            break;
        case 'cowboys':
            $('h1, h2, h3').css('color', '#1b294b');
            break;
        case 'rangers':
            $('h1, h2, h3').css('color', '#be0f34');
            break;
        case 'stars':
            $('h1, h2, h3').css('color', 'GoldenRod');
            break;
    }
}

// adjustLogos places the favorite team logo on top and and least favorite on bottom of the sidebar
function adjustLogos(fav, least) {
    // retrieve the html for the id that matches the favorite team identifier
    topLogoHtml = $(`#${fav}`).html();
    // remove the original node for the favorite team
    $(`#${fav}`).remove();
    // add the retrieved html as the first node in the aside element
    $('aside').prepend(`<p id="${fav}">${topLogoHtml}</p>`);
    // retrieve the html for the id that matches the least favorite team identifier
    leastLogoHtml = $(`#${least}`).html();
    // remove the original node for the least favorite team
    $(`#${least}`).remove();
    // add the retrieved html as the last node in the aside element
    $('aside').append(`<p id="${least}">${leastLogoHtml}</p>`);
}