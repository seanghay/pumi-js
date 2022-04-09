import { AdministrativeDivision } from "../types";

export default [
  {
    name: {
      km: "ក្រចេះ",
      latin: "Kratie",
    },
    id: "10",
  },
  {
    name: {
      km: "មណ្ឌលគិរី",
      latin: "Mondul Kiri",
    },
    id: "11",
  },
  {
    name: {
      km: "ភ្នំពេញ",
      latin: "Phnom Penh",
    },
    id: "12",
  },
  {
    name: {
      km: "ព្រះវិហារ",
      latin: "Preah Vihear",
    },
    id: "13",
  },
  {
    name: {
      km: "ព្រៃវែង",
      latin: "Prey Veng",
    },
    id: "14",
  },
  {
    name: {
      km: "ពោធិ៍សាត់",
      latin: "Pursat",
    },
    id: "15",
  },
  {
    name: {
      km: "រតនគិរី",
      latin: "Ratanak Kiri",
    },
    id: "16",
  },
  {
    name: {
      km: "សៀមរាប",
      latin: "Siemreap",
    },
    id: "17",
  },
  {
    name: {
      km: "ព្រះសីហនុ",
      latin: "Preah Sihanouk",
    },
    id: "18",
  },
  {
    name: {
      km: "ស្ទឹងត្រែង",
      latin: "Stung Treng",
    },
    id: "19",
  },
  {
    name: {
      km: "ស្វាយរៀង",
      latin: "Svay Rieng",
    },
    id: "20",
  },
  {
    name: {
      km: "តាកែវ",
      latin: "Takeo",
    },
    id: "21",
  },
  {
    name: {
      km: "ឧត្ដរមានជ័យ",
      latin: "Oddar Meanchey",
    },
    id: "22",
  },
  {
    name: {
      km: "កែប",
      latin: "Kep",
    },
    id: "23",
  },
  {
    name: {
      km: "ប៉ៃលិន",
      latin: "Pailin",
    },
    id: "24",
  },
  {
    name: {
      km: "ត្បូងឃ្មុំ",
      latin: "Tboung Khmum",
    },
    id: "25",
  },
  {
    name: {
      km: "បន្ទាយមានជ័យ",
      latin: "Banteay Meanchey",
    },
    id: "01",
  },
  {
    name: {
      km: "បាត់ដំបង",
      latin: "Battambang",
    },
    id: "02",
  },
  {
    name: {
      km: "កំពង់ចាម",
      latin: "Kampong Cham",
    },
    id: "03",
  },
  {
    name: {
      km: "កំពង់ឆ្នាំង",
      latin: "Kampong Chhnang",
    },
    id: "04",
  },
  {
    name: {
      km: "កំពង់ស្ពឺ",
      latin: "Kampong Speu",
    },
    id: "05",
  },
  {
    name: {
      km: "កំពង់ធំ",
      latin: "Kampong Thom",
    },
    id: "06",
  },
  {
    name: {
      km: "កំពត",
      latin: "Kampot",
    },
    id: "07",
  },
  {
    name: {
      km: "កណ្ដាល",
      latin: "Kandal",
    },
    id: "08",
  },
  {
    name: {
      km: "កោះកុង",
      latin: "Koh Kong",
    },
    id: "09",
  },
].map((it) => ({
  ...it,
  unit: { km: "ខេត្ត", latin: "Khaet", en: "Province" },
})) as AdministrativeDivision[];