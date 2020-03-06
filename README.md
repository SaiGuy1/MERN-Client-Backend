# set up
1. run
```
npm i
```
2. In current dir(MERN-Client-Backed),
run 
```
$ ./setup.sh
```
you will probably run into an error like below
```
permission denied: ./setup.sh
```
you have to run 
```
$ chmod 755 ./setup.sh
```
and then run ./setup.sh again
```
$ ./setup.sh
```
3. you should see a .env file and add random string right after the JWT_SECRET=YOUR_RANDOM_STRING

and you should be good to go!

### JWT token
1. The route for signup and login
- Request
  - log in : api/v1/auth/login
    - body: {
      username,
      email,
      password
    }
  - sign up: api/v1/auth/signup
    - body: {
        email,
        password,
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

<!-- ========== ROUTES / CONTROLLERS ========== -->

### user profile
route: api/v1/profile/
  - remember to send token via header, see above
- GET
  - req: {no body needed}
  - res: {
    username,
    email,
    location,
    createdAt,
  }
route: api/v1/profile/update
- PUT
  - req: {whatever is update}
  - res: {updated profile data}

### Location

##### note: Dalton said that img for location is not required

api/v1/location
- GET
  - req()
  - res:
    - {
      _id,
      country,
      city,
      cityId
    }


 <!-- >>>> userAllPosts ROUTE / CONTROLLER -->
    <!-- We cannot get all posts from a single User using the "showAll" route because it would expose the User ID when used as a parameter.
    Instead, this route utilizes the jwt token within a header to provide the User DB the User ID and return all associate posts. -->

 <!-- >>>> showAll ROUTE / CONTROLLER -->
    <!-- Filter posts by adding a query/queries. -->

 <!-- >>>> Update / Destroy ROUTES / CONTROLLERS -->
    <!-- Authentication on both these routes/controllers to ensure that users can only edit / delete their own posts, not those created by other users on the application. -->
