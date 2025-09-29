// components/AnalyticsReportComponent.tsx

import { AnalyticsReport } from "./analyticsData";

type Props = {
  report: AnalyticsReport;
};

const AnalyticsReportComponent = ({ report }: Props) => (
  <div className="space-y-6">
    {/* Overall Summary */}
    <div>
      <div className="text-lg font-bold mb-2 flex items-center gap-2">
        <span className="text-xl">📈 Overall Summary</span>
      </div>
      <div className="text-gray-800 text-lg">{report.overall_summary}</div>
    </div>

    {/* Detailed Analytics Categories */}
    <div>
      <div className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="text-xl">📊 Detailed Analytics Report</span>
      </div>
      <div className="space-y-6">
        {/* Pitch Adherence */}
        <div className="pb-4">
          <div className="font-semibold flex items-center gap-2">
            <span className="text-xl">Pitch Adherence</span>
            <span className="text-blue-700 text-lg ">{report.pitch_adherence.score} / 5</span>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg">Justification:</div>
            <div className=" text-lg " >{report.pitch_adherence.justification}</div>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg">Improvement Suggestion:</div>
            <div className="text-lg" >{report.pitch_adherence.improvement_suggestion}</div>
          </div>
        </div>

        {/* Confidence */}
        <div className="pb-4">
          <div className="font-semibold flex items-center gap-2">
            <span className="text-xl" >Confidence</span>
            <span className="text-blue-700 text-lg">{report.confidence.score} / 5</span>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Justification:</div>
            <div className="text-lg" >{report.confidence.justification}</div>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
            <div className=" text-lg " >{report.confidence.improvement_suggestion}</div>
          </div>
        </div>

        {/* Technical Knowledge */}
        <div className="pb-4">
          <div className="font-semibold flex items-center gap-2">
            <span className="text-xl">Technical Knowledge</span>
            <span className="text-blue-700 text-lg ">{report.technical_knowledge.score} / 5</span>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Justification:</div>
            <div className=" text-lg " >{report.technical_knowledge.justification}</div>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
            <div className=" text-lg " >{report.technical_knowledge.improvement_suggestion}</div>
          </div>
        </div>

        {/* Customer Pain Points Connection */}
        <div className="pb-4">
          <div className="font-semibold flex items-center gap-2">
            <span className="text-xl">Customer Pain Points Connection</span>
            <span className="text-blue-700 text-lg ">{report.customer_pain_points_connection.score} / 5</span>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Justification:</div>
            <div className=" text-lg " >{report.customer_pain_points_connection.justification}</div>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
            <div className=" text-lg " >{report.customer_pain_points_connection.improvement_suggestion}</div>
          </div>
        </div>

        {/* Active Demonstration */}
        <div className="pb-4">
          <div className="font-semibold flex items-center gap-2">
            <span className="text-xl" >Active Demonstration</span>
            <span className="text-blue-700 text-lg ">{report.active_demonstration.score} / 5</span>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Justification:</div>
            <div className=" text-lg " >{report.active_demonstration.justification}</div>
          </div>
          <div className="text-gray-700 mt-2">
            <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
            <div className=" text-lg " >{report.active_demonstration.improvement_suggestion}</div>
          </div>
        </div>

        {/* Non-verbal Communication Section */}
        <div className="space-y-6">
          {/* <div className="font-semibold text-lg mb-3">👀 Non-verbal Communication</div> */}
          
          {/* Eye Contact */}
          <div className="pb-4">
            <div className="font-semibold flex items-center gap-2">
              <span className="text-xl" >Eye Contact</span>
              <span className="text-blue-700 text-lg ">{report.eye_contact.score} / 5</span>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Justification:</div>
              <div className=" text-lg " >{report.eye_contact.justification}</div>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
              <div className=" text-lg " >{report.eye_contact.improvement_suggestion}</div>
            </div>
          </div>

          {/* Body Language */}
          <div className="pb-4">
            <div className="font-semibold flex items-center gap-2">
              <span className="text-xl" >Body Language</span>
              <span className="text-blue-700 text-lg ">{report.body_language.score} / 5</span>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Justification:</div>
              <div className=" text-lg " >{report.body_language.justification}</div>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
              <div className=" text-lg " >{report.body_language.improvement_suggestion}</div>
            </div>
          </div>

          {/* Gestures */}
          <div className="pb-4">
            <div className="font-semibold flex items-center gap-2">
              <span className="text-xl" >Gestures</span>
              <span className="text-blue-700 text-lg ">{report.gestures.score} / 5</span>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Justification:</div>
              <div className=" text-lg " >{report.gestures.justification}</div>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
              <div className=" text-lg " >{report.gestures.improvement_suggestion}</div>
            </div>
          </div>

          {/* Appearance */}
          <div className="pb-4">
            <div className="font-semibold flex items-center gap-2">
              <span className="text-xl" >Appearance</span>
              <span className="text-blue-700 text-lg ">{report.appearance.score} / 5</span>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Justification:</div>
              <div className=" text-lg " >{report.appearance.justification}</div>
            </div>
            <div className="text-gray-700 mt-2">
              <div className="font-medium text-gray-900 text-lg ">Improvement Suggestion:</div>
              <div className=" text-lg " >{report.appearance.improvement_suggestion}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Dynamic Delivery Analysis */}
    <div>
      <div className="font-semibold text-lg mb-3 flex items-center gap-2">
        {/* <span>🎬 Dynamic Delivery Analysis</span> */}
      </div>
      <div className="space-y-4">
        <div>
          <div className="font-semibold text-green-700 flex items-center gap-2">
            <span className="text-xl" >✅ Highlights</span>
          </div>
          <div className="text-gray-700 text-lg ">{report.dynamic_delivery_analysis.highlights}</div>
        </div>
        <div>
          <div className="font-semibold text-amber-700 flex items-center gap-2">
            <span className="text-xl" >⚠️ Lowlights</span>
          </div>
          <div className="text-gray-700 text-lg ">{report.dynamic_delivery_analysis.lowlights}</div>
        </div>
      </div>
    </div>

    {/* Final Improvement Suggestion */}
    <div>
      <div className="font-semibold flex items-center gap-2 mt-4 mb-1">
        <span className="text-xl" >💡 Final Improvement Suggestion:</span>
      </div>
      <div className="text-gray-900 bg-amber-50 p-4 rounded-lg border border-amber-200 text-lg ">
        {report.final_improvement_suggestion}
      </div>
    </div>

    {/* Key Coaching Takeaway */}
    <div>
      <div className="font-semibold flex items-center gap-2 mt-4 mb-1">
        <span className="text-xl" >🎯 Key Coaching Takeaway:</span>
      </div>
      <div className="text-gray-900 bg-blue-50 p-4 rounded-lg border border-blue-200 text-lg ">
        {report.key_coaching_takeaway}
      </div>
    </div>
  </div>
);

export default AnalyticsReportComponent;