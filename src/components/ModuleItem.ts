import type { Module } from '../data/modules'

export function ModuleItem(module: Module): HTMLElement {
  const item = document.createElement('li')
  item.className = 'rounded-lg border border-gray-200 bg-white'

  const subtitleLinks = module.subtitles
    .map((subtitle) => `
      <li>
        <a href="#/module/${module.id}/${subtitle.id}" class="block py-1 text-[11px] font-semibold text-gray-600 hover:underline">
          ${subtitle.title}
        </a>
      </li>
    `)
    .join('')

  item.innerHTML = `
    <button type="button" aria-expanded="false" class="w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-left">
      <span>${module.title}</span>
      <span class="material-symbols-outlined text-base! leading-none" aria-hidden="true">chevron_right</span>
    </button>

    <ul class="hidden px-3 pb-2.5">
      ${subtitleLinks}
    </ul>
  `

  const button = item.querySelector('button')!
  const panel = item.querySelector('ul')!
  const icon = button.querySelector('.material-symbols-outlined')!

  let isOpen = false

  button.addEventListener('click', () => {
    isOpen = !isOpen

    panel.classList.toggle('hidden', !isOpen)
    item.classList.toggle('bg-ksu-gold', isOpen)
    item.classList.toggle('bg-white', !isOpen)
    icon.textContent = isOpen ? 'expand_more' : 'chevron_right'
    button.setAttribute('aria-expanded', String(isOpen))
  })

  return item
}