import { modules } from '../data/modules'
import { ModuleItem } from './ModuleItem'

export function Sidebar(): HTMLElement {
  const sidebar = document.createElement('aside')
  sidebar.className = 'bg-white border-r border-gray-200'

  sidebar.innerHTML = `
    <div class="px-4 pt-5 pb-4">
      <p class="text-[10px] font-semibold uppercase tracking-wide text-amber-600">Module navigation</p>
      <h1 class="text-base font-bold text-lg text-gray-900">Course modules</h1>
    </div>
  `

  const list = document.createElement('ul')
  list.className = 'flex flex-col gap-2 px-3 pb-4'

  for (const module of modules) {
    list.append(ModuleItem(module))
  }

  sidebar.append(list)
  return sidebar
}