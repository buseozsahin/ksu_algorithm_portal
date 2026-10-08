import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

export function App(): HTMLElement {
  const app = document.createElement('div')
  app.className = 'min-h-screen flex flex-col'

  const layout = document.createElement('div')
  layout.className = 'flex-1 grid grid-cols-[280px_1fr]'

  const main = document.createElement('main')
  main.className = 'bg-slate-100'
  main.textContent = 'Main'

  layout.append(Sidebar(), main)
  app.append(Navbar(), layout)

  return app
}