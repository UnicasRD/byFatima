import { supabase, supabaseConfigured } from './supabase'
import type { Project } from '../types/project'

export const demoProjects: Project[] = [
  {
    id: 'demo-1',
    title: 'Cumpleaños personalizado',
    slug: 'cumpleanos-personalizado',
    category: 'Cumpleaños',
    short_description: 'Detalles creados para que cada celebración tenga una identidad propia.',
    description: 'Proyecto de muestra. Sustituye esta información desde el panel de administración.',
    cover_url: null,
    gallery: [],
    project_date: null,
    featured: true,
    status: 'published',
  },
  {
    id: 'demo-2',
    title: 'Papelería creativa',
    slug: 'papeleria-creativa',
    category: 'Papelería',
    short_description: 'Piezas personalizadas, cuidadas desde la idea hasta el acabado final.',
    description: 'Proyecto de muestra.',
    cover_url: null,
    gallery: [],
    project_date: null,
    featured: true,
    status: 'published',
  },
  {
    id: 'demo-3',
    title: 'Proyecto educativo',
    slug: 'proyecto-educativo',
    category: 'Educativo',
    short_description: 'Material visual pensado para aprender jugando.',
    description: 'Proyecto de muestra.',
    cover_url: null,
    gallery: [],
    project_date: null,
    featured: true,
    status: 'published',
  },
]

export async function getPublishedProjects(): Promise<Project[]> {
  if (!supabaseConfigured || !supabase) return demoProjects

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as Project[]
}
