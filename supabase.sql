create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  short_description text not null,
  description text,
  cover_url text,
  gallery text[] default '{}',
  project_date date,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "public can read published projects"
on public.projects for select
using (status = 'published');

create policy "authenticated can read all projects"
on public.projects for select
to authenticated
using (true);

create policy "authenticated can insert projects"
on public.projects for insert
to authenticated
with check (true);

create policy "authenticated can update projects"
on public.projects for update
to authenticated
using (true)
with check (true);

create policy "authenticated can delete projects"
on public.projects for delete
to authenticated
using (true);

insert into storage.buckets (id, name, public)
values ('projects', 'projects', true)
on conflict (id) do nothing;

create policy "public can view project images"
on storage.objects for select
using (bucket_id = 'projects');

create policy "authenticated can upload project images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'projects');

create policy "authenticated can update project images"
on storage.objects for update
to authenticated
using (bucket_id = 'projects');

create policy "authenticated can delete project images"
on storage.objects for delete
to authenticated
using (bucket_id = 'projects');
