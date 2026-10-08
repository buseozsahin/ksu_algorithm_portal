export function Navbar() : HTMLElement {
  const nav = document.createElement('header')
  nav.className = 'flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200'

  nav.innerHTML = `
    <div class="flex items-center gap-4">
      <img src="/assets/ksu-logo.png" alt="Kennesaw State University Logo" class="h-12" />
      <a href="#/" class="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-ksu-gold text-xs font-semibold">
        <span class="material-symbols-outlined text-sm! leading-none" aria-hidden="true">home</span>
        Home
      </a>
     </div>

    <div class="flex items-center gap-6">
      <a href="#/login" class="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black text-white text-xs font-semibold">
        Login
        <span class="material-symbols-outlined text-sm! leading-none" aria-hidden="true">login</span>
      </a>
    </div>
  `
  return nav
}