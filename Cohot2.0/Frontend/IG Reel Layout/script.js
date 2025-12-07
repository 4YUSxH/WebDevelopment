const reels = [
  {
    username: "astro.mia",
    likeCount: 12400,
    isLiked: false,
    commentCount: 389,
    caption: "night skies > everything else ✨",
    video: "./videos/1.mp4",
    userprofile: "https://i.pinimg.com/1200x/f7/c0/8e/f7c08eda771c3f624d4ba4142ef91a2c.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "chef.dev",
    likeCount: 84500,
    isLiked: true,
    commentCount: 1920,
    caption: "5-minute ramen upgrade that actually slaps 🍜🔥",
    video: "./videos/2.mp4",
    userprofile: "https://i.pinimg.com/736x/72/9f/2c/729f2ce4b7d5319eb35790b935b8857d.jpg",
    shareCount: 3400,
    isFollowed: true
  },
  {
    username: "urban.snap",
    likeCount: 3200,
    isLiked: false,
    commentCount: 74,
    caption: "city reflections hit different at 2am",
    video: "./videos/3.mp4",
    userprofile: "https://i.pinimg.com/736x/9f/64/d7/9f64d7cf0dd6ed57fdf08d4d800b9a38.jpg",
    shareCount: 98,
    isFollowed: false
  },
  {
    username: "fitwithlana",
    likeCount: 57200,
    isLiked: false,
    commentCount: 540,
    caption: "core workout that won’t destroy your spine 💀",
    video: "./videos/4.mp4",
    userprofile: "https://i.pinimg.com/736x/c5/35/a3/c535a3b88c0e5d7b5e024c086a883851.jpg",
    shareCount: 600,
    isFollowed: true
  },
  {
    username: "tech.tinker",
    likeCount: 9100,
    isLiked: true,
    commentCount: 160,
    caption: "this tiny gadget is actually insane",
    video: "./videos/5.mp4",
    userprofile: "https://i.pinimg.com/1200x/65/1b/29/651b29b85efbb9725242463890948463.jpg",
    shareCount: 450,
    isFollowed: true
  },
  {
    username: "travel.bee",
    likeCount: 154300,
    isLiked: false,
    commentCount: 3100,
    caption: "hidden beach in Portugal?? unreal 🏖️",
    video: "./videos/6.mp4",
    userprofile: "https://i.pinimg.com/736x/4f/cb/0e/4fcb0e2147e2dcbaba6608ef94222b4e.jpg",
    shareCount: 7200,
    isFollowed: false
  },
  {
    username: "retro.vibes",
    likeCount: 6400,
    isLiked: false,
    commentCount: 120,
    caption: "found this thrift gem for $6 😭🔥",
    video: "./videos/7.mp4",
    userprofile: "https://i.pinimg.com/736x/1e/14/78/1e14785a15a910649a57333f40a2fe08.jpg",
    shareCount: 180,
    isFollowed: false
  },
  {
    username: "plant.pal",
    likeCount: 28700,
    isLiked: true,
    commentCount: 760,
    caption: "repotting the chaotic baby 🌱💚",
    video: "./videos/8.mp4",
    userprofile: "https://i.pinimg.com/736x/e1/69/b0/e169b07de5e990adf973a2e0a3e29f28.jpg",
    shareCount: 690,
    isFollowed: true
  },
  {
    username: "beats.by.lio",
    likeCount: 45500,
    isLiked: false,
    commentCount: 820,
    caption: "made this beat on the subway lol 🎧",
    video: "./videos/9.mp4",
    userprofile: "https://i.pinimg.com/736x/6f/91/07/6f91073ea53a38eb2f3106a0b54acb18.jpg",
    shareCount: 1200,
    isFollowed: false
  },
  {
    username: "gamer.ash",
    likeCount: 99800,
    isLiked: true,
    commentCount: 5100,
    caption: "ranked match went feral but we clutched 😤🎮",
    video: "./videos/10.mp4",
    userprofile: "https://i.pinimg.com/736x/38/d4/36/38d4363303937ba0f370095638105b48.jpg",
    shareCount: 4300,
    isFollowed: true
  }
];

reels.forEach(function(elem){
    console.log(elem);
})

let mainImg = document.querySelector(".mainImg");