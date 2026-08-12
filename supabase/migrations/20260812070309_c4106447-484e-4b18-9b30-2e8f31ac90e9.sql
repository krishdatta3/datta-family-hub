CREATE TABLE public.site_stats (
  id text PRIMARY KEY,
  visits bigint NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.site_stats TO anon, authenticated;
GRANT ALL ON public.site_stats TO service_role;

ALTER TABLE public.site_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site stats"
  ON public.site_stats FOR SELECT TO anon, authenticated USING (true);

INSERT INTO public.site_stats (id, visits) VALUES ('main', 0);

CREATE OR REPLACE FUNCTION public.increment_site_visits()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE v bigint;
BEGIN
  UPDATE public.site_stats
     SET visits = visits + 1, updated_at = now()
   WHERE id = 'main'
  RETURNING visits INTO v;
  RETURN v;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_site_visits() TO anon, authenticated;