<!-- <template>
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title">À propos de moi</h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 animate-slide-in-left">
        <h3 class="text-2xl font-semibold gradient-text">
          {{ jobTitle }}
        </h3>
        <p class="text-gray-300 leading-relaxed">
          {{ description }}
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:map-marker" class="text-primary" />
            <span>Paris, France</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:email" class="text-primary" />
            <span>contact@example.com</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 animate-fade-in">
        <div class="card text-center">
          <Icon name="mdi:code-tags" class="text-4xl text-primary mb-2" />
          <div class="text-2xl font-bold gradient-text">3+</div>
          <div class="text-sm text-gray-400">Années d'expérience</div>
        </div>
        <div class="card text-center">
          <Icon name="mdi:briefcase" class="text-4xl text-primary mb-2" />
          <div class="text-2xl font-bold gradient-text">20+</div>
          <div class="text-sm text-gray-400">Projets réalisés</div>
        </div>
        <div class="card text-center">
          <Icon name="mdi:school" class="text-4xl text-primary mb-2" />
          <div class="text-2xl font-bold gradient-text">Master</div>
          <div class="text-sm text-gray-400">Informatique</div>
        </div>
        <div class="card text-center">
          <Icon name="mdi:coffee" class="text-4xl text-primary mb-2" />
          <div class="text-2xl font-bold gradient-text">∞</div>
          <div class="text-sm text-gray-400">Café</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const jobTitle = ref("Développeur Backend & Fullstack")
const description = ref("Passionné par le développement backend et l'architecture des systèmes, je conçois des applications robustes et évolutives. Avec une expertise en Node.js, Python et bases de données, je crée des solutions performantes qui répondent aux besoins des entreprises modernes.")
</script> -->

