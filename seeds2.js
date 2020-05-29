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

function seedDB(){
	Reservation.deleteMany({}, err => {
		if(err){
			console.log("Something happened while clearing reservation database.");
		}else{
			console.log("Successfully cleared reservation database.");
		}
	});
	Cinema.deleteMany({}, err=> {
		if(err){
			console.log("Something happened while clearing cinema database.");
		}else{
			console.log("Successfully cleared cinema database.");
			Schedule.deleteMany({}, err => {
				if(err){
					console.log("Something happened while clearing schedule database.");
				}else{
					console.log("Successfully cleared schedule database.");
					Movie.deleteMany({}, err => {
						if(err){
							console.log("Something happened while clearing movie database.");
						}else{
							console.log("Successfully cleared movie database.");
							cinemas.forEach(cinema => {
								Cinema.create(cinema, (err, movie) => {
									if(err){
										console.log(err);
									}else{
										console.log("added a new cinema!");
									}
								});
							});
							let p =	movies.map(movie => {
								return new Promise((resolve) => {
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
													photos: [1, 2, 3, 4, 5, 6, 7]
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
										}).catch((err) => {
											console.log(err);
										});
								});
							}); 

							Promise.all(p).then(() => {
								Cinema.find({}, (err, cinemas) => {
									if(err){
										console.log(err);
									}else{
										Movie.find({}, (err,movies) => {
											if(err){
												console.log(err);		
											}else{
												schedules.forEach(sched => {
													var movie = movies.find(movie => movie.title === sched.title);	
													var cinemaChosen = cinemas.find(cinema => cinema.cinema === sched.cinema);
													Schedule.create(
														{
															movie: movie,
															date: new Date(sched.date),
															cinema: cinemaChosen,
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
												});
											}
										});
									}
								});
							}).catch(() => {
								console.log("haha error");
							});
						}
					});
				}
			});
		}
	});
}

module.exports = seedDB;