/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	},

	'Monument':{
        title: 'Bonus Fact',
        body: 'This is a Hiroshima memorial statue',
        icon: 'assets/images/notif.png'
    },
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	siblings: "SasakiChildren.jpeg",
	airRaidShelter: "AirRaidShelter.jpeg",
	sasakiFamily: "sadakomasahiro.jpeg",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'cranes': 'cranes.jpeg',
	'memorial': 'hiroshimamemorial.jpeg',
	'black': 'black.jpeg',
});


// Define the Characters
monogatari.characters ({

});

//
monogatari.script ({
	'Start': [
		'show background memorial with fadeIn',
		{'Choice':{
			'The Sasaki Family':{
				'Text': 'The Sasaki Family',
				'Do': 'jump SasakiFamily'
			},
			'Destruction of Hiroshima':{
				'Text': 'Destruction of Hiroshima',
				'Do': 'jump DestructionHiroshima'
			},
			'The Aftermath':{
				'Text': 'The Aftermath',
				'Do': 'jump Aftermath'
			}
		}
	},
],

	'SasakiFamily':[
		'show background black',
		'show image siblings with fadeIn',
		'Sadako and her brother, Masahiro, lived in the midst of World War Ⅱ.',
		'hide image siblings with fadeOut',
		'show image airRaidShelter with fadeIn',
		'During the war, the Allies dropped numerous bombs on the Japanese, destroying homes and cities. In response, the Japanese government set up warning sirens and bomb shelters.',
		'The image shown here is a principle diagram of a Japenese air raid shelter, which Sadako and Masahiro often played in. Neither sibling ever realized how much danger they were in because no bombings ever occured in their town',
		'hide image airRaidShelter with fadeOut',
		'show image sasakiFamily with fadeIn',
		'The entire Sasaki family lived together. Their father owned a barbershop but was enlisted in the military, so their mother ran the barbershop by herself. Their grandmother also lived with them and helped care for the children.',

	],

	'DestructionHiroshima':[
		'show background black',
		'vibrate 200 100 150 50 200 300'
	],

	'Aftermath':[
		'show background black',
	],
});

monogatari.component ('main-screen').template (() => {
    return `
				<center>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>
        <b>The Cranes of Hiroshima</b>
				<br/>
				<br/>
        By Senya W.
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