<!-- <template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Profil</span>
    </h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 animate-slide-in-left">
        <h3 class="text-2xl md:text-3xl font-semibold">
          <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Andry Ny Aina Rakotonirina</span>
        </h3>
        <p class="text-xl text-[#32bcae] font-medium">Développeur web & UI/UX Designer</p>
        <p class="text-gray-300 leading-relaxed">
          Passionné par le <span class="text-[#32bcae]">développement web et le design</span>, je conçois des applications modernes 
          en alliant performance technique et expérience utilisateur.
          En parallèle, je réalise  <span class="text-[#32bcae]">des travaux de design graphique</span>, notamment la conception de logos, 
          de chartes graphiques et d’identités visuelles, afin d’assurer une cohérence forte entre le produit et son image.
        </p>
        <p class="text-gray-300 leading-relaxed">
          Fort de <span class="text-[#32bcae] font-semibold">3+ années d'expérience</span>, je maîtrise les architectures backend, 
          les API REST et les bases de données, tout en assurant <span class="text-[#32bcae]">une identité visuelle forte et un design de qualité</span> 
          à chaque projet.
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:map-marker" class="text-2xl text-[#32bcae]" />
            <span class="text-gray-300">Andoharanofotsy Antananarivo 102, Madagascar</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:email" class="text-2xl text-[#32bcae]" />
            <span class="text-gray-300">andrikelinay@gmail.com</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:cellphone" class="text-2xl text-[#32bcae]" />
            <span class="text-gray-300">+261349156352</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:calendar" class="text-2xl text-[#32bcae]" />
            <span class="text-gray-300">Disponible immédiatement</span>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 animate-fade-in">
        <div class="card text-center group">
          <Icon name="mdi:code-tags" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 transition-transform" />
          <div class="text-3xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">3+</div>
          <div class="text-sm text-gray-400">Années d'expérience</div>
        </div>
        <div class="card text-center group">
          <Icon name="mdi:briefcase" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 transition-transform" />
          <div class="text-3xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">7+</div>
          <div class="text-sm text-gray-400">Projets réalisés (confondus)</div>
        </div>
        <div class="card text-center group">
          <Icon name="mdi:school" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 transition-transform" />
          <div class="text-2xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Master 1</div>
          <div class="text-sm text-gray-400">Actuellement étudiant en Informatique</div>
        </div>
        <div class="card text-center group">
          <Icon name="mdi:certificate" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 transition-transform" />
          <div class="text-3xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Licence</div>
          <div class="text-sm text-gray-400">Licence en Graphic Design & Communication Digitale</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '~/components/Icon.vue'
</script>

<style scoped>
.card {
  @apply bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#32bcae]/10;
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out 0.2s both;
}
</style> -->

<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center animate-title">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Profil</span>
    </h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Colonne gauche -->
      <div class="space-y-6">
        <div class="animate-slide-in-left" style="animation-delay: 0.1s">
          <h3 class="text-2xl md:text-3xl font-semibold">
            <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Andry Ny Aina Rakotonirina</span>
          </h3>
          <p class="text-xl text-[#32bcae] font-medium mt-2">Développeur web & UI/UX Designer</p>
        </div>
        
        <div class="animate-fade-up" style="animation-delay: 0.3s">
          <p class="text-gray-300 leading-relaxed">
            Passionné par le <span class="text-[#32bcae]">développement web et le design</span>, je conçois des applications modernes 
            en alliant performance technique et expérience utilisateur.
            En parallèle, je réalise  <span class="text-[#32bcae]">des travaux de design graphique</span>, notamment la conception de logos, 
            de chartes graphiques et d'identités visuelles, afin d'assurer une cohérence forte entre le produit et son image.
          </p>
        </div>
        
        <div class="animate-fade-up" style="animation-delay: 0.5s">
          <p class="text-gray-300 leading-relaxed">
            Fort de <span class="text-[#32bcae] font-semibold">3+ années d'expérience</span>, je maîtrise les architectures backend, 
            les API REST et les bases de données, tout en assurant <span class="text-[#32bcae]">une identité visuelle forte et un design de qualité</span> 
            à chaque projet.
          </p>
        </div>
        
        <div class="animate-fade-up space-y-3" style="animation-delay: 0.7s">
          <div class="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
            <Icon name="mdi:map-marker" class="text-2xl text-[#32bcae] group-hover:scale-110 transition-transform" />
            <span class="text-gray-300">Andoharanofotsy Antananarivo 102, Madagascar</span>
          </div>
          <div class="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
            <Icon name="mdi:email" class="text-2xl text-[#32bcae] group-hover:scale-110 transition-transform" />
            <span class="text-gray-300">andrikelinay@gmail.com</span>
          </div>
          <div class="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
            <Icon name="mdi:cellphone" class="text-2xl text-[#32bcae] group-hover:scale-110 transition-transform" />
            <span class="text-gray-300">+261349156352</span>
          </div>
          <div class="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
            <Icon name="mdi:calendar" class="text-2xl text-[#32bcae] group-hover:scale-110 transition-transform" />
            <span class="text-gray-300">Disponible immédiatement</span>
          </div>
        </div>
      </div>
      
      <!-- Colonne droite - Cartes avec animations -->
      <div class="grid grid-cols-2 gap-4">
        <div class="card text-center group animate-scale-in" style="animation-delay: 0.2s">
          <Icon name="mdi:code-tags" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          <div class="text-3xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">3+</div>
          <div class="text-sm text-gray-400">Années d'expérience</div>
        </div>
        
        <div class="card text-center group animate-scale-in" style="animation-delay: 0.3s">
          <Icon name="mdi:briefcase" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          <div class="text-3xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">7+</div>
          <div class="text-sm text-gray-400">Projets réalisés (confondus)</div>
        </div>
        
        <div class="card text-center group animate-scale-in" style="animation-delay: 0.4s">
          <Icon name="mdi:school" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          <div class="text-2xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Master 1</div>
          <div class="text-sm text-gray-400">Actuellement étudiant en Informatique</div>
        </div>
        
        <div class="card text-center group animate-scale-in" style="animation-delay: 0.5s">
          <Icon name="mdi:certificate" class="text-5xl text-[#32bcae] mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          <div class="text-3xl font-bold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Licence</div>
          <div class="text-sm text-gray-400">Licence en Graphic Design & Communication Digitale</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '~/components/Icon.vue'
</script>

<style scoped>
.card {
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(50, 188, 174, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  animation: scale-in 0.5s ease-out forwards;
}

.card:hover {
  border-color: rgba(50, 188, 174, 0.3);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(50, 188, 174, 0.15);
}

/* Animation du titre */
@keyframes title-glide {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-title {
  animation: title-glide 0.6s ease-out forwards;
}

/* Animation slide-in-left */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  opacity: 0;
  animation: slide-in-left 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
}

/* Animation fade-up */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  opacity: 0;
  animation: fade-up 0.6s ease-out forwards;
}

/* Animation scale-in */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  opacity: 0;
  animation: scale-in 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
}

/* Animation pour les icônes de contact */
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-slide-in-left,
  .animate-fade-up,
  .animate-scale-in {
    animation-duration: 0.4s;
  }
}
</style>