import './style.css'
import { App } from './App'

const root = document.querySelector<HTMLDivElement>('#app')

if (!root) {
  throw new Error('#app element not found')
}

root.append(App())