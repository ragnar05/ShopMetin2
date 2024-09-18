import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import CostumesPage from "@/views/CostumesPage.vue";
import ArmorsPage from "@/views/ArmorsPage.vue";
import WeaponsPage from "@/views/WeaponsPage.vue";
import SashesPage from "@/views/SashesPage.vue";
import WingsPage from "@/views/WingsPage.vue";
import HairPage from "@/views/HairPage.vue";
import MonstersPage from "@/views/MonstersPage.vue";
import MobsPage from "@/views/MobsPage.vue";
import BossesPage from "@/views/BossesPage.vue";
import StonesPage from "@/views/StonesPage.vue";
import NPCPage from "@/views/NPCPage.vue";
import MountsPage from "@/views/MountsPage.vue";
import PetsPage from "@/views/PetsPage.vue";
import FreePage from "@/views/FreePage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/costumes", name: "Costumes", component: CostumesPage },
  { path: "/costumes/armors", name: "Armors", component: ArmorsPage },
  { path: "/costumes/weapons", name: "Weapons", component: WeaponsPage },
  { path: "/costumes/sashes", name: "Sashes", component: SashesPage },
  { path: "/costumes/wings", name: "Wings", component: WingsPage },
  { path: "/costumes/hair", name: "Hair", component: HairPage },
  { path: "/monsters", name: "Monsters", component: MonstersPage },
  { path: "/monsters/mobs", name: "Mobs", component: MobsPage },
  { path: "/monsters/bosses", name: "Bosses", component: BossesPage },
  { path: "/monsters/stones", name: "Stones", component: StonesPage },
  { path: "/npc", name: "NPC", component: NPCPage },
  { path: "/npc/mounts", name: "Mounts", component: MountsPage },
  { path: "/npc/pets", name: "Pets", component: PetsPage },
  { path: "/free", name: "Free", component: FreePage },
  { path: "/contact", name: "Contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
