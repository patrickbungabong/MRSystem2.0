//  L O A D S      M O V I E S  
var movies=[{
					id: 12,
					title: "Mulan", 
					duration: 120, 
					rating: 6.8,
					synopsis: "To save her father from death in the army, a young maiden secretly goes in his place and " +
								 "becomes one of China's greatest heroines in the process.",
					genrelist: ["Adventure", "Action","War"],
					photos: [1, 2, 3, 4, 5, 6, 7]
				},
				{
					id: 13,
					title: "Kingsman", 
					duration: 112, 
					rating: 7.2,
					synopsis: "Gary 'Eggsy' Unwin (Taron Egerton), whose late father secretly worked for a spy organization, lives in a South London housing estate and seems headed for a life behind bars." +
								 "However, dapper agent Harry Hart (Colin Firth) recognizes potential in the youth and recruits him to be a trainee in the secret service.",
					genrelist: ["Thriller / Suspense", "Action","Adventure"],
					photos: [1, 2, 3, 4, 5, 6, 7]
				},
				{
					id: 14,
					title: "Sonic", 
					duration: 110, 
					rating: 8.2,
					synopsis: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth --  until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. " +
								 "Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination.",
					genrelist: ["Adventure", "Comedy","Action"],
					photos: [1, 2, 3, 4, 5, 6, 7]
				},
				{
					id: 16,
					title: "Wonder Woman", 
					duration: 140, 
					rating: 3.2,
					synopsis: "Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. " +
								 "Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
					genrelist: ["Romance", "Action","Adventure"],
					photos: [1, 2, 3, 4, 5, 6, 7]
				},
				{
					id: 17,
					title: "Top Gun", 
					duration: 114, 
					rating: 4.2,
					synopsis: "After losing his friend, top pilot Maverick is given a second chance to redeem himself. " +
								 "He struggles to be at his best and also gets romantically involved with his civilian instructor Charlie.",
					genrelist: ["Romance", "Adventure","Thriller / Suspense"],
					photos: [1, 2, 3, 4, 5, 6, 7]
				},
				{
					id: 18,
					title: "Onward", 
					duration: 114, 
					rating: 4.2,
					synopsis: "Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father. " +
								 "Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.",
					genrelist: ["Adventure", "Comedy","Science fiction"],
					photos: [1, 2, 3, 4, 5, 6, 7]
				}];

// checks if movieList is declared in LocalStorage
if(localStorage.getItem("movieList")===null){
	localStorage.setItem("movieList",JSON.stringify([]));
}
//gets movie list and movie ids from localStorage
var movieList = JSON.parse(localStorage.getItem("movieList"));
var movieIds = movieList.map( movie => movie.id );

//save new movies to localStorage
movies.forEach( function(movie){
	if(!movieIds.includes(movie.id)){
		movieList.push(movie);
		movieIds.push(movie.id);
	}
});
//saves the updated list for movieList in localStorage
localStorage.setItem("movieList", JSON.stringify(movieList));

