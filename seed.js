const db = require('./models');
const bcrypt = require('bcryptjs');

const testing_User = [{
  username: 'test123',
  email: 'test123@gmail.com',
  password: '123456789'
},
{
  username: 'test456',
  email: 'test456@gmail.com',
  password: '987654321'
}
]

const location_list = [
  {
    country: "United States",
    city: "San Francisco",
    cityId: 1,
    img: "https://cdn.britannica.com/s:800x450,c:crop/31/204431-138-B5008F47/time-lapse-video-San-Francisco.jpg"
  },
  {
    country: "United States",
    city: "Seattle",
    cityId: 2,
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg"
  },
  {
    country: "United States",
    city: "New York",
    cityId: 3,
    img: "https://www.gannett-cdn.com/media/2018/12/15/USATODAY/usatsports/MotleyFool-TMOT-657f0436-21e9af86.jpg"
  },
  {
    country: "France",
    city: "Paris",
    cityId: 4,
    img: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900"
  },
  {
    country: "Canada",
    city: "Vancouver",
    cityId: 5,
    img:"https://lp-cms-production.imgix.net/2019-06/27860479.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
  },
  {
    country: "Germany",
    city: "Berlin",
    cityId: 6,
    img:"https://www.planetware.com/photos-large/D/east-berlin-former-0.jpg"
  },
  {
    country: "The Netherland",
    city: "Amsterdam",
    cityId: 7,
    img: "https://cdn.civitatis.com/paises-bajos/amsterdam/galeria/casas-barco-amsterdam.jpg"
  },
  {
    country: "England",
    city: "London",
    cityId: 8,
    img:"https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
  },
  {
    country: "Australia",
    city: "Sydney",
    cityId: 9,
    img: "https://www.sydneyoperahouse.com/content/dam/soh/homepage-and-whats-hot/tiles/SOH_74_1600x1200.jpg"
  },
  {
    country: "Spain",
    city: "Barcelona",
    cityId: 10,
    img:"https://media.timeout.com/images/103855471/630/472/image.jpg"
  }
]



const test_posts = [
  {
    title: "et consectetur adipisicing elit. Animi, nobis.",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit,cessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!",
    img:"https://upload.wikimedia.org/wikipedia/commons/2/29/Taipei%2C_Taiwan_CBD_Skyline.jpg"
  },
  {
    title: 'et consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur sunt rerum! Est facilis molestiae cum optio animi ut minus. Qui, neque deleniti quasi eius hic non adipisci repellendus duero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falexcapri%2Ffiles%2F2018%2F09%2FSingapore-1200x800.jpg"
  },
  {
    title: 'et consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatumvoluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    img:"https://media.allure.com/photos/5bf1b1502ab5072a91e1853a/2:1/w_3431,h_1715,c_limit/travel%20editor%20favorite%20products.jpg"
  },
  {
    title: 'et consectetur adipisicing elit. Animi, nobis.',
    content: 'tem necessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    img: "https://www.traveller.com.au/content/dam/images/g/w/u/y/f/4/image.related.articleLeadwide.620x349.gwutg6.png/1507160048555.jpg"
  },
  {
    title: 't. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidun cum opuos accusamus perferendis distinctio ipsam rem, rerum ea!',
    img: "https://www.rssc.com/sites/default/files/M37_Mobile_AlaskaDestinationDetail-062119.jpg"
  }
]


// db.Location.deleteMany({}, (err, locations) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   db.Location.create(location_list, (err, locations) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all location');
//     console.log(`created ${locations.length} locations`)
//   })
// })


db.Location.deleteMany({}, (err, locations) => {
  db.User.deleteMany({}, (err, allUser) => {
    db.Post.deleteMany({}, (err, allPost) => {
      db.Location.create(location_list, (err, locations) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('recreated all location');
        console.log(`created ${locations.length} locations`)
        createUserPost();
      })
      
      // Generate Salt
      
  
    
    });
  });
})


const createUserPost = () => {
  db.Location.find({} , (err, allLocation)=> {
      for (let j = 0; j < testing_User.length; j++) {
        const user = testing_User[j];
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              return console.error(err);
            };
      
            // Hash User Password
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) {
                return console.error(err);
                };
      
              const newUser = {
                username: user.username,
                email: user.email,
                password: hash
              };
      
              db.User.create(newUser, (err, savedUser) => {
                if (err) return console.error(err);
                //put post create
                for (let i = 0; i < allLocation.length-4; i++) {
                test_posts.forEach(post => {
                  post.user = savedUser._id
                  post.location = allLocation[i]
                  console.log(post.user);
                  console.log(post);
                  db.Post.create(post, (err, newPost) => {
                    if (err) {
                      console.log(err);
                      return;
                    }

                  })
                })
                
              }
                console.log('create a super user');
                console.log(`with email of ${user.email} and password of ${user.password}`)
                console.log(`created total ${test_posts.length} posts for ${user.username}!`)
      
              });
            });
          });
        
      
      
    }
    
  })
  
}

