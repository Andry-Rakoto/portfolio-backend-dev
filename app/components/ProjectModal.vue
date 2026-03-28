<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="close"></div>
    
    <!-- Modal content -->
    <div class="relative bg-[#101324] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-slide-up">
      <!-- Bouton fermeture -->
      <button @click="close" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
        <span class="text-2xl text-white">✕</span>
      </button>
      
      <div v-if="project">
        <!-- Image du projet -->
        <div class="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#101324] to-transparent"></div>
        </div>
        
        <!-- Contenu -->
        <div class="p-6 md:p-8">
          <!-- Titre et date -->
          <div class="mb-6">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
              {{ project.title }}
            </h2>
            <p class="text-gray-400 flex items-center gap-2">
              <span>📅</span> {{ project.date }}
            </p>
          </div>
          
          <!-- Description complète -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Description</h3>
            <p class="text-gray-300 leading-relaxed">{{ project.fullDescription }}</p>
          </div>
          
          <!-- Fonctionnalités -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Fonctionnalités principales</h3>
            <ul class="grid md:grid-cols-2 gap-2">
              <li v-for="feature in project.features" :key="feature" class="flex items-center gap-2 text-gray-300">
                <span class="text-[#32bcae]">✓</span> {{ feature }}
              </li>
            </ul>
          </div>
          
          <!-- Technologies -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Technologies utilisées</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech" 
                    class="px-3 py-1 bg-[#32bcae]/10 rounded-full text-sm text-[#32bcae] border border-[#32bcae]/30 hover:scale-105 transition-transform">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Liens -->
          <div class="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
            <a :href="project.github" target="_blank" 
               class="flex items-center gap-2 px-6 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <span class="text-xl">💻</span> Code source
            </a>
            <a :href="project.demo" target="_blank" 
               class="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300">
              <span class="text-xl">🚀</span> Voir la démo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// Empêcher le scroll du body quand le modal est ouvert
watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
@keyframes modal-slide-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-modal-slide-up {
  animation: modal-slide-up 0.3s ease-out;
}
</style>    