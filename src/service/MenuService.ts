import type { LoginUser, MenuItem } from "@/models"

const allMenuItems: MenuItem[] = [
  {
    label: "전시회",
    icon: "pi pi-megaphone",
    items: [
      {
        label: "전시회 관리",
        icon: "pi pi-cog",
        to: "",
      },
      {
        label: "진행 전시회 현황",
        icon: "pi pi-align-justify",
        to: "",
      },
      {
        label: "입장 티켓 관리",
        icon: "pi pi-ticket",
        to: "",
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
        to: "",
      },
      {
        label: "부대행사 참관객",
        icon: "pi pi-users",
        to: "",
      },
      {
        label: "경품 설정",
        icon: "pi pi-cog",
        to: "",
      },
      {
        label: "경품 추첨 현황",
        icon: "pi pi-chart-bar",
        to: "",
      },
      {
        label: "부대행사 티켓",
        icon: "pi pi-ticket",
        to: "",
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
        to: "",
      },
      {
        label: "결제 관리",
        icon: "pi pi-wallet",
        to: "",
      },
    ],
  },
  {
    label: "참가업체",
    icon: "pi pi-building",
    to: "",
  },
  {
    label: "조직",
    icon: "pi pi-sitemap",
    items: [
      {
        label: "조직 관리",
        icon: "pi pi-cog",
        to: "",
      },
      {
        label: "조직 관리자 관리",
        icon: "pi pi-verified",
        to: "",
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
        to: "",
      },
      {
        label: "키오스크 현황",
        icon: "pi pi-desktop",
        to: "",
      },
      {
        label: "참관객 데이터 시스템 신청",
        icon: "pi pi-clone",
        to: "",
      },
      {
        label: "기기 대여 신청",
        icon: "pi pi-eject",
        to: "",
      },
      {
        label: "인쇄 Preset",
        icon: "pi pi-file",
        to: "",
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
