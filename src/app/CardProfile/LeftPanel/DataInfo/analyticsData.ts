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
    justification: "You presented a well-structured pitch, systematically introducing the product and detailing its many features and benefits. Your flow was consistent, covering aspects from the washing mechanism to fabric care, specific wash programs, warranty, and service network. This shows excellent preparation and understanding of the product information.",
    improvement_suggestion: "While your pitch was comprehensive, incorporating brief, intentional pauses between major feature explanations could give the customer a moment to absorb the information and make the delivery feel a little less rushed. This is especially true given your continuous speaking style, which, though energetic, leaves very little time for processing."
  },
  confidence: {
    score: 5,
    justification: "Your voice showed consistent energy and a good range of tone, conveying enthusiasm and strong belief in the product. Visually, your excellent, direct eye contact at the beginning ([00:00]) and deliberate gestures like pointing to the pulsator ([00:19]) further reinforced your confident and engaging presence.",
    improvement_suggestion: "Keep up the great work! Your confident delivery is a major asset in connecting with customers. Maintain that steady, engaging eye contact and let your voice reflect your conviction in the product's value."
  },
  technical_knowledge: {
    score: 5,
    justification: "You clearly demonstrated a deep understanding of the Godrej Velvets washing machine, explaining specific features like the 'Last Turbo Six Pulsator' and 'Zero Present Technology' in detail. You effectively communicated how these features work and their benefits, showcasing strong product expertise. Your rapid-fire delivery also suggests you're very familiar with the product's specifications.",
    improvement_suggestion: "Continue to refresh your knowledge and be prepared to answer more in-depth questions about these features, perhaps even demonstrating them live if possible. Consider simplifying one or two complex features with an everyday analogy to make them even more relatable."
  },
  customer_pain_points_connection: {
    score: 5,
    justification: "You skillfully connected the product's features to common customer concerns. You directly addressed important issues like fast washing, effective stain removal, fabric protection (especially for delicate sarees and baby clothes), and solutions for hard water issues (like the 'Tub Clean' option), which are highly relevant to our local market.",
    improvement_suggestion: "To make these connections even more impactful, try to articulate the customer's problem or 'pain point' explicitly before presenting your solution. For example, 'Are you tired of white clothes not getting truly clean? Our 'Whites' program is designed specifically for that...'"
  },
  active_demonstration: {
    score: 4,
    justification: "You effectively used the washing machine as a visual aid during your pitch. Your precise gesture of pointing directly at the pulsator/agitator inside the machine ([00:19]) was a strong example of actively demonstrating a key component. Resting your hand on the product ([00:04]) also helped draw attention to it.",
    improvement_suggestion: "Seek opportunities to incorporate even more hands-on interaction. Could you briefly simulate selecting a wash cycle or gently open the lid to show the drum? More physical engagement with the product can make the benefits feel more tangible."
  },
  eye_contact: {
    score: 4,
    justification: "Your eye contact was strong and direct, particularly noticeable at the start of your pitch ([00:00]), where your gaze was steady and engaged. This is crucial for building rapport and trust with potential customers.",
    improvement_suggestion: "Maintain this excellent level of direct eye contact. If you're presenting to more than one person, remember to scan your eyes to include everyone, making each individual feel acknowledged and part of the conversation."
  },
  body_language: {
    score: 3,
    justification: "While generally composed, your posture could be more consistently open and energetic. At times, such as around [03:04], your hands were clasped, which can sometimes come across as less inviting or dynamic. An open stance helps convey approachability and confidence.",
    improvement_suggestion: "Focus on maintaining an open and relaxed posture throughout your pitch. Try to avoid clasping your hands for extended periods; instead, let them rest naturally or use them for purposeful gestures to enhance your communication."
  },
  gestures: {
    score: 4,
    justification: "You used clear and effective gestures, especially when highlighting specific product features. For example, your precise pointing gesture at the pulsator/agitator at [00:19] was highly illustrative and helped clarify your explanation.",
    improvement_suggestion: "Continue to use these purposeful gestures to emphasize key points. You could also experiment with a wider range of gestures to add more dynamism and emotional connection, ensuring they always feel natural and support your words."
  },
  appearance: {
    score: 4,
    justification: "Your professional attire and neat grooming, as observed at the beginning of your pitch ([00:04]), were impeccable and highly appropriate for a retail environment in our region. This strong first impression helps build immediate credibility and respect with customers.",
    improvement_suggestion: "You’ve set a great standard here. Consistently maintaining this professional presentation will always work in your favor, reinforcing your image as a knowledgeable and trustworthy sales representative."
  },
  dynamic_delivery_analysis: {
    highlights: "You started strong with excellent, direct eye contact and a professional appearance ([00:00], [00:04]). Your voice carried good energy and varied tone throughout, making the pitch engaging. A standout moment was your illustrative gesture of pointing directly at the pulsator/agitator inside the machine ([00:19]), clearly explaining its function. Your continuous and energetic speech flow added to the dynamic feel of the presentation.",
    lowlights: "Your speech rate was quite fast throughout, with very few pauses, which, while energetic, might have made it challenging for the customer to fully absorb all the detailed information without feeling rushed. Visually, there were moments, like around [03:04], where your hands were clasped, leading to a less open body posture."
  },
  overall_summary: "Overall, you delivered a highly confident and knowledgeable pitch for the Godrej Velvets washing machine. Your deep understanding of the product and your ability to connect its features directly to customer pain points were excellent. Visually, your strong eye contact and effective gestures greatly enhanced your message, and your professional appearance left a positive impression. The main area for growth is to slightly moderate your fast pace and incorporate more intentional pauses, which will allow your customer to process the valuable information you're providing more effectively.",
  final_improvement_suggestion: "To elevate your pitch further, focus on pacing: allow for more deliberate pauses, especially after explaining a key benefit or feature, to let the information sink in and encourage questions. Simultaneously, refine your body language by maintaining an consistently open posture and consciously avoiding extended periods of clasped hands, using more expansive gestures to match your confident vocal delivery.",
  key_coaching_takeaway: "Pace your power – let clarity shine through with strategic pauses and open body language."
};
