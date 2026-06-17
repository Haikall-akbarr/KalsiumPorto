import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";

// Initialize Supabase Client
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fallback if Supabase is not configured yet
    if (!supabase) {
      console.log("Supabase credentials not configured in environment. Received contact form submission:", {
        name,
        email,
        message,
      });
      return NextResponse.json({ 
        success: true, 
        warning: "Supabase not configured. Saved in server logs.",
      });
    }

    // Insert message into public.messages table
    const { error } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact API handler error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
