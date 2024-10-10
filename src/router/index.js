import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import CostumesPage from "@/views/CostumesPage.vue";
import CostumesCostumesPage from "@/views/CostumesCostumesPage.vue";
import ArmorsPage from "@/views/ArmorsPage.vue";
import WeaponsPage from "@/views/WeaponsPage.vue";
import SashesPage from "@/views/SashesPage.vue";
import WingsPage from "@/views/WingsPage.vue";
import HairPage from "@/views/HairPage.vue";
import MonstersPage from "@/views/MonstersPage.vue";
import MobsPage from "@/views/MobsPage.vue";
import BossesPage from "@/views/BossesPage.vue";
import StonesPage from "@/views/StonesPage.vue";
import ResellPage from "@/views/ResellPage.vue";
import PlechitoPage from "@/views/PlechitoPage.vue";
import DanePage from "@/views/DanePage.vue";
import RidackPage from "@/views/RidackPage.vue";
import TatsumaruPage from "@/views/TatsumaruPage.vue";
import MehokPage from "@/views/MehokPage.vue";
import KilluaPage from "@/views/KilluaPage.vue";
import KiduPage from "@/views/KiduPage.vue";
import NPCPage from "@/views/NPCPage.vue";
import MountsPage from "@/views/MountsPage.vue";
import PetsPage from "@/views/PetsPage.vue";
import NpcsPage from "@/views/NpcsPage.vue";
import FreePage from "@/views/FreePage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/costumes", name: "Costumes", component: CostumesPage },
  {
    path: "/costumes/costumes",
    name: "CostumesCostumes",
    component: CostumesCostumesPage,
  },
  { path: "/costumes/armors", name: "Armors", component: ArmorsPage },
  { path: "/costumes/weapons", name: "Weapons", component: WeaponsPage },
  { path: "/costumes/sashes", name: "Sashes", component: SashesPage },
  { path: "/costumes/wings", name: "Wings", component: WingsPage },
  { path: "/costumes/hair", name: "Hair", component: HairPage },
  { path: "/monsters", name: "Monsters", component: MonstersPage },
  { path: "/monsters/mobs", name: "Mobs", component: MobsPage },
  { path: "/monsters/bosses", name: "Bosses", component: BossesPage },
  { path: "/monsters/stones", name: "Stones", component: StonesPage },
  { path: "/resell", name: "Resell", component: ResellPage },
  { path: "/resell/plechito", name: "Plechito", component: PlechitoPage },
  { path: "/resell/dane", name: "Dane", component: DanePage },
  { path: "/resell/ridack", name: "Ridack", component: RidackPage },
  { path: "/resell/tatsumaru", name: "Tatsumaru", component: TatsumaruPage },
  { path: "/resell/mehok", name: "Mehok", component: MehokPage },
  { path: "/resell/killua", name: "Killua", component: KilluaPage },
  { path: "/resell/kidu", name: "Kidu", component: KiduPage },
  { path: "/npc", name: "NPC", component: NPCPage },
  { path: "/npc/mounts", name: "Mounts", component: MountsPage },
  { path: "/npc/pets", name: "Pets", component: PetsPage },
  { path: "/npc/npcs", name: "Npcs", component: NpcsPage },
  { path: "/free", name: "Free", component: FreePage },
  { path: "/contact", name: "Contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
