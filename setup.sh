touch ../MERN-Client-Backend/.env2
echo 'PORT=4000' >> ../MERN-Client-Backend/.env2
echo 'MONGO_URI=mongodb://localhost/wayfarer' >>../MERN-Client-Backend/.env2
echo 'JWT_SECRET=' >> ../MERN-Client-Backend/.env2
echo '.env2' >> ../MERN-Client-Backend/.gitignore
node seed.js