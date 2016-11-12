game.text = {
    "playerTrust": 100,

    "playerName": "Kurt",

    "ignoreWords" : {
        "a"     : true,
        "an"    : true,
        "at"    : true,
        "to"    : true,
        "the"   : true,
        "this"  : true,
        "that"  : true,
        "from"  : true,
        "up"    : true,
        "down"  : true,
        "on"    : true,
        "in"    : true,
        "into"  : true
    },

    "title" : {
        "scroller" : "                                     " +
/* Title screen scrolling text */
"Welcome to \"A WALK IN THE PARK\"!  In this game, you will take a nice, " +
"leisurely stroll through a luscious green park.  The birds are singing, a " +
"light wind is in the trees.  What could possibly go wrong?"
    },

    "name": {
        "_": [ "Enter your name:" ]
    },

    "play" : {
        "global" : {
            "help" : [
/* "Help" text! HA HA! */
"You cry for help, but no one comes. ;("
            ],

            "unknown" : [
/* Unknown command */
"You mumble something to yourself. %@$#!"
            ],

            "_get" : [
"You wildly claw at the air, accomplishing nothing but looking like a fool."
            ],

            "_use" : [
"You can't seem to use that.  You are truly useless."
            ]
        },


        /* The Path */
        "path"
         : {
            "go" : {
                "north" : "tree",
                "tree"  : "tree",
                "south" : "home",
                "home"  : "home"
            },

            "info" : {
                "_" : [
                "An alarm wakes you up from your slumber \n" +
                    "a) see what's going on\n" +
                    "b) Go back to sleep"
                ]
            },

            "a": {
                "info": {
                    "_": [
                        "You find Alan Lee, the base pilot suiting up with your scientist co-worker \n" +
                        "Dr. Johnson and the base medic George Diaz. Alan explains they are going to \n" +
                        "the nearby America base because they have been out of contact for a little over \n" +
                        "a month. Dr. Johnson throws you a coat, “You’re coming with us Kurt.” \n" +
                        "a) Let’s get going \n" +
                        "b) Shotgun!\n" +
                        "c) Does Diaz really need to come? Their radio is probably just out.\n" +
                        "d) Alright geezer.\n"
                    ]
                },


            },

            "b": {
                "info": {
                    "_": [
                        "The base chef Dylan comes to your door and tells you Dr. Johnson is looking " +
                        "for you at the front gate.\n" +

                        "a) Better not keep the old man waiting.\n" +
                        "b) I’ll get on my way.\n" +
                        "c) Shut up Dylan, I know, I know, I’m going.\n"
                    ]
                },

                "a": {
                    "jump": function() {return game.text.play.path.a;}
                },

                "b": {
                    "jump": function() {return game.text.play.path.a;}
                },

                "c": {
                    "jump": function() {return game.text.play.path.a;}
                }
            },

            "look" : {
                "_" : [
"A path made of cobblestone leads to the north.  A tall tree can be seen in " +
"the distance.  South leads back home."
                ],

                "path" : [
"It's rough, and made of cobble.  The craftsmanship is astounding!  You " +
"inspect every nook and cranny, amazed by the amount of detail",
"that went into creating this masterpiece of modern walkway architecture."
                ],

                "tree" : [
"Off in the distance, you can see an incredibly tall tree.  It's just north " +
"of here."
                ],

                "nook" : [
"This is a nook!  And my!  What an nook it is!"
                ],

                "cranny" : [
"This is a cranny!  It's not your mama's granny!",
"",
"... Or something.",
"Whatever."
                ]
            }
        },

/* The Tree */
        "tree" : {
            "go" : {
                "south" : "path",
                "path"  : "path",
                "west"  : "pond",
                "pond"  : "pond"
            },

            "get" : {
                "stone"     : "It's as big as your fist!",
                "mushroom"  : "Smells awful!",
            },

            "use" : {
                "knife" : {
                    "rope" : {
                        "_" : [
"You use a knife on the rope and cut down the swing."
                        ],

                        "_unlock" : function () {
                            game.text.play.tree.get.rope =
"A rope that you stole from a child's swing.  You monster!";

                            game.text.play.tree.get.plank =
"A wooden plank that you stole from a child's swing.  You horrible person!";

                            game.text.play.tree.look.tree = [
"It looks like it reaches straight up forever..."
                            ];

                            delete game.text.play.tree.use.swing;
                            delete game.text.play.tree.look.swing;
                        }
                    }
                },

                "swing" : {
                    "_" : [
"WHEEEEEE!"
                    ],

                    "_unlock" : function () {
                        // ...
                    }
                }
            },

            "info" : {
                "_" : [
"Walking along the path, you come to the foot of a very tall tree.  A small " +
"pond is to the west."
                ]
            },

            "look" : {
                "_" : [
"A very tall tree is here, with small stones and a ring of mushrooms growing " +
"at its base."
                ],

                "tree" : [
"It looks like it reaches straight up forever...  There's a swing tied to a " +
"low-hanging branch."
                ],

                "swing" : [
"Looks pretty sturdy!  Made with two lengths of rope and a heavy plank."
                ],

                "rope" : [
"This could come in handy!"
                ],

                "plank" : [
"Makes a good seat!"
                ],

                "pond" : [
"Glimmering and shimmering in the sunlight.  I think I can see ducks from " +
"here."
                ],

                "stone" : [
"Just some stones.  Rubbish."
                ],

                "mushroom" : [
"A fairy ring.  Fungi grows outward, its fruit breaks the surface at its " +
"edges.  The older the specimen, the larger the ring.",
"\"If I come back at night, I might be able to see the fairies playing here.\""
                ]
            }
        },

/* The pond */
        "pond" : {
            "go" : {
                "east"  : "tree",
                "tree"  : "tree"
            },

            "use" : {
                "knife" : {
                    "reed" : {
                        "_" : [
"You slash away at the reeds like a madman."
                        ],

                        "_unlock" : function () {
                            game.text.play.pond.go.water = "water";

                            game.text.play.pond.look.reed = [
"You've managed to carve your way through the thick reeds, exposing an " +
"opening to the water."
                            ];

                            delete game.text.play.pond.use.knife.reed;
                        }
                    }
                },

                "stone" : {
                    "duck" : {
                        "_" : [
"With careful aim and an arm of steel, you hurl a deadly stone at a duck.  " +
"One is hit in the head, causing it to panic and thrash around",
"violently.  After several minutes, the duck's body slowly goes limp " +
"as you watch in horror.  Its head rests beneath the surface",
"of the pond.  A stream of blood can be seen trickling from its neck and " +
"cascading into the clear water below.",
"",
"You're a murderer!",
"",
"And a terrible person."
                        ],

                        "_unlock" : function () {
                            game.text.play.water.get.duck =
"A mallard.  It's dead.  What have you done?!";

                            game.text.play.pond.look._ = [
"The peaceful serenity of this once crystal pond has been shattered by a " +
"cold-blooded killer.  The corpse of a single duck is floating",
"in a pool of its own blood."
                            ];

                            game.text.play.pond.look.duck = [
"Tufts of feathers are strewn about.  Most are spattered with blood from the " +
"wound you heinously inflicted.  A grizzly sight."
                            ];

                            game.text.play.pond.info._ =
                            game.text.play.pond.look._.concat([
"",
"A path leads east, in the direction of a very tall tree."
                            ]);

                            delete game.screen.bag.stone;
                            delete game.text.play.pond.use.stone.duck;
                        }
                    }
                }
            },

            "info" : {
                "_" : [
"You come upon a tranquil pond, surrounded by reeds on all sides.  The bank " +
"is moist with fresh water.  Footprints in the mud appear to",
"belong to a family of waterfowl.  Quacks can be heard as they wade through " +
"the cool blue pool.",
"",
"A path leads east, in the direction of a very tall tree."
                ]
            },

            "look" : {
                "_" : [
"The pond looks very peaceful and serene.  Mirror-like, with ripples only " +
"where the ducks are swimming.  Almost surreal."
                ],

                "reed" : [
"The reeds are not too tall, but they are very thick.  There's no way to get " +
"through."
                ],

                "duck" : [
"A raft of ducks paddle away in the middle of the pond.  One shakes the " +
"moisture from its features.  Another dunks its head, catching",
"whatever minnows may be unfortunately near the surface."
                ]
            }
        },

/* Water */
        "water" : {
            "go" : {
                "under"         : "underwater",
                "underwater"    : "underwater",
                "shore"         : "pond",
            },

            "get" : {},

            "info" : {
                "_" : [
"You jump into the water, knowing full well you cannot swim.  Immediately " +
"you begin to sink.",
"*GLUG!*  *GLUG!*"
                ]
            },

            "look" : {
                "_" : [
"You can't see anything.",
"You're flailing and splashing too much.",
"You're drowning."
                ]
            }
        },

/* Underwater */
        "underwater" : {
            "go" : {
                "surface"   : "water"
            },

            "get" : {},

            "info" : {
                "_" : [
"*GLUG!*  *GLUG!*",
"*GLUG!*  *GLUG!*"
                ]
            },

            "look" : {
                "_" : [
"You can't see anything.  It's dark.",
"You're drowning."
                ]
            }
        },

/* Home */
        "home" : {
            "go" : {
                "sleep" : "path"
            },

            "get" : {
                "blanket" : "It keeps me warm at night!"
            },

            "use" : {
                "bed" : {
                    "_" : [
"When you jump into bed, you hear something fall from your nightstand and " +
"hit the floor with a *THUD*."
                    ],

                    "_unlock" : function () {
                        game.text.play.home.look.floor = [
"Searching around on the floor in the dark with your hards, you find your " +
"pocket knife.  Good thing it was safely folded!",
"That must have been what fell off the nightstand."
                        ];

                        game.text.play.home.get.knife =
"My trusty folding knife.  Never leave home without it!";

                        delete game.text.play.home.use.bed;
                    }
                }
            },

            "info" : {
                "_" : [
"Welp!  That was fun!  You go home and climb into bed."
                ]
            },

            "look" : {
                "_" : [
"You're in bed.  You can't see anything.  It's dark."
                ],

                "bed" : [
"Toasty warm!  The blankets were a housewarming gift from your mother."
                ],

                "blanket" : [
"The softest comforter ever!",
"<3"
                ]
            }
        }
    }
};

game.commands = {
    "global" : {
        "a": "go",
        "b": "go",
        "c": "go",
        "d": "go",

        "help"      : "help",
        "cry"       : "help",

        "go"        : "go",
        "walk"      : "go",
        "swim"      : "go",
        "north"     : "go",
        "south"     : "go",
        "east"      : "go",
        "west"      : "go",
        "northeast" : "go",
        "southeast" : "go",
        "northeast" : "go",
        "northwest" : "go",

        "get"       : "get",
        "pick"      : "get",
        "grab"      : "get",
        "take"      : "get",

        "use"       : "use",
        "try"       : "use",

        "bag"       : "bag",
        "inventory" : "bag",
        "pack"      : "bag",
        "backpack"  : "bag",
        "have"      : "bag",
        "hand"      : "bag"
    },

    "choices": ["a", "b", "c", "d"],

    "local" : {
        "info"      : "info",
        "describe"  : "info",
        "what"      : "info",
        "show"      : "info",
        "where"     : "info",

        "look"      : "look",
        "check"     : "look",
        "search"    : "look"
    }
};
