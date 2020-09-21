const mongoose = require("mongoose");

  const db = require("./models");

  const createTour = function(tour) {
    return db.Tour.create(tour).then(docTour => {
      console.log("\n>> Created Tour:\n", docTour);
      return docTour;
    });
  };

  const createUser = function(user) {
    return db.User.create(user).then(docUser => {
      console.log("\n>> Created User:\n", docUser);
      return docUser;
    });
  };

  const createImage = function(tourId, image) {
    console.log("\n>> Add Image:\n", image);
    return db.Tour.findByIdAndUpdate(
      tourId,
      {
        $push: {
          images: {
            url: image.url,
            title: image.title
          }
        }
      },
      { new: true, useFindAndModify: false }
    );
  };

  const run = async function() {

    await db.Tour.deleteMany({});  //clear the collection first

    var tour = await createTour({
      title: "sydney",
      from_date: "2020-09-09",
      to_date: "2020-09-20",
      price: 20000
    });

    tour = await createImage(tour._id, {
      title: "Sydney",
      url: "https://images.businessoffashion.com/site/uploads/2016/03/shutterstock_224117146.jpg?auto=format%2Ccompress&crop=top&fit=crop&h=464&w=830",
      createdAt: { type: Date, default: Date.now }
    });
    console.log("\n>> tour:\n", tour);

    var tour1 = await createTour({
      title: "Melbourne",
      from_date: "2020-09-01",
      to_date: "2020-09-15",
      price: 10000
    });

    tour1 = await createImage(tour1._id, {
      title: "Melbourne",
      url: "https://res.cloudinary.com/simpleview/image/upload/v1521153501/clients/melbourne/MelbourneConventionBureau_Melbourne_Yarra_NIght_d5f1d5f3-8775-449b-a6a1-ea715d0d5690.jpg",
      createdAt: { type: Date, default: Date.now }
    });
    console.log("\n>> tour:\n", tour);

    await db.User.deleteMany({});  //clear the collection first

    var user1 = await createUser({
      name: "Luke",
        email: "Luke@ga.com",
        passwordDigest: "chicken",
        admin: true
 });

 var user2 = await createUser({
   name: "Kart",
     email: "Kart@ga.com",
     passwordDigest: "chicken",
     admin: true
});

  };//end of run function

  mongoose
    .connect("mongodb://localhost/tourism_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then( async () => {
      console.log("Successfully connect to MongoDB.")
      await run();
      process.exit(0);
    })
    .catch(err => console.error("Connection error", err));
