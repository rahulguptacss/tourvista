import React from "react";

import AwardsRecognition from "../../components/section/AwardsRecognition/page";
import VideoBanner from "../../components/section/VideoBanner/page";
import Stats from "../../components/section/Stats/page";

export default function AwardsPage() {

  const awardsRecognitionData = {
    subtitle: "Awards & Recognition",
    title: "Celebrating Excellence &\nAchievements in Every Journey",
    trophyImage: "/img/awards.png",
    awardsList: [
      {
        title: "Best Travel Agency\nof the Year 2024",
        description: "Recognized for outstanding\nservice excellence and\ncustomer satisfaction.",
        icon: "/awards/1.png"
      },
      {
        title: "Excellence in Customer\nService 2023",
        description: "Honored for delivering exceptional\nsupport and personalized\ntravel experiences.",
        icon: "/awards/2.png"
      },
      {
        title: "Trusted Travel Partner\nAward 2023",
        description: "Awarded for reliability,\nintegrity, and building lasting\ncustomer relationships.",
        icon: "/awards/3.png"
      },
      {
        title: "Top Performer in\nInternational Travel 2022",
        description: "Recognized for excellence in\ninternational tour planning\nand operations.",
        icon: "/awards/4.png"
      },
      {
        title: "Outstanding Tour\nOperator 2022",
        description: "Honored for innovative tour\npackages and memorable\ntravel experiences.",
        icon: "/awards/5.png"
      },
      {
        title: "Customer Choice\nAward 2021",
        description: "Voted by customers for\nproviding the best travel\nexperiences.",
        icon: "/awards/6.png"
      }
    ]
  };

  const videoBannerData = {
    titleLine1: "Say",
    titleHighlight: "Yes!",
    titleLine2: "To New Adventure",
    backgroundImage: "/videobanner/videobanner.png"
  };

  const statsData = {
    items: [
      { value: "3600+", label: "Awards Winning", icon: "Award" },
      { value: "3600+", label: "Happy Traveler", icon: "Plane" },
      { value: "2.5K", label: "Tours success", icon: "CalendarCheck" },
      { value: "25+", label: "Our Experience", icon: "Smile" }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <AwardsRecognition data={awardsRecognitionData} />
      <div className="pt-2 md:pt-8 relative z-20">
        <VideoBanner data={videoBannerData} />
      </div>
      <Stats data={statsData} />
    </main>
  );
}
