var rolecount = 28

var randomrole1 = Math.floor(Math.random() * rolecount);
var randomrole2 = Math.floor(Math.random() * rolecount);
while (randomrole1 == randomrole2) {
    randomrole2 = Math.floor(Math.random() * rolecount);
    while (randomrole2 = 0) {
        randomrole2 = Math.floor(Math.random() * rolecount);
    }
}


//partner roles
//Jackal - Sidekick
var jackalid = 7
var sidekickid = 17

if (randomrole1 === jackalid || randomrole1 === sidekickid || randomrole2 === jackalid || randomrole2 === sidekickid) {
    randomrole1 = jackalid
    randomrole2 = sidekickid
}


//Sheriff - Deputy
var sheriffid = 2
var deputyid = 15

if (randomrole1 === sheriffid || randomrole1 === deputyid || randomrole2 === sheriffid || randomrole2 === deputyid) {
    randomrole1 = sheriffid
    randomrole2 = deputyid
}


//Necro - Zombie
var necroid = 10
var zombieid = 25

if (randomrole1 === necroid || randomrole1 === zombieid || randomrole2 === necroid || randomrole2 === zombieid) {
    randomrole1 = necroid
    randomrole2 = zombieid
}


//Pharaoh - Graverobber
var phaid = 26
var gravid = 27

if (randomrole1 === phaid || randomrole1 === gravid || randomrole2 === phaid || randomrole2 === gravid) {
    randomrole1 = phaid
    randomrole2 = gravid
}


var rolename1 = "NOT DEFINED"
var rolename2 = "NOT DEFINED"

var rolecolor1 = "rgb(0,0,0)"
var rolecolor2 = "rgb(0,0,0)"

var roledesc1 = "ROLE INFO NOT DEFINED"
var roledesc2 = "ROLEINFO NOT DEFINED"

