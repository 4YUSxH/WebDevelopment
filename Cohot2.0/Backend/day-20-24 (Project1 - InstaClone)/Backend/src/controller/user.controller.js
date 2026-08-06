const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

const followUserController =  async (req, res) => {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username
    
    
    // Check1: User following itseld which cant be possible
    const followYourself = followerUsername === followeeUsername
    if(followYourself){
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    // Check2: User exists or not which gonna be followed
    const isFolloweeExits = await userModel.findOne({username: followeeUsername})
    if(!isFolloweeExits){
        return res.status(404).json({
            message: "User you are trying to follow doesn't exist"
        })
    }

    // Check3: Finding data with followerUsername + followeeUsername combination, both condition should satisfy for returing data if not than this query will return null
    const isAlreadyFollowing = await followModel.findOne({ 
        follower: followerUsername,
        followee: followeeUsername,
    })
    if(isAlreadyFollowing){
        return res.status(200).json({
            message: `You already following ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
        status: req.body.status
    })

    if(followRecord.status === "pending"){
        return res.status(200).json({
            message: "You're follow request is pending"
        })
    }
    else if(followRecord.status === "accepted"){
        return  res.status(201).json({
            message: `You are now following ${followeeUsername}`,
            follow: followRecord
    })
    }
    else{
        return res.status(200).json({
            message: `You're follow request is rejected by ${followeeUsername}`
        })
    }
}

const unfollowUserController = async (req, res) => {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    // Finding data with condition(followerUsername + followeeUsername)
    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })
    if(!isUserFollowing){
        return res.status(200).json({
            message: `Can unfollow, you are not following ${followeeUsername}`
        })
    }

    // Deleting user
    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(201).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

module.exports = {followUserController, unfollowUserController}