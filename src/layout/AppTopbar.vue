<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { useLayout } from "@/layout/composables/layout"
import { useRouter } from "vue-router"
import { ContrastMode, Theme } from "@/models"

const { changeThemeSettings, layoutConfig, onMenuToggle } = useLayout()

const outsideClickListener = ref<((this: Document, ev: MouseEvent) => any) | null>()
const topbarMenuActive = ref(false)
const router = useRouter()
const hasContrastTheme = computed(() => layoutConfig.darkTheme.value)

onMounted(() => {
  bindOutsideClickListener()
})

onBeforeUnmount(() => {
  unbindOutsideClickListener()
})

const logoUrl = "/layout/images/logo.png"

const onTopBarMenuButton = () => {
  topbarMenuActive.value = !topbarMenuActive.value
}
const topbarMenuClasses = computed(() => {
  return {
    "layout-topbar-menu-mobile-active": topbarMenuActive.value,
  }
})

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false
      }
    }
    document.addEventListener("click", outsideClickListener.value)
  }
}
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener.value)
    outsideClickListener.value = null
  }
}
const isOutsideClicked = (event: Event) => {
  if (!topbarMenuActive.value) return

  const sidebarEl = document.querySelector(".layout-topbar-menu")
  const topbarEl = document.querySelector(".layout-topbar-menu-button")

  if (event.target instanceof Element) {
    return !(
      sidebarEl?.isSameNode(event.target) ||
      sidebarEl?.contains(event.target) ||
      topbarEl?.isSameNode(event.target) ||
      topbarEl?.contains(event.target)
    )
  } else {
    return false
  }
}

function toggleThemeContrast() {
  const toBeTheme = layoutConfig.theme.value === Theme.SAGA_ORANGE ? Theme.ARYA_ORANGE : Theme.SAGA_ORANGE
  const isDarkTheme = toBeTheme === Theme.ARYA_ORANGE ? ContrastMode.DARK : ContrastMode.LIGHT
  onChangeTheme(toBeTheme, isDarkTheme)
  // localStorage.setItem("layout-config", JSON.stringify(layoutConfig))
}

const onChangeTheme = (theme: Theme, mode: ContrastMode) => {
  const elementId = "theme-css"
  const linkElement = document.getElementById(elementId) as HTMLElement
  const cloneLinkElement = linkElement.cloneNode(true) as HTMLElement
  const newThemeUrl = linkElement.getAttribute("href")?.replace(layoutConfig.theme.value, theme) ?? null

  if (cloneLinkElement !== null && newThemeUrl !== null) {
    cloneLinkElement.setAttribute("id", elementId + "-clone")
    cloneLinkElement.setAttribute("href", newThemeUrl)
    cloneLinkElement.addEventListener("load", () => {
      linkElement.remove()
      cloneLinkElement.setAttribute("id", elementId)
      changeThemeSettings(theme, mode === ContrastMode.DARK)
    })
    linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling)
  }
}
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img :src="logoUrl" alt="logo" />
      <span>ENTRANCE SYSTEM</span>
    </router-link>

    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars"></i>
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
        <i class="pi pi-calendar"></i>
        <span>Calendar</span>
      </button>
      <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
        <i class="pi pi-user"></i>
        <span>Profile</span>
      </button>
      <button @click="toggleThemeContrast()" class="p-link layout-topbar-button">
        <i class="pi" :class="{ 'pi-sun': !hasContrastTheme, 'pi-moon': hasContrastTheme }"></i>
        <span>Settings</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
