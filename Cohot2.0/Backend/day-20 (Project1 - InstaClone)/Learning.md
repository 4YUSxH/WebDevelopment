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


<!-- Day - 17 -->

=> Middleware: 
- const app = express() // This express instance(app) is entry for server, all the requests will enter from this, this app will forward all the requests to their respective routers like authRouter-api/auth, postRouter-api/posts, etc, now each router will forwards their requests to their respective apis like post-api/posts/, get-api/posts/, get-api/posts/details/:postId, etc, now these apis will forward requests to their respective controllers like createPostController, getPostController, getPostDetailsController, etc, In these all 3 controller we are repeating same task i.e identifying the user using token, Now we will write this repeatative code in different file 'middlwares(folder) > auth.middlware.js'      

- Request flow: app -> router -> api -> middleware -> controller
We'll use next() for forwarding control form middleware to another contoller/middleware,
Note- we can't send normal variable in next directly we have to create a new property using 'req' then we can send data using next, Attach data to req (e.g., req.user = decoded) in middleware; next() only passes control, not data. 
like below
req.user = decoded;   // attach data to request
next(req.user);       // go to next middleware/controller

- Use this middlware in router like postRouter.get("/", identifyUser, postController.getPostController)

<!-- Day - 18 -->

=> We are using edge collection(follow.model.js) for mainting followers in edge collection we create a new seprate collection for storign followers data like username or id, We do not store data inside userModel cause this way is not optimized for millions users, it will use too much time to find any data from array

=> Indexing: This shows how many times user can perfrom any action in database using api
e.g -> likeSchema.index({post: 1, user: 1}, {unique: true})
1 user can only like 1 post 

=> Validations: Validator means which user's req we can process and which req we cant process, this keeps our application and database safe, in web dev we follow 4 layer validations
1. Frontned level validator
Below validatins for backend level validations
2. Express validator 
3. Controller level validator
4. Schema level validator

<!-- Day - 18 -->

=> Frontend folder structure:
- Frontend > src > AppRoutes.jsx: conatin react-router code 

- Frontend > src > feature > <multiple_feautres_folders>: This folder contain all the particular feature code such as auth(register, login, forgot password, etc), post(create, delete, like, etc)

- Frontend > src > feature > auth > pages > Login.jsx: Creating page of this feature for react-router

- Frontend > src > feature > auth > style > form.scss: Contains that particular feature styling means css

- Frontend > src > style.scss: This file contain global styling

<!-- Day - 20 -->

=> 4 layer react architeture: 
1. UI:- In this we only rendre ui, all the ui related codee goes into this layer, pages and components are the part of this layer

2. Hook:- We create custom hooks in this and that hook will call api 

3. State: It store data

4. API:- This layer communitcate with backend, means api calling code goes into this remember we only write api call code in this and not call the api only code, services folder is part of this layer

=> In our code base:
1. UI:- frontend > src > features > auth > pages > componentes, These folders's files will render the ui

2. Hooks:- frontend > src > features > auth > hooks > useAuth.js, we've created a custom hook in this layer

3. State:- frontend > src > features > auth > auth.context.js, In this project we are using context and when application gets bigger we will use redux, we store state and manage state in this layer  

4. API:- frontend > src > features > auth > services > auth.api.js, in this file all the auth related backend communication code will goes, we will not write any ui realted code into this  

=> Summary: This 4-layer architecture is essentially a good React app folder structure:

- UI Layer: Only renders UI elements such as navigation and React Router pages (register, login, etc.). We do not call any APIs in this layer and do not write any API-related logic here.
- Hook Layer: Manages state and interacts with the API layer. For example, it sets data in the state layer and calls APIs.
- State Layer: Manages state such as loading state, user state (logged-in or not), and error management (errors rendered by the UI layer). Overall, it manages all the application’s data and variables.
- API Layer: Handles communication with the backend and contains all API-calling logic.

These layers cannot directly interfere with each other’s responsibilities. For example, the UI layer cannot call APIs directly. Instead, we create custom hooks in the hook layer, and the UI layer uses these hooks to request API calls. Each layer has a single, well-defined responsibility.

=> .populate:
        await postModel.find().populate("user")

Note - Schema should contain "ref: collection_name" for populating, ex 'ref: "users"' should added in postSchema

1. Without populate - no user's data in response
    "posts": [
        {
            "_id": "69f34bdcf920e2c500d04457",
            "caption": "Hey",
            "imgUrl": "https://ik.imagekit.io/hittinonapis/test_7s7nMRoNm",
            "user": "69f2f6c4499002dd50e1ca53", // no user's data in response
            "__v": 0
        },
             ]
1. Without populate - user's data in response 
    "posts": [
        {
            "_id": "69f34bdcf920e2c500d04457",
            "caption": "Hey",
            "imgUrl": "https://ik.imagekit.io/hittinonapis/test_7s7nMRoNm",
            "user": { // user's data in response 
                "_id": "69f2f6c4499002dd50e1ca53",
                "username": "User1",
                "email": "user1@user.com",
                "password": "$2b$10$kqAZwtfmulNH2hWv6EDwWushVvcTNo6RiJzPycHIgBB0MwqtpTQFK", // Dont ever send password  
                "bio": "I am a good boy",
                "profileImage": "This is default profile image",
                "__v": 0
            },
            "__v": 0
        },
             ]

=>  {
        type: String,
        required: [true, "Password is required"],
        select: false 
    },
In model if we add select false that key:value pair is not read by mongoose means we are not able to send that key:value as response anymore
If we add this in userSchema we will face an issue when user try to login, cause we can't fetch(.findOne) user's password from database hence we can't compate user's entered password with password that stored in database, for removing this error add ".select(+password): in query that will fetch user's password from database, this select method force our query to fetch user's password from database 

In authController
const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
}).select(+password);

=> .lean(): This method will convert mongooseObject into plain js object