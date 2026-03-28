<!-- <template>
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title">Récentes réalisations</h2>
    <div class="space-y-8">
      <div v-for="project in projects" :key="project.id" class="card animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 class="text-xl font-semibold gradient-text">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm">{{ project.date }}</p>
          </div>
        </div>
        <p class="text-gray-300 mb-4">{{ project.description }}</p>
        <div class="flex flex-wrap gap-3">
          <span v-for="tech in project.technologies" :key="tech" 
                class="px-3 py-1 bg-primary-dark rounded-full text-sm text-primary border border-primary">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    title: "API RESTful pour plateforme e-commerce",
    date: "Décembre 2024",
    description: "Développement d'une API RESTful complète avec Node.js, Express et PostgreSQL. Implémentation de l'authentification JWT, gestion des stocks, et intégration de paiement Stripe.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe"]
  },
  {
    id: 2,
    title: "Application de gestion de tâches en temps réel",
    date: "Octobre 2024",
    description: "Création d'une application collaborative avec WebSockets pour la mise à jour en temps réel. Backend avec Python FastAPI et Redis pour la gestion des sessions.",
    technologies: ["Python", "FastAPI", "WebSocket", "Redis", "MongoDB"]
  },
  {
    id: 3,
    title: "Microservices pour système de notification",
    date: "Août 2024",
    description: "Architecture microservices avec Docker et Kubernetes. Gestion des notifications push, email et SMS avec queue système RabbitMQ.",
    technologies: ["Docker", "Kubernetes", "RabbitMQ", "Node.js", "MongoDB"]
  }
])
</script> -->

<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Récentes réalisations</span>
    </h2>
    <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Découvrez mes derniers projets et réalisations professionnelles
    </p>
    
    <div class="space-y-8">
      <div v-for="(project, index) in projects" :key="project.id" 
           class="project-card rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#32bcae]/10"
           :class="{ 'animate-slide-up': true }"
           :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <Icon :name="project.icon" class="text-3xl text-[#32bcae]" />
              <h3 class="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
                {{ project.title }}
              </h3>
            </div>
            <p class="text-gray-400 text-sm flex items-center gap-2">
              <Icon name="mdi:calendar" class="text-sm" />
              {{ project.date }}
            </p>
          </div>
          <div class="mt-2 md:mt-0">
            <span class="px-3 py-1 bg-[#32bcae]/10 rounded-full text-sm text-[#32bcae] border border-[#32bcae]/30">
              {{ project.category }}
            </span>
          </div>
        </div>
        <p class="text-gray-300 mb-4 leading-relaxed">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in project.technologies" :key="tech" 
                class="tech-badge px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '~/components/Icon.vue'
const projects = ref([
  {
    id: 1,
    title: "Centralis",
    date: "Mars 2026",
    category: "Fullstack - Design",
    icon: "mdi:cart",
    description: "Conception et développement d'une application dédié à la gestion d'une centre commercial en utiliseant MEAN. Implémentation de divers fonctionnalités : authentification JWT, gestion de stocks des magasins, système de paiement des loyers, des produits, forum, notifications, dashboard des administrateurs, produits favoris, gestions des évenements",
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
  },
  {
    id: 2,
    title: "NovecoNext",
    date: "Décembre 2025",
    category: "Fullstack - Design",
    icon: "mdi:application",
    description: "Conception et développement d'une application de gestion de l'entreprise NOVECO. Il consistait à mettre en place une application web-mobile pour gérer la totalité des activités de l'entreprise : gestion des chantiers (rapport journalier quantifié des travaux effectués, approvisions en matériaux), gestion des employers (contrats, paiements, congés), gestions des tâches (au bureau et sur chantier), statistiques de l'entreprise (chiffre d'affaire, dépenses, bénéfices, avancement des chantiers), module de notification, module de messagerie. Design : conception de l'interface utilisateur sur figma en respectant la charte graphique de l'entreprise, création de maquettes interactives pour valider l'expérience utilisateur avant le développement.", 
    technologies: ["Spring Boot", "Nuxt", "Postgresql", "Figma"]
  },
  { 
    id: 3,
    title: "Stellar",
    date: "juin 2025",
    category: "Frontend - Reprise de code - Design",
    icon: "mdi:cart",
    description: "Conception et développement d'un site e-commerce de vente de VTT de la marque STELLAR. Coté frontend : création from scratch des interfaces utilisateur avec Vue Js tout en respectant la charte graphique de la marque, coté backend : reprise de code de l'ERP : idempiere, développement d'un module d'insertion de données multiples (autre que l'éxistant dans idempiere) pour alimenter les données du site, développement d'un module de produits favoris, export pdf des factures (selon le design). Design: conception du logo, des mockups, et affiches pour le lancement de la marque. ",
    technologies: ["Vue Js", "Java", "ERP: Idempiere", "Postgresql", "Xd", "Illustrator"]
  }
])
</script>

<style scoped>
.project-card {
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(50, 188, 174, 0.1);
}

.project-card:hover {
  border-color: rgba(50, 188, 174, 0.3);
}

.tech-badge {
  background: rgba(50, 188, 174, 0.1);
  color: #32bcae;
  border: 1px solid rgba(50, 188, 174, 0.2);
}

.tech-badge:hover {
  background: rgba(50, 188, 174, 0.2);
  border-color: #32bcae;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out forwards;
  opacity: 0;
}
</style>