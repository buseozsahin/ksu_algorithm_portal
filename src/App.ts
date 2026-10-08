import { Navbar } from './components/Navbar'

export function App(): HTMLElement {
  const app = document.createElement('div')
  app.className = 'min-h-screen flex flex-col'

  const layout = document.createElement('div')
  layout.className = 'flex-1 grid grid-cols-[280px_1fr]'

  const sidebar = document.createElement('aside')
  sidebar.className = 'bg-white border-r border-gray-200'

  const main = document.createElement('main')
  main.className = 'bg-slate-100'

  layout.append(sidebar, main)
  app.append(Navbar(), layout)

  return app
}