export type Project = {
  id: string
  title: string
  slug: string
  category: string
  short_description: string
  description?: string | null
  cover_url?: string | null
  gallery?: string[] | null
  project_date?: string | null
  featured: boolean
  status: 'draft' | 'published'
  created_at?: string
}
