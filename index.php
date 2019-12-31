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
        $communityid = $_GET[user];
        $mapname = $_GET[mapname];

        $authserver = bcsub( $communityid, '76561197960265728' ) & 1;
        //Get the third number of the steamid
        $authid = ( bcsub( $communityid, '76561197960265728' ) - $authserver ) / 2;
        //Concatenate the STEAM_ prefix and the first number, which is always 0, as well as colons with the other two numbers
        $steamid = "STEAM_0:$authserver:$authid";

     ?>
</head>

<body>

    <div class="row container">
            <div class="col s12">
            <div class="card red">
                <div class="card-stacked">
                    <div  class="card-content black-text">
                        <span class="card-title">Newest role: Pharaoh, Graverobber</span>
                        <h4 class="card-title">Pharao (Team Innocent)</h4>
<p>spawns in 50% of the rounds when at least 6 players are spawned
has an „Ankh“ that can be placed anywhere on the ground
if the graverobber stole his ankh, he can steal it back but the graverobber gets notified in the same way as he was previously</p>
<h4 class="card-title">Graverobber (Team Traitor)</h4><p>
As soon as an ankh is placed, one traitor gets converted to a graverobber can steal an Ankh to make it his own!
</p>
                    </div>
                </div>
            </div>
        <div class="col s4">
            <div class="card medium white darken-4">
                <div class="card-content black-text">
                    <span class="card-title">PLAYERINFO</span>
                    <table class="">
                        <tbody>
                            <tr>
                                <td class="grey-text">SteamID:</td>
                                <td><?php echo "$steamid";?></td>
                            </tr>
                            <tr>
                                <td class="grey-text">Pointshop:</td>
                                <td>133742069</td>
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
                                <td class="grey-text">Max players:</td>
                                <td>24</td>
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
                                <td>Only kill with certainty</td>
                            </tr>
                            <tr>
                                <td>2:</td>
                                <td>Don't be a dickhead</td>
                            </tr>
                            <tr>
                                <td>3:</td>
                                <td>Admins and mods have the final saying</td>
                            </tr>
                            <tr>
                                <td>4:</td>
                                <td>Accept death. Nobody likes a crybaby...</td>
                            </tr>
                            <tr>
                                <td>5:</td>
                                <td>Have a nice day</td>
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

    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script type="text/javascript" src="js/ttt2.js"></script>
    <script type="text/javascript" src="js/loadingstuff.js"></script>
</body>
</html>
