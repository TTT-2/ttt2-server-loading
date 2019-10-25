<!DOCTYPE html>
<html>
<head>
    <!--    Favicons    -->
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/main.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


    <?php
    //Get the steamid (really the community id)
    $communityid = $_GET["steamid"];
    //Get the map name
    $mapname = $_GET["mapname"];
    //See if the second number in the steamid (the auth server) is 0 or 1. Odd is 1, even is 0
    $authserver = bcsub($communityid, '76561197960265728') & 1;
    //Get the third number of the steamid
    $authid = (bcsub($communityid, '76561197960265728')-$authserver)/2;
    //Concatenate the STEAM_ prefix and the first number, which is always 0, as well as colons with the other two numbers
    $steamid = "STEAM_0:$authserver:$authid";
    ?>
</head>

<body>
    <div class="bg">
        <div class="row container">
            <div class="col s4">
                <div class="card white darken-4">
                    <div class="card-content black-text">
                        <span class="card-title" id="playernameid">
                            Welcome!
                        </span>
                        <table class="">
                            <tbody>
                                <tr>
                                    <td class="grey-text">Servername:</td>
                                    <td>
                                        <p>Official TTT2 Server</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="grey-text">Gamemode:</td>
                                    <td>
                                        <p>Trouble in Terrorist Town 2</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="grey-text">Map:</td>
                                    <td><?php echo "$mapname";?></td>
                                </tr>
                                <tr>
                                    <td class="grey-text">Players:</td>
                                    <td>
                                        <p id="playerslots"></p>
                                    </td>
                                </tr>
                                    <tr>
                                        <td class="grey-text">SteamID:</td>
                                        <td id="$steamid"><?php echo "$steamid";?></td>
                                    </tr>
                            </tbody>
                        </table>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="col s8">
                <div class="card white darken-4">
                    <div class="card-content black-text">
                        <span class="card-title">RULES</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>1:</td>
                                    <td>Do not Random Death Match (RDM) fellow players</td>
                                </tr>
                                <tr>
                                    <td>2:</td>
                                    <td>Do not ghost - Dead players are dead and shouldn't talk about what's going on. </td>
                                </tr>
                                <tr>
                                    <td>3:</td>
                                    <td>Committing to traitorous activity makes you a traitor.</td>
                                </tr>
                            </tr>
                            <tr>
                                <td>4:</td>
                                <td>Do not accuse people publicly in chat or over mic about RDM. Simply report it to admins on death.</td>
                            </tr>
                        </tr>
                        <tr>
                            <td>5:</td>
                            <td>Have fun! - After all, it's just a game ;)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col s6">
        <div id="card1" class="card horizontal">
            <div class="card-image">
                <img src="img/classes/jackal.png" id="classicon1">
            </div>
            <div class="card-stacked">
                <div id="classtext1" class="card-content white-text">
                    sample text
                </div>
            </div>
        </div>
    </div>
    <div class="col s6">
        <div id="card2" class="card horizontal">
            <div class="card-image">
                <img src="img/classes/jackal.png" id="classicon2">
            </div>
            <div class="card-stacked">
                <div  class="card-content white-text">
                    <p id="classtext2">sample text</p>
                </div>
            </div>
        </div>
    </div>

    <div class="col s12">
        <div class="card">
            <div class="card-stacked">
                <div  class="card-content black-text">
                    <div class="loading-bar">
                        <div id="progressbar" class="progress-bar"></div>
                        <span id="status" class="status">Connecting...</span>
                        <span id="percentage" class="percentage">0%</span>
                    </div>
                </div>
            </div>
        </div>



        <div class="loading-bar card">
        </div>
    </div>
</div>
</div>

<!--JavaScript at end of body for optimized loading-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="js/materialize.min.js"></script>
<script type="text/javascript" src="js/ttt2.js"></script>
<script type="text/javascript" src="js/loadingstuff.js"></script>

<!--
Notiz von James:

Falls irgendwer bock hätte diesen Teil zu fixen; könnt ihr gerne machen.
War ursprünglich dafür gedacht, den Spielernamen und avatar usw zu laden,
jedoch macht mir cors einen Strich durch die Rechnung.

Viel spass :)





<script type="text/javascript">

//Get PHP Parameters. That script is seriously handy. And yes I shamelessly copied it...
//Sauce:  https://www.sitepoint.com/get-url-parameters-with-javascript/

function getAllUrlParams(url) {

// get query string from url (optional) or window
var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

// we'll store the parameters here
var obj = {};

// if query string exists
if (queryString) {

// stuff after # is not part of query string, so get rid of it
queryString = queryString.split('#')[0];

// split our query string into its component parts
var arr = queryString.split('&');

for (var i = 0; i < arr.length; i++) {
// separate the keys and the values
var a = arr[i].split('=');

// set parameter name and value (use 'true' if empty)
var paramName = a[0];
var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

// (optional) keep case consistent
paramName = paramName.toLowerCase();
if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

// if the paramName ends with square brackets, e.g. colors[] or colors[2]
if (paramName.match(/\[(\d+)?\]$/)) {

// create key if it doesn't exist
var key = paramName.replace(/\[(\d+)?\]/, '');
if (!obj[key]) obj[key] = [];

// if it's an indexed array e.g. colors[2]
if (paramName.match(/\[\d+\]$/)) {
// get the index value and add the entry at the appropriate position
var index = /\[(\d+)\]/.exec(paramName)[1];
obj[key][index] = paramValue;
} else {
// otherwise add the value to the end of the array
obj[key].push(paramValue);
}
} else {
// we're dealing with a string
if (!obj[paramName]) {
// if it doesn't exist, create property
obj[paramName] = paramValue;
} else if (obj[paramName] && typeof obj[paramName] === 'string'){
// if property does exist and it's a string, convert it to an array
obj[paramName] = [obj[paramName]];
obj[paramName].push(paramValue);
} else {
// otherwise add the property
obj[paramName].push(paramValue);
}
}
}
}

return obj;
}

//Get the SteamID from the Parameter
var steamid64 = getAllUrlParams().steamid

//Get the path of the api key from a plain text file. Don't worry, only the registered Domain can use this token
var apikeypath = window.location.origin+"/"+window.location.pathname.substring(0, window.location.pathname.length -9)+"steam.apikey"

//Let let ajax fetch the Key like a good boye
var apikey = $.ajax({
url: apikeypath,
async: false
}).responseText;

//Ajax also got some dirt in form of extra characters at the end of that string soooo we cut that stuff away..
var apikey = apikey.substring(0, apikey.length - 2)

//and now bake ourselfs a lovely little url variable
var finalurl = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="+apikey+"&steamids="+steamid64;

var playername = $.ajax({
url: finalurl,
}).done(function (data) {
var json = JSON.parse(data);
$('#playernameid').text(json['response']['players'][0]['personaname']);
});
//Aaaand execute!
/* $(document).ready(function () {
$.ajax({
url: finalurl,
}).done(function (data) {
var json = JSON.parse(data);
$('#playernameid').text(json['response']['players'][0]['personaname']);
});
});
*/


</script> -->
</body>
</html>
