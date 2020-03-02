const db = require('./models');

const testing_User = {
  username: 'test123',
  email: 'test123@gmail.com',
  password: '123456789'
}

db.User.create(testing_User, (err, newUser)=> {
  if(err) {
    console.log(err);
    return;
  }
  console.log('create a super user');
  console.log(`with email of ${newUser.email} and password of 123456789`)
})

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

db.Location.deleteMany({}, (err, locations)=>{
  db.Location.create(location_list, (err, locations)=>{
    if(err) {
      console.log(err);
      return;
    }
    console.log('recreated all location');
    console.log(`created ${locations.length} locations`)
  })
})


const test_posts = [
  {
    title: '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatum nam dolorum error odit odio quidem repellat consectetur temporibus, accusantium veniam quas, tempora sunt rerum! Est facilis molestiae cum optio animi ut minus. Qui, neque deleniti quasi eius hic non adipisci repellendus ducimus, autem totam iure eum aliquam accusamus blanditiis commodi corrupti consequatur error sunt? Quidem, ipsa. Illum autem necessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    cityId: 6
  },
  {
    title: '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatum nam dolorum error odit odio quidem repellat consectetur temporibus, accusantium veniam quas, tempora sunt rerum! Est facilis molestiae cum optio animi ut minus. Qui, neque deleniti quasi eius hic non adipisci repellendus ducimus, autem totam iure eum aliquam accusamus blanditiis commodi corrupti consequatur error sunt? Quidem, ipsa. Illum autem necessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    cityId: 5
  },
  {
    title: '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatum nam dolorum error odit odio quidem repellat consectetur temporibus, accusantium veniam quas, tempora sunt rerum! Est facilis molestiae cum optio animi ut minus. Qui, neque deleniti quasi eius hic non adipisci repellendus duero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    cityId: 1
  },
  {
    title: '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatum nam dolorum error odit odio quidem repellat consectetur temporibus, a deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    cityId: 10
  },
  {
    title: '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nobis.',
    content: 'tem necessitatibus earum at voluptatum et magnam deserunt, repudiandae hic alias rem exercitationem. Eveniet itaque ut voluptates vero. A harum quos accusamus perferendis distinctio ipsam rem, rerum ea!',
    cityId: 5
  },
  {
    title: '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nobis.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam voluptas quam unde odit impedit, incidunt veritatis nobis, culpa ut soluta? Voluptates id voluptatum nam dolorum error odit odio quidem repellat consectetur temporibus, accusantium veniam quas, tempora sunt rerum! Est facilis molestiae cum opuos accusamus perferendis distinctio ipsam rem, rerum ea!',
    cityId: 8
  }
]

db.User.findOne({email:"test123@gmail.com"},(err, findUser)=> {
  if(err) {
    console.log(err);
    return;
  }
  db.Post.create({test_posts}, (err, newPosts)=> {
    if(err) {
      console.log(err);
      return;
    }
    console.log('create fact post');
    console.log(`created ${test_post.length} locations`)
  })
})
