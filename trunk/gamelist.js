/*
 * Contains the list of available games
 */
 var _g = new Array();
 var _games;
 var _gamesCounter = -1;


// DEMO GAMES
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Unity Demo Level 1';_g[_gamesCounter].path = 'UnityDemoLevel1.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@joonturbo, @pyjamads';_g[_gamesCounter].instructions = 'Jump on each others heads.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Unity Demo Level 2';_g[_gamesCounter].path = 'UnityDemoLevel2.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@joonturbo, @pyjamads';_g[_gamesCounter].instructions = 'Jump on each others heads.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Unity Demo Level 3';_g[_gamesCounter].path = 'UnityDemoLevel3.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@joonturbo, @pyjamads';_g[_gamesCounter].instructions = 'Jump on each others heads.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Dot Collector Extreme: Supreme Block Commanders';_g[_gamesCounter].path = 'andersgame.swf';_g[_gamesCounter].type = 'flash';_g[_gamesCounter].credits = '@norwigi';_g[_gamesCounter].instructions = 'Collect the dots and bring them home. Pressing A may have unforseen consequenses.';

// SUBMISSIONS
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Sonar';_g[_gamesCounter].path = 'Sonar.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Simon Engelsted';_g[_gamesCounter].instructions = 'A: Sonar, B: Shoot';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = '4sail';_g[_gamesCounter].path = 'foursail.swf';_g[_gamesCounter].type = 'flash';_g[_gamesCounter].credits = 'Ethan Kennerly';_g[_gamesCounter].instructions = 'Left/Right Steer. J/L Main left/right. D Head left. F Head right. One minute race!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'FussBall - ChainJamDemo Style';_g[_gamesCounter].path = 'FussBall.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@pyjamads - #chainjam';_g[_gamesCounter].instructions = 'Run into the ball to make it bounce towards enemy goal, use buttons to dash. Black/Pink is team 1. Green/Blue is team 2.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Fugg';_g[_gamesCounter].path = 'fugg.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@joonturbo';_g[_gamesCounter].instructions = 'FILL SCREEN WITH YOUR COLOR. HIGHEST % WILL GET POINTS.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Take Me To The Future';_g[_gamesCounter].path = 'TMTTF.swf';_g[_gamesCounter].type = 'flash';_g[_gamesCounter].credits = 'Nils Iver Holtar';_g[_gamesCounter].instructions = 'A: Shoot, B: Lay Bombs. Only the player in the future can move and perform an action. Try to hit the other players!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Color Bounce';_g[_gamesCounter].path = 'ColorBounce.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Karrman corp present a Game made by tal swedish person';_g[_gamesCounter].instructions = 'Balls can be moved left and right and down. Last player on field wins';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Mages and Rogues';_g[_gamesCounter].path = 'Export.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@joe_babz @dpruzi';_g[_gamesCounter].instructions = 'Mages VS Rogues! A = Attack, B = Block';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'PLOPong';_g[_gamesCounter].path = 'PLOPong.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Andrew Ogden, Nic Vasconcellos, Michael Downing';_g[_gamesCounter].instructions = 'Throw the ball in the other teams cups';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Climb, Freeze.';_g[_gamesCounter].path = 'ClimbFreeze.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Guido Zuidhof';_g[_gamesCounter].instructions = '';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Parachute Panic';_g[_gamesCounter].path = 'ParachutePanic.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@Adam_DBS';_g[_gamesCounter].instructions = 'Hold the parachute the longest. hold it at the end for extra points!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Shootah - RAVEGING GNOMES';_g[_gamesCounter].path = 'Shootah.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@pyjamads - #chainjam';_g[_gamesCounter].instructions = 'Use your gnome to pick up presents! Fire magical balls at other gnomes to incapacitate them for a while!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Quiz?';_g[_gamesCounter].path = 'Quiz.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Simon Engelsted';_g[_gamesCounter].instructions = 'Use the left stick to answer questions';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Foosball';_g[_gamesCounter].path = 'Foosball.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Game by Lars Bindslev Lars Bindslev, music by Questiion (Freesound.org)';_g[_gamesCounter].instructions = '';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'CURVES';_g[_gamesCounter].path = 'curves.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@poppmattsson & @ofktoubro';_g[_gamesCounter].instructions = 'Turn left or right and dont hit anything. Score points by being the last player alive.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Sidewalkers';_g[_gamesCounter].path = 'Sidewalker_RC4.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Adan, Jan, Paulo, Till';_g[_gamesCounter].instructions = 'Eliminate! Button 1/2 to turn, Left/Right to move, Up to attack';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Gauge';_g[_gamesCounter].path = 'gauge.swf';_g[_gamesCounter].type = 'flash';_g[_gamesCounter].credits = 'Joel Lauener';_g[_gamesCounter].instructions = 'Single button game, use only UP.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Pro Spaceship Slalom 2013: Urban Barrel Roll Edition';_g[_gamesCounter].path = 'PlaneJam%20BarrelRoll%20Edition.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Victor (@Xroft666), Vince (@VincePendrell), Alessio (no twitter :/)';_g[_gamesCounter].instructions = 'Nail the 3 rings to get a point.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Survive!';_g[_gamesCounter].path = 'Survive.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Vince (@VincePendrell, using Chain Jam sample assets)';_g[_gamesCounter].instructions = 'Survive for a minute and get points!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Bouncing Strawberry Unicorn';_g[_gamesCounter].path = 'BouncingStrawberryUnicorn.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Trond Glomnes, Tanel Teinemaa, Sandra Madsen';_g[_gamesCounter].instructions = 'Push the opponents off the platform!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'territory';_g[_gamesCounter].path = 'territory.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'mrt';_g[_gamesCounter].instructions = 'Increase your territory by stealing from others. Surround areas for quick gains. Acquire bombs by surrounding them, trigger with A/B.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Ringside';_g[_gamesCounter].path = 'RingSide.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'The Brohirim';_g[_gamesCounter].instructions = 'Shoot balls in middle to charge. Absorb charged balls. Non-charged balls kills. ';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Local Council';_g[_gamesCounter].path = 'LocalCouncil.swf';_g[_gamesCounter].type = 'flash';_g[_gamesCounter].credits = '@1000tongues';_g[_gamesCounter].instructions = 'Vote yea on the propositions connecting to your colour. Councilpersons! There can be only one! Or none.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Jump dammit!';_g[_gamesCounter].path = 'jumpDammit.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Jannick Hynding Petersen, Michal Krolikowski & Niels Justesen';_g[_gamesCounter].instructions = 'Jump dammit, don\'t fall behind and watch out for lasers, mines and saws!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'One Direction';_g[_gamesCounter].path = 'oneDirection.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@VildNinja';_g[_gamesCounter].instructions = 'Move in your own direction, or follow others to move in theirs. Collect the sparkling dots!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Bitchin\' Pigeons';_g[_gamesCounter].path = 'pigeons.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@lolinc_, @Mikianthony, Emma Vig, @cogitonovus';_g[_gamesCounter].instructions = 'Get on top of those pigeons\'!';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Hamster Survival';_g[_gamesCounter].path = 'BalanceSurvival.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Célia Gironnet - lucieviatge.com - flexroman.tumblr.com - tom-victor.com/';_g[_gamesCounter].instructions = 'Roll around, do not fall, drop bombs to annoy your friends. You only have two lives !';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Kanako Gallop';_g[_gamesCounter].path = 'KanakoGallop.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = 'Jesper Taxbøl, Kanako.dk';_g[_gamesCounter].instructions = 'Use arrowkeys to get pass the goal';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'ORB';_g[_gamesCounter].path = 'ORB.unity3d';_g[_gamesCounter].type = 'unity';_g[_gamesCounter].credits = '@goyalanshul and @A_R_Green_00';_g[_gamesCounter].instructions = 'Collect all orbs. A button to Shoot, B to teleport. Wait for the cooldown before doing it again. On hit, player looses all collected orbs.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Jameleon';_g[_gamesCounter].path = 'jameleon.swf';_g[_gamesCounter].type = 'flash';_g[_gamesCounter].credits = 'Andrei Livadariu & Nina Croitoru (@ninacroitoru) Sound: Starlord827 and Kwazi @ freesound.org';_g[_gamesCounter].instructions = 'Hit each other with your tongues. Collect powerups for speed.';
_gamesCounter++;_g[_gamesCounter] = new Object();_g[_gamesCounter].name = 'Tail Chase';_g[_gamesCounter].path = 'Tail Chase.htm';_g[_gamesCounter].type = 'html5';_g[_gamesCounter].credits = 'Johannes Wärn';_g[_gamesCounter].instructions = 'Left/Right: Turn';