if (randomrole1 < 1) {
    //Bodyguard
    var rolename1 = "bodyguard"
    var rolecolor1 = "rgb(255, 115, 0)"
    var roledesc1 = "The Bodyguard needs to defend his target at all cost. Shoot back and block bullets for your target to win."
} else if (randomrole1 < 2) {
    //clairvoyant
    var rolename1 = "clairvoyant"
    var rolecolor1 = "rgb(94, 76, 118)"
    var roledesc1 = "The Clairvoyant is able to see whether a player is an innocent/traitor or a player has a special role. His goal is to survive as an innocent. <br> In combination with the SIDEKICK role & the JESTER role, you can kill the Jester as the only one and get a free sidekick."
} else if (randomrole1 < 3) {
    //deputy
    var rolename1 = "deputy"
    var rolecolor1 = "rgb(83, 120, 182)"
    var roledesc1 = "Like known from the jackal, The sheriff has to fire his shot on any other player to convert their role. The shot player will fight for the team of the sheriff now. His previous team doesn’t matter."
} else if (randomrole1 < 4) {
    //detective
    var rolename1 = "detective"
    var rolecolor1 = "rgb(31, 77, 191)"
    var roledesc1 = "He fights for the innocent team and has his own shop. Everyone sees who the detective is."
} else if (randomrole1 < 5) {
    //hitman
    var rolename1 = "hitman"
    var rolecolor1 = "rgb(240, 96, 72)"
    var roledesc1 = "The Hitman is a traitor and needs to win with his team. He is only able to collect credits if he kills his target which is displayed above the role."
} else if (randomrole1 < 6) {
    //infected
    var rolename1 = "infected"
    var rolecolor1 = "rgb(131, 55, 85)"
    var roledesc1 = "The infected plays in his own team and has to kill other players to infect them. Once they are killed, they will respawn after a few seconds and fight for your team. But the newly found supporters have to defend their host, because they will die once he gets killed."
} else if (randomrole1 < 7) {
    //innocent
    var rolename1 = "innocent"
    var rolecolor1 = "rgb(80, 173, 59)"
    var roledesc1 = "Your average joe. Doesn't have anything special on his hands other than survival and finding the Traitors!"
} else if (randomrole1 < 8) {
    //jackal
    var rolename1 = "jackal"
    var rolecolor1 = "rgb(100, 190, 205)"
    var roledesc1 = "The Jackal needs to win alone or with his sidekick. Shoot someone with your sidekick-deagle to gain an ally. (Don't worry if you miss, you'll get a new shot after some time)"
} else if (randomrole1 < 9) {
    //jester
    var rolename1 = "jester"
    var rolecolor1 = "rgb(245, 48, 155)"
    var roledesc1 = "The jester plays in his own team and it's his goal to get killed by someone. To help him triggering other players, he doesn't deal any damage. But he has to be careful. Shooting at people without dealing damage might reveal his role to them"
} else if (randomrole1 < 10) {
    //marker
    var rolename1 = "marker"
    var rolecolor1 = "rgb(125, 70, 135)"
    var roledesc1 = "The marker plays in his own team and has the goal of marking other players with his fancy paintgun. Once he marked enough of them (by default 3/4 of all players except himself) he wins"
} else if (randomrole1 < 11) {
    //necromancer
    var rolename1 = "necromancer"
    var rolecolor1 = "rgb(131, 55, 85)"
    var roledesc1 = "It is his goal to be the last player standing. But he needn't be alone. With the help of the defibrillator he is able to revive dead bodies that respawn as zombies that fight on his side."
} else if (randomrole1 < 12) {
    //pirate
    var rolename1 = "pirate"
    var rolecolor1 = "rgb(207, 148, 68)"
    var roledesc1 = "The Pirate is a mercenary, who always fights alongside the Pirate Captian for the player, which owns the cap's contract."
} else if (randomrole1 < 13) {
    //pirate_captain
    var rolename1 = "pirate_captain"
    var rolecolor1 = "rgb(136, 81, 50)"
    var roledesc1 = "The Pirate Captain is a mercenary, who always fights alongside the Pirate Captian for the player, which owns the cap's contract."
} else if (randomrole1 < 14) {
    //priest
    var rolename1 = "priest"
    var rolecolor1 = "rgb(185, 210, 95)"
    var roledesc1 = "The priest plays in the innocent team and his role is hidden like most other roles too. He has one very powerful tool: the holy deagle. With the use of said tool, he can create a powerful brotherhood of innocent players"
} else if (randomrole1 < 15) {
    //serialkiller
    var rolename1 = "serialkiller"
    var rolecolor1 = "rgb(49, 105, 109)"
    var roledesc1 = "The serialkiller plays in his own team and is like the traitor unable to get new team members. He spawns with the tracker item eqipped by default and is therefore able to see the actions of every player though the walls."
} else if (randomrole1 < 16) {
    //sheriff
    var rolename1 = "sheriff"
    var rolecolor1 = "rgb(51, 93, 165)"
    var roledesc1 = "The sheriff is basically the same as a normal detective. He is visible to the other players, has a shop and fights in the innocent team. However he has a deputydeagle to hire a colleague."
} else if (randomrole1 < 17) {
    //shinigami
    var rolename1 = "shinigami"
    var rolecolor1 = "rgb(200, 200, 200)"
    var roledesc1 = "The Shinigami doesn't know that he is a normal innocent. This one specific innnocent player respawns as a fast walking Shinigami with 200% speed, a knife and a list with all remaining traitors."
} else if (randomrole1 < 18) {
    //sidekick
    var rolename1 = "sidekick"
    var rolecolor1 = "rgb(0, 0, 0)"
    var roledesc1 = "The Sidekick is at the same team as his mate. He needs to help him to win the game."
} else if (randomrole1 < 19) {
    //sniffer
    var rolename1 = "sniffer"
    var rolecolor1 = "rgb(81, 123, 226)"
    var roledesc1 = "The sniffer plays as a normal detective with his role visible to everyone. He is able to see footsteps of every player with the help of his magnifying glass. Additionally he is able to see blood on top of the footsteps of the killer."
} else if (randomrole1 < 20) {
    //spy
    var rolename1 = "spy"
    var rolecolor1 = "rgb(255, 127, 80)"
    var roledesc1 = "The spy is a innocent player with a shop that tries to play alongside the traitors. The traitors see the spy as their colleague, but the spy doesn't know who is a traitor. The traitor chat is disabled, when a spy is spawned in the round."
} else if (randomrole1 < 21) {
    //survivalist
    var rolename1 = "survivalist"
    var rolecolor1 = "rgb(80, 140, 90)"
    var roledesc1 = "The Survivalist is a better innocent, because he is able to access his own ([C]) shop. Try to secure your mates!"
} else if (randomrole1 < 22) {
    //totemhunter
    var rolename1 = "totemhunter"
    var rolecolor1 = "rgb(222, 68, 0)"
    var roledesc1 = "The totemhunter is.... stupid"
} else if (randomrole1 < 23) {
    //traitor
    var rolename1 = "traitor"
    var rolecolor1 = "rgb(209, 43, 39)"
    var roledesc1 = "The OG Role. Kill anyone you see without beeing found out. Watch out for spies and other roles though!"
} else if (randomrole1 < 24) {
    //unknown
    var rolename1 = "unknown"
    var rolecolor1 = "rgb(190, 207, 210)"
    var roledesc1 = "The unknown plays in his own team, but he always loses when surviving till the end. But there's a twist. If he get's killed by another player, he immediately respawns with the role of his killer and helps them to win."
} else if (randomrole1 < 25) {
    //vampire
    var rolename1 = "vampire"
    var rolecolor1 = "rgb(149, 43, 37)"
    var roledesc1 = "The vampire CAN'T access the shop, but he can transform into a pigeon.  To make it balanced, the Vampire needs to kill another player every minute. Otherwise, he will fall into Bloodlust. In Bloodlust, the Vampire loses 1 hp every 2 seconds."
} else if (randomrole1 < 26) {
    //zombie
    var rolename1 = "zombie"
    var rolecolor1 = "rgb(68, 28, 44)"
    var roledesc1 = "Aaargh! You've been turned into a zombie and need to kill everyone else (Besides your boss of course...). ONWARD LITTLE ZOMBIE ARMY!"
}else if (randomrole1 < 27) {
    //Pharao
    var rolename1 = "pharao"
    var rolecolor1 = "rgb(170, 180, 10)"
    var roledesc1 = "Spawns in 50% of the rounds when at least 6 players are present. He has an „Ankh“ that can be placed anywhere on the ground. If the Graverobber stole the Pharaos ankh, The Pharao can steal it back but the graverobber gets notified in the same way as he was previously"
} else if (randomrole1 <= 28) {
    //Graverobber
    var rolename1 = "graverobber"
    var rolecolor1 = "rgb(200, 100, 60)"
    var roledesc1 = "As soon as an ankh is placed, one traitor gets converted to a graverobber can steal an Ankh to make it his own!"
};





if (randomrole2 < 1) {
    //Bodyguard
    var rolename2 = "bodyguard"
    var rolecolor2 = "rgb(255, 115, 0)"
    var roledesc2 = "The Bodyguard needs to defend his target at all cost. Shoot back and block bullets for your target to win."
} else if (randomrole2 < 2) {
    //clairvoyant
    var rolename2 = "clairvoyant"
    var rolecolor2 = "rgb(94, 76, 118)"
    var roledesc2 = "The Clairvoyant is able to see whether a player is an innocent/traitor or a player has a special role. His goal is to survive as an innocent. <br> In combination with the SIDEKICK role & the JESTER role, you can kill the Jester as the only one and get a free sidekick."
} else if (randomrole2 < 3) {
    //deputy
    var rolename2 = "deputy"
    var rolecolor2 = "rgb(83, 120, 182)"
    var roledesc2 = "Like known from the jackal, The sheriff has to fire his shot on any other player to convert their role. The shot player will fight for the team of the sheriff now. His previous team doesn’t matter."
} else if (randomrole2 < 4) {
    //detective
    var rolename2 = "detective"
    var rolecolor2 = "rgb(31, 77, 191)"
    var roledesc2 = "He fights for the innocent team and has his own shop. Everyone sees who the detective is."
} else if (randomrole2 < 5) {
    //hitman
    var rolename2 = "hitman"
    var rolecolor2 = "rgb(240, 96, 72)"
    var roledesc2 = "The Hitman is a traitor and needs to win with his team. He is only able to collect credits if he kills his target which is displayed above the role."
} else if (randomrole2 < 6) {
    //infected
    var rolename2 = "infected"
    var rolecolor2 = "rgb(131, 55, 85)"
    var roledesc2 = "The infected plays in his own team and has to kill other players to infect them. Once they are killed, they will respawn after a few seconds and fight for your team. But the newly found supporters have to defend their host, because they will die once he gets killed."
} else if (randomrole2 < 7) {
    //innocent
    var rolename2 = "innocent"
    var rolecolor2 = "rgb(80, 173, 59)"
    var roledesc2 = "Your average joe. Doesn't have anything special on his hands other than survival and finding the Traitors!"
} else if (randomrole2 < 8) {
    //jackal
    var rolename2 = "jackal"
    var rolecolor2 = "rgb(100, 190, 205)"
    var roledesc2 = "The Jackal needs to win alone or with his sidekick. Shoot someone with your sidekick-deagle to gain an ally. (Don't worry if you miss, you'll get a new shot after some time)"
} else if (randomrole2 < 9) {
    //jester
    var rolename2 = "jester"
    var rolecolor2 = "rgb(245, 48, 155)"
    var roledesc2 = "The jester plays in his own team and it's his goal to get killed by someone. To help him triggering other players, he doesn't deal any damage. But he has to be careful. Shooting at people without dealing damage might reveal his role to them"
} else if (randomrole2 < 10) {
    //marker
    var rolename2 = "marker"
    var rolecolor2 = "rgb(125, 70, 135)"
    var roledesc2 = "The marker plays in his own team and has the goal of marking other players with his fancy paintgun. Once he marked enough of them (by default 3/4 of all players except himself) he wins"
} else if (randomrole2 < 11) {
    //necromancer
    var rolename2 = "necromancer"
    var rolecolor2 = "rgb(131, 55, 85)"
    var roledesc2 = "It is his goal to be the last player standing. But he needn't be alone. With the help of the defibrillator he is able to revive dead bodies that respawn as zombies that fight on his side."
} else if (randomrole2 < 12) {
    //pirate
    var rolename2 = "pirate"
    var rolecolor2 = "rgb(207, 148, 68)"
    var roledesc2 = "The Pirate is a mercenary, who always fights alongside the Pirate Captian for the player, which owns the cap's contract."
} else if (randomrole2 < 13) {
    //pirate_captain
    var rolename2 = "pirate_captain"
    var rolecolor2 = "rgb(136, 81, 50)"
    var roledesc2 = "The Pirate Captain is a mercenary, who always fights alongside the Pirate Captian for the player, which owns the cap's contract."
} else if (randomrole2 < 14) {
    //priest
    var rolename2 = "priest"
    var rolecolor2 = "rgb(185, 210, 95)"
    var roledesc2 = "The priest plays in the innocent team and his role is hidden like most other roles too. He has one very powerful tool: the holy deagle. With the use of said tool, he can create a powerful brotherhood of innocent players"
} else if (randomrole2 < 15) {
    //serialkiller
    var rolename2 = "serialkiller"
    var rolecolor2 = "rgb(49, 105, 109)"
    var roledesc2 = "The serialkiller plays in his own team and is like the traitor unable to get new team members. He spawns with the tracker item eqipped by default and is therefore able to see the actions of every player though the walls."
} else if (randomrole2 < 16) {
    //sheriff
    var rolename2 = "sheriff"
    var rolecolor2 = "rgb(51, 93, 165)"
    var roledesc2 = "The sheriff is basically the same as a normal detective. He is visible to the other players, has a shop and fights in the innocent team. However he has a deputydeagle to hire a colleague."
} else if (randomrole2 < 17) {
    //shinigami
    var rolename2 = "shinigami"
    var rolecolor2 = "rgb(200, 200, 200)"
    var roledesc2 = "The Shinigami doesn't know that he is a normal innocent. This one specific innnocent player respawns as a fast walking Shinigami with 200% speed, a knife and a list with all remaining traitors."
} else if (randomrole2 < 18) {
    //sidekick
    var rolename2 = "sidekick"
    var rolecolor2 = "rgb(0, 0, 0)"
    var roledesc2 = "The Sidekick is at the same team as his mate. He needs to help him to win the game."
} else if (randomrole2 < 19) {
    //sniffer
    var rolename2 = "sniffer"
    var rolecolor2 = "rgb(81, 123, 226)"
    var roledesc2 = "The sniffer plays as a normal detective with his role visible to everyone. He is able to see footsteps of every player with the help of his magnifying glass. Additionally he is able to see blood on top of the footsteps of the killer."
} else if (randomrole2 < 20) {
    //spy
    var rolename2 = "spy"
    var rolecolor2 = "rgb(255, 127, 80)"
    var roledesc2 = "The spy is a innocent player with a shop that tries to play alongside the traitors. The traitors see the spy as their colleague, but the spy doesn't know who is a traitor. The traitor chat is disabled, when a spy is spawned in the round."
} else if (randomrole2 < 21) {
    //survivalist
    var rolename2 = "survivalist"
    var rolecolor2 = "rgb(80, 140, 90)"
    var roledesc2 = "The Survivalist is a better innocent, because he is able to access his own ([C]) shop. Try to secure your mates!"
} else if (randomrole2 < 22) {
    //totemhunter
    var rolename2 = "totemhunter"
    var rolecolor2 = "rgb(222, 68, 0)"
    var roledesc2 = "The totemhunter is.... stupid"
} else if (randomrole2 < 23) {
    //traitor
    var rolename2 = "traitor"
    var rolecolor2 = "rgb(209, 43, 39)"
    var roledesc2 = "The OG Role. Kill anyone you see without beeing found out. Watch out for spies and other roles though!"
} else if (randomrole2 < 24) {
    //unknown
    var rolename2 = "unknown"
    var rolecolor2 = "rgb(190, 207, 210)"
    var roledesc2 = "The unknown plays in his own team, but he always loses when surviving till the end. But there's a twist. If he get's killed by another player, he immediately respawns with the role of his killer and helps them to win."
} else if (randomrole2 < 25) {
    //vampire
    var rolename2 = "vampire"
    var rolecolor2 = "rgb(149, 43, 37)"
    var roledesc2 = "The vampire CAN'T access the shop, but he can transform into a pigeon.  To make it balanced, the Vampire needs to kill another player every minute. Otherwise, he will fall into Bloodlust. In Bloodlust, the Vampire loses 1 hp every 2 seconds."
} else if (randomrole2 < 26) {
    //zombie
    var rolename2 = "zombie"
    var rolecolor2 = "rgb(68, 28, 44)"
    var roledesc2 = "Aaargh! You've been turned into a zombie and need to kill everyone else (Besides your boss of course...). ONWARD LITTLE ZOMBIE ARMY!"
} else if (randomrole2 < 27) {
    //Pharao
    var rolename2 = "pharao"
    var rolecolor2 = "rgb(170, 180, 10)"
    var roledesc2 = "Spawns in 50% of the rounds when at least 6 players are present. He has an „Ankh“ that can be placed anywhere on the ground. If the Graverobber stole the Pharaos ankh, The Pharao can steal it back but the graverobber gets notified in the same way as he was previously"
} else if (randomrole2 <= 28) {
    //Graverobber
    var rolename2 = "graverobber"
    var rolecolor2 = "rgb(200, 100, 60)"
    var roledesc2 = "As soon as an ankh is placed, one traitor gets converted to a graverobber can steal an Ankh to make it his own!"
};

document.getElementById("classicon1").src = "img/classes/"+rolename1+".png";
document.getElementById("classtext1").innerHTML = roledesc1;
document.getElementById("card1").style.backgroundColor = rolecolor1;

document.getElementById("classicon2").src = "img/classes/"+rolename2+".png";
document.getElementById("classtext2").innerHTML = roledesc2;
document.getElementById("card2").style.backgroundColor = rolecolor2;

console.log(rolecolor2);
console.log(rolecolor1);
