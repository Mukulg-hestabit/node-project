-This project is made using nodejs express and sockets it uses sql as database.

-Database initalizing and seeding files are present inside sql folder you can customise database name, Keep table names as it is as it is required for CRUD operations.

-Please refer ".env.example" file for all used env variables.

-How to Start Project
    ~To start the project run npm install - This will install all dependency 
    ~Make sure to update env file and rename it to .env
    ~Run command npm run start and Project will start on provided port.

-Copying or initalizing Database 
    ~There are two files inside sql folder you can manually run those sql files.
    ~dbInit.sql will initialize the sql database and create tables as required.
    ~seeder.sql will create one admin and one user of each role.

-Socket have two events
    ~"newuser" this event triggers when user complete signup form and submit it.
    ~"user-approved" this event triggers when user is approved by admin,

-CRUD api's endpoint

    ~"/uploads/:id" this end point will serve files located in uploades folder user can access files uploaded on server.

    ####Create User
    
    ~"/user/signup" this end point is a POST request which accepts json object in body and appends user inside user table
        *Sample Request : 
            const bodyData={
                "full_name":"{{$randomFullName}}",
                "email" :"{{$randomEmail}}",
                "role":"teacher",
                "address":"{{$randomStreetAddress}}" ,
                "avatar":"{{$randomImageUrl}}" ,
                "current_school":"{{$randomLastName}}",
                "previous_school":"{{$randomStreetName}}",
                "experience":"2",
                "expertise":"Software development"
            }
            fetch("/user/signup",{
                method:"POST",
                body:JSON.stringify(bodyData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
    
    ####Read Userinfo
    
    ~"user/login" this endpoint is also POST request it accepts user email and name and verify it from table then respond if user exist 
        *Sample Request : 
            const bodyData={
                "full_name": "Leon Dickinson",
                "email": "Clara69@yahoo.com",
                "role":"teacher"
            }
            fetch("/user/login",{
                method:"POST",
                body:JSON.stringify(bodyData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
    
    ####Update User
    
    ~"user/update/email" this require user email and user id as request body and updates the email id of user with provided id
        *Sample Request :
            const bodyData={
                "email": "Clara69@yahoo.com",
                "id": "1"
            }
            fetch("/user/update/email",{
                method:"POST",
                body:JSON.stringify(bodyData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
    
    ####Delete user
    
    ~"user/delete/:id" this require user id as query parameter and will only work if admin is logged in and perfomed this action
        *Sample Request :
            fetch("/user/delete/1",{
                method:"DELETE"
            })

    ####Upload Using Multer

    ~"user/upload/avatar" this require form data with file buffer as req body and uploads it on server and respond with the file name and path on server.
        *Sample Request :
            fetch("/user/upload/avatar",{
                method:"POST",
                body:formData,
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
    