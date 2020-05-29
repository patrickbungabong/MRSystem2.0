var express         = require("express"),
    app     		    = express(),
 	  bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require("mongoose"),
    Movie           = require("./models/movie"),
    Schedule        = require("./models/schedule"),
    Reservation     = require("./models/reservation"),
    seedDB          = require("./seeds");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/mrs");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
seedDB();

app.get("/", (req,res) => {
	res.redirect("/movies");
});

app.get("/movies", (req,res) => {
	Movie.find({}, function(err, movies){
       if(err){
           console.log(err);
       } else {
          res.render("index",{movies:movies});
       }
    });
});

app.get("/movies/:id", (req,res) => {
	Schedule.find().populate('movie').populate('cinema').exec((err, scheds) => {
    if(err){
      console.log("error in populating");
    }else{
      var filteredScheds = scheds.filter( sched => {
        return req.params.id == sched.movie._id;
      });
      res.render("show", {scheds:filteredScheds});
    }
  });
});

app.get("/:id/reserve", (req,res) => {
  Schedule.findOne({_id: req.params.id}).populate('movie').populate('cinema').exec((err, sched) => {
    if(err){
      console.log("error in populating");
    }else{
      Reservation.find({schedule: sched._id},'seats',(err, reserves) => {
        if(err){
          console.log(err);
        }else{
          console.log(reserves);
          res.render("reserve", {schedule:sched, reserves: reserves});    
        }
      });
      
    }
  });
});

app.post("/:id/reserve", (req,res) => {
  Schedule.findById(req.params.id).populate('movie').populate('cinema').exec((err, sched) => {
    if(err){
      console.log("error in populating");
    }else{
      Reservation.create(
        {
          schedule: sched,
          seatCount: Number(req.body.seatCount),
          seats: req.body.seatsSelected.replace(/\s/g,'').split(','),
          total: req.body.total
        }, 
        (err, reservation) => {
          if(err){
            console.log(err);
          }else{
            res.redirect('/dashboard');
          }
        }
      );
    }
  });
});

app.get("/dashboard", (req,res) => {
  Reservation.find({}).populate({
    path: 'schedule',
    populate: {path:'movie cinema'}
  }).exec((err, reserves) => {
    if(err){
      console.log("error in populating");
    }else{
      console.log(reserves);
      res.render("dashboard", {reserves: reserves});
    }
  });
});

app.delete("/reservation/:id", (req,res) => {
  Reservation.findByIdAndDelete(req.params.id, (err, movieDeleted) => {
    if(err){
      console.log(err);
    }else{
      res.redirect('/dashboard');    
    }
  });
});

app.get("*", (req,res) => {
	res.send("What are you doing?");
});

var server=app.listen(3000,function(){
	console.log("server has started!");
});