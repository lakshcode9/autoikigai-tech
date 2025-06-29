/*
  # Newsletter subscriptions table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `active` (boolean, default true)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for anyone to subscribe to newsletter
    - Add policy for authenticated users to read subscriptions
    - Add policy for authenticated users to update subscription status
*/

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Authenticated users can read newsletter subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Authenticated users can update newsletter subscriptions" ON newsletter_subscriptions;

-- Create policies
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update newsletter subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true);