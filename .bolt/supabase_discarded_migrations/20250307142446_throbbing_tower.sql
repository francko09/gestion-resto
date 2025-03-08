/*
  # Add email column to profiles table

  1. Changes
    - Add email column to profiles table
    - Make email column unique and not null
    - Add index on email column for faster lookups

  2. Security
    - No changes to RLS policies needed
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'email'
  ) THEN
    ALTER TABLE profiles ADD COLUMN email text NOT NULL;
    ALTER TABLE profiles ADD CONSTRAINT profiles_email_unique UNIQUE (email);
    CREATE INDEX profiles_email_idx ON profiles (email);
  END IF;
END $$;