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
