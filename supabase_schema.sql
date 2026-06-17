-- -------------------------------------------------------------
-- SUPABASE POSTGRESQL DATABASE SCHEMA
-- -------------------------------------------------------------
-- Copy and execute this script inside your Supabase SQL Editor
-- (https://supabase.com/dashboard/project/_/sql)
-- -------------------------------------------------------------

-- 1. Create Messages Table (Contact Form)
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for messages
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public submissions (Insert only)
CREATE POLICY "Allow public insert messages" 
ON public.messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow project owners to read messages (if logged in)
CREATE POLICY "Allow authenticated read messages" 
ON public.messages 
FOR SELECT 
TO authenticated 
USING (true);


-- 2. Create Projects Table (For dynamically adding projects via Database)
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- e.g. 'Web App', 'Web Design', 'UX Design', 'Branding'
    description TEXT NOT NULL,
    image_url VARCHAR(512), -- URL path to image (can be assets path or Supabase Storage public URL)
    github_url VARCHAR(512), -- Link to GitHub
    live_url VARCHAR(512), -- Link to live preview
    technologies TEXT[] NOT NULL, -- Array of tech tags, e.g. ARRAY['Next.js', 'TypeScript', 'Supabase']
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read projects (Public Read)
CREATE POLICY "Allow public read projects" 
ON public.projects 
FOR SELECT 
TO anon, authenticated
USING (true);

-- Create policy to allow authenticated project owner to write/insert/update/delete projects
CREATE POLICY "Allow authenticated manage projects" 
ON public.projects 
FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);


-- -------------------------------------------------------------
-- EXAMPLES OF SQL INSERTS (Adding a Project)
-- -------------------------------------------------------------
-- INSERT INTO public.projects (title, category, description, image_url, github_url, live_url, technologies)
-- VALUES (
--     'BDJ Walking Tour', 
--     'Web App', 
--     'Platform digital pemesanan tiket ekskursi lokal Banjarmasin.', 
--     '/assets/images/portfolio-1.jpg', 
--     'https://github.com/Haikall-akbarr/porto', 
--     'https://www.bdjwalkingtour.com/', 
--     ARRAY['Next.js', 'Firebase', 'TypeScript', 'Vercel']
-- );
