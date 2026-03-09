=> Before starting any project generally we do:
                                                - Application's Features 
                                                - Backend
                                                - Frontend

=> const userAlreadyExists = await userModel.findOne({
    $or: [
        {username},
        {email}
    ]
})
What this query does is, it will find data on the basis of username and email in on go means ya to email ho to data dede, ya username ho to data dede database se, it will search data once, but in traditional way we have to search data twice 1. username 2. email 

=> Never ever send your user's password in the any form of response it will surely lead to bad consequnces

=> src > controller -> all the controllers(callbacks) will goes into this file
authRouter.post("/login", async (req, res) => { }) 
// async (req, res) => { } This part(callback) is controller
// Api create hoti hai app.js mai and api ka logic likhte hai controller file mai

<!-- Day - 15 -->

=> Bcryptjs: Jo kaam crypto se kar rahe hai the isse karna jyada accha hai isme advance security ki chize hai jo aage kaam aayegi aur ye ek high level package hai and crypto low level package hai
const hash = await bcrypt.hash(password, 10) // 10: Salt -> Kitni baar hashing perform karni hai

=> await bcrypt.compare(password, user.password): This will first convert user's input password(plain text) into hash string and than compare it with password stored in database

=> post.model.js: Jis user ne post create ki hai uski Id yaha se refer kar lena schema mai bata rahe hai ye, iss user mai user ki id store hogi
                user: {
                    ref: "users",
                    type: mongoose.Schema.Types.ObjectId,
                    required: [true, "User id is required for creating a post"]
                }

=> Protected Api: Only authorized user(they will have token) can access this type of apis

=> Sending files using postman: Use form-data format for sending file in req.body, and data will be feeded in key:value pairs

=> By default express not able to read form-data format like we saw when we sending json(raw format) data and we used a middleware same for this we will use a middleware and we use a package called 'multer'

=> Multer: It use two types storage
           1. DiskStorage:- In this files will store in ssd, hdd etc, it is parmanent until we delete
           2. MemoryStorage:- In this files will store in RAM, it is temproray
We generally use memory storage cause we dont store files in server(means server's storage for premanently)

=> Why we dont store files on server: Consider a user created one post, and that user have 2000 followers now server have to show(serve) that created post to all 2000 followers now that post size is 100kb then server use '100(imgsize) * 2000(followers) = 200000kb(200mb)' bandwidth(sharing of data from server to user and also vice-versa), when we deploy our application on internet using aws, azure, gcp, etc cloud plateform or without using this we have to use 200mb bandwidth and it will cost $0.09/GB this is costly, and this happen because of diskstorage(storing files on server), for elimating this burden we use memorystorage and cloud storage provider specially desinged for serving files now this provider will serve that post to all the users and this is comparetively cheap than direct serving from server

=> Cloud storage provider: Popular, S3(Amazon), ImageKit(Independent), Cloudnary(Independent), these provider will keeps our server files and server users whenever user request

=> AWS vs S3: 
AWS (Amazon Web Services)
This is Amazon’s entire cloud kingdom — compute, databases, AI services, networking, security, analytics, you name it. If cloud services were a mall, AWS would be the whole mall. Provide entire a to z services

S3 (Simple Storage Service)
This is just one shop inside that mall — the storage shop. Specifically for object storage — think massive buckets of files (images, videos, backups, logs, whatever) that you can fetch from anywhere on the planet. Only provide files handling

=> How we can transfer our local(on server) stored files to cloud storage provider: We send our files to this provider and it will return a url and using that url we can see that file
For sending files to these providers we use multer and multer's MemoryStorage we temporarly store uploaded files on server than we send those files to cloud storage provider and when we get url from provider we delete that file from our server

User(Frontend) -> Server(Backend) -> Cloud Storage Provider

=> // In post.route.js
const multer = require("multer")  
const upload = multer({storage: multer.memoryStorage()}) // Create upload variable using memoryStorage
postRouter.post("/", upload.single("image") ,postController.createPostContoller) // Use upload and pass key(used in form-data), The file is on stored on server's RAM 

=> // In post.controller.js
In this part we are sending file to imagekit cloud storage provider usign multer's provided buffer(Location where file is stored in our local system memory storage), after that file gets uploaded imagekit will provide url for accessing that uploaded image

<!-- Day - 15-I -->

=> // In post.controller.js
const token = req.cookies.token // User should send the cookies in response if he is authorized user(Registered/Login) cause only authorized user have token in his request

=> 401: Status code is used for unauthorized access 

=> const decoded = jwt.verify(token, process.env.JWT_SECRET) // This method extract token's information(Jo data register ke time humne store kiya tha user ka such as userId) and also verify token(Token should generated by our server only) 

=> ImageKit folder: We can store images in different folder inside imagekit using,
   folder: "cohort-2-insta-clone/posts" // cohort-2-insta-clone(mainfolder) > posts(subfolder)

=> We dont show 500 internal server error to user(frontend)

=> Send appropiate status code from backend cause frontend engineer will use these status code for creating many things on client side(frontend)

=> We compress files(image, videos, pdf, etc) to 100kb(max) for saving bandwidth cost, for compression we packages, best image format for website is webp and for videos use webm  

<!-- Day - 15-II -->

=> wt.verify(token, process.env.JWT_SECRET): This method will return token's data if token is genuine and it will throw error if wrong and handel that error usign try-catch

=> 401 status code: Use for unauthorized access

=> 404 status code: Use for not found

=> We can't compare two object ids with === we have method(.(id1)equals(id2)) for this and another way is to convert one id into toString() than === compare them

=> createPostContoller, getPostController, getPostDetailsController: In these apis we use token to identifying the user and for identification we use cookie and .verify() and we repeat this code again and again in each api for eliminating this repeatation we use middlewares  