//    L O A D S       S C H E D U L E S 
//    movieIds[12 - 18]
var schedules=[{	//-------------MAY 13--------------12
						id: 121,
						movieid: 12,
						date: "April 28, 2020 08:00:00",
						cinema: 1,
						seats: 72,
					},
					{
						id: 122,
						movieid: 12,
						date: "April 28, 2020 10:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 123,
						movieid: 12,
						date: "April 28, 2020 12:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 124,
						movieid: 12,
						date: "April 28, 2020 02:00:00",
						cinema: 4,
						seats: 72
					},
					//---------------------------------13
					{
						id: 125,
						movieid: 13,
						date: "April 28, 2020 10:00:00",
						cinema: 1,
						seats: 72
					},
					{
						id: 126,
						movieid: 13,
						date: "April 28, 2020 12:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 127,
						movieid: 13,
						date: "April 28, 2020 02:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 128,
						movieid: 13,
						date: "April 28, 2020 04:00:00",
						cinema: 4,
						seats: 72
					},
					//---------------------------------14
					{
						id: 129,
						movieid: 14,
						date: "April 28, 2020 12:00:00",
						cinema: 1,
						seats: 72
					},
					{
						id: 130,
						movieid: 14,
						date: "April 28, 2020 02:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 131,
						movieid: 14,
						date: "April 28, 2020 04:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 132,
						movieid: 14,
						date: "April 28, 2020 06:00:00",
						cinema: 4,
						seats: 72
					},
					//---------------------------------16
					{
						id: 133,
						movieid: 16,
						date: "April 28, 2020 08:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 134,
						movieid: 16,
						date: "April 28, 2020 02:00:00",
						cinema: 1,
						seats: 72
					},
					{
						id: 135,
						movieid: 16,
						date: "April 28, 2020 04:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 136,
						movieid: 16,
						date: "April 28, 2020 06:00:00",
						cinema: 3,
						seats: 72
					},
					//--------------------------------17
					{
						id: 137,
						movieid: 17,
						date: "April 28, 2020 08:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 138,
						movieid: 17,
						date: "April 28, 2020 10:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 139,
						movieid: 17,
						date: "April 28, 2020 04:00:00",
						cinema: 1,
						seats: 72
					},
					{
						id: 140,
						movieid: 17,
						date: "April 28, 2020 06:00:00",
						cinema: 2,
						seats: 72
					},
					//--------------------------------18
					{
						id: 141,
						movieid: 18,
						date: "April 28, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 142,
						movieid: 18,
						date: "April 28, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 143,
						movieid: 18,
						date: "April 28, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 144,
						movieid: 18,
						date: "April 28, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//-------------MAY 14-------------16
					{
						id: 145,
						movieid: 16,
						date: "April 29, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 146,
						movieid: 16,
						date: "April 29, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 147,
						movieid: 16,
						date: "April 29, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 148,
						movieid: 16,
						date: "April 29, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------17
					{
						id: 149,
						movieid: 17,
						date: "April 29, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 150,
						movieid: 17,
						date: "April 29, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 151,
						movieid: 17,
						date: "April 29, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 152,
						movieid: 17,
						date: "April 29, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------18
					{
						id: 153,
						movieid: 18,
						date: "April 29, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 154,
						movieid: 18,
						date: "April 29, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 155,
						movieid: 18,
						date: "April 29, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 156,
						movieid: 18,
						date: "April 29, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------12
					{
						id: 157,
						movieid: 12,
						date: "April 29, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 158,
						movieid: 12,
						date: "April 29, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 159,
						movieid: 12,
						date: "April 29, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 160,
						movieid: 12,
						date: "April 29, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------13
					{
						id: 161,
						movieid: 13,
						date: "April 29, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 162,
						movieid: 13,
						date: "April 29, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 163,
						movieid: 13,
						date: "April 29, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 164,
						movieid: 13,
						date: "April 29, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------14
					{
						id: 165,
						movieid: 14,
						date: "April 29, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 166,
						movieid: 14,
						date: "April 29, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 167,
						movieid: 14,
						date: "April 29, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 168,
						movieid: 14,
						date: "April 29, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//-------------April 30-------------18
					{
						id: 169,
						movieid: 18,
						date: "April 30, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 170,
						movieid: 18,
						date: "April 30, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 171,
						movieid: 18,
						date: "April 30, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 172,
						movieid: 18,
						date: "April 30, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------17
					{
						id: 173,
						movieid: 17,
						date: "April 30, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 174,
						movieid: 17,
						date: "April 30, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 175,
						movieid: 17,
						date: "April 30, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 176,
						movieid: 17,
						date: "April 30, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------16
					{
						id: 177,
						movieid: 16,
						date: "April 30, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 178,
						movieid: 16,
						date: "April 30, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 179,
						movieid: 16,
						date: "April 30, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 180,
						movieid: 16,
						date: "April 30, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------14
					{
						id: 181,
						movieid: 14,
						date: "April 30, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 182,
						movieid: 14,
						date: "April 30, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 183,
						movieid: 14,
						date: "April 30, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 184,
						movieid: 14,
						date: "April 30, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------13
					{
						id: 185,
						movieid: 13,
						date: "April 30, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 186,
						movieid: 13,
						date: "April 30, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 187,
						movieid: 13,
						date: "April 30, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 188,
						movieid: 13,
						date: "April 30, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------12
					{
						id: 189,
						movieid: 12,
						date: "April 30, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 190,
						movieid: 12,
						date: "April 30, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 191,
						movieid: 12,
						date: "April 30, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 192,
						movieid: 12,
						date: "April 30, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//-------------May 5-------------18
					{
						id: 193,
						movieid: 18,
						date: "May 5, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 194,
						movieid: 18,
						date: "May 5, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 195,
						movieid: 18,
						date: "May 5, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 196,
						movieid: 18,
						date: "May 5, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------17
					{
						id: 197,
						movieid: 17,
						date: "May 5, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 198,
						movieid: 17,
						date: "May 5, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 199,
						movieid: 17,
						date: "May 5, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 200,
						movieid: 17,
						date: "May 5, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------16
					{
						id: 201,
						movieid: 16,
						date: "May 5, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 202,
						movieid: 16,
						date: "May 5, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 203,
						movieid: 16,
						date: "May 5, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 204,
						movieid: 16,
						date: "May 5, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------14
					{
						id: 205,
						movieid: 14,
						date: "May 5, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 206,
						movieid: 14,
						date: "May 5, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 207,
						movieid: 14,
						date: "May 5, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 208,
						movieid: 14,
						date: "May 5, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------13
					{
						id: 209,
						movieid: 13,
						date: "May 5, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 210,
						movieid: 13,
						date: "May 5, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 211,
						movieid: 13,
						date: "May 5, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 212,
						movieid: 13,
						date: "May 5, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------12
					{
						id: 213,
						movieid: 12,
						date: "May 5, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 214,
						movieid: 12,
						date: "May 5, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 215,
						movieid: 12,
						date: "May 5, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 216,
						movieid: 12,
						date: "May 5, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//-------------May 6-------------18
					{
						id: 217,
						movieid: 18,
						date: "May 6, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 218,
						movieid: 18,
						date: "May 6, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 219,
						movieid: 18,
						date: "May 6, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 220,
						movieid: 18,
						date: "May 6, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------17
					{
						id: 221,
						movieid: 17,
						date: "May 6, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 222,
						movieid: 17,
						date: "May 6, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 223,
						movieid: 17,
						date: "May 6, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 224,
						movieid: 17,
						date: "May 6, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------16
					{
						id: 225,
						movieid: 16,
						date: "May 6, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 226,
						movieid: 16,
						date: "May 6, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 227,
						movieid: 16,
						date: "May 6, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 228,
						movieid: 16,
						date: "May 6, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------14
					{
						id: 229,
						movieid: 14,
						date: "May 6, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 230,
						movieid: 14,
						date: "May 6, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 231,
						movieid: 14,
						date: "May 6, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 232,
						movieid: 14,
						date: "May 6, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------13
					{
						id: 233,
						movieid: 13,
						date: "May 6, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 234,
						movieid: 13,
						date: "May 6, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 235,
						movieid: 13,
						date: "May 6, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 236,
						movieid: 13,
						date: "May 6, 2020 06:00:00",
						cinema: 1,
						seats: 72
					},
					//--------------------------------12
					{
						id: 237,
						movieid: 12,
						date: "May 6, 2020 08:00:00",
						cinema: 2,
						seats: 72
					},
					{
						id: 238,
						movieid: 12,
						date: "May 6, 2020 10:00:00",
						cinema: 3,
						seats: 72
					},
					{
						id: 239,
						movieid: 12,
						date: "May 6, 2020 12:00:00",
						cinema: 4,
						seats: 72
					},
					{
						id: 240,
						movieid: 12,
						date: "May 6, 2020 06:00:00",
						cinema: 1,
						seats: 72
					}];

// checks if scheduleList is declared in LocalStorage
if(localStorage.getItem("scheduleList")===null){
	localStorage.setItem("scheduleList",JSON.stringify([]));
}

//gets schedule list and schedule ids from localStorage
var scheduleList = JSON.parse(localStorage.getItem("scheduleList"));
var scheduleIds = scheduleList.map( schedule => schedule.id );
//save new schedules in localStorage
schedules.forEach( function(schedule){
	if(!scheduleIds.includes(schedule.id)){
		//add elements in the schedule objects
		var movie = movieList[movieIds.indexOf(schedule.movieid)];
		var d = new Date(schedule.date);
		schedule.dateOnly = new Date(schedule.date).toDateString();
		schedule.startTime = d.toLocaleTimeString();
		schedule.endTime = new Date(d.getTime() + (movie.duration * 60000)).toLocaleTimeString();

		scheduleList.push(schedule);
		scheduleIds.push(schedule.id);
	}
});
//saves the updated list for scheduleList in localStorage
localStorage.setItem("scheduleList", JSON.stringify(scheduleList));

//     L O A D S     C I N E M A     P R I C E S

if(localStorage.getItem("cinemaPrices")===null){
	localStorage.setItem("cinemaPrices",JSON.stringify([120, 150, 200, 250]));
}
//	   L O A D S     C O M I N G      M O V I E S     P I C T U R E S
if(localStorage.getItem("comingMovies")===null){
	localStorage.setItem("comingMovies",JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
}