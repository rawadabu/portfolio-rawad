import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zukttyxavjmehdcxbaty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a3R0eXhhdmptZWhkY3hiYXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4NjcxMDgsImV4cCI6MjAxNTQ0MzEwOH0.mvP95qkXd8EKQnnTf99f_zI_DERy5nrNbzh43HipHzc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
