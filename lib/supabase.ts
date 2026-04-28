import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://utipkfkcllfthtslqk.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlwa2Zqa2NsbGZ0aHRzbHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODA1ODcsImV4cCI6MjA5Mjk1NjU4N30.4nnSICuJRzBxilsrNfxP1TvX7EzTtpoifZcoQNbU6h0";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);