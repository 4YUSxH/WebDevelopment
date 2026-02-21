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