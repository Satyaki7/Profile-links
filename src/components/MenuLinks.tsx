import InfiniteMenu from "../Blocks/Components/InfiniteMenu/InfiniteMenu";
import gmailImg from "../assets/gmail.webp";
import linkedinImg from "../assets/005-linkedin.png";
import discordImg from "../assets/discord.jpeg";
import instagramImg from "../assets/002-instagram.png";
import leetcodeImg from "../assets/leetcode.png";
import portfolioImg from "../assets/webpage.png";
import twitterImg from "../assets/twitter.jpg";
import githubImg from "../assets/github.webp";
function MenuLinks() {
 const items = [
   {
     image: gmailImg,
     link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dsatyaki08@gmail.com",
     title: "Mail",
     description: "Reach me through mail.",
   },
   {
     image: linkedinImg,
     link: "https://www.linkedin.com/in/satyaki-das7/",
     title: "Linkedin",
     description: "This is where I post my work.",
   },
   {
     image: discordImg,
     link: "https://discord.gg/ZKGQ8DmH",
     title: "Discord",
     description: "This is where I chill with the community.",
   },
   {
     image: instagramImg,
     link: "https://www.instagram.com/satyaki_das.official/",
     title: "Instagram",
     description: "Follow me on Instagram",
   },
   {
     image: leetcodeImg,
     link: "https://leetcode.com/u/satyaki7/",
     title: "Leetcode",
     description: "Want to see my DSA skills?",
   },
   {
     image: portfolioImg,
     link: "https://satyaki7.github.io/DigiCard/",
     title: "Portfolio",
     description: "This is my Portfolio. Check it out!",
   },
   {
     image: twitterImg,
     link: "https://x.com/Satyaki30527321",
     title: "Twitter",
     description: "Not so active here.",
   },
   {
     image: githubImg,
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
