User restfull api to test user entity app

its includes the folllowing api 

 http://localhost:8080/api/users/new-user  -> post new user 
 http://localhost:8080/api/users -> to get all users 
 http://localhost:8080/api/users/5 -> to get user by id 
 http://localhost:8080/api/users/10 -> to delete user by id 
 http://localhost:8080/api/users/4 -> to update user by id 

all the above routes has  Basic authentication layer by default 
user = admin 
password = password 

setUp instructions 
after clone the project from github 
run the command npm install to install app dependencies 
then run command npm start to start app dev 

app structure and database 
app consists of two folder prisma for database and server for logic and code 
prisma folder  migrations folder which has all migrations files to database 
also it has schema file that has defination and creation of user  table 

the server folder consists of two folder api and shared 
api are implemented according to MVC model so inside it found users folder that has 
modelfile to connect to database 
viewfile to handle incomming request
controller file to validate and formalize data 
and routefile to make express route for specific endpoint 

also there are also  __tests__ folder that has jest api unit test for getting user , creating user , updating user 

the shared folder has all helper and middleware functions 



there are in the same app directory Users-collections.postman_collection to test the above routes 

also there are pdf is_palindrome that has all the details needs for is_palindrome algorithm 
and discussed with alternative solutions  how to write efficient and optimized procedurce to check string is_palindrome or not 


