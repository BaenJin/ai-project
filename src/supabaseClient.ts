import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oddpoiakpammlumuskzc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZHBvaWFrcGFtbWx1bXVza3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDU4NzAsImV4cCI6MjA2NTI4MTg3MH0.qUPUXYRGTAUQh3boyV2X1-FPiMRKzKPXkQdZmlnJt4w';

export const supabase = createClient(supabaseUrl, supabaseKey); 