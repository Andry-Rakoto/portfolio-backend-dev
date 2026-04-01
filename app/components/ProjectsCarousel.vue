<!-- <template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Mes Projets</span>
    </h2>
    <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Explorez mes réalisations et cliquez pour voir les détails
    </p>
    
    <div class="relative">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="projects-swiper"
      >
        <swiper-slide v-for="project in projects" :key="project.id">
          <div class="project-slide-card rounded-xl overflow-hidden cursor-pointer group"
               @click="viewProject(project.id)">
            <div class="project-image h-56 relative overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#101324] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white font-semibold text-lg transform group-hover:translate-x-0 translate-x-4 transition-transform duration-300">
                  Voir les détails →
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ project.shortDescription }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" 
                      class="px-2 py-1 bg-[#101324] rounded-full text-xs text-[#32bcae] border border-[#32bcae]/30">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" 
                      class="px-2 py-1 bg-[#101324] rounded-full text-xs text-gray-400">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <ProjectModal 
      :show="showModal" 
      :project="selectedProject"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectModal from '~/components/ProjectModal.vue'

const modules = [Autoplay, Pagination]

// État pour le modal
const showModal = ref(false)
const selectedProject = ref(null)

const projects = ref([
  {
    id: 1,
    title: "Centralis",
    shortDescription: "Conception et développement d'une application dédié à la gestion d'une centre commercial en utiliseant MEAN.",
    image: "/img/Dashboard_boutique.png",
    technologies: ["MongoDB", "Express", "Angular", "Node.js"],
    fullDescription: "Conception et développement d'une application dédié à la gestion d'une centre commercial en utiliseant MEAN. Implémentation de divers fonctionnalités : authentification JWT, gestion de stocks des magasins, système de paiement des loyers, des produits, forum, notifications, dashboard des administrateurs, produits favoris, gestions des évenements",
    features: [
      "Authentification JWT ",
      "Gestion des stocks ",
      "Système de panier d'achat",
      "Gestion des loyers",
      "Documentation complete de l'application",
      "Gestion des produits",
      "Forum de discussion",
      "Système de notifications",
      "Dashboard d'administration",
      "Produits favoris",
      "Gestion des évenements",
      "Tests unitaires et d'intégration"
    ],
    github: "https://github.com/Projet-Centralis",
    demo: "https://m1p13mean-andry-mioty.vercel.app",
    date: "Mars 2025"
  },
  {
    id: 2,
    title: "NovecoNext",
    shortDescription: "Conception et développement d'une application de gestion de l'entreprise NOVECO.",
    image: "/img/MacBook MockupTapaka.png",
    technologies: ["Spring Boot", "Nuxt", "Postgresql", "Figma"],
    fullDescription: "Conception et développement d'une application de gestion de l'entreprise NOVECO. Il consistait à mettre en place une application web-mobile pour gérer la totalité des activités de l'entreprise : gestion des chantiers (rapport journalier quantifié des travaux effectués, approvisions en matériaux), gestion des employers (contrats, paiements, congés), gestions des tâches (au bureau et sur chantier), statistiques de l'entreprise (chiffre d'affaire, dépenses, bénéfices, avancement des chantiers), module de notification, module de messagerie. Design : conception de l'interface utilisateur sur figma en respectant la charte graphique de l'entreprise, création de maquettes interactives pour valider l'expérience utilisateur avant le développement.",
    features: [
      "Gestion des chantiers",
      "Gestion des employers",
      "Gestion des tâches",
      "Statistiques de l'entreprise",
      "Module de notification",
      "Module de messagerie",
      "Conception de l'interface utilisateur sur figma",
      "Respect de la charte graphique de l'entreprise",
      "Création de maquettes interactives pour valider l'expérience utilisateur avant le développement",
    ],
    github: "https://github.com/example/task-manager",
    demo: "https://task-manager-demo.example.com",
    date: "Décembre 2024"
  },
  {
    id: 3,
    title: "Stellar",
    shortDescription: "Conception et développement d'un site e-commerce de vente de VTT de la marque STELLAR.",
    image: "/img/stellar60-30.png",
    technologies: ["Vue Js", "Java", "ERP: Idempiere", "Postgresql", "Xd", "Illustrator"],
    fullDescription: "Coté frontend : création from scratch des interfaces utilisateur avec Vue Js tout en respectant la charte graphique de la marque, coté backend : reprise de code de l'ERP : idempiere, développement d'un module d'insertion de données multiples (autre que l'éxistant dans idempiere) pour alimenter les données du site, développement d'un module de produits favoris, export pdf des factures (selon le design). Design: conception du logo, des mockups, et affiches pour le lancement de la marque. ",
    features: [
      "Architecture multi-tiers",
        "Reprise de code de l'ERP Idempiere",
        "Module d'insertion de données multiples",
        "Module de produits favoris",
        "Export PDF des factures",
        "Conception du logo de la marque",
        "Conception de mockups pour le site",
        "Conception d'affiches pour le lancement de la marque"
    ],
    github: "https://github.com/example/notification-system",
    demo: "https://notification-demo.example.com",
    date: "Août 2024"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    shortDescription: "Dashboard interactif avec graphiques en temps réel",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "WebSocket", "PostgreSQL"],
    fullDescription: "Dashboard d'analyse de données avec visualisations interactives. Affiche des métriques en temps réel et permet d'explorer les données historiques avec des filtres avancés.",
    features: [
      "Visualisations interactives avec D3.js",
      "Mises à jour en temps réel via WebSocket",
      "Filtres avancés et exploration de données",
      "Export de rapports en PDF",
      "Tableaux de bord personnalisables",
      "API RESTful pour l'accès aux données"
    ],
    github: "https://github.com/example/analytics-dashboard",
    demo: "https://analytics-demo.example.com",
    date: "Juin 2024"
  },
  {
    id: 5,
    title: "Chat Application",
    shortDescription: "Application de messagerie instantanée",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    technologies: ["Socket.io", "Express", "MongoDB", "React", "Tailwind"],
    fullDescription: "Application de chat en temps réel avec création de salons, messages privés, et partage de fichiers. Interface moderne et responsive avec React et Tailwind CSS.",
    features: [
      "Messages en temps réel avec Socket.io",
      "Salons de discussion publics et privés",
      "Messages privés entre utilisateurs",
      "Partage d'images et fichiers",
      "Indicateurs de présence et de saisie",
      "Interface responsive et moderne"
    ],
    github: "https://github.com/example/chat-app",
    demo: "https://chat-demo.example.com",
    date: "Mars 2024"
  }
])

const viewProject = (id) => {
  const project = projects.value.find(p => p.id === id)
  if (project) {
    selectedProject.value = project
    showModal.value = true
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  // Réactiver le scroll du body
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.projects-swiper {
  padding-bottom: 3rem;
}

.project-slide-card {
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(50, 188, 174, 0.1);
  transition: all 0.3s ease;
}

.project-slide-card:hover {
  transform: translateY(-10px);
  border-color: rgba(50, 188, 174, 0.3);
  box-shadow: 0 10px 30px rgba(50, 188, 174, 0.1);
}

.project-image {
  position: relative;
  overflow: hidden;
}

/* Styles Swiper personnalisés */
:deep(.swiper-pagination-bullet) {
  background: #32bcae;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #32bcae;
  opacity: 1;
}

:deep(.swiper-pagination) {
  bottom: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> -->

<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Mes Projets</span>
    </h2>
    <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Explorez mes réalisations et cliquez pour voir les détails
    </p>
    
    <div class="relative">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="projects-swiper"
      >
        <swiper-slide v-for="project in projects" :key="project.id">
          <div class="project-slide-card rounded-xl overflow-hidden cursor-pointer group"
               @click="viewProject(project.id)">
            <div class="project-image h-56 relative overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#101324] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white font-semibold text-lg transform group-hover:translate-x-0 translate-x-4 transition-transform duration-300">
                  Voir les détails →
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ project.shortDescription }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" 
                      class="px-2 py-1 bg-[#101324] rounded-full text-xs text-[#32bcae] border border-[#32bcae]/30">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" 
                      class="px-2 py-1 bg-[#101324] rounded-full text-xs text-gray-400">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <ProjectModal 
      :show="showModal" 
      :project="selectedProject"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectModal from '~/components/ProjectModal.vue'


const modules = [Autoplay, Pagination]

// État pour le modal
const showModal = ref(false)
const selectedProject = ref(null)

const projects = ref([
  {
    id: 1,
    title: "Centralis",
    shortDescription: "Conception et développement d'une application dédié à la gestion d'une centre commercial en utilisant MEAN.",
    image: "/img/Dashboard_boutique.png",
    images: [
      "/img/Dashboard_boutique.png",
      "/img/logo.png",
      "/img/login_Centralis.png",
      "/img/Sign_in_Centralis.png",
      "/img/event_boutique.png",
      "/img/Prévision_boutique.png"
    ],
    technologies: ["MongoDB", "Express", "Angular", "Node.js"],
    fullDescription: "Conception et développement d'une application dédié à la gestion d'une centre commercial en utilisant MEAN. Implémentation de divers fonctionnalités : authentification JWT, gestion de stocks des magasins, système de paiement des loyers, des produits, forum, notifications, dashboard des administrateurs, produits favoris, gestions des évenements.",
    features: [
      "Authentification JWT",
      "Gestion des stocks",
      "Système de panier d'achat",
      "Gestion des loyers",
      "Documentation complète de l'application",
      "Gestion des produits",
      "Forum de discussion",
      "Système de notifications",
      "Dashboard d'administration",
      "Produits favoris",
      "Gestion des événements",
      "Tests unitaires et d'intégration"
    ],
    github: "https://github.com/Projet-Centralis",
    demo: "https://m1p13mean-andry-mioty.vercel.app",
    date: "Mars 2026"
  },
  {
    id: 2,
    title: "NovecoNext",
    shortDescription: "Conception et développement d'une application de gestion de l'entreprise NOVECO.",
    image: "/img/MacBook MockupTapaka.png",
    images: [
      "/img/MacBook MockupTapaka.png",
      "/img/logo_madio.png",
      "/img/ChatBox_v2.png",
      "/img/login.png",
      "/img/Liste_chantier.png",
      "img/Planning_contrat.png",
      "img/journal_detail.png",

    ],
    technologies: ["Spring Boot", "Nuxt", "PostgreSQL", "Figma", "Illustrator"],
    fullDescription: "Conception et développement d'une application de gestion de l'entreprise NOVECO. Il consistait à mettre en place une application web-mobile pour gérer la totalité des activités de l'entreprise : gestion des chantiers (rapport journalier quantifié des travaux effectués, approvisions en matériaux), gestion des employés (contrats, paiements, congés), gestions des tâches (au bureau et sur chantier), statistiques de l'entreprise (chiffre d'affaire, dépenses, bénéfices, avancement des chantiers), module de notification, module de messagerie. Design : conception de l'interface utilisateur sur Figma en respectant la charte graphique de l'entreprise, création de maquettes interactives pour valider l'expérience utilisateur avant le développement.",
    features: [
      "Gestion des chantiers",
      "Gestion des employés",
      "Gestion des tâches",
      "Statistiques de l'entreprise",
      "Module de notification",
      "Module de messagerie",
      "Conception de l'interface utilisateur sur Figma",
      "Respect de la charte graphique de l'entreprise",
      "Création de maquettes interactives pour valider l'expérience utilisateur avant le développement",
      "Création du logo"
    ],
    github: "",
    demo: "",
    date: "Décembre 2025"
  },
  {
    id: 3,
    title: "Stellar",
    shortDescription: "Projet Académique : Conception et développement d'un site e-commerce de vente de VTT de la marque STELLAR.",
    image: "/img/stellar60-30.png",
    images: [
      "/img/stellar60-30.png",
      "/img/vertical-wall-poster-mockup.png",
      "/img/Flying_Leaflet.png",
      "/img/stellar-panneau6-3.png",
      "/img/Fichier 5stellar_2000px.png",
      "/img/stellar_page.png",
      "img/stellar_Land.png"
    ],
    technologies: ["React", "Php", "ERP: Dolibaar", "MySQL", "Adobe XD", "Illustrator"],
    fullDescription: "Côté frontend : création from scratch des interfaces utilisateur avec Vue.js tout en respectant la charte graphique de la marque. Côté backend : reprise de code de l'ERP Dolibaar, développement d'un module d'insertion de données multiples (autre que l'existant dans Dolibaar) pour alimenter les données du site, développement d'un module de produits favoris, export PDF des factures (selon le design). Design : conception du logo, des mockups, et affiches pour le lancement de la marque.",
    features: [
      "Architecture multi-tiers",
      "Reprise de code de l'ERP Idempiere",
      "Module d'insertion de données multiples",
      "Module de produits favoris",
      "Export PDF des factures",
      "Conception du logo de la marque",
      "Conception de mockups pour le site",
      "Conception d'affiches pour le lancement de la marque"
    ],
    github: "",
    demo: "",
    date: "Mai 2025"
  },
  {
    id: 4,
    title: "Tangente",
    shortDescription: "Création d'un logo",
    image: "img/texture_maillot.png",
    images: [
      "img/texture_maillot.png",
      "img/Tg.png",
      "img/TangenteFond_gris_2000px.png",
      "img/pull.png",
      "img/bottle.png",
      "img/towel.png",
      "img/cap.png",
      "img/nfc.png"
    ],
    technologies: ["Illustrator", "Photoshop", "Adobe Color"],
    fullDescription: "C'est une marque de produits dérivés du rugby abordables qui demandait de créer un logo afin de promouvoir leur ventes, visibilités.",
    features: [
     "Recherches dans le domaines cosmétiques",
      "Analyse des concurences",
      "Etablissement d'un socle identitaire",
      "Dénifition des moodboards",
      "Création du logo",
      "Création des visuels avec le logo"
    ],
    date: "Juin 2025"
  },
  {
    id: 5,
    title: "Alasoa",
    shortDescription: "Une nouvelle marque de produit cosmétique Malagasy",
    image: "img/panneau.png",
    images: [
      "img/Alasoa_mockup.png",
      "img/P1.jpg",
      "img/P2.jpg",
      "img/P3.jpg",
      "img/P4.jpg",
      "img/P5.jpg",
      "img/P45.jpg",
      "img/P6.jpg",
      "img/P7.jpg",
      "img/P8.jpg",
      "img/P9.jpg",
      "img/P10.jpg"
    ],
    technologies: ["Illustrator", "Photoshop", "Adobe Color"],
    fullDescription: "Alasoa est une marque profondément respectueuse de l'environnement, incarnant une philosophie écoresponsable qui valorise la richesse botanique malgache. Utilisant exclusivement des plantes locales sans additifs ni produits chimiques, Alasoa offre des produits 100 % naturels.Son identité repose sur l'authenticité et l'excellence, démontrant que luxe et respect de l'environnement peuvent coexister. Destinée principalement à une clientèle CSP+ (catégories socio-professionnelles supérieures), Alasoa cherche aussi à créer un lien de proximité avec ses consommateurs.Cette marque s'adresse à ceux qui recherchent la qualité et désirent soutenir les richesses naturelles et culturelles de Madagascar. En choisissant Alasoa, les consommateurs valorisent la biodiversité malgache tout en profitant de produits authentiques et premium. Alasoa se distingue par son identité forte et son engagement envers un avenir plus vert et respectueux de la nature.Le style graphique d'Alasoa est épuré, simple et raffiné, reflétant élégance et authenticité sans compromis. Les designs minimalistes, avec des couleurs douces et des lignes claires, mettent en avant la pureté des produits tout en créant une expérience visuelle harmonieuse. Cette identité visuelle soignée capture l'engagement écologique et l'authenticité de la marque.",
    features: [
      "Recherches dans le domaines cosmétiques",
      "Analyse des concurences",
      "Etablissement d'un socle identitaire",
      "Dénifition des moodboards",
      "Création du logo",
      "Création des visuels avec le logo"
    ],
    date: "Mars 2025"
  }
])

const viewProject = (id) => {
  const project = projects.value.find(p => p.id === id)
  if (project) {
    selectedProject.value = project
    showModal.value = true
  }
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
}
</script>

<style scoped>
.projects-swiper {
  padding-bottom: 3rem;
}

.project-slide-card {
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(50, 188, 174, 0.1);
  transition: all 0.3s ease;
}

.project-slide-card:hover {
  transform: translateY(-10px);
  border-color: rgba(50, 188, 174, 0.3);
  box-shadow: 0 10px 30px rgba(50, 188, 174, 0.1);
}

.project-image {
  position: relative;
  overflow: hidden;
}

/* Styles Swiper personnalisés */
:deep(.swiper-pagination-bullet) {
  background: #32bcae;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #32bcae;
  opacity: 1;
}

:deep(.swiper-pagination) {
  bottom: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>