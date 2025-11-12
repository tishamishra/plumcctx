import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const responseSchema = {
  name: "HomepageCopy",
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      hero: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          subheading: { type: "string" },
        },
        required: ["heading", "subheading"],
      },
      about: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          paragraphs: {
            type: "array",
            items: { type: "string" },
            minItems: 3,
            maxItems: 3,
          },
          bullets: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
              required: ["title", "description"],
            },
            minItems: 4,
            maxItems: 4,
          },
          contactHeading: { type: "string" },
          contactTagline: { type: "string" },
        },
        required: ["heading", "paragraphs", "bullets", "contactHeading", "contactTagline"],
      },
      services: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          description: { type: "string" },
          cards: {
            type: "object",
            additionalProperties: false,
            properties: Object.fromEntries(
              [
                "waterHeater",
                "tankless",
                "recirculation",
                "faucetSink",
                "waterConservation",
                "bathroomRenovation",
                "waterSystem",
                "slabLeak",
                "sumpPump",
                "drainCleaning",
                "sewerLine",
                "gasLine",
                "leakDetection",
                "toiletRepair",
              ].map((key) => [
                key,
                {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" },
                  },
                  required: ["title", "description"],
                },
              ])
            ),
            required: [
              "waterHeater",
              "tankless",
              "recirculation",
              "faucetSink",
              "waterConservation",
              "bathroomRenovation",
              "waterSystem",
              "slabLeak",
              "sumpPump",
              "drainCleaning",
              "sewerLine",
              "gasLine",
              "leakDetection",
              "toiletRepair",
            ],
          },
        },
        required: ["heading", "description", "cards"],
      },
      whyChoose: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          description: { type: "string" },
          items: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
              required: ["title", "description"],
            },
            minItems: 6,
            maxItems: 6,
          },
        },
        required: ["heading", "description", "items"],
      },
      cta: {
        type: "object",
        additionalProperties: false,
        properties: {
          tagline: { type: "string" },
          buttonLabel: { type: "string" },
        },
        required: ["tagline", "buttonLabel"],
      },
      process: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          description: { type: "string" },
          steps: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
              required: ["title", "description"],
            },
            minItems: 4,
            maxItems: 4,
          },
        },
        required: ["heading", "description", "steps"],
      },
      proBanner: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          description: { type: "string" },
        },
        required: ["heading", "description"],
      },
      faq: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            question: { type: "string" },
            answer: { type: "string" },
          },
          required: ["question", "answer"],
        },
        minItems: 8,
        maxItems: 8,
      },
      testimonials: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            name: { type: "string" },
            quote: { type: "string" },
          },
          required: ["name", "quote"],
        },
        minItems: 9,
        maxItems: 9,
      },
    },
    required: ["hero", "about", "services", "whyChoose", "cta", "process", "proBanner", "faq", "testimonials"],
  },
} as const;

async function generateCopy() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is not set.");
    process.exit(1);
  }

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `
You are rewriting homepage marketing copy for United Plumbing CCTX, a nationwide plumbing company in the United States.

Goals:
- Make the copy SEO-friendly for phrases like "United States plumbing services", "emergency plumber near me", and "licensed plumbers".
- Keep the tone professional, trustworthy, and conversational.
- Keep the phone number exactly "(833) 609-0936" where appropriate.
- Mention coverage across the United States without implying service in specific cities unless noted.
- Maintain clear calls to action focused on phone calls and quick scheduling.
- Avoid over-promising, medical claims, or warranties beyond workmanship guarantees.

Output must be valid JSON that matches the provided schema.
    `.trim(),
    response_format: { type: "json_schema", json_schema: responseSchema },
    temperature: 0.7,
  } as any);

  const outputText = response.output_text?.trim();

  if (!outputText) {
    console.error("Unexpected response format", response);
    process.exit(1);
  }

  try {
    const parsed = JSON.parse(outputText);
    console.log(JSON.stringify(parsed, null, 2));
  } catch (error) {
    console.error("Failed to parse JSON output:", outputText);
    throw error;
  }
}

generateCopy().catch((error) => {
  console.error("Failed to generate homepage copy", error);
  process.exit(1);
});

