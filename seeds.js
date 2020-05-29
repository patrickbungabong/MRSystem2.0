var mongoose = require("mongoose");
var rp = require("request-promise");
var Cinema = require("./models/cinema");
var Movie = require("./models/movie");
var Schedule = require("./models/schedule");
var Reservation = require("./models/reservation");

var cinemas = [ 
	{
		cinema: 1,
		price: 120
	},
	{
		cinema: 2,
		price: 150
	},
	{
		cinema: 3,
		price: 190
	},
	{
		cinema: 4,
		price: 210
	}
];
var movies = [
	{
		title: "avengers",
		year: 2019
	},
	{
		title: "joker",
		year: 2019
	},
	{
		title: "parasite",
		year: 2019
	},
	{
		title: "lion king",
		year: 2019
	},
	{
		title: "john wick",
		year: 2019
	},
	{
		title: "toy story",
		year: 2019
	}
];

var schedules = [
	{
		title: "Avengers: Endgame",
		date: "April 28, 2020 08:00:00",
		cinema: 1,
		seats: 72
	},
	{
		title: "Avengers: Endgame",
		date: "April 28, 2020 10:00:00",
		cinema: 2,
		seats: 72
	},
	{
		title: "Avengers: Endgame",
		date: "April 28, 2020 12:00:00",
		cinema: 3,
		seats: 72
	},
	{
		title: "Avengers: Endgame",
		date: "April 28, 2020 02:00:00",
		cinema: 4,
		seats: 72
	},
	{
		title: "Joker",
		date: "April 28, 2020 10:00:00",
		cinema: 1,
		seats: 72
	},
	{
		title: "Joker",
		date: "April 28, 2020 12:00:00",
		cinema: 2,
		seats: 72
	},
	{
		title: "Joker",
		date: "April 28, 2020 02:00:00",
		cinema: 3,
		seats: 72
	},
	{
		title: "Joker",
		date: "April 28, 2020 04:00:00",
		cinema: 4,
		seats: 72
	},
	{
		title: "Parasite",
		date: "April 28, 2020 12:00:00",
		cinema: 1,
		seats: 72
	},
	{
		title: "Parasite",
		date: "April 28, 2020 02:00:00",
		cinema: 2,
		seats: 72
	},
	{
		title: "Parasite",
		date: "April 28, 2020 04:00:00",
		cinema: 3,
		seats: 72
	},
	{
		title: "Parasite",
		date: "April 28, 2020 06:00:00",
		cinema: 4,
		seats: 72
	},
	{
		title: "The Lion King",
		date: "April 28, 2020 08:00:00",
		cinema: 4,
		seats: 72
	},
	{
		title: "The Lion King",
		date: "April 28, 2020 02:00:00",
		cinema: 1,
		seats: 72
	},
	{
		title: "The Lion King",
		date: "April 28, 2020 04:00:00",
		cinema: 2,
		seats: 72
	},
	{
		title: "The Lion King",
		date: "April 28, 2020 06:00:00",
		cinema: 3,
		seats: 72
	},
	{
		title: "John Wick: Chapter 3 - Parabellum",
		date: "April 28, 2020 08:00:00",
		cinema: 3,
		seats: 72
	},
	{
		title: "John Wick: Chapter 3 - Parabellum",
		date: "April 28, 2020 10:00:00",
		cinema: 4,
		seats: 72
	},
	{
		title: "John Wick: Chapter 3 - Parabellum",
		date: "April 28, 2020 04:00:00",
		cinema: 1,
		seats: 72
	},
	{
		title: "John Wick: Chapter 3 - Parabellum",
		date: "April 28, 2020 06:00:00",
		cinema: 2,
		seats: 72
	},
	{
		title: "Toy Story 4",
		date: "April 28, 2020 08:00:00",
		cinema: 2,
		seats: 72
	},
	{
		title: "Toy Story 4",
		date: "April 28, 2020 10:00:00",
		cinema: 3,
		seats: 72
	},
	{
		title: "Toy Story 4",
		date: "April 28, 2020 12:00:00",
		cinema: 4,
		seats: 72
	},
	{
		title: "Toy Story 4",
		date: "April 28, 2020 06:00:00",
		cinema: 1,
		seats: 72
	},
];

async function seedDB(){
	var reservationDelete = Reservation.deleteMany({});
	var cinemaDelete = Cinema.deleteMany({});
	var scheduleDelete = Schedule.deleteMany({});
	var movieDelete = Movie.deleteMany({});

	await reservationDelete.catch(err => {
		console.log(err);
	});
	await cinemaDelete.catch(err => {
		console.log(err);
	});
	await scheduleDelete.catch(err => {
		console.log(err);
	});
	await movieDelete.catch(err => {
		console.log(err);
	});

	await Promise.all(cinemas.map(cinema => Cinema.create(cinema)));
	await Promise.all(movies.map(movie => { return new Promise( resolve => {
			var domain = "http://www.omdbapi.com/?apikey=f390b782&";
			rp(domain + "t=" + movie.title + "&y=" + movie.year + "&plot=full")
				.then((body) => {
					var data = JSON.parse(body);
					Movie.create(
						{
							title: data.Title, 
							duration: Number(data.Runtime.match(/\d+/g)), 
							rating: data.imdbRating,
							synopsis: data.Plot,
							genrelist: data.Genre.split(","),
							photos: [1, 2, 3, 4, 5, 6]
						}, 
						(err, movie) => {
							if(err){
								console.log(err);
							}else{
								console.log("added a new movie!");
								return resolve();
							}
						}
					);
				});
		});
	})).then( () => {
		schedules.forEach(sched => {
			Movie.findOne({title:sched.title}, (err, movie) => {
				if(err) {console.log(err);}
				else{
					Cinema.findOne({cinema: sched.cinema}, (err, cinema) => {
						if(err) {console.log(err);}
						else{
							Schedule.create(
								{
									movie: movie,
									date: new Date(sched.date),
									cinema: cinema,
									seats: sched.seats
								},
								(err, sched) => {
									if(err) { 
										console.log(err)
									}else{
										console.log("added a new schedule!");
									}
								}
							);				
						}
					});
				}
			});	
		});
	});
}

module.exports = seedDB;