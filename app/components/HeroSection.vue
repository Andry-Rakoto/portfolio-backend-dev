<!-- <template>
  <div class="text-center animate-fade-in">
    <div class="mb-8 animate-float">
      <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#32bcae] to-[#13514b] flex items-center justify-center shadow-2xl">
        <span class="text-5xl">👨‍💻</span>
      </div>
    </div>
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Andry Ny Aina Rakotonirina</span>
      <br />
      <span class="text-white">Développeur Web & UI/UX Designer</span>
    </h1>
    <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
      Création d'applications robustes, évolutives et performantes
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button @click="downloadCV" class="px-8 py-3 bg-gradient-to-r from-[#32bcae] to-[#13514b] rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#32bcae]/20">
        📄 Télécharger mon CV
      </button>
      <a href="#projets" class="px-8 py-3 border-2 border-[#32bcae] rounded-lg font-semibold transition-all duration-300 hover:bg-[#32bcae] hover:text-[#101324] hover:scale-105">
        Voir mes projets →
      </a>
    </div>
  </div>
</template>

<script setup>

import Icon from '~/components/Icon.vue'

const downloadCV = () => {
  // À remplacer par le lien réel de ton CV
  window.open('/cv.pdf', '_blank')
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style> -->

<template>
   <div class="text-center animate-fade-in">
    <!-- Photo de profil - taille agrandie -->
    <div class="mb-8 animate-float relative group">
      <div class="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full bg-gradient-to-r from-[#32bcae] to-[#13514b] p-1">
        <div class="w-full h-full rounded-full bg-[#101324] overflow-hidden">
          <img 
            :src="profileImage" 
            alt="Andry Ny Aina Rakotonirina" 
            class="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>

    <!-- Titre principal -->
    <div class="mb-6">
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
        <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
          Andry Ny Aina Rakotonirina
        </span>
      </h1>
      <div class="flex flex-wrap gap-3 justify-center items-center">
        <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#32bcae]/10 rounded-full border border-[#32bcae]/30">
          <span class="w-2 h-2 bg-[#32bcae] rounded-full animate-pulse"></span>
          <span class="text-[#32bcae] font-medium">Développeur Web</span>
        </span>
        <span class="text-gray-500 text-lg">|</span>
        <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#32bcae]/10 rounded-full border border-[#32bcae]/30">
          <span class="text-[#32bcae] font-medium">UI/UX Designer</span>
        </span>
      </div>
    </div>

    <!-- Tags des compétences sans contours, séparés par - -->
    <div class="max-w-2xl mx-auto mb-10">
      <div class="flex flex-wrap justify-center gap-x-3 gap-y-2 text-gray-400">
        <span>UI/UX Design</span>
        <span>-</span>
        <span>Conception d'application web</span>
        <span>-</span>
        <span>Développement Frontend & Backend</span>
        <span>-</span>
        <span>Graphic Design</span>
      </div>
    </div>

    <!-- Slogan personnel avec guillemets alignés -->
    <div class="mb-10 max-w-lg mx-auto">
      <p class="text-sm md:text-base text-gray-400 italic text-center">
        <span class="text-[#32bcae] text-xl align-top">"</span>
        Allier performance technique et expérience utilisateur pour créer des solutions qui font la différence
        <span class="text-[#32bcae] text-xl align-bottom">"</span>
      </p>
    </div>

    <!-- Boutons d'action -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
      <button @click="downloadCV" class="group px-8 py-3 bg-gradient-to-r from-[#32bcae] to-[#13514b] rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#32bcae]/20 flex items-center gap-2 justify-center">
        Télécharger mon CV
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </button>
      <a href="#projets" class="group px-8 py-3 border-2 border-[#32bcae] rounded-lg font-semibold transition-all duration-300 hover:bg-[#32bcae] hover:text-[#101324] hover:scale-105 flex items-center gap-2 justify-center">
        Voir mes projets
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>

    <!-- Trait gris en dessous des boutons -->
    <div class="max-w-2xl mx-auto">
      <div class="h-px bg-gray-700"></div>
    </div>
  </div>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

// Remplace par le chemin de ta photo
const profileImage = ref('/profil/profil.png')

const downloadCV = () => {
  window.open('/cv.pdf', '_blank')
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>