export type MenuItem = {
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

export type LayoutConfig = {
  ripple: boolean
  darkTheme: boolean
  inputStyle: string
  menuMode: "overlay" | "static"
  theme: Theme
  scale: number
  activeMenuItem: MenuItem | null
}

export type AppMenuItemProps = {
  item: MenuItem
  index: number
  root: boolean
}

export enum Theme {
  SAGA_ORANGE = "saga-orange",
  ARYA_ORANGE = "arya-orange",
}

export enum ContrastMode {
  DARK = "dark",
  LIGHT = "light",
}

export interface ExhibitionTeam {}

export interface LoginUser {
  id: string
  email: string
  name: string
  role: string
  avatar: string
  status: string
}

export class Administrator implements LoginUser {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public role: string,
    public avatar: string,
    public status: string,
  ) {}
}

export class ExhibitionManager implements LoginUser {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public role: string,
    public avatar: string,
    public status: string,
    public organization: Organization,
  ) {}
}

export class ExhibitionAdmin extends ExhibitionManager {}

export class SiteStaff implements LoginUser {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public role: string,
    public avatar: string,
    public status: string,
  ) {}
}

export interface Organization {
  name: string
}

export interface ExhibitionClass {
  name: string
  slug: string
  organization: Organization
}

export interface Exhibition {
  name: string
}
