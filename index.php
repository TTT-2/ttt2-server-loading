<!DOCTYPE html>
<html>
<head>
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
            <div class="card medium white darken-4">
                <div class="card-content black-text">
                    <span class="card-title">[PLAYERNAME]</span>
                    <table class="">
                        <tbody>
                            <tr>
                                <td class="grey-text">SteamID:</td>
                                <td><?php echo "$steamid";?></td>
                            </tr>
                        </tbody>
                    </table>
                    <span class="card-title bettermargin">SERVERINFO</span>
                    <table class="">
                        <tbody>
                            <tr>
                                <td class="grey-text">Map:</td>
                                <td><?php echo "$mapname";?></td>
                            </tr>
                            <tr>
                                <td class="grey-text">Players:</td>
                                <td id="">
                                <p id="playerslots" class="player-slots"></p></td>
                            </tr>
                        </tbody>
                    </table>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="col s8">
            <div class="card medium white darken-4">
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
                                <td>Don't go out and seek revenge just because of last round.</td>
                            </tr>
                            <tr>
                                <td>4:</td>
                                <td>Committing to traitorous activity makes you a traitor.</td>
                            </tr>
                            </tr>
                            <tr>
                                <td>5:</td>
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
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script type="text/javascript" src="js/ttt2.js"></script>
    <script type="text/javascript" src="js/loadingstuff.js"></script>
</body>
</html>
