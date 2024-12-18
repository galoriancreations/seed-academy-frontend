// pages/api/teamSection.js
export default function handler(req, res) {
    const teamSection = {
      title: "Meet the Team",
      members: [
        { name: "Dr. Alex Johnson", role: "Founder & CEO", description: "Expert in AI and leadership development." },
        { name: "Emily Zhang", role: "Head of Education", description: "Passionate about personalized learning paths." },
        { name: "Michael Lee", role: "Community Manager", description: "Building global connections for young leaders." },
      ],
    };
  
    res.status(200).json(teamSection);
  }
  