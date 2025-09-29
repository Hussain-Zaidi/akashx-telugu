// analyticsData.ts

export interface PitchAdherence {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface Confidence {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface TechnicalKnowledge {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface CustomerPainPointsConnection {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface ActiveDemonstration {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface EyeContact {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface BodyLanguage {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface Gestures {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface Appearance {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface DynamicDeliveryAnalysis {
  highlights: string;
  lowlights: string;
}

export interface AnalyticsReport {
  pitch_adherence: PitchAdherence;
  confidence: Confidence;
  technical_knowledge: TechnicalKnowledge;
  customer_pain_points_connection: CustomerPainPointsConnection;
  active_demonstration: ActiveDemonstration;
  eye_contact: EyeContact;
  body_language: BodyLanguage;
  gestures: Gestures;
  appearance: Appearance;
  dynamic_delivery_analysis: DynamicDeliveryAnalysis;
  overall_summary: string;
  final_improvement_suggestion: string;
  key_coaching_takeaway: string;
}

export const analyticsReport: AnalyticsReport = {
  pitch_adherence: {
    score: 4,
    justification: "The representative structured the pitch well, starting with a clear introduction (0:00-22:30) and then systematically covering various features and their benefits. They adhered to a logical flow, discussing drum design (53:10), pulsator (85:30), the unique filter placement (123:80), various wash programs (169:10), water level sensor (215:30), zero-pressure technology (242:10), and ultimately the durability and warranty (269:60, 294:50). This clear progression helped the customer understand the product thoroughly.",
    improvement_suggestion: "While the flow was good, adding a brief summary or recap of the key benefits at the end would help reinforce the message and provide a strong closing statement, ensuring the most impactful features are remembered."
  },
  confidence: {
    score: 4,
    justification: "The representative demonstrated strong confidence through a consistent, energetic delivery and good vocal variation, indicating enthusiasm for the product. The overall quick speaking pace, especially noticeable when detailing drum features (e.g., from 31:40 to 80:20), suggests fluency and expertise. Visually, strong, intentional gestures at 01:55 while demonstrating the product's internal workings further reinforced this confidence and deep product understanding.",
    improvement_suggestion: "To further enhance confidence and impact, vary your speaking pace slightly to emphasize key benefits, allowing for more impactful delivery and better absorption of information by the customer."
  },
  technical_knowledge: {
    score: 5,
    justification: "The representative demonstrated excellent technical knowledge, explaining complex features like the 'Coin design' drum (54:70), the unique 'link filter' placement (124:40), and 'zero-pressure technology' (242:10) in clear, understandable terms. They effectively highlighted specific benefits of these features, such as improved washing quality (79:30) and efficient water usage (224:80). The ability to compare their product's benefits against competitors (e.g., Samsung, Godrej at 97:70 and 155:30) showcases a deep understanding of the market and the product's unique value proposition.",
    improvement_suggestion: "Continue to connect technical features directly to tangible customer benefits, perhaps by using relatable analogies or real-world scenarios to make the information even more memorable and impactful."
  },
  customer_pain_points_connection: {
    score: 5,
    justification: "The representative excelled at connecting product features to common customer pain points, showcasing a deep understanding of customer needs. For example, they addressed concerns about water pressure by highlighting the 'zero-pressure technology' (242:10-265:40), a highly relevant issue in many Indian households. They also explained how the lower-positioned lint filter effectively collects debris even from small loads (148:60-153:60), and how various wash programs cater to needs like quick washes (186:30-196:40) or drying in rainy seasons (197:10-207:90). This demonstrates a keen awareness of practical household challenges.",
    improvement_suggestion: "You're doing great here! To further enhance this, consider starting a feature explanation with a common problem the customer might face before introducing how your product solves it, creating a stronger problem-solution narrative."
  },
  active_demonstration: {
    score: 5,
    justification: "The representative provided an excellent active demonstration of the product. The visual analysis confirms that at 01:55, the presenter's hand was inside the washing machine drum, clearly pointing to and illustrating components like the pulsator. Similarly, at 01:06, his hands were actively used to interact with the machine's internal parts, visually explaining its mechanism. This hands-on approach, combined with verbal explanations (e.g., describing the 'पल्स' at 82:70 and the 'पात्र' at 268:20), made the technical features tangible and easy for the audience to grasp.",
    improvement_suggestion: "N/A (Excellent – continue this highly effective approach of hands-on demonstration and clear verbal explanation)."
  },
  eye_contact: {
    score: 4,
    justification: "The representative maintained strong eye contact, skillfully directing it to the product during demonstrations to enhance engagement. For instance, at 01:55, his gaze was intentionally focused on the washing machine's interior, an appropriate and necessary action for explaining internal features. While at 01:06, his head was partly out of frame, the focus remained on interacting with the product, indicating purposeful engagement rather than disinterest. The absence of visibility at 02:44 was a filming choice, not a presenter's lapse.",
    improvement_suggestion: "When not actively demonstrating a physical feature, aim to make brief, direct eye contact with your audience to foster a personal connection and ensure they are following your narrative."
  },
  body_language: {
    score: 3,
    justification: "The representative's body language was generally average, maintaining a neutral stance. While his active demonstration with the product (e.g., hands inside the machine at 01:55) showed engagement with the item being discussed, the overall posture could be more open and dynamic to convey stronger enthusiasm and presence, as noted in the visual analysis.",
    improvement_suggestion: "Adopt a more open and dynamic posture when presenting, perhaps by taking a step back from the product occasionally to address the audience directly with a broader, more inviting stance, which can enhance your presence."
  },
  gestures: {
    score: 4,
    justification: "The representative used gestures very effectively, especially for product demonstration. For example, at 01:55, he clearly used his hands inside the washing machine drum to point out the pulsator and other components, making the technical details vivid. Similarly, at 01:06, his active interaction with the product's internal parts served as a strong illustrative gesture, helping the audience visualize how the features work. These purposeful gestures greatly aided understanding.",
    improvement_suggestion: "While excellent during product demonstrations, consider incorporating broader, more expressive hand gestures when explaining concepts or benefits to the audience directly, to add emphasis and engagement to your verbal message."
  },
  appearance: {
    score: 4,
    justification: "The representative maintained a professional and appropriate appearance for a retail showroom setting. He was neatly groomed and wore a suitable black polo shirt, as observed at 01:55 and 01:06. This presentation style aligns well with Indian business communication norms, where a clean and presentable look conveys respect and seriousness.",
    improvement_suggestion: "N/A (Excellent – maintain your current professional appearance)."
  },
  dynamic_delivery_analysis: {
    highlights: "The representative's energetic speaking style, characterized by a quick pace (around 4.89 words per second overall) and varied vocal tone, maintained a good level of engagement. His enthusiasm was particularly noticeable when explaining the benefits of the coin design drum (from 00:54) and the unique zero-pressure technology (from 02:42). Visually, the active hands-on demonstration was a major highlight. At 01:55, the presenter's direct interaction with the washing machine's internal parts, pointing to the pulsator, visually clarified complex features. Similarly, at 01:06, the intentional focus and use of hands to illustrate internal mechanisms were highly effective for conveying technical details.",
    lowlights: "The consistent fast pace, while energetic, sometimes left little room for pauses or vocal emphasis, which could make it challenging for the audience to absorb all the detailed information. For example, during the rapid explanation of multiple wash programs (from 01:69 to 02:07), slowing down slightly could have allowed key features to resonate more. While often intentional, there were moments where the presenter's head was out of frame or his gaze was entirely fixed on the product for extended periods (e.g., at 01:06 and 02:44), which, when not directly demonstrating a feature, could momentarily reduce direct audience connection. Although this was likely due to filming choices, in a live setting, it's important to re-establish audience contact."
  },
  overall_summary: "The representative delivered a highly informative and engaging pitch, showcasing excellent product knowledge and a strong connection to customer needs. His vocal delivery was energetic and fluent, maintaining a good pace and vocal variety. Visually, he leveraged active demonstrations and purposeful gestures to make complex features easy to understand. While his quick pace conveyed confidence and enthusiasm, it could sometimes benefit from strategic pauses to allow information to sink in. His professional appearance and targeted eye contact (during product demos) were commendable. The pitch effectively highlighted numerous pain points relevant to the Indian market, such as low water pressure and lint collection, offering clear solutions.",
  final_improvement_suggestion: "To maximize your pitch's impact, incorporate more strategic pauses within your delivery, especially after explaining a key benefit or technical feature (e.g., after \"वॉशिंग क्वालिटी अच्छा मिलेगा\" at 80:20 or explaining 'zero-pressure' benefits at 265:40). This would allow the audience time to process the information and increase retention. Additionally, when you're not actively demonstrating a physical part of the product, make a conscious effort to briefly re-establish direct eye contact with your audience to build rapport and ensure they are following along.",
  key_coaching_takeaway: "Let your confidence shine through strategic pauses and direct audience connection to ensure every powerful feature truly lands with your customer."
};
