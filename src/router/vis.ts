export const visRoutes = [
  {
    path: "/device/kiosk",
    component: () => import("@/views/backoffice/device/KioskManagement.vue"),
  },
  {
    path: "/device/rental",
    component: () => import("@/views/backoffice/device/RentalManagement.vue"),
  },
  {
    path: "/device/rental/vds",
    component: () => import("@/views/backoffice/device/RentalVisitorDataSystem.vue"),
  },
  {
    path: "/device/print-template/presets",
    component: () => import("@/views/backoffice/device/PrintTemplatePresets.vue"),
  },
  {
    path: "/device/print-templates",
    component: () => import("@/views/backoffice/device/PrintTemplateSettings.vue"),
  },
  {
    path: "/exhibition/currents",
    component: () => import("@/views/backoffice/exhibition/ExhibitionCurrents.vue"),
  },
  {
    path: "/exhibition/settings",
    component: () => import("@/views/backoffice/exhibition/ExhibitionManagement.vue"),
  },
  {
    path: "/exhibition/tickets",
    component: () => import("@/views/backoffice/exhibition/ExhibitionTickets.vue"),
  },
  {
    path: "/exhibition/classes",
    component: () => import("@/views/backoffice/exhibition/ExhibitionClassManagement.vue"),
  },
  {
    path: "/organization/admin",
    component: () => import("@/views/backoffice/organization/OrganizationAdminManagement.vue"),
  },
  {
    path: "/organization/management",
    component: () => import("@/views/backoffice/organization/OrganizationManagement.vue"),
  },
  {
    path: "/lottery/currents",
    component: () => import("@/views/backoffice/sub-event/LotteryCurrents.vue"),
  },
  {
    path: "/lottery/settings",
    component: () => import("@/views/backoffice/sub-event/LotterySettings.vue"),
  },
  {
    path: "/sub-event/management",
    component: () => import("@/views/backoffice/sub-event/SubEventManagement.vue"),
  },
  {
    path: "/sub-event/tickets",
    component: () => import("@/views/backoffice/sub-event/SubEventTickets.vue"),
  },
  {
    path: "/sub-event/visitors",
    component: () => import("@/views/backoffice/sub-event/SubEventVisitors.vue"),
  },
  {
    path: "/visitor/management",
    component: () => import("@/views/backoffice/visitor/VisitorManagement.vue"),
  },
  {
    path: "/visitor/payment",
    component: () => import("@/views/backoffice/visitor/VisitorPayment.vue"),
  },
  {
    path: "/exhibitor/staff",
    component: () => import("@/views/backoffice/exhibitor/ExhibitorStaffManagement.vue"),
  },
]
