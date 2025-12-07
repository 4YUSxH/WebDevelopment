const reels = [
  {
    username: "astro.mia",
    likeCount: "12.4K",
    isLiked: false,
    commentCount: 389,
    caption: "night skies > everything else ✨",
    video: "./videos/1.mp4",
    userprofile:
      "https://i.pinimg.com/1200x/f7/c0/8e/f7c08eda771c3f624d4ba4142ef91a2c.jpg",
    shareCount: 210,
    isFollowed: true,
  },
  {
    username: "chef.dev",
    likeCount: "84.5k",
    isLiked: true,
    commentCount: 1920,
    caption: "5-minute ramen upgrade that actually slaps 🍜🔥",
    video: "./videos/2.mp4",
    userprofile:
      "https://i.pinimg.com/736x/72/9f/2c/729f2ce4b7d5319eb35790b935b8857d.jpg",
    shareCount: 3400,
    isFollowed: true,
  },
  {
    username: "urban.snap",
    likeCount: "3.2k",
    isLiked: false,
    commentCount: 74,
    caption: "city reflections hit different at 2am",
    video: "./videos/3.mp4",
    userprofile:
      "https://i.pinimg.com/736x/9f/64/d7/9f64d7cf0dd6ed57fdf08d4d800b9a38.jpg",
    shareCount: 98,
    isFollowed: false,
  },
  //   {
  //     username: "fitwithlana",
  //     likeCount: "57.2K",
  //     isLiked: false,
  //     commentCount: 540,
  //     caption: "core workout that won’t destroy your spine 💀",
  //     video: "./videos/4.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/736x/c5/35/a3/c535a3b88c0e5d7b5e024c086a883851.jpg",
  //     shareCount: 600,
  //     isFollowed: true,
  //   },
  //   {
  //     username: "tech.tinker",
  //     likeCount: "9.1K",
  //     isLiked: true,
  //     commentCount: 160,
  //     caption: "this tiny gadget is actually insane",
  //     video: "./videos/5.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/1200x/65/1b/29/651b29b85efbb9725242463890948463.jpg",
  //     shareCount: 450,
  //     isFollowed: true,
  //   },
  //   {
  //     username: "travel.bee",
  //     likeCount: "154.3K",
  //     isLiked: false,
  //     commentCount: 3100,
  //     caption: "hidden beach in Portugal?? unreal 🏖️",
  //     video: "./videos/6.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/736x/4f/cb/0e/4fcb0e2147e2dcbaba6608ef94222b4e.jpg",
  //     shareCount: 7200,
  //     isFollowed: false,
  //   },
  //   {
  //     username: "retro.vibes",
  //     likeCount: "6.4K",
  //     isLiked: false,
  //     commentCount: 120,
  //     caption: "found this thrift gem for $6 😭🔥",
  //     video: "./videos/7.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/736x/1e/14/78/1e14785a15a910649a57333f40a2fe08.jpg",
  //     shareCount: 180,
  //     isFollowed: false,
  //   },
  //   {
  //     username: "plant.pal",
  //     likeCount: "28.7K",
  //     isLiked: true,
  //     commentCount: 760,
  //     caption: "repotting the chaotic baby 🌱💚",
  //     video: "./videos/8.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/736x/e1/69/b0/e169b07de5e990adf973a2e0a3e29f28.jpg",
  //     shareCount: 690,
  //     isFollowed: true,
  //   },
  //   {
  //     username: "beats.by.lio",
  //     likeCount: "45.5K",
  //     isLiked: false,
  //     commentCount: 820,
  //     caption: "made this beat on the subway lol 🎧",
  //     video: "./videos/9.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/736x/6f/91/07/6f91073ea53a38eb2f3106a0b54acb18.jpg",
  //     shareCount: 1200,
  //     isFollowed: false,
  //   },
  //   {
  //     username: "gamer.ash",
  //     likeCount: "99.8K",
  //     isLiked: true,
  //     commentCount: 5100,
  //     caption: "ranked match went feral but we clutched 😤🎮",
  //     video: "./videos/10.mp4",
  //     userprofile:
  //       "https://i.pinimg.com/736x/38/d4/36/38d4363303937ba0f370095638105b48.jpg",
  //     shareCount: 4300,
  //     isFollowed: true,
  //   },
];

let sum = "";
reels.forEach(function (elem) {
  sum =
    sum +
    `<div class="reel">
            <video autoplay loop src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userprofile}"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 id="likeIcon icon">${
                  elem.isLiked
                    ? `<i class="ri-heart-line"></i>`
                    : `<i class="ri-heart-fill isLiked"></i>`
                }</h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 id="commentIcon icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 id="shareIcon icon"><i class="ri-share-forward-line"></i></h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 id="menuIcon icon"><i class="ri-more-2-fill"></i></h4>
                <h6>69</h6>
              </div>
            </div>
          </div>`;
});
console.log(sum);

let allReels = document.querySelector(".allReels");
allReels.innerHTML = sum;
