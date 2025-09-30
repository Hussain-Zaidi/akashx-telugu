// components/RightPanel.jsx

"use client";
import { useState } from "react";
import Image from "next/image";
import WeeklyNudges from "./WeeklyNudges";
import Link from "next/link";
const RightPanel = () => {
  const [activeTab, setActiveTab] = useState<"weekly" | "local">("weekly");
  return (
    <div className="rounded-xl bg-[#F4F8FF] p-5">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="bg-[#6B8BBA] h-12 w-12 rounded-full flex items-center justify-center " >
            <Image
                            src={'/images/icons/headphone.svg'}
                            alt={'icon'}
                            width={20}
                            height={20}
                            className="w-8 h-8"
                            />
        </div>
        <div className="flex flex-col gap-2" >
            <span className="bg-[#D9ECFF]  text-base px-2 py-1 rounded-md font-medium w-fit">
            Pitch Adherence
            </span>
            <span className="text-base text-[#556E94]">
            Structured (3) • Un-Structured(2)
            </span>
        </div>
      </div>

      <div className="border-[#CDDAED] border-b mb-9 mt-6" ></div>

      {/* User Name */}
      <div className="mb-4">

        <div className="flex items-center gap-2.5 mb-11">
          <Image
          src={'/images/icons/user.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <h3 className="text-lg font-medium text-[#03070D]">User Name</h3>
        </div>

        <div className="flex items-center gap-2.5 mb-2.5">
          <Image
          src={'/images/icons/prompt.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Prompt</span>
        </div>

        <div className="">
          <p className="text-lg text-[#03070D] leading-relaxed">
            Please provide the detailed analytics for the video uploaded by
            Venkatesh Naik, including the video file, transcript and relevant
            indexes
          </p>

          {/* Meta */}
          <div className="flex gap-7 items-center mt-5 mb-7">

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">1k</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">5m</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">2 days ago</span>
            </div>
          </div>

          
          {/* Actions */}
          <div className="flex items-center gap-3 mt-3">
            <button className="cursor-pointer bg-[#6243F0] text-white px-4 py-1 rounded text-lg hover:bg-purple-700 flex h-10 flex-1 w-full justify-center items-center gap-2">
              <Image
          src={'/images/icons/prompt2.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-4 h-4"
          />
              Use Prompt
            </button>
            <button className="p-2 hover:outline-1 outline-[#8EA1BD] rounded-xl border border-[#8EA1BD] cursor-pointer">
              <Image
              src={'/images/icons/copy.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
            </button>
          </div>



        </div>
      </div>

      {/* Structured Data */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/table.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Structured Data (3)</span>
        </div>
        <div className="space-y-2">
          {structuredData.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between  p-1"
            >
              <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/column.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
              <span className="text-base font-normal ">{item.title}</span>
            </div>
              <span className="text-sm text-[#556E94]">
                ROWS (20) COLUMN (10)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Unstructured Data */}
      <div>
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/format.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Unstructured Data (2)</span>
        </div>
        <div className="space-y-2">
          {unstructuredData.map((item) => (
            <Link key={item.title} href={item.url} target="blank" className="flex items-center  p-1" >
              <div>
                <div className="flex items-center gap-2.5">
                <Image
                src={'/images/icons/file.svg'}
                alt={'icon'}
                width={20}
                height={20}
                className="w-5 h-5"
                />
                <span className="text-base font-normal ">{item.title}</span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-10 mb-6 mt-11 bg-white w-[calc(100%_+_2.5rem)] ml-[-1.25rem] px-5 py-1">
          {/* <Image
            src={"/images/icons/format.svg"}
            alt={"icon"}
            width={20}
            height={20}
            className="w-7 h-7"
          /> */}
          <button
            onClick={() => setActiveTab("weekly")}
            className={`text-lg font-medium cursor-pointer py-2.5 ${
              activeTab === "weekly" ? "border-b-2 border-[#6243F0]" : "text-[#03070D]"
            }`}
          >
            Weekly Nudges
          </button>
          {/* <span className="text-lg font-medium text-[#03070D]">/</span> */}
          <button
            onClick={() => setActiveTab("local")}
            className={`text-lg font-medium cursor-pointer py-2.5 ${
              activeTab === "local" ? "border-b-2 border-[#6243F0]" : "text-[#03070D]"
            }`}
          >
            వీక్లీ నడ్జెస్
          </button>
        </div>

        {activeTab === "weekly" && (
          <div className="space-y-2">
            <WeeklyNudges nudges={nudges} />
          </div>
        )}

        {activeTab === "local" && (
          <div className="space-y-2">
            <WeeklyNudges nudges={LocalNudges} />
          </div>
        )}
    </div>



    </div>
  );
};

const nudges = [
  { id: 1, title: "", description: "Hi Venkatesh, your explanation of the '24-day freshness' feature at [01:03] is a great example of focusing on a key customer benefit. To make it even more impactful, try adding a short, 2-second pause right after stating a powerful fact like that. This gives the customer a moment to absorb the value. Keep up the great work! 👍" },
  { id: 2, title: "", description: "Venkatesh, your hands-on demonstration is a major strength—physically showing the storage space at [01:54] is incredibly effective. To take that to the next level, try inviting the customer to interact with the fridge themselves. A simple prompt like, 'Feel how sturdy this shelf is,' can make the experience even more memorable and persuasive. Great job making the product tangible! 🤝" },

];

const LocalNudges = [
  { id: 1, title: "", description: "హాయ్ వెంకటేష్, [01:03] వద్ద '24-రోజుల ఫ్రెష్‌నెస్' ఫీచర్ గురించి మీరు వివరించిన తీరు, కస్టమర్ ప్రయోజనంపై దృష్టి పెట్టడానికి ఒక గొప్ప ఉదాహరణ. దీనిని మరింత ప్రభావవంతంగా చేయడానికి ఒక చిన్న సలహా: అలాంటి ఒక ముఖ్యమైన విషయాన్ని చెప్పిన తర్వాత, కస్టమర్ దాని విలువను గ్రహించడానికి ఒక రెండు సెకన్ల విరామం ఇవ్వండి. మీ పనితీరు చాలా బాగుంది, ఇలాగే కొనసాగించండి! 👍" },
  { id: 2, title: "", description: "వెంకటేష్, మీరు చేతులతో ఉత్పత్తిని చూపిస్తూ వివరించడం మీ యొక్క పెద్ద బలం—[01:54] వద్ద మీరు స్టోరేజ్ స్పేస్‌ను భౌతికంగా చూపించడం చాలా ప్రభావవంతంగా ఉంది. దీనిని తదుపరి స్థాయికి తీసుకెళ్లడానికి, కస్టమర్‌ను ఫ్రిజ్‌తో స్వయంగా ఇంటరాక్ట్ అవ్వమని ఆహ్వానించండి. 'ఈ షెల్ఫ్ ఎంత దృఢంగా ఉందో మీరే చూడండి' వంటి ఒక సాధారణ వాక్యం, అనుభవాన్ని మరింత గుర్తుండిపోయేలా మరియు నమ్మశక్యంగా చేస్తుంది. ఉత్పత్తిని ప్రత్యక్షంగా అనుభూతి చెందేలా చేయడంలో చాలా బాగా చేశారు! 🤝" },
];

const structuredData = [
  {
    title: "Employees Table",
    url: "/data/structured/employees.csv", // replace with actual path or URL
  },
  {
    title: "Presentations Table",
    url: "/data/structured/presentations.csv", // replace with actual path or URL
  },
  {
    title: "Performance_KPIs Table",
    url: "/data/structured/performance_kpis.csv", // replace with actual path or URL
  },
];

const unstructuredData = [
  {
    title: "Video Link URL",
    url: "/videos/telugu.mp4", // replace with actual video URL
  },
  {
    title: "Translation.txt",
    url: "/telugu_readable_transcript.txt", // optional
  },
];

export default RightPanel;
