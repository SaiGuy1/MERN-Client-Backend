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
    cityId: 1
  },
  {
    country: "United States",
    city: "Seattle",
    cityId: 2
  },
  {
    country: "United States",
    city: "New York",
    cityId: 3
  },
  {
    country: "France",
    city: "Paris",
    cityId: 4
  },
  {
    country: "Canada",
    city: "Vancouver",
    cityId: 5
  },
  {
    country: "Germany",
    city: "Berlin",
    cityId: 6
  },
  {
    country: "The Netherland",
    city: "Amsterdam",
    cityId: 7
  },
  {
    country: "England",
    city: "London",
    cityId: 8
  },
  {
    country: "Australia",
    city: "Sydney",
    cityId: 9
  },
  {
    country: "Spain",
    city: "Barcelona",
    cityId: 10
  }
]

db.Location.deleteMany({}, (err, locations) => {
  if (err) {
    console.log(err);
    return;
  }
  db.Location.create(location_list, (err, locations) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all location');
    console.log(`created ${locations.length} locations`)
  })
})


const test_posts = [
  {
    title: "et consectetur adipisicing elit. Animi, nobis.",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit,cessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!",
  },
  {
    title: 'et consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur sunt rerum! Est facilis molestiae cum optio animi ut minus. Qui, neque deleniti quasi eius hic non adipisci repellendus duero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
  },
  {
    title: 'et consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatumvoluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
  },
  {
    title: 'et consectetur adipisicing elit. Animi, nobis.',
    content: 'tem necessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
  },
  {
    title: 't. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidun cum opuos accusamus perferendis distinctio ipsam rem, rerum ea!',
  }
]





db.User.deleteMany({}, (err, allUser) => {
  db.Post.deleteMany({}, (err, allPost) => {
    testing_User.forEach(user => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err)
          return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again'
          });
  
        // Hash User Password
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err)
            return res.status(500).json({
              status: 500,
              message: 'Something went wrong. Please try again'
            });
  
          const newUser = {
            username: user.username,
            email: user.email,
            password: hash
          };
  
          db.User.create(newUser, (err, savedUser) => {
            if (err) return res.status(500).json({ status: 500, message: err });
            //put post create
            test_posts.forEach(post => {
              post.user = savedUser._id
              console.log(post.user);
              console.log(post);
              db.Post.create(post, (err, newPost) => {
                if (err) {
                  console.log(err);
                  return;
                }
              })
            })
            console.log('create a super user');
            console.log(`with email of ${user.email} and password of ${user.password}`)
            console.log(`created total ${test_posts.length} posts for ${user.username}!`)
  
          });
        });
      });
    })
    // Generate Salt
    

  
  });
});