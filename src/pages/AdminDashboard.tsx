import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, supabaseConfigured } from '../lib/supabase'
import type { Project } from '../types/project'

const slugify = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function AdminDashboard() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState<Project[]>([])
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({ title: '', category: '', short_description: '', description: '', featured: false, status: 'published' as 'published'|'draft' })
  const [cover, setCover] = useState<File | null>(null)
  const [gallery, setGallery] = useState<File[]>([])

  useEffect(() => {
    if (!supabaseConfigured || !supabase) return
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate('/admin/login')
      else loadProjects()
    })
  }, [])

  async function loadProjects() {
    if (!supabase) return
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    setProjects((data ?? []) as Project[])
  }

  async function upload(file: File) {
    if (!supabase) return null
    const ext = file.name.split('.').pop()
    const path = `${crypto.randomUUID()}.${ext}`
    const { error } = await supabase.storage.from('projects').upload(path, file)
    if (error) throw error
    return supabase.storage.from('projects').getPublicUrl(path).data.publicUrl
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (!supabaseConfigured || !supabase) return setMessage('Falta configurar Supabase.')
    try {
      setMessage('Guardando...')
      const cover_url = cover ? await upload(cover) : null
      const galleryUrls = await Promise.all(gallery.map(upload))
      const { error } = await supabase.from('projects').insert({
        title: form.title,
        slug: `${slugify(form.title)}-${Date.now()}`,
        category: form.category,
        short_description: form.short_description,
        description: form.description,
        cover_url,
        gallery: galleryUrls.filter(Boolean),
        featured: form.featured,
        status: form.status,
      })
      if (error) throw error
      setForm({ title: '', category: '', short_description: '', description: '', featured: false, status: 'published' })
      setCover(null); setGallery([]); setMessage('Proyecto publicado correctamente.')
      loadProjects()
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'No se pudo guardar.')
    }
  }

  async function remove(id: string) {
    if (!supabase || !confirm('¿Eliminar este proyecto?')) return
    await supabase.from('projects').delete().eq('id', id)
    loadProjects()
  }

  async function logout() {
    if (supabase) await supabase.auth.signOut()
    navigate('/admin/login')
  }

  if (!supabaseConfigured) return <main className="admin-shell"><div className="admin-card"><h1>Panel listo</h1><p>Solo falta conectar Supabase. Revisa README.md.</p></div></main>

  return (
    <main className="dashboard">
      <div className="dashboard-top"><div><span className="eyebrow">Únicas</span><h1>Gestión de proyectos</h1></div><button onClick={logout} className="btn btn-ghost">Salir</button></div>
      <div className="dashboard-grid">
        <form className="project-form" onSubmit={submit}>
          <h2>Nuevo proyecto</h2>
          <label>Título<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required /></label>
          <label>Categoría<input value={form.category} onChange={e=>setForm({...form,category:e.target.value})} placeholder="Cumpleaños, Papelería, Educativo..." required /></label>
          <label>Descripción corta<textarea value={form.short_description} onChange={e=>setForm({...form,short_description:e.target.value})} required /></label>
          <label>Descripción completa<textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} /></label>
          <label>Imagen de portada<input type="file" accept="image/*" onChange={e=>setCover(e.target.files?.[0] ?? null)} /></label>
          <label>Galería<input type="file" accept="image/*" multiple onChange={e=>setGallery(Array.from(e.target.files ?? []))} /></label>
          <div className="form-row"><label className="check"><input type="checkbox" checked={form.featured} onChange={e=>setForm({...form,featured:e.target.checked})}/> Destacar en Inicio</label>
          <label>Estado<select value={form.status} onChange={e=>setForm({...form,status:e.target.value as 'published'|'draft'})}><option value="published">Publicado</option><option value="draft">Borrador</option></select></label></div>
          {message && <div className="form-message">{message}</div>}
          <button className="btn btn-primary" type="submit">Guardar proyecto</button>
        </form>
        <section className="admin-projects"><h2>Proyectos</h2>{projects.map(p=><div className="admin-project" key={p.id}><div><strong>{p.title}</strong><span>{p.category} · {p.status}</span></div><button onClick={()=>remove(p.id)}>Eliminar</button></div>)}</section>
      </div>
    </main>
  )
}
