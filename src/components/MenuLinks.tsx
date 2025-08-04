import InfiniteMenu from "../Blocks/Components/InfiniteMenu/InfiniteMenu";

function MenuLinks() {
  const items = [
    {
      image: "./src/assets/gmail.webp",
      link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dsatyaki08@gmail.com",
      title: "Mail",
      description: "Reach me throught mail.",
    },
    {
      image: "./src/assets/005-linkedin.png",
      link: "https://www.linkedin.com/in/satyaki-das7/",
      title: "Linkedin",
      description: "This is where i post my work.",
    },
    {
      image: "./src/assets/discord.jpeg",
      link: "https://google.com/",
      title: "Discord",
      description: "This is where i chill with the community.",
    },
    {
      image: "./src/assets/002-instagram.png",
      link: "https://www.instagram.com/satyaki_das.official/",
      title: "Instagram",
      description: "Follow me on Instagram",
    },
    {
      image: "./src/assets/leetcode.png",
      link: "https://leetcode.com/u/satyaki7/",
      title: "Leetcode",
      description: "Want to see my DSA skills?",
    },
    {
      image: "./src/assets/webpage.png",
      link: "https://satyaki7.github.io/DigiCard/",
      title: "Portfolio",
      description: "This is my Portfolio. Check it out!",
    },
    {
      image: "./src/assets/twitter.jpg",
      link: "https://x.com/Satyaki30527321",
      title: "Twitter",
      description: "Not so active here.",
    },
    {
      image: "./src/assets/github.webp",
      link: "https://github.com/Satyaki7",
      title: "Github",
      description: "See all my projects here.",
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <InfiniteMenu items={items} />
    </div>
  );
}

export default MenuLinks;
