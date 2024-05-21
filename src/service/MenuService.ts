import type { LoginUser, MenuItem } from "@/models"

const allMenuItems: MenuItem[] = [
  {
    label: "전시회",
    icon: "pi pi-megaphone",
    items: [
      {
        label: "전시회 관리",
        icon: "pi pi-cog",
        to: "/exhibition/settings",
      },
      {
        label: "진행 전시회 현황",
        icon: "pi pi-align-justify",
        to: "/exhibition/currents",
      },
      {
        label: "입장 티켓 관리",
        icon: "pi pi-ticket",
        to: "/exhibition/tickets",
      },
    ],
  },
  {
    label: "부대행사 / 경품",
    icon: "pi pi-bell",
    items: [
      {
        label: "부대행사 관리",
        icon: "pi pi-cog",
        to: "/sub-event/management",
      },
      {
        label: "부대행사 참관객",
        icon: "pi pi-users",
        to: "/sub-event/visitors",
      },
      {
        label: "부대행사 티켓",
        icon: "pi pi-ticket",
        to: "/sub-event/tickets",
      },
      {
        label: "경품 설정",
        icon: "pi pi-cog",
        to: "/lottery/settings",
      },
      {
        label: "경품 추첨 현황",
        icon: "pi pi-chart-bar",
        to: "/lottery/currents",
      },
    ],
  },
  {
    label: "참관객",
    icon: "pi pi-users",
    items: [
      {
        label: "참관객 입장 관리",
        icon: "pi pi-user-plus",
        to: "/visitor/management",
      },
      {
        label: "결제 관리",
        icon: "pi pi-wallet",
        to: "/visitor/payment",
      },
    ],
  },
  {
    label: "참가업체 직원",
    icon: "pi pi-building",
    to: "/exhibitor/staff",
  },
  {
    label: "조직",
    icon: "pi pi-sitemap",
    items: [
      {
        label: "조직 관리",
        icon: "pi pi-cog",
        to: "/organization/management",
      },
      {
        label: "조직 관리자 관리",
        icon: "pi pi-verified",
        to: "/organization/admin",
      },
    ],
  },
  {
    label: "기기 관리",
    icon: "pi pi-mobile",
    items: [
      {
        label: "인쇄 양식 관리",
        icon: "pi pi-print",
        to: "/device/print-templates",
      },
      {
        label: "키오스크 현황",
        icon: "pi pi-desktop",
        to: "/device/kiosk",
      },
      {
        label: "참관객 데이터 시스템 신청",
        icon: "pi pi-clone",
        to: "/device/rental/vds",
      },
      {
        label: "기기 대여 신청",
        icon: "pi pi-eject",
        to: "/device/rental",
      },
      {
        label: "인쇄 Preset",
        icon: "pi pi-file",
        to: "/device/print-template/presets",
      },
    ],
  },
]

export class MenuService {
  constructor(protected user: LoginUser) {}

  public getMenuItems(): MenuItem[] {
    return allMenuItems
  }
}
