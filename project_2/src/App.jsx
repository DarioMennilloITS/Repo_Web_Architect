import React, { useState } from "react";
import ralfImg from "./assets/ralf-hutter.jpg";
import florianImg from "./assets/florian-schneider.jpg";
import wolfgangImg from "./assets/wolfgang-flur.jpg";
import karlImg from "./assets/karl-barthos.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const NomeApp = "Kraftwerk";
  const [members, setMembers] = useState({
    ralf: {
      name: "Ralf Hütter",
      role: "Keyboards / Vocals / Founding Member",
      image: ralfImg,
      bio: "Ralf Hütter is the sole remaining founding member and the driving force behind Kraftwerk. Born in 1946 in Krefeld, Germany, he studied at the Academy of Arts in Remscheid and Düsseldorf. Hütter is responsible for the band's conceptual vision, blending minimalism, electronic textures, and robotic themes. He famously described Kraftwerk's sound as \"Industrielle Volksmusik\" — industrial folk music. His obsession with cycling even inspired the 1983 album <em>Tour de France</em>.",
      years: "Member since 1968 — present",
      met: true,
    },
    florian: {
      name: "Florian Schneider",
      role: "Flutes / Synthesizers / Founding Member",
      image: florianImg,
      bio: "Florian Schneider-Esleben co-founded Kraftwerk with Ralf Hütter in 1968. Born in 1947 in Öhningen, Germany, he came from an artistic family and initially played the flute. Schneider was instrumental in shaping the band's early experimental sound and its transition to pure electronics. He developed a fascination with synthesized speech and robotic vocals, contributing to the identity of albums like <em>The Man-Machine</em>. He left the band in 2008 and passed away in 2020, leaving a monumental legacy.",
      years: "1968 — 2008",
      met: false,
    },
    wolfgang: {
      name: "Wolfgang Flür",
      role: "Electronic Percussion",
      image: wolfgangImg,
      bio: "Wolfgang Flür joined Kraftwerk in 1973 and became one of the most recognizable figures of the classic lineup. Born in 1947 in Frankfurt, he initially built his own electronic drum kits before joining the band. Flür's precise, mechanical percussion defined the rhythm of landmark albums such as <em>Autobahn</em>, <em>Radio-Activity</em>, <em>Trans-Europe Express</em>, and <em>The Man-Machine</em>. He left the group in 1987 and later pursued a solo career and writing.",
      years: "1973 — 1987",
      met: true,
    },
    karl: {
      name: "Karl Bartos",
      role: "Electronic Percussion / Synthesizers",
      image: karlImg,
      bio: "Karl Bartos became a core member of Kraftwerk in 1975, bringing formal musical training from the Robert Schumann Hochschule in Düsseldorf. Born in 1952 in Berchtesgaden, he contributed to the writing and production of the band's most celebrated albums, including <em>Trans-Europe Express</em>, <em>The Man-Machine</em>, and <em>Computer World</em>. Bartos left in 1990 and later released acclaimed solo work under his own name and as Elektric Music.",
      years: "1975 — 1990",
      met: false,
    },
  });

  const toggleMet = (memberKey) => {
    setMembers((prev) => ({
      ...prev,
      [memberKey]: {
        ...prev[memberKey],
        met: !prev[memberKey].met,
      },
    }));
  };


  return (
    <>
      <h1>{NomeApp}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis
        voluptatem ducimus numquam facilis deleniti, odio explicabo aspernatur
        facere asperiores?
      </p>
      <span>
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      </span>
      <div className="card-container">
        {Object.entries(members).map(([memberKey, member]) => (
          <Card
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            years={member.years}
            met={member.met}
            onToggle={() => toggleMet(memberKey)}
          >
            {member.bio}
          </Card>
        ))}
      </div>

      <span>
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      </span>

      <h2>Members I've Met</h2>
      <div className="met-members">
        {Object.values(members)
          .filter((member) => member.met)
          .map((member) => (
            <div key={member.name} className="met-member-photo">
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
      </div>




    </>
  );
}

export default App;
