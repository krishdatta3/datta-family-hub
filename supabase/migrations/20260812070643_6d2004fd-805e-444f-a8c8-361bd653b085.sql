CREATE OR REPLACE FUNCTION public.increment_site_visits()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.site_stats
     SET visits = visits + 1, updated_at = now()
   WHERE id = 'main'
  RETURNING visits;
$$;

REVOKE ALL ON FUNCTION public.increment_site_visits() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.increment_site_visits() TO anon, authenticated;