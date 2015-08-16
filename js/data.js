// contains four data arrays, which constitute the entirety of the data in the program.

//lib -- unordered list of works, objects with keywords
var lib = {
	"rene" : {
		"name": "René",
		"materials": "Fired Clay w/ Wax",
		"x": "9",
		"y": "11",
		"z": "18",
		"images": 1,
		"details": 0
	},
	"jabbo" : {
		"name": "Jabbo Smith",
		"materials": "Cast Stone",
		"x": "6",
		"y": "7.5",
		"z": "12",
		"images": 1,
		"details": 0
	},
	"manuel" : {
		"name": "Manuel",
		"materials": "Fired Clay",
		"x": "7.5",
		"y": "11.5",
		"z": "16",
		"images": 1,
		"details": 0
	},
	"sue" : {
		"name": "Sue Hitchcock",
		"materials": "Fired Clay w/ Bisque Stain Wash",
		"x": "8.5",
		"y": "12",
		"z": "16",
		"images": 1,
		"details": 1
	},
	"james" : {
		"name": "James",
		"materials": "Terra Cotta w/ Burnished Pigment",
		"x": "8",
		"y": "12",
		"z": "15",
		"images": 1,
		"details": 0
	},
	"sid" : {
		"name": "Sid Rothberg",
		"materials": "Fired Clay w/ Wax",
		"x": "7",
		"y": "12",
		"z": "15",
		"images": 1,
		"details": 0
	},
	"jennifer" : {
		"name": "Jennifer",
		"materials": "Fired Clay",
		"x": "9",
		"y": "13",
		"z": "18",
		"images": 1,
		"details": 0
	},
	"brian" : {
		"name": "Brian",
		"materials": "Fired Clay",
		"x": "8",
		"y": "15",
		"z": "28",
		"images": 1,
		"details": 0
	},
	"reclining-figure" : {
		"name": "Reclining Figure",
		"materials": "Fired Clay",
		"x": "8",
		"y": "8",
		"z": "18.5",
		"images": 1,
		"details": 1
	},
	"reclining-male" : {
		"name": "Reclining Male",
		"materials": "Fired Clay",
		"x": "8",
		"y": "10",
		"z": "28",
		"images": 2,
		"layout" : "top-bottom",
		"details": 0
	},
	"seated-girl" : {
		"name": "Seated Girl",
		"materials": "Fired Clay",
		"x": "5",
		"y": "7",
		"z": "16",
		"images": 1,
		"details": 0
	},
	"grey-girl" : {
		"name": "Grey Girl",
		"materials": "Cast Resin",
		"x": "15",
		"y": "21",
		"z": "46",
		"images": 2,
		"layout" : "left-right",
		"details": 0
	},
	"painted-figure" : {
		"name": "Painted Figure",
		"materials": "Pigment & Wax on Hydrocal & Wood",
		"x": "8",
		"y": "10",
		"z": "73",
		"images": 2,
		"layout" : "left-right",
		"details": 0
	},
	"barn-figure" : {
		"name": "Barn Figure",
		"materials": "Water Clay",
		"x": "24",
		"y": "31.5",
		"z": "72",
		"images": 1,
		"details": 0
	},
	"green-man" : {
		"name": "Green Man",
		"materials": "Cast Resin",
		"x": "9.5",
		"y": "13",
		"z": "38",
		"images": 2,
		"layout" : "left-right",
		"details": 0
	},
	"girl-standing" : {
		"name": "Girl Standing",
		"materials": "Cast Resin",
		"x": "8",
		"y": "9",
		"z": "38",
		"images": 1,
		"details": 0
	},
	"walking-man" : {
		"name": "Walking Man",
		"materials": "Bronze",
		"x": "6",
		"y": "15",
		"z": "37",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"leaning-woman" : {
		"name": "Leaning Woman",
		"materials": "Bonded Bronze",
		"x": "10",
		"y": "13",
		"z": "42",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"torso" : {
		"name": "Torso",
		"materials": "Wax for Bronze",
		"x": "10",
		"y": "15",
		"z": "27",
		"images": 1,
		"details": 0
	},
	"sitting-figure-1" : {
		"name": "Sitting Figure I",
		"materials": "Fired Clay",
		"x": "4",
		"y": "5",
		"z": "6",
		"images": 1,
		"details": 0
	},
	"kneeling-figure-1" : {
		"name": "Kneeling Figure I",
		"materials": "Fired Clay",
		"x": "3",
		"y": "4",
		"z": "6",
		"images": 1,
		"details": 0
	},
	"seated-figure-3" : {
		"name": "Seated Figure III",
		"materials": "Fired Clay",
		"x": "2",
		"y": "3",
		"z": "5",
		"images": 1,
		"details": 0
	},
	"seated-figure-2" : {
		"name": "Kneeling Figure II",
		"materials": "Fired Clay",
		"x": "3.25",
		"y": "2.75",
		"z": "5.5",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"kneeling-figure-2" : {
		"name": "Kneeling Figure II",
		"materials": "Fired Clay",
		"x": "3",
		"y": "4",
		"z": "5",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"seated-figure" : {
		"name": "Seated Figure",
		"materials": "Fired Clay",
		"x": "4",
		"y": "5",
		"z": "7",
		"images": 1,
		"details": 0
	},
	"reclining-figure-1" : {
		"name": "Reclining Figure I",
		"materials": "Fired Clay",
		"x": "5",
		"y": "10",
		"z": "5",
		"images": 1,
		"details": 1
	},
	"reclining-figure-2" : {
		"name": "Reclining Figure II",
		"materials": "Fired Clay",
		"x": "5",
		"y": "10.5",
		"z": "6",
		"images": 1,
		"details": 0
	},
	"figure-relief" : {
		"name": "Figure Relief",
		"materials": "Fired Clay",
		"note": "Study for 4 ft Bronze",
		"x": "1",
		"y": "4",
		"z": "5",
		"images": 1,
		"details": 0
	},
	"reclining-totem" : {
		"name": "Reclining Totem",
		"materials": "Fired Clay",
		"x": "1",
		"y": "4",
		"z": "5",
		"images": 2,
		"layout": "top-bottom",
		"details": 0
	},
	"seated-figure-4" : {
		"name": "Seated Figure IV",
		"materials": "Fired Clay w/ pigment & wax",
		"x": "3",
		"y": "4",
		"z": "5",
		"images": 1,
		"details": 0
	},
	"leaning-figure" : {
		"name": "Leaning Figure",
		"materials": "Fired Clay w/ pigment",
		"x": "4",
		"y": "7",
		"z": "6",
		"images": 1,
		"details": 0
	},
	"totem-sketch" : {
		"name": "Totem Sketch",
		"materials": "Fired Clay",
		"x": "2.5",
		"y": "2.25",
		"z": "11",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"sketch-1" : {
		"name": "Sketch I",
		"materials": "Fired Clay",
		"x": "3.5",
		"y": "4",
		"z": "13",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"sketch-2" : {
		"name": "Sketch II",
		"materials": "Fired Clay w/ Wood + Wax",
		"x": "4",
		"y": "4",
		"z": "24",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"sketch-with-hat" : {
		"name": "Sketch w/ Hat",
		"materials": "Fired Clay",
		"x": "3.5",
		"y": "4",
		"z": "10.25",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"apt-totem" : {
		"name": "Apt. Totem",
		"materials": "Fired Clay",
		"x": "4",
		"y": "4",
		"z": "34",
		"images": 1,
		"details": 0
	},
	"totem" : {
		"name": "Totem",
		"materials": "Fired Clay w/ Wood, Graphite, Pigment",
		"x": "4",
		"y": "4",
		"z": "68",
		"images": 1,
		"details": 0
	},
	"man-with-hat-1" : {
		"name": "Man w/ Hat I",
		"materials": "Fired Clay",
		"x": "5",
		"y": "7",
		"z": "44",
		"images": 1,
		"details": 1
	},
	"dark-totem" : {
		"name": "Dark Totem",
		"materials": "Bonded Bronze",
		"x": "5",
		"y": "5",
		"z": "47.5",
		"images": 1,
		"details": 1
	},
	"painted-totem" : {
		"name": "Painted Totem",
		"materials": "Pigment on Hydrocal",
		"x": "6",
		"y": "6",
		"z": "46.5",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"aluminum-figure" : {
		"name": "Aluminum Totem",
		"materials": "Bonded Aluminum",
		"x": "7.5",
		"y": "6.5",
		"z": "43",
		"images": 1,
		"details": 1
	},
	"clay-figure-1" : {
		"name": "Clay Figure I",
		"materials": "Fired Clay",
		"x": "10",
		"y": "10",
		"z": "51",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"running-figure" : {
		"name": "Running Figure",
		"materials": "Fired Clay",
		"x": "8",
		"y": "13",
		"z": "48",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"terra-cotta-figure-1" : {
		"name": "Terra Cotta Figure I",
		"materials": "Fired Clay",
		"x": "6",
		"y": "7",
		"z": "42",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"man-with-hat-2" : {
		"name": "Man w/ hat II",
		"materials": "Fired Clay",
		"x": "5",
		"y": "9",
		"z": "36.75",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"head-and-torso-1" : {
		"name": "Head & Torso I",
		"materials": "Fired Clay",
		"x": "7",
		"y": "7",
		"z": "25.5",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"head-and-torso-2" : {
		"name": "Head & Torso II",
		"materials": "Fired Clay",
		"x": "7",
		"y": "10",
		"z": "30",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"standing-figure" : {
		"name": "Standing Figure",
		"materials": "Fired Clay",
		"x": "12",
		"y": "9",
		"z": "47",
		"images": 1,
		"details": 2
	},
	"terra-cotta-figure-2" : {
		"name": "Terra Cotta Figure II",
		"materials": "Terra Cotta w/ pigment",
		"x": "6",
		"y": "11",
		"z": "46",
		"images": 1,
		"details": 0
	},
	"green-figure" : {
		"name": "Green Figure",
		"materials": "Fired Clay w/ Burnished Pigment",
		"x": "10",
		"y": "15",
		"z": "48",
		"images": 2,
		"layout": "left-right",
		"details": 2
	},
	"greek-head" : {
		"name": "Greek Head",
		"materials": "Terra Cotta",
		"x": "7",
		"y": "8",
		"z": "17",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"surprised-head" : {
		"name": "Surprised Head",
		"materials": "Fired Clay",
		"x": "5",
		"y": "8",
		"z": "19",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"split-head" : {
		"name": "Split Head",
		"materials": "Fired Clay",
		"x": "10",
		"y": "10",
		"z": "28.25",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"braid" : {
		"name": "Braid",
		"materials": "Fired Clay",
		"x": "4",
		"y": "8",
		"z": "20",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"pontiac-head" : {
		"name": "Pontiac Head",
		"materials": "Terra Cotta",
		"x": "6",
		"y": "8.5",
		"z": "25.5",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"long-blue-head" : {
		"name": "Long Blue Head",
		"materials": "Fired Clay w/ Burnished Pigment",
		"x": "4.5",
		"y": "9",
		"z": "29",
		"images": 1,
		"details": 1
	},
	"male-head" : {
		"name": "Male Head",
		"materials": "Fired Clay",
		"x": "8",
		"y": "8",
		"z": "22.5",
		"images": 1,
		"details": 1		
	},
	"big-head" : {
		"name": "Big Head",
		"materials": "Fired Clay",
		"x": "10",
		"y": "12",
		"z": "24",
		"images": 1,
		"details": 0
	},
	"painted-head" : {
		"name": "Painted Head",
		"materials": "Fired Clay w/ Bisque Stain",
		"x": "7.5",
		"y": "8.5",
		"z": "16.5",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"head-form-1" : {
		"name": "Head/Form I",
		"materials": "Fired Clay",
		"x": "3",
		"y": "5",
		"z": "26.5",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"time-forms-2" : {
		"name": "Time/Forms II",
		"materials": "Fired Clay",
		"x": "28",
		"y": "30",
		"z": "58",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"time-forms-1" : {
		"name": "Time/Forms I",
		"materials": "Fired Clay",
		"x": "16",
		"y": "37",
		"z": "55",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"running-figure-3" : {
		"name": "Runing Figure III",
		"materials": "Fired Clay",
		"x": "20",
		"y": "20",
		"z": "40",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"sacrifice" : {
		"name": "Sacrifice",
		"materials": "Fired Clay",
		"x": "28",
		"y": "30",
		"z": "58",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"tall-head" : {
		"name": "Tall/Head",
		"materials": "Terra Cotta",
		"x": "15",
		"y": "19",
		"z": "52",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"figure-shapes" : {
		"name": "Figure/Shapes",
		"materials": "Terra Cotta",
		"x": "14",
		"y": "22",
		"z": "45",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"running-figure-2" : {
		"name": "Running Figure II",
		"materials": "Fired Clay",
		"x": "10",
		"y": "15",
		"z": "36",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"figure-form-1" : {
		"name": "Figure Form I",
		"materials": "Terra Cotta",
		"x": "16",
		"y": "20",
		"z": "40",
		"images": 2,
		"layout": "left-right",
		"details": 0
	},
	"artists-mother" : {
		"name": "Artist's Mother",
		"materials": "Fired Clay",
		"x": "20",
		"y": "24",
		"z": "72",
		"images": 2,
		"layout": "left-right",
		"details": 1
	},
	"head-forms" : {
		"name": "Head/Forms",
		"materials": "Fired Clay",
		"x": "16",
		"y": "18",
		"z": "37",
		"images": 2,
		"layout": "left-right",
		"details": 1
	}
};

//dir -- ordered list of works within a category 
var dir = {
	"portraits" : {
		"name" : "Portraits",
		"link" : "portraits",
		"works" : ["rene", "jabbo", "manuel", "sue", "james", "sid", "jennifer", "brian"]
	},
	"early-figurative" : {
		"name" : "Early Figurative",
		"link" : "early-figurative",
		"works" : ["reclining-figure", "reclining-male", "seated-girl", "grey-girl", "painted-figure", "barn-figure", "green-man", "girl-standing", "walking-man", "leaning-woman", "torso"]
	},
	"figure-sketches" : {
		"name" : "Figure Sketches",
		"link" : "figure-sketches",
		"works" : ["sitting-figure-1", "kneeling-figure-1", "seated-figure-3", "seated-figure-2", "kneeling-figure-2", "seated-figure", "reclining-figure-1", "reclining-figure-2", "figure-relief", "reclining-totem", "seated-figure-4", "leaning-figure"]
	},
	"totems" : {
		"name" : "Totems",
		"link" : "totems",
		"works" : ["totem-sketch", "sketch-1", "sketch-2", "sketch-with-hat", "apt-totem", "totem", "man-with-hat-1", "dark-totem", "painted-totem", "aluminum-figure"]
	},
	"clay-figures" : {
		"name" : "Clay Figures",
		"link" : "clay-figures",
		"works" : ["clay-figure-1", "running-figure", "terra-cotta-figure-1", "man-with-hat-2", "head-and-torso-1", "head-and-torso-2", "standing-figure", "terra-cotta-figure-2", "green-figure"]
	},
	"clay-heads" : {
		"name" : "Clay Heads",
		"link" : "clay-heads",
		"works" : ["greek-head", "surprised-head", "split-head", "braid", "pontiac-head", "long-blue-head", "male-head", "big-head", "painted-head", "head-form-1"]
	},
	"recent-work" : {
		"name" : "Recent Work",
		"link" : "recent-work",
		"works" : ["time-forms-2", "time-forms-1", "running-figure-3", "sacrifice", "tall-head", "figure-shapes", "running-figure-2", "figure-form-1", "artists-mother", "head-forms"]
	}
};

//ord -- ordered list of categories
var ord = [
	"recent-work", "clay-figures", "clay-heads", "totems", "early-figurative", "figure-sketches", "portraits"
];

var bio = "MARILYN J FRIEDMAN began as a figurative sculptor, developing the rhythms, dynamics, and motifs of the human form - creating a vocabulary in clay which evolved into a language of personal imagery and content. <br/> She studied sculpture at The Art Students League of New York, Skowhegan School of Painting and Sculpture, The University of Siena, Italy, and received a BA in Art History and Sculpture from Stony Brook University. <br/> She has received numerous grants and awards for her portrait, figurative, and abstract works from organizations such as The National Academy of Design, The National Sculpture Society, and The National Arts Club. She has created commissioned sculpture for Kohler, Lufthansa, and Absolut, and her work is in many private collections. <br/> Ms. Friedman has taught sculpture at Parsons School of Design, and has been on the sculpture faculty of the National Academy School. She is currently an Instructor at The Art Students League of New York. <br/> Marilyn J Friedman is a recipient of the 2014 Adolph &amp; Esther Gottlieb Foundation Grant in recognition of her work as a sculptor.";
