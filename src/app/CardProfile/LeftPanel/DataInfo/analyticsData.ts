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
  "pitch_adherence": {
    "score": 4,
    "justification": "You did a great job of sticking to the key features and benefits of the product, moving logically from one point to the next. For example, you introduced the brand and its legacy (25.1s-32.0s), then smoothly transitioned into specific features like the 24-day freshness (63.5s-65.9s) and the vegetable box capacity (139.5s-143.5s). Your explanation of features felt organized and thought-out, indicating a clear plan for your pitch.",
    "improvement_suggestion": "While your flow is good, consider incorporating short, planned pauses after presenting a major feature or benefit. These pauses can act as 'checkpoints' for your audience to absorb information and mentally prepare for the next point. This also offers an opportunity for them to ask questions, making the pitch more interactive."
  },
  "confidence": {
    "score": 4,
    "justification": "Your voice had a good, varied tone throughout the pitch, which kept the listener engaged and showed you were comfortable with the material. This natural vocal energy, combined with your strong eye contact, especially at moments like [01:03] and [01:54] where you directly engaged the product and implied customer, projected a confident presence. Even though you spoke at a moderate pace, your explanations were clear and steady, further reinforcing your self-assurance.",
    "improvement_suggestion": "To boost your confidence even further, practice power poses or take a few deep breaths before starting. Also, consciously slow down just a touch when introducing the most critical features or benefits. This deliberate pacing can add weight and authority to your words, making them resonate more strongly with the customer."
  },
  "technical_knowledge": {
    "score": 4,
    "justification": "You demonstrated solid technical knowledge of the Godrej refrigerator, explaining its features in detail and clearly linking them to benefits. For instance, you detailed the '24-day freshness' feature [63.5s-65.9s], the 'advanced cooling technology' [71.9s-74.1s], and the practical advantage of the '16.4 L vegetable box' [139.5s-143.5s]. Your explanation about preventing spoilage due to condensation ('ఆ పుచ్చులు రాకుండా ఈ హనీ మెటీరియల్ తీసుకుంటే ఆ చెమను పైకి రాకూడదు' at 168.1s-171.1s) showed a deeper understanding of the product's engineering.",
    "improvement_suggestion": "Excellent job detailing the features. To make your technical knowledge even more impactful for a non-technical audience, try to translate one or two complex technical terms into a relatable analogy. For example, when discussing cooling technology, you could compare it to how a traditional earthen pot keeps water cool, but much more effectively. This can help customers grasp the benefits without getting lost in jargon."
  },
  "customer_pain_points_connection": {
    "score": 4,
    "justification": "You made good connections to potential customer pain points. You addressed the common concern of food spoilage by mentioning '24 days వరకు ఫ్రెషర్స్ ఇస్తుంది బ్యాక్టీరియా కానీ ఫంగస్ ఏం చేయకుండా' [63.5s-70.5s]. You also cleverly addressed the issue of vegetable decay from moisture by explaining how the 'honey material' prevents condensation [165.1s-171.1s]. This shows you understand what matters to a household consumer in Andhra/Telangana, where food preservation is key.",
    "improvement_suggestion": "While you implicitly addressed pain points, try making them explicit earlier in your pitch. For example, instead of immediately stating a solution, you could start with a question like, 'Do you ever find your vegetables spoiling too quickly?' or 'Are you tired of constantly rearranging your fridge for space?' This direct acknowledgment of their problems creates an immediate, stronger connection before you introduce the solution."
  },
  "active_demonstration": {
    "score": 5,
    "justification": "Your active demonstration was a major strength of your pitch! You effectively used the product to illustrate your points. For example, at [01:03], you used an open hand gesture to point at the refrigerator, drawing the viewer's eye. Even better, at [01:26] and [01:54], you physically interacted with the fridge, placing your hands inside to demonstrate storage capacity and practical use. This hands-on approach is incredibly effective in a showroom setting, allowing customers to visualize themselves using the product.",
    "improvement_suggestion": "You're doing great here! Continue to leverage the product for demonstration. If possible, consider inviting the customer to interact with the product themselves during a live pitch (e.g., 'Feel how sturdy this shelf is,' or 'Try opening the vegetable drawer'). This creates an even more immersive and persuasive experience."
  },
  "eye_contact": {
    "score": 4,
    "justification": "You maintained strong eye contact overall, which is crucial for building rapport. At [00:15], your direct gaze established a good connection right from the start. Even when demonstrating, like at [01:03] and [01:54], your gaze was directed towards the product or the implied customer, indicating engagement. This steady engagement makes the customer feel directly addressed and valued.",
    "improvement_suggestion": "While generally good, there was a moment around [00:43] where your gaze was directed downward and away. Aim to minimize these instances. Even when you're looking at the product to point out a feature, quickly return your gaze to the customer. This ensures continuous engagement and prevents the impression of disinterest."
  },
  "body_language": {
    "score": 3,
    "justification": "Your body language was generally neutral and open, which is good. However, the visual summary noted 'Posture was average, with mixed observations.' For example, at [00:34], your posture appeared a bit relaxed rather than intentionally commanding. Maintaining a consistently upright and open posture throughout the pitch can enhance your authoritative and trustworthy presence.",
    "improvement_suggestion": "Focus on maintaining an open and confident posture throughout the entire pitch. Stand tall with your shoulders back, and avoid slouching or crossing your arms, which can sometimes signal disinterest or defensiveness. An open stance not only projects confidence but also makes you appear more approachable to the customer, aligning well with Telugu cultural expectations of respectful engagement."
  },
  "gestures": {
    "score": 4,
    "justification": "Your gestures were effective and illustrative, significantly aiding your verbal explanations. The visual highlights noted your open hand gesture pointing towards the refrigerator at [01:03], which effectively guided attention. Furthermore, your purposeful act of placing your hand inside the refrigerator at [01:54] and using both hands at [01:26] were excellent ways to demonstrate features like storage capacity and interior layout. These actions made your descriptions tangible.",
    "improvement_suggestion": "Your gestures are a strong asset! To make them even more dynamic, use gestures to emphasize key words or numbers. For example, when you mention '24 days freshness,' you could use a small, deliberate hand gesture to underscore the '24.' Just be mindful not to overdo it, ensuring your gestures remain natural and serve to enhance your message rather than distract from it."
  },
  "appearance": {
    "score": 4,
    "justification": "Your appearance was largely professional and appropriate for a retail setting. The light-colored collared shirt and dark trousers at [01:54] are excellent choices, projecting a neat and respectable image that is well-received in Andhra/Telangana business etiquette. Your grooming was tidy, which builds trust and credibility with customers. The cultural thread on your wrist is a nice personal touch that fits the local context.",
    "improvement_suggestion": "You have a strong base here. The only minor point noted was a slightly wrinkled shirt at [01:03] and hair being a bit disheveled. To achieve a perfect score, ensure your attire is always crisply ironed, and your hair is neatly styled before every pitch. These small details can make a big difference in a customer's first impression and perception of your professionalism."
  },
  "dynamic_delivery_analysis": {
    "highlights": "Your pitch had several standout moments. Your strong opening eye contact at [00:15] immediately connected with the viewer. Vocally, your varied and engaging tone, particularly when explaining the 'honey material' feature at [168.1s-171.1s], demonstrated clear enthusiasm and knowledge. Visually, your active demonstration was superb; using an open hand to point out features at [01:03] and physically interacting with the refrigerator at [01:26] and [01:54] made the product come alive for the customer. Your consistent and appropriate professional appearance at [01:54] also contributed to a credible delivery.",
    "lowlights": "There were a few areas for improvement. At [00:43], your eye contact briefly broke, looking down and away, which can momentarily disengage the audience. While your explanations were thorough, your continuous speech with very few pauses meant you missed opportunities to allow the customer to process information or ask questions. In terms of body language, at [00:34], your posture was somewhat relaxed; maintaining a more consistently upright and open stance could project even greater authority and confidence."
  },
  "overall_summary": "Venkatesh, you delivered a solid and informative pitch that showcased your strong product knowledge and excellent active demonstration skills. Your varied vocal tone and mostly consistent eye contact kept the audience engaged. The way you used the product to illustrate its features was particularly impressive and is a major strength. You also did a good job connecting features to practical customer benefits. With a few refinements in your non-verbal communication, such as more deliberate posture and strategic pausing, your pitch can become even more polished and persuasive.",
  "final_improvement_suggestion": "To truly elevate your pitch, focus on a conscious integration of strategic pauses and more deliberate body language. Practice introducing key features, then pausing for a second or two to allow the information to sink in and to invite questions. Simultaneously, aim to maintain a consistently confident and open posture throughout. When demonstrating, return your gaze quickly to the customer after highlighting a feature. These subtle changes will make your delivery feel more controlled, powerful, and customer-centric, enhancing your rapport and the perceived value of the product.",
  "key_coaching_takeaway": "Engage, Explain, and Empower: Use pauses to engage, clear language to explain, and confident body language to empower your message."
};
