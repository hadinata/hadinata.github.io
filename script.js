$(document).ready(function() {

    $("#command_input").focus();

    $("#cli").click(function() {
        $("#command_input").focus();
    });

    $(".input").keypress(function(e) {

        const pre = "clintons-site: $ ";
        if(e.which == 13) {
            const command = $("#command_input").val().toLowerCase();
            var toClear = false;
            var text = "";
            switch (command) {
            case "help":
                text = helpMenu;
                break;
            case "about":
                text = aboutMenu;
                break;
            case "resume":
                var win = window.open('files/chadinata_resume.pdf', '_blank');
                win.focus()
                break;
            case "projects":
                text = projects;
                break;
            case "contact":
                text = contactMenu;
                break;
            case "linkedin":
                var win = window.open('https://www.linkedin.com/in/clinton-hadinata-5b7598133/', '_blank');
                win.focus()
                break;
            case "email":
                var win = window.open('mailto:csghadinata@gmail.com');
                win.focus()
                break;
            case "clear":
                toClear = true;
                break;
            case "":
                text = "";
                break;
            case "hello":
                text = "<br>is it me you're looking for?<br>";
                break;
            default:
                text = "<br>~cli: " + command + ": command not found. <br><br> Type 'help' + [Enter] to view available commands.<br><br>";
            }

            if (toClear) {
                $( ".output" ).empty();
            } else {
                $( ".output" ).append(
                    "<div>" + 
                        "<span class=\"pre\">" + pre + "</span> <span>" + command + "</span>" +
                        "<div>" + text + "</div>" +
                    "</div>"
                );
                $("#command_input").focus();
            }
            $("#command_input").val("");
            $('#cli')[0].scrollTop = $('#cli')[0].scrollHeight;
        }

    });

});

const helpMenu =
    "<br>usage: [command] + [Enter]</br>" +
    "<br> <div class='help-line'> <span class='help-index'>'about'</span> <span class='help-text'>-- about me</span> </div> <br>" +
    "<br> <div class='help-line'> <span class='help-index'>'projects'</span> <span class='help-text'>-- view my projects</span> </div> <br>" +
    "<br> <div class='help-line'> <span class='help-index'>'contact'</span> <span class='help-text'>-- contact me</span> </div> <br>" +
    "<br> <div class='help-line'> <span class='help-index'>'clear'</span> <span class='help-text'>-- clear the command line interface</span> </div> <br>" + 
    "<br> <div class='help-line'> <span class='help-index'>'help'</span> <span class='help-text'>-- displays this list</span> </div> <br>" +
    "<br>";

const aboutMenu =
    "<br>About me:<br>" +
    "<br>I am a third year Software Engineering student at UNSW who loves to code.<br>" + 
    "<br>View my resume <a href='files/chadinata_resume.pdf' target='_blank'>here</a> or type 'resume' + [Enter].<br>" +
    "<br>";

const projects =
    "<br>Projects:<br>" +
    "<br><span class='project-title'><a href='http://food-crawl.herokuapp.com' target='_blank'>food-crawl</a></span><br>A single-page web application which allows users to generate a 'food crawl' - the best path to take to visit a given list of food/drink venues, utilising the Zomato, Google Maps and Facebook APIs. A collaboration with other team members as part of a university workshop/competition.<br>" +
    "Written in: React.js JavaScript, HTML & CSS.<br>" + 
    "<br><span class='project-title'><a href='http://clintonhadinata.me' target='_blank'>this</a></span><br>This website - my personal website to showcase projects and make contact details accessible, with interaction done through this pseudo-command-line interface.<br>" +
    "Written in: jQuery JavaScript, HTML & CSS.<br>" + 
    "<br><span class='project-title'><a href='http://cgi.cse.unsw.edu.au/~z3467783/ass2/matelook.cgi' target='_blank'>matelook</a></span><br>A pseudo-facebook for unsw students. Done as part of a university assignment.<br>" +
    "Written in: Perl CGI, HTML & CSS.<br>" + 
    "<br>";

const contactMenu =
    "<br>Contact me:<br>" +
    "<br> <div class='help-line'> <span class='help-index'><a href='mailto:csghadinata@gmail.com'>Email</a></span> <span class='help-text'>type 'email' + [Enter] to send me an email.</span></div><br>" + 
    "<br> <div class='help-line'> <span class='help-index'><a href='https://www.linkedin.com/in/clinton-hadinata-5b7598133/' target='_blank'>LinkedIn</a></span> <span class='help-text'>type 'linkedin' + [Enter] to view my LinkedIn profile.</span></div><br>" + 
    "<br>";
