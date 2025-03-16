import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Simulate a response
    const reply = `Thanks for your message: "${message}". This is a demo response.`;

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
