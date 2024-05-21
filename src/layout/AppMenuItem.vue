<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useLayout } from "@/layout/composables/layout"
import type { AppMenuItemProps, MenuItem } from "@/models"

const route = useRoute()

const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle } = useLayout()

const props = withDefaults(defineProps<AppMenuItemProps>(), {
  item: () => ({ label: "" }),
  index: 0,
  root: true,
})

const isActiveMenu = computed(() => layoutConfig.activeMenuItem.value === props.item)

const itemClick = (event: Event, item: MenuItem) => {
  if (item.disabled) {
    event.preventDefault()
    return
  }

  const { overlayMenuActive, staticMenuMobileActive } = layoutState

  if ((item.to || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
    onMenuToggle()
  }

  if (item.command instanceof Function) {
    item.command({ originalEvent: event, item: item })
  }

  setActiveMenuItem(item)
}

const checkActiveRoute = (item: MenuItem) => {
  return route.path === item.to
}
</script>

<template>
  <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
    <div v-if="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label }}</div>
    <a
      v-if="(!item.to || item.items) && item.visible !== false"
      :href="item.url"
      @click="itemClick($event, item as MenuItem)"
      :class="item.class"
      :target="item.target"
      tabindex="0"
    >
      <i :class="item.icon" class="layout-menuitem-icon"></i>
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
    </a>
    <router-link
      v-if="item.to && !item.items && item.visible !== false"
      @click="itemClick($event, item as MenuItem)"
      :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
    >
      <i :class="item.icon" class="layout-menuitem-icon"></i>
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
    </router-link>
    <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
      <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
        <app-menu-item v-for="(child, i) in item.items" :key="i" :index="i" :item="child" :root="false"></app-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss" scoped></style>
