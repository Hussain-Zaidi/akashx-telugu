// components/RightPanel.jsx
import Image from "next/image";
import WeeklyNudges from "./WeeklyNudges";
import Link from "next/link";
const RightPanel = () => {
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
            Bharat Rawat, including the video file, transcript and relevant
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
          <div className="flex items-center gap-2.5 mb-6 mt-11">
            <Image
            src={'/images/icons/format.svg'}
            alt={'icon'}
            width={20}
            height={20}
            className="w-7 h-7"
            />
            <span className="text-lg font-medium text-[#03070D]">Weekly Nudges</span>
          </div>
          <div className="space-y-2">
              <WeeklyNudges nudges={nudges} />
          </div>
        </div>



    </div>
  );
};

const nudges = [
  { id: 1, title: "", description: "Hi Durga, the energy in your convertible options from 37s is there, and tying in vacation needs is a good start. But honestly, that quicker pace on tech like Nano Sheet at 152s comes off a bit rushed—it's holding back the full impact. Dial it in with a solid 'picture this' pause this week to make those details stick. You've got the potential; let's sharpen it up. ⚡" },
  { id: 2, title: "", description: "Durga, linking features to trips and power saves helps, but the clasped hands at 07:38? It's pulling down that confident edge a notch—customers notice. Switch to open gestures to really own the room. You're close to nailing it; one tweak away from great.🙌👐" },

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
