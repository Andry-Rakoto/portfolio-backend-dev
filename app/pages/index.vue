<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section id="accueil" class="min-h-screen flex items-center justify-center pt-16">
      <HeroSection />
    </section>
    
    <!-- À propos Section -->
    <section id="apropos" class="bg-gray-900/30">
      <AboutSection />
    </section>
    
    <!-- Réalisations Section -->
    <section id="realisations">
      <ProjectSection />
    </section>
    
    <!-- Compétences Section -->
    <section id="competences" class="bg-gray-900/30">
      <SkillsSection />
    </section>
    
    <!-- Projets Carousel Section -->
    <section id="projets">
      <ProjectsCarousel />
    </section>
  </div>
</template>

<script setup>
// Nuxt fait ça automatiquement, tu n'as PAS besoin de l'écrire
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ProjectSection from '~/components/ProjectSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import ProjectsCarousel from '~/components/ProjectsCarousel.vue'
</script>
