import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";

// Initialize Supabase Client
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function GET() {
  try {
    const defaultProjects = [
      {
        id: "bdj-walking-tour-featured",
        title: "BDJ Walking Tour",
        category: "Web App",
        image: "/assets/images/portfolio-1.jpg",
        description: "Platform digital pemesanan tiket dan pusat informasi pariwisata ekskursi lokal Banjarmasin (seperti susur Sungai Martapura dan wisata Pasar Terapung). Dilengkapi sistem pemesanan real-time, integrasi database Firebase Firestore, dan setup security rules database.",
        technologies: ["Next.js", "Firebase Firestore", "TypeScript", "Vercel", "Security Rules"],
        githubUrl: "https://github.com/Haikall-akbarr",
        liveUrl: "https://www.bdjwalkingtour.com/",
        isFeatured: true,
      }
    ];

    if (!supabase) {
      console.log("Supabase credentials not configured in environment. Returning default project.");
      return NextResponse.json(defaultProjects);
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch projects error:", error);
      return NextResponse.json(defaultProjects);
    }

    if (!data || data.length === 0) {
      return NextResponse.json(defaultProjects);
    }

    // Map DB fields to Component expected fields
    const formattedProjects = data.map((item: {
      id: string;
      title: string;
      category: string;
      image_url?: string;
      description: string;
      github_url?: string;
      live_url?: string;
      technologies?: string[];
    }) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      image: item.image_url || "/assets/images/portfolio-1.jpg",
      description: item.description,
      technologies: item.technologies || [],
      githubUrl: item.github_url || "",
      liveUrl: item.live_url || "",
    }));

    return NextResponse.json(formattedProjects);
  } catch (error: unknown) {
    console.error("Projects API handler error:", error);
    const defaultProjects = [
      {
        id: "bdj-walking-tour-featured",
        title: "BDJ Walking Tour",
        category: "Web App",
        image: "/assets/images/portfolio-1.jpg",
        description: "Platform digital pemesanan tiket dan pusat informasi pariwisata ekskursi lokal Banjarmasin (seperti susur Sungai Martapura dan wisata Pasar Terapung). Dilengkapi sistem pemesanan real-time, integrasi database Firebase Firestore, dan setup security rules database.",
        technologies: ["Next.js", "Firebase Firestore", "TypeScript", "Vercel", "Security Rules"],
        githubUrl: "https://github.com/Haikall-akbarr",
        liveUrl: "https://www.bdjwalkingtour.com/",
        isFeatured: true,
      }
    ];
    return NextResponse.json(defaultProjects);
  }
}
