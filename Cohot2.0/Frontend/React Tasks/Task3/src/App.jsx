import Card from "./components/Card";
import ci1 from "./assets/ci1.gif";
import ci2 from "./assets/ci2.gif";
import ci3 from "./assets/ci3.gif";
import ci4 from "./assets/ci4.gif";
import ci5 from "./assets/ci5.gif";

import pfp1 from "./assets/pfp1.jpg";
import pfp2 from "./assets/pfp2.jpg";
import pfp3 from "./assets/pfp3.jpg";
import pfp4 from "./assets/pfp4.jpg";
import pfp5 from "./assets/pfp5.jpg";

function App() {
  const users = [
    {
      name: "Aarav Sharma",
      bio: "Frontend developer who loves clean UI.",
      likes: "72.9K",
      posts: "828",
      views: "342.9K",
      avatar: pfp1,
      cover: ci1,
    },
    {
      name: "Ananya Verma",
      bio: "UI/UX designer. Minimalism fan.",
      likes: "51.2K",
      posts: "430",
      views: "198.4K",
      avatar: pfp2,
      cover: ci2,
    },
    {
      name: "Rohan Mehta",
      bio: "React + Tailwind enthusiast.",
      likes: "88.4K",
      posts: "1.2K",
      views: "410K",
      avatar: pfp3,
      cover: ci3,
    },
    {
      name: "Priya Singh",
      bio: "Content creator & blogger.",
      likes: "64.9K",
      posts: "305",
      views: "250.7K",
      avatar: pfp4,
      cover: ci4,
    },
    {
      name: "Kunal Patel",
      bio: "Full-stack dev. Coffee powered.",
      likes: "93.2K",
      posts: "980",
      views: "512.3K",
      avatar: pfp5,
      cover: ci5,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center p-5">
      {users.map((elem) => {
        return (
          <Card
            avatar={elem.avatar}
            cover={elem.cover}
            name={elem.name}
            bio={elem.bio}
            likes={elem.likes}
            posts={elem.posts}
            views={elem.views}
          />
        );
      })}
    </div>
  );
}

export default App;
