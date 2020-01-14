export const materials = [
	{
		id: 'material1',
		name: "Acorn",
		tags: ["general"],
		price: 2,
		hearts: 0.25,
		first: {
			duration: 20,
			hearts: 0.25
		},
		buff: {},
		locations: [
			"Base of trees"
		]
	},
	{
		id: 'material2',
		name: "Apple",
		tags: ["general"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {},
		locations: [
			"Hyrule Field",
			"East Necluda"
		]
	},
	{
		id: 'material3',
		name: "Armored Carp",
		tags: ["tough"],
		price: 10,
		hearts: 1,
		first: {},
		buff: {
			type: "defense",
			potency: 2
		},
		locations: [
			"Lanayru Great Spring",
			"East Necluda"
		]
	},
	{
		id: 'material4',
		name: "Armored Porgy",
		tags: ["tough"],
		price: 10,
		hearts: 1,
		first: {},
		buff: {
			type: "defense",
			potency: 3
		},
		locations: [
			"Necluda Sea",
			"Lanayru Sea"
		]
	},
	{
		id: 'material5',
		name: "Big Hearty Radish",
		tags: ["hearty"],
		price: 15,
		hearts: 4,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 5
		},
		locations: [
			"Akkala Highlands",
			"Lanayru Great Spring"
		]
	},
	{
		id: 'material6',
		name: "Big Hearty Truffle",
		tags: ["hearty"],
		price: 15,
		hearts: 3,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 4
		},
		locations: [
			"Hebra Mountains",
			"Great Hyrule Forest"
		]
	},
	{
		id: 'material7',
		name: "Bird Egg",
		tags: ["general"],
		price: 3,
		hearts: 1,
		first: {
			duration: 60
		},
		buff: {},
		locations: [
			"Nests in trees and cliffs"
		]
	},
	{
		id: 'material8',
		name: "Bright-Eyed Crab",
		tags: ["energizing"],
		price: 10,
		hearts: 1,
		first: {},
		buff: {
			type: "stamina",
			potency: 2
		},
		locations: [
			"Lanayru Great Spring",
			"Eldin Canyon"
		]
	},
	{
		id: 'material9',
		name: "Chickaloo Tree Nut",
		tags: ["general"],
		price: 3,
		hearts: 0.25,
		first: {
			duration: 10,
			hearts: 0.25
		},
		buff: {},
		locations: [
			"Dropped by sparrows"
		]
	},
	{
		id: 'material10',
		name: "Chillfin Trout",
		tags: ["chilly"],
		price: 6,
		hearts: 1,
		first: {},
		buff: {
			type: "heat resist",
			potency: 2
		},
		locations: [
			"Tabantha Frontier",
			"Hebra Mountains"
		]
	},
	{
		id: 'material11',
		name: "Chillshroom",
		tags: ["chilly"],
		price: 4,
		hearts: 0.5,
		first: {},
		buff: {
			type: "heat resist",
			potency: 2
		},
		locations: [
			"Hebra Mountains",
			"Mount Lanayru"
		]
	},
	{
		id: 'material12',
		name: "Courser Bee Honey",
		tags: ["energizing"],
		price: 10,
		hearts: 2,
		first: {},
		buff: {
			type: "stamina",
			potency: 2
		},
		locations: [
			"Hyrule Field",
			"Tabantha Frontier"
		]
	},
	{
		id: 'material13',
		name: "Endura Shroom",
		tags: ["enduring"],
		price: 6,
		hearts: 1,
		first: {},
		buff: {
			type: "enduras",
			potency: 1
		},
		locations: [
			"Hyrule Ridge",
			"Hyrule Field"
		]
	},
	{
		id: 'material14',
		name: "Fleet-Lotus Seeds",
		tags: ["hasty"],
		price: 5,
		hearts: 0.5,
		first: {},
		buff: {
			type: "speed",
			potency: 2
		},
		locations: [
			"Lanayru Wetlands",
			"Lanayru Great Spring"
		]
	},
	{
		id: 'material15',
		name: "Fresh Milk",
		tags: ["general"],
		price: 3,
		hearts: 0.5,
		first: {
			duration: 50
		},
		buff: {},
		locations: [
			"East Wind store in Hateno Village",
			"Merchant Yammo at Tabantha Bridge Stable",
			"Merchant Angus at Dueling Peaks Stable"
		]
	},
	{
		id: 'material16',
		name: "Goat Butter",
		tags: ["general"],
		price: 3,
		hearts: 0,
		first: {
			duration: 50
		},
		buff: {},
		locations: [
			"High Spirits Produce store in Kakariko Village",
			"The Slippery Falcon store in Rito Village",
			"Merchant Angus at Dueling Peaks Stable"
		]
	},
	{
		id: 'material17',
		name: "Goron Spice",
		tags: ["general"],
		price: 4,
		hearts: 0,
		first: {
			duration: 60
		},
		buff: {},
		locations: [
			"Goron Gusto Shop in Goron City",
			"Merchant Yammo at Tabantha Bridge Stable"
		]
	},
	{
		id: 'material18',
		name: "Hearty Bass",
		tags: ["hearty"],
		price: 18,
		hearts: 2,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 2
		},
		locations: [
			"Hyrule Field",
			"West Necluda"
		]
	},
	{
		id: 'material19',
		name: "Hearty Blueshell Snail",
		tags: ["hearty"],
		price: 15,
		hearts: 3,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 3
		},
		locations: [
			"Lanayru Sea",
			"Necluda Sea"
		]
	},
	{
		id: 'material20',
		name: "Hearty Durian",
		tags: ["hearty"],
		price: 15,
		hearts: 3,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 4
		},
		locations: [
			"West Necluda",
			"Faron Grasslands"
		]
	},
	{
		id: 'material21',
		name: "Hearty Radish",
		tags: ["hearty"],
		price: 8,
		hearts: 2.5,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 3
		},
		locations: [
			"Hyrule Ridge",
			"East Necluda",
			"Beedle at East Akkala Stable"
		]
	},
	{
		id: 'material22',
		name: "Hearty Salmon",
		tags: ["hearty"],
		price: 10,
		hearts: 4,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 4
		},
		locations: [
			"Tabantha Frontier",
			"Hebra Mountains"
		]
	},
	{
		id: 'material23',
		name: "Hearty Truffle",
		tags: ["hearty"],
		price: 6,
		hearts: 2,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 1
		},
		locations: [
			"Great Hyrule Forest",
			"Hyrule Field"
		]
	},
	{
		id: 'material24',
		name: "Hydromelon",
		tags: ["chilly"],
		price: 4,
		hearts: 0.5,
		first: {},
		buff: {
			type: "heat resist",
			potency: 1
		},
		locations: [
			"Gerudo Desert",
			"Faron Grasslands"
		]
	},
	{
		id: 'material25',
		name: "Hylian Shroom",
		tags: ["general"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {},
		locations: [
			"Hyrule Field",
			"West Necluda"
		]
	},
	{
		id: 'material26',
		name: "Hyrule Bass",
		tags: ["general"],
		price: 6,
		hearts: 1,
		first: {},
		buff: {},
		locations: [
			"Hyrule Field",
			"West Necluda"
		]
	},
	{
		id: 'material27',
		name: "Ironshell Crab",
		tags: ["tough"],
		price: 8,
		hearts: 1,
		first: {},
		buff: {
			type: "defense",
			potency: 2
		},
		locations: [
			"Necluda Sea",
			"East Necluda"
		]
	},
	{
		id: 'material28',
		name: "Ironshroom",
		tags: ["tough"],
		price: 5,
		hearts: 0.5,
		first: {},
		buff: {
			type: "defense",
			potency: 2
		},
		locations: [
			"West Necluda",
			"East Necluda"
		]
	},
	{
		id: 'material29',
		name: "Mighty Bananas",
		tags: ["mighty"],
		price: 5,
		hearts: 0.5,
		first: {},
		buff: {
			type: "attack",
			potency: 2
		},
		locations: [
			"Faron",
			"Yiga Clan Hideout"
		]
	},
	{
		id: 'material30',
		name: "Mighty Carp",
		tags: ["mighty"],
		price: 10,
		hearts: 1,
		first: {},
		buff: {
			type: "attack",
			potency: 2
		},
		locations: [
			"Akkala Highlands",
			"Lanayru Great Spring"
		]
	},
	{
		id: 'material31',
		name: "Mighty Porgy",
		tags: ["mighty"],
		price: 10,
		hearts: 1,
		first: {},
		buff: {
			type: "attack",
			potency: 3
		},
		locations: [
			"Necluda Sea",
			"Lanayru Sea"
		]
	},
	{
		id: 'material32',
		name: "Monster Extract",
		tags: ["general"],
		price: 3,
		hearts: 0,
		first: {},
		buff: {
			type: "random",
			potency: 0
		},
		locations: [
			"Kilton the Monster Parts Merchant"
		]
	},
	{
		id: 'material33',
		name: "Palm Fruit",
		tags: ["general"],
		price: 4,
		hearts: 1,
		first: {},
		buff: {},
		locations: [
			"East Necluda",
			"Gerudo Desert"
		]
	},
	{
		id: 'material34',
		name: "Raw Bird Drumstick",
		tags: ["general"],
		price: 8,
		hearts: 1,
		first: {},
		buff: {},
		locations: [
			"Wood Pigeon",
			"Mountain Crow",
			"Bright-Chested Duck",
			"Blue-Winged Heron",
			"Pink Heron",
			"Seagull"
		]
	},
	{
		id: 'material35',
		name: "Raw Bird Thigh",
		tags: ["general"],
		price: 15,
		hearts: 1.5,
		first: {},
		buff: {},
		locations: [
			"Rainbow Pigeon",
			"Hotfeather Pigeon",
			"White Pigeon",
			"Islander Hawk",
			"Eldin Ostrich"
		]
	},
	{
		id: 'material36',
		name: "Raw Gourmet Meat",
		tags: ["general"],
		price: 35,
		hearts: 3,
		first: {},
		buff: {},
		locations: [
			"Water Buffalo",
			"Snowcoat Fox",
			"Maraudo Wolf"
		]
	},
	{
		id: 'material37',
		name: "Raw Meat",
		tags: ["general"],
		price: 8,
		hearts: 1,
		first: {},
		buff: {},
		locations: [
			"Woodland Boar",
			"Mountain Goat"
		]
	},
	{
		id: 'material38',
		name: "Raw Prime Meat",
		tags: ["general"],
		price: 15,
		hearts: 1.5,
		first: {},
		buff: {},
		locations: [
			"Red-Tusked Boar",
			"Mountain Buck",
			"Mountain Doe",
			"Water Buffalo"
		]
	},
	{
		id: 'material39',
		name: "Raw Whole Bird",
		tags: ["general"],
		price: 35,
		hearts: 3,
		first: {},
		buff: {},
		locations: [
			"White Pigeon",
			"Eldin Ostrich"
		]
	},
	{
		id: 'material40',
		name: "Razorclaw Crab",
		tags: ["mighty"],
		price: 8,
		hearts: 1,
		first: {},
		buff: {
			type: "attack",
			potency: 2
		},
		locations: [
			"Necluda Sea",
			"East Necluda"
		]
	},
	{
		id: 'material41',
		name: "Razorshroom",
		tags: ["hasty"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {
			type: "speed",
			potency: 1
		},
		locations: [
			"Great Hyrule Forest",
			"Tabantha Frontier"
		]
	},
	{
		id: 'material42',
		name: "Rock Salt",
		tags: ["general"],
		price: 2,
		hearts: 0,
		first: {
			duration: 30
		},
		buff: {},
		locations: [
			"Ore Deposits",
			"Marot Mart in Zora's Domain",
			"Goron Gusto Shop in Goron City"
		]
	},
	{
		id: 'material43',
		name: "Rushroom",
		tags: ["hasty"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {
			type: "speed",
			potency: 1
		},
		locations: [
			"Gerudo Highlands",
			"Hyrule Ridge"
		]
	},
	{
		id: 'material44',
		name: "Sanke Carp",
		tags: ["general"],
		price: 20,
		hearts: 1,
		first: {},
		buff: {},
		locations: [
			"West Necluda"
		]
	},
	{
		id: 'material45',
		name: "Silent Shroom",
		tags: ["sneaky"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {
			type: "stealth",
			potency: 2
		},
		locations: [
			"Lanayru Great Spring",
			"West Necluda"
		]
	},
	{
		id: 'material46',
		name: "Sizzlefin Trout",
		tags: ["spicy"],
		price: 6,
		hearts: 1,
		first: {},
		buff: {
			type: "cold resist",
			potency: 2
		},
		locations: [
			"Eldin Canyon",
			"Eldin Mountains"
		]
	},
	{
		id: 'material47',
		name: "Sneaky River Snail",
		tags: ["sneaky"],
		price: 6,
		hearts: 1,
		first: {},
		buff: {
			type: "stealth",
			potency: 1
		},
		locations: [
			"West Necluda",
			"Lanayru Great Spring"
		]
	},
	{
		id: 'material48',
		name: "Spicy Pepper",
		tags: ["spicy"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {
			type: "cold resist",
			potency: 1
		},
		locations: [
			"Gerudo Desert",
			"Tabantha Frontier"
		]
	},
	{
		id: 'material49',
		name: "Stamella Shroom",
		tags: ["energizing"],
		price: 5,
		hearts: 0.5,
		first: {},
		buff: {
			type: "stamina",
			potency: 1
		},
		locations: [
			"Hyrule Ridge",
			"Hyrule Field"
		]
	},
	{
		id: 'material50',
		name: "Staminoka Bass",
		tags: ["energizing"],
		price: 18,
		hearts: 1,
		first: {},
		buff: {
			type: "stamina",
			potency: 4
		},
		locations: [
			"Hyrule Ridge",
			"West Necluda"
		]
	},
	{
		id: 'material51',
		name: "Stealthfin Trout",
		tags: ["sneaky"],
		price: 10,
		hearts: 1,
		first: {},
		buff: {
			type: "stealth",
			potency: 2
		},
		locations: [
			"Great Hyrule Forest",
			"Eldin Mountains"
		]
	},
	{
		id: 'material52',
		name: "Sunshroom",
		tags: ["spicy"],
		price: 4,
		hearts: 0.5,
		first: {},
		buff: {
			type: "cold resist",
			potency: 2
		},
		locations: [
			"Eldin Canyon",
			"Gerudo Highlands"
		]
	},
	{
		id: 'material53',
		name: "Voltfin Trout",
		tags: ["electro"],
		price: 6,
		hearts: 1,
		first: {},
		buff: {
			type: "shock resist",
			potency: 2
		},
		locations: [
			"Tabantha Frontier",
			"Hyrule Ridge",
			"Zora River"
		]
	},
	{
		id: 'material54',
		name: "Voltfruit",
		tags: ["electro"],
		price: 4,
		hearts: 0.5,
		first: {},
		buff: {
			type: "shock resist",
			potency: 1
		},
		locations: [
			"Gerudo Desert",
			"Gerudo Highlands"
		]
	},
	{
		id: 'material55',
		name: "Wildberry",
		tags: ["general"],
		price: 3,
		hearts: 0.5,
		first: {},
		buff: {},
		locations: [
			"Gerudo Highlands",
			"Hebra Mountains"
		]
	},
	{
		id: 'material56',
		name: "Zapshroom",
		tags: ["electro"],
		price: 4,
		hearts: 0.5,
		first: {},
		buff: {
			type: "shock resist",
			potency: 2
		},
		locations: [
			"Deep Akkala",
			"Gerudo Highlands"
		]
	},
	{
		id: 'material57',
		name: "Armoranth",
		tags: ["tough"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {
			type: "defense",
			potency: 1
		},
		locations: [
			"Akkala Highlands",
			"Hyrule Ridge"
		]
	},
	{
		id: 'material58',
		name: "Blue Nightshade",
		tags: ["sneaky"],
		price: 4,
		hearts: 0,
		first: {},
		buff: {
			type: "stealth",
			potency: 1
		},
		locations: [
			"West Necluda",
			"Lanayru Great Spring"
		]
	},
	{
		id: 'material59',
		name: "Cane Sugar",
		tags: ["general"],
		price: 3,
		hearts: 0,
		first: {
			duration: 50
		},
		buff: {},
		locations: [
			"Goron Gusto Shop in Goron City",
			"The Slippery Falcon store in Rito Village",
			"General Shoppe in Korok Forest",
			"Merchant Yammo at Tabantha Bridge Stable"
		]
	},
	{
		id: 'material60',
		name: "Cool Safflina",
		tags: ["chilly"],
		price: 3,
		hearts: 0,
		first: {},
		buff: {
			type: "heat resist",
			potency: 1
		},
		locations: [
			"Goron Gusto Shop in Goron City",
			"The Slippery Falcon store in Rito Village",
			"General Shoppe in Korok Forest",
			"Merchant Yammo at Tabantha Bridge Stable"
		]
	},
	{
		id: 'material61',
		name: "Electric Safflina",
		tags: ["electro"],
		price: 3,
		hearts: 0,
		first: {},
		buff: {
			type: "shock resist",
			potency: 1
		},
		locations: [
			"Gerudo Desert",
			"Hyrule Ridge"
		]
	},
	{
		id: 'material62',
		name: "Endura Carrot",
		tags: ["enduring"],
		price: 30,
		hearts: 2,
		first: {},
		buff: {
			type: "enduras",
			potency: 4
		},
		locations: [
			"Hyrule Ridge",
			"Faron Grasslands"
		]
	},
	{
		id: 'material63',
		name: "Fortified Pumpkin",
		tags: ["tough"],
		price: 5,
		hearts: 0.5,
		first: {},
		buff: {
			type: "defense",
			potency: 2
		},
		locations: [
			"Kakariko Village"
		]
	},
	{
		id: 'material64',
		name: "Hylian Rice",
		tags: ["general"],
		price: 3,
		hearts: 1,
		first: {
			duration: 30
		},
		buff: {},
		locations: [
			"Cut tall grass in Necluda",
			"East Wind store in Hateno Village",
			"Marot Mart in Zora's Domain",
			"Merchant Yammo at Tabantha Bridge Stable"
		]
	},
	{
		id: 'material65',
		name: "Hyrule Herb",
		tags: ["general"],
		price: 3,
		hearts: 1,
		first: {},
		buff: {},
		locations: [
			"Hyrule Field",
			"Akkala Highlands"
		]
	},
	{
		id: 'material66',
		name: "Mighty Thistle",
		tags: ["mighty"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {
			type: "attack",
			potency: 1
		},
		locations: [
			"West Necluda",
			"Faron Grasslands"
		]
	},
	{
		id: 'material67',
		name: "Silent Princess",
		tags: ["sneaky"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {
			type: "stealth",
			potency: 3
		},
		locations: [
			"Hyrule Ridge",
			"West Necluda"
		]
	},
	{
		id: 'material68',
		name: "Swift Carrot",
		tags: ["hasty"],
		price: 4,
		hearts: 0.5,
		first: {},
		buff: {
			type: "speed",
			potency: 1
		},
		locations: [
			"Kakariko Village",
			"Beedle in East Akkala and Woodland Stables"
		]
	},
	{
		id: 'material69',
		name: "Swift Violet",
		tags: ["hasty"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {
			type: "speed",
			potency: 2
		},
		locations: [
			"Gerudo Highlands",
			"Hebra Mountains",
			"Zora's Domain"
		]
	},
	{
		id: 'material70',
		name: "Tabantha Wheat",
		tags: ["general"],
		price: 3,
		hearts: 1,
		first: {
			duration: 30
		},
		buff: {},
		locations: [
			"Cut tall grass in Tabantha Fields",
			"The Slippery Falcon store in Rito Village",
			"Merchant Yammo at Snowfield Stable"
		]
	},
	{
		id: 'material71',
		name: "Warm Safflina",
		tags: ["spicy"],
		price: 3,
		hearts: 0,
		first: {},
		buff: {
			type: "cold resist",
			potency: 1
		},
		locations: [
			"Gerudo Desert",
			"Hyrule Ridge"
		]
	},
	{
		id: 'material72',
		name: "Bladed Rhino Beetle",
		tags: ["mighty"],
		price: 4,
		hearts: 0,
		first: {},
		buff: {
			type: "attack",
			potency: 1
		},
		locations: [
			"West Necluda",
			"East Necluda"
		]
	},
	{
		id: 'material73',
		name: "Cold Darner",
		tags: ["chilly"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "heat resist",
			potency: 2
		},
		locations: [
			"Hyrule Ridge",
			"Gerudo Desert",
			"Merchant at Gerudo Canyon Stable",
			"Beedle at Kara Kara Bazaar and Woodland Stable"
		]
	},
	{
		id: 'material74',
		name: "Electric Darner",
		tags: ["electro"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "shock resist",
			potency: 2
		},
		locations: [
			"Hyrule Ridge",
			"Gerudo Desert",
			"Beedle at Riverside Stable"
		]
	},
	{
		id: 'material75',
		name: "Energetic Rhino Beetle",
		tags: ["energizing"],
		price: 30,
		hearts: 0,
		first: {},
		buff: {
			type: "stamina",
			potency: 6
		},
		locations: [
			"Akkala Highlands",
			"West Necluda"
		]
	},
	{
		id: 'material76',
		name: "Fireproof Lizard",
		tags: ["fireproof"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {
			type: "fireproof",
			potency: 1
		},
		locations: [
			"Eldin Canyon",
			"Death Mountain"
		]
	},
	{
		id: 'material77',
		name: "Hearty Lizard",
		tags: ["hearty"],
		price: 20,
		hearts: 0,
		first: {},
		buff: {
			type: "temp-hearts",
			potency: 4
		},
		locations: [
			"Gerudo Desert",
			"Necluda Sea",
			"Beedle at Foothill, Gerudo Canyon, Highland, Outskirt, South Akkala, and Woodland Stables"
		]
	},
	{
		id: 'material78',
		name: "Hightail Lizard",
		tags: ["hasty"],
		price: 20,
		hearts: 0,
		first: {},
		buff: {
			type: "speed",
			potency: 1
		},
		locations: [
			"West Necluda",
			"East Necluda",
			"Beedle at Ladeside and South Akkala Stables"
		]
	},
	{
		id: 'material79',
		name: "Hot-Footed Frog",
		tags: ["hasty"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "speed",
			potency: 2
		},
		locations: [
			"Lanayru Great Spring",
			"Hyrule Ridge",
			"Beedle at Dueling Peaks, Outskirt, and Wetland Stables"
		]
	},
	{
		id: 'material80',
		name: "Restless Cricket",
		tags: ["energizing"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "stamina",
			potency: 1
		},
		locations: [
			"Hyrule Field",
			"East Necluda",
			"Merchant at Gerudo Canyon Stable",
			"Beedle at Outskirt Stable"
		]
	},
	{
		id: 'material81',
		name: "Rugged Rhino Beetle",
		tags: ["tough"],
		price: 4,
		hearts: 0,
		first: {},
		buff: {
			type: "defense",
			potency: 1
		},
		locations: [
			"Hyrule Field",
			"Faron Grasslands"
		]
	},
	{
		id: 'material82',
		name: "Smotherwing Butterfly",
		tags: ["fireproof"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "fireproof",
			potency: 2
		},
		locations: [
			"Eldin Canyon",
			"Death Mountain",
			"Beedle at East Akkala and Wetland Stables"
		]
	},
	{
		id: 'material83',
		name: "Summerwing Butterfly",
		tags: ["spicy"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "cold resist",
			potency: 1
		},
		locations: [
			"Great Hyrule Forest",
			"Eldin Mountains",
			"Beedle at Snowfield Stable"
		]
	},
	{
		id: 'material84',
		name: "Sunset Firefly",
		tags: ["sneaky"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "stealth",
			potency: 1
		},
		locations: [
			"West Necluda",
			"Great Hyrule Forest",
			"Beedle at Highland, Rito, Serenne, and Woodland Stables"
		]
	},
	{
		id: 'material85',
		name: "Thunderwing Butterfly",
		tags: ["electro"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "shock resist",
			potency: 1
		},
		locations: [
			"Hyrule Ridge",
			"Gerudo Highlands",
			"Beedle at Lakeside, Riverside, and Tabantha Bridge Stables"
		]
	},
	{
		id: 'material86',
		name: "Tireless Frog",
		tags: ["enduring"],
		price: 20,
		hearts: 0,
		first: {},
		buff: {
			type: "enduras",
			potency: 2
		},
		locations: [
			"Lanayru Great Spring",
			"Hyrule Ridge",
			"Beedle at Foothill, Lakeside, Rito, Riverside, Serenne, and Snowfield Stables"
		]
	},
	{
		id: 'material87',
		name: "Warm Darner",
		tags: ["spicy"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "cold resist",
			potency: 2
		},
		locations: [
			"Akkala Highlands",
			"Hyrule Field",
			"Beedle at Gerudo Canyon, Rito, Serenne, and Snowfield Stables"
		]
	},
	{
		id: 'material88',
		name: "Winterwing Butterfly",
		tags: ["chilly"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {
			type: "heat resist",
			potency: 2
		},
		locations: [
			"Hyrule Ridge",
			"Tabantha Frontier",
			"Beedle at Gerudo Canyon and Tabantha Bridge Stables"
		]
	},
	{
		id: 'material89',
		name: "Amber",
		tags: ["general"],
		price: 30,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus",
			"Stone Pebblit"
		]
	},
	{
		id: 'material90',
		name: "Diamond",
		tags: ["general"],
		price: 500,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus"
		]
	},
	{
		id: 'material91',
		name: "Flint",
		tags: ["general"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus",
			"Stone Pebblit"
		]
	},
	{
		id: 'material92',
		name: "Luminous Stone",
		tags: ["general"],
		price: 70,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Luminous ore deposits",
			"Stone Talus (Luminous)"
		]
	},
	{
		id: 'material93',
		name: "Opal",
		tags: ["general"],
		price: 60,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus"
		]
	},
	{
		id: 'material94',
		name: "Ruby",
		tags: ["general"],
		price: 210,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus (Rare, Igneo)"
		]
	},
	{
		id: 'material95',
		name: "Sapphire",
		tags: ["general"],
		price: 260,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus (Rare, Frost)"
		]
	},
	{
		id: 'material96',
		name: "Topaz",
		tags: ["general"],
		price: 180,
		hearts: 0,
		first: {},
		buff: {},
		locations: [
			"Ore deposits",
			"Stone Talus (Rare, Igneo, Frost)"
		]
	},
	{
		id: 'material97',
		name: "Ancient Core",
		tags: ["monster"],
		price: 80,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Guardian Stalker, Skywatcher, Turret, Sentry, and Scouts III & IV"
		]
	},
	{
		id: 'material98',
		name: "Ancient Gear",
		tags: ["monster"],
		price: 30,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"All Guardian types except Scout I"
		]
	},
	{
		id: 'material99',
		name: "Ancient Screw",
		tags: ["monster"],
		price: 12,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"All Guardian types"
		]
	},
	{
		id: 'material100',
		name: "Ancient Shaft",
		tags: ["monster"],
		price: 40,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"All Guardian types except Scout I"
		]
	},
	{
		id: 'material101',
		name: "Ancient Spring",
		tags: ["monster"],
		price: 15,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"All Guardian types"
		]
	},
	{
		id: 'material102',
		name: "Bokoblin Fang",
		tags: ["monster"],
		price: 8,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Bokoblins"
		]
	},
	{
		id: 'material103',
		name: "Bokoblin Guts",
		tags: ["monster"],
		price: 20,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Bokoblins (Blue or stronger)"
		]
	},
	{
		id: 'material104',
		name: "Bokoblin Horn",
		tags: ["monster"],
		price: 3,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Bokoblins"
		]
	},
	{
		id: 'material105',
		name: "Chuchu Jelly",
		tags: ["monster"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Chuchus (Blue)"
		]
	},
	{
		id: 'material106',
		name: "Electric Keese Wing",
		tags: ["monster"],
		price: 6,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Keese (Electric)"
		]
	},
	{
		id: 'material107',
		name: "Fire Keese Wing",
		tags: ["monster"],
		price: 6,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Keese (Fire)"
		]
	},
	{
		id: 'material108',
		name: "Giant Ancient Core",
		tags: ["monster"],
		price: 200,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Guardian Stalker, Skywatcher, and Turret"
		]
	},
	{
		id: 'material109',
		name: "Hinox Guts",
		tags: ["monster"],
		price: 80,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Hinox"
		]
	},
	{
		id: 'material110',
		name: "Hinox Toenail",
		tags: ["monster"],
		price: 20,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Hinox"
		]
	},
	{
		id: 'material111',
		name: "Hinox Tooth",
		tags: ["monster"],
		price: 35,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Hinox"
		]
	},
	{
		id: 'material112',
		name: "Ice Keese Wing",
		tags: ["monster"],
		price: 6,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Keese (Ice)"
		]
	},
	{
		id: 'material113',
		name: "Icy Lizalfos Tail",
		tags: ["monster"],
		price: 35,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Lizalfos (Ice-Breath)"
		]
	},
	{
		id: 'material114',
		name: "Keese Eyeball",
		tags: ["monster"],
		price: 20,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Keese"
		]
	},
	{
		id: 'material115',
		name: "Keese Wing",
		tags: ["monster"],
		price: 2,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Keese (Normal)"
		]
	},
	{
		id: 'material116',
		name: "Lizalfos Horn",
		tags: ["monster"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Lizalfos"
		]
	},
	{
		id: 'material117',
		name: "Lizalfos Tail",
		tags: ["monster"],
		price: 28,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Lizalfos (Normal)"
		]
	},
	{
		id: 'material118',
		name: "Lizalfos Talon",
		tags: ["monster"],
		price: 15,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Lizalfos"
		]
	},
	{
		id: 'material119',
		name: "Lynel Guts",
		tags: ["monster"],
		price: 200,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Lynels"
		]
	},
	{
		id: 'material120',
		name: "Lynel Hoof",
		tags: ["monster"],
		price: 50,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Lynels"
		]
	},
	{
		id: 'material121',
		name: "Lynel Horn",
		tags: ["monster"],
		price: 40,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Lynels"
		]
	},
	{
		id: 'material122',
		name: "Moblin Fang",
		tags: ["monster"],
		price: 12,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Moblins"
		]
	},
	{
		id: 'material123',
		name: "Moblin Guts",
		tags: ["monster"],
		price: 25,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Moblins (Blue or stronger)"
		]
	},
	{
		id: 'material124',
		name: "Moblin Horn",
		tags: ["monster"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Moblins"
		]
	},
	{
		id: 'material125',
		name: "Molduga Fin",
		tags: ["monster"],
		price: 30,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Molduga"
		]
	},
	{
		id: 'material126',
		name: "Molduga Guts",
		tags: ["monster"],
		price: 110,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Molduga"
		]
	},
	{
		id: 'material127',
		name: "Octo Balloon",
		tags: ["monster"],
		price: 5,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Octoroks"
		]
	},
	{
		id: 'material128',
		name: "Octorok Eyeball",
		tags: ["monster"],
		price: 25,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Octoroks"
		]
	},
	{
		id: 'material129',
		name: "Octorok Tentacle",
		tags: ["monster"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {},
		tier: 1,
		locations: [
			"Octoroks"
		]
	},
	{
		id: 'material130',
		name: "Red Chuchu Jelly",
		tags: ["monster"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Chuchus (Red)"
		]
	},
	{
		id: 'material131',
		name: "Red Lizalfos Tail",
		tags: ["monster"],
		price: 35,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Lizalfos (Fire-Breath)"
		]
	},
	{
		id: 'material132',
		name: "White Chuchu Jelly",
		tags: ["monster"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Chuchus (White)"
		]
	},
	{
		id: 'material133',
		name: "Yellow Chuchu Jelly",
		tags: ["monster"],
		price: 10,
		hearts: 0,
		first: {},
		buff: {},
		tier: 2,
		locations: [
			"Chuchus (Yellow)"
		]
	},
	{
		id: 'material134',
		name: "Yellow Lizalfos Tail",
		tags: ["monster"],
		price: 35,
		hearts: 0,
		first: {},
		buff: {},
		tier: 3,
		locations: [
			"Lizalfos (Electric)"
		]
	},
	{
		id: 'material135',
		name: "Fairy",
		tags: ["monster"],
		price: 2,
		hearts: 5,
		first: {},
		buff: {},
		locations: [
			"Greater Hyrule",
			"Around Great Fairy Fountains"
		]
	}
]
