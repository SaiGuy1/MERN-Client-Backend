touch ../MERN-Client-Backend/.env
echo '' > ../MERN-Client-Backend/.env
echo 'PORT=4000' >> ../MERN-Client-Backend/.env
echo 'MONGO_URI=mongodb://localhost/wayfarer' >>../MERN-Client-Backend/.env
echo 'JWT_SECRET=' >> ../MERN-Client-Backend/.env
echo '.env' >> ../MERN-Client-Backend/.gitignore
node seed.js