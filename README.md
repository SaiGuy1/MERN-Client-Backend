

### JWT token
1. The route for signup and login
- Request
  - log in : api/v1/auth/login
    - body: {
      username: '',
      email: '',
      password: ''
    }
  - sign up: api/v1/auth/signup
    - body: {
        email: '',
        password: ''
      }
- Response
  - you will get a response with JWT token
    - documentation https://jwt.io/introduction/
  - Store the JWT token inside client local storage

2. everytime request a protected route, you have to send the token in the header
  - {headers : {
    'authorization': `bearer ${token}`
  }}
or you will get an err.


### user profile
route: api/v1/profile/
  - remember to send token via header, see above
- GET
  - req: {no body needed}
  - res: {
    username
    email
    location
    createdAt
  }
- PUT
  - req: {whatever is update}
  - res: {update profile data}

### Location

api/v1/location
- GET
  - req()
  - res:
    - {
      _id
      country
      city
    }


### Create Post Controller:
api/v1/posts
  - remember to send token via header, see above
-POST
  - req: {
    title:'',
    content: '',
  }

##### note
  - For db.Post.create, pass in a single object as an argument that contains the 'req.body' as well as the 'req.curUserId'.
  - Ensure you DO NOT share the userId by creating a 'responseObj' object that only contains the (A) post id, (B) title, (C) content, (D) createdAt.
