import { NextRequest, NextResponse } from "next/server";

import { webSocketInit, IWebSocketInit } from "@/server/webSocket";

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const { call, email, name, rid }: IWebSocketInit = data;
  try {
    const res = await webSocketInit({ call, email, name, rid });
    return NextResponse.json({ message: res });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
