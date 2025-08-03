import InfiniteMenu from "../Blocks/Components/InfiniteMenu/InfiniteMenu";

function MenuLinks() {
  const items = [
    {
      image: "./src/assets/gmail.webp",
      link: "https://google.com/",
      title: "Mail",
      description: "This is pretty cool, right?",
    },
    {
      image: "./src/assets/005-linkedin.png",
      link: "https://google.com/",
      title: "LinkedIn",
      description: "This is pretty cool, right?",
    },
    {
      image: "./src/assets/discord.jpeg",
      link: "https://google.com/",
      title: "Discord",
      description: "This is pretty cool, right?",
    },
    {
      image: "./src/assets/002-instagram.png",
      link: "https://google.com/",
      title: "Instagram",
      description: "This is pretty cool, right?",
    },
    {
      image: "./src/assets/leetcode.png",
      link: "https://google.com/",
      title: "Leetcode",
      description: "This is pretty cool, right?",
    },
    {
      image: "./src/assets/webpage.png",
      link: "https://google.com/",
      title: "Portfolio",
      description: "This is pretty cool, right?",
    },
    {
      image: "./src/assets/twitter.jpg",
      link: "https://google.com/",
      title: "Twitter",
      description: "This is pretty cool, right?",
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <InfiniteMenu items={items} />
    </div>
  );
}

export default MenuLinks;
