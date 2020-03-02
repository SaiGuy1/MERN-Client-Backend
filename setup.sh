touch ../MERN-Client-Backend/.env
echo 'PORT=4000\nMONGO_URI=mongodb://localhost/wayfarer\nJWT_SECRET=' > ../MERN-Client-Backend/.env
echo '.env' >> ../MERN-Client-Backend/.gitignore

node seed.js