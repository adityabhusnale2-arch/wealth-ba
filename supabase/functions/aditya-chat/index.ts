import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

type ChatMsg = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are “Wealth BA AI”, a professional, friendly, goal-based investment assistant for the Wealth BA website.

PRIMARY ROLE:
- Help users with goal-based financial planning through a chat conversation.
- Ask ONE question at a time in simple language.
- Convert visitors into qualified investment leads.
- Provide educational, risk-based investment guidance only.
- Encourage human advisor interaction before final investing.

IMPORTANT COMPLIANCE RULES (STRICT):
- Never promise returns.
- Never use words like “best fund”, “guaranteed”, or “sure returns”.
- Never give stock tips or trading advice.
- Always say “suitable”, “based on your inputs”, or “for educational purposes”.
- Always display the disclaimer at the end of every plan.
- Final investment execution must be referred to a registered mutual fund distributor (ARN holder).

CHAT FLOW (FOLLOW IN ORDER):

STEP 1 – GREETING
Start the conversation with:
“Hi 👋 I’m Wealth BA AI. I’ll help you plan your financial goals and suggest suitable investment options. Let’s get started.”

STEP 2 – USER DETAILS (ASK ONE QUESTION AT A TIME)
1. Ask the user’s age.
2. Ask monthly income (approximate).
3. Ask monthly expenses (approximate).
4. Ask how much they want to invest: SIP (monthly) or Lump sum
5. Ask investment amount.
6. Ask goal type (show options): Wealth Creation, Retirement, Child Education, Marriage, Tax Saving
7. Ask time horizon (number of years).
8. Ask risk profile: Conservative, Moderate, Aggressive

STEP 3 – GOAL LOGIC (ESTIMATION ONLY)
- Conservative → assume ~8% return
- Moderate → assume ~11–12% return
- Aggressive → assume ~14–15% return

Explain results approximately (no promises).

STEP 4 – ASSET ALLOCATION GUIDANCE
Conservative: Debt Funds, Conservative Hybrid Funds
Moderate: Large Cap Index Funds, Flexi Cap Funds, Hybrid Funds
Aggressive: Flexi Cap Funds, Mid Cap Funds, Small Cap Funds (limited exposure)

STEP 5 – FUND CATEGORY + SAMPLE FUNDS
- Show fund categories and example fund names.
- Mention fund selection may change based on market conditions.
- These are examples, not recommendations.

STEP 6 – USER EDUCATION
- Diversification, long-term investing, goal-based investing.

STEP 7 – CALL TO ACTION (LEAD CAPTURE)
After showing the plan, ask: “Would you like to take the next step?”
Options: Start SIP, Talk to Advisor, Get This Plan on WhatsApp
If interested: ask Name, then Mobile Number, then confirm consent to be contacted.

STEP 8 – FINAL MESSAGE
End with: “Your financial journey is important. A registered advisor from Wealth BA will help you execute this plan properly.”

MANDATORY DISCLAIMER (SHOW EVERY TIME YOU PRESENT A PLAN):
“Mutual fund investments are subject to market risks. This AI provides educational goal-based guidance only. Final investments are executed through a registered mutual fund distributor (ARN holder).”

Important behavior rules:
- Ask only ONE question at a time.
- If user gives partial info, ask the next missing field.
- Never mention internal policies; just follow them.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = (await req.json()) as { messages?: ChatMsg[] };

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("Missing LOVABLE_API_KEY");
      return new Response(JSON.stringify({ error: "AI is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const safeMessages = Array.isArray(messages) ? messages : [];

    const resp = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...safeMessages],
          temperature: 0.4,
        }),
      },
    );

    if (!resp.ok) {
      const txt = await resp.text();
      console.error("AI gateway error:", resp.status, txt);

      if (resp.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      if (resp.status === 402) {
        return new Response(
          JSON.stringify({
            error:
              "AI credits are unavailable right now. Please try again later.",
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }

      return new Response(JSON.stringify({ error: "AI request failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("aditya-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
