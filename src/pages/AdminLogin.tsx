import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, supabaseConfigured } from '../lib/supabase'

export function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (!supabaseConfigured || !supabase) {
      setMessage('Configura Supabase en el archivo .env antes de usar el panel.')
      return
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return setMessage(error.message)
    navigate('/admin')
  }

  return (
    <main className="admin-shell">
      <form className="admin-card" onSubmit={submit}>
        <img src="/logo-unicas.png" alt="Únicas" />
        <h1>Administración</h1>
        <p>Acceso privado para gestionar proyectos.</p>
        <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
        <label>Contraseña<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
        {message && <div className="form-message">{message}</div>}
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
    </main>
  )
}
