import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://enrkyljmypellhtqewdl.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVucmt5bGpteXBlbGxodHFld2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MTQxMTEsImV4cCI6MjA1NDI5MDExMX0.X2omrA-zlyQF7Urc-jxzFi0dMZGLbC4LT5J0OnU_hZA"; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
