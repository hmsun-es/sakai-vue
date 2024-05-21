type MenuItem = {
  label: string
  separator?: boolean
  items?: MenuItem[]
  icon?: string
  to?: string // vue-route
  url?: string // full url
  class?: string
  preventExact?: boolean
  badge?: string
  visible?: boolean
  disabled?: boolean
  target?: "_blank" | "_self" | "_parent" | "_top"
  command?: (params: { originalEvent: Event; item: MenuItem }) => void
}

type LayoutConfig = {
  ripple: boolean
  darkTheme: boolean
  inputStyle: string
  menuMode: string
  theme: "saga-orange" | "arya-orange"
  scale: number
  activeMenuItem: MenuItem | null
}
