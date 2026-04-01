<!-- <template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    
    <div class="relative bg-[#101324] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-slide-up">
      <button @click="close" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
        <span class="text-2xl text-white">✕</span>
      </button>
      
      <div v-if="project">
       
        <div class="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#101324] to-transparent"></div>
        </div>
        
        
        <div class="p-6 md:p-8">
          
          <div class="mb-6">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
              {{ project.title }}
            </h2>
            <p class="text-gray-400 flex items-center gap-2">
              <span>📅</span> {{ project.date }}
            </p>
          </div>
          
          
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Description</h3>
            <p class="text-gray-300 leading-relaxed">{{ project.fullDescription }}</p>
          </div>
          
          
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Fonctionnalités principales</h3>
            <ul class="grid md:grid-cols-2 gap-2">
              <li v-for="feature in project.features" :key="feature" class="flex items-center gap-2 text-gray-300">
                <span class="text-[#32bcae]">✓</span> {{ feature }}
              </li>
            </ul>
          </div>
          
          
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Technologies utilisées</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech" 
                    class="px-3 py-1 bg-[#32bcae]/10 rounded-full text-sm text-[#32bcae] border border-[#32bcae]/30 hover:scale-105 transition-transform">
                {{ tech }}
              </span>
            </div>
          </div>
          
         
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
</style>     -->

<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="close"></div>
    
    <!-- Modal content -->
    <div class="relative bg-[#101324] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-slide-up">
      <!-- Bouton fermeture -->
      <button @click="close" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
        <Icon name="mdi:close" class="text-2xl text-white" />
      </button>
      
      <div v-if="project">
        <!-- Galerie d'images du projet -->
        <div class="relative bg-gray-900/50">
          <!-- Conteneur d'image avec gestion adaptative -->
          <div class="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] max-h-[70vh] overflow-hidden">
            <!-- Image principale avec object-contain pour garder les proportions -->
            <img 
              :src="currentImage" 
              :alt="project.title" 
              class="w-full h-full object-contain max-h-[70vh]"
              :class="{ 'cursor-zoom-in': isZoomable }"
              @click="toggleZoom"
            />
            
            <!-- Dégradé en bas pour la transition -->
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101324] to-transparent pointer-events-none"></div>
            
            <!-- Badge d'information sur l'image -->
            <div v-if="project.images && project.images.length > 1" class="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
              {{ currentImageIndex + 1 }} / {{ project.images.length }}
            </div>
          </div>
          
          <!-- Boutons de navigation pour la galerie -->
          <div v-if="project.images && project.images.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <button 
              v-for="(image, index) in project.images" 
              :key="index"
              @click="currentImageIndex = index"
              class="transition-all duration-300"
              :class="currentImageIndex === index ? 'w-6 h-2 bg-[#32bcae] rounded-full' : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'"
            ></button>
          </div>
          
          <!-- Flèches de navigation -->
          <div v-if="project.images && project.images.length > 1" class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <button 
              @click="prevImage"
              class="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Icon name="mdi:chevron-left" class="text-2xl text-white" />
            </button>
            <button 
              @click="nextImage"
              class="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Icon name="mdi:chevron-right" class="text-2xl text-white" />
            </button>
          </div>
        </div>
        
        <!-- Miniatures -->
        <div v-if="project.images && project.images.length > 1" class="flex gap-2 p-4 overflow-x-auto custom-scrollbar bg-gray-900/30">
          <div 
            v-for="(image, index) in project.images" 
            :key="index"
            @click="currentImageIndex = index"
            class="cursor-pointer flex-shrink-0 transition-all duration-300 hover:scale-105 relative"
            :class="currentImageIndex === index ? 'ring-2 ring-[#32bcae] rounded-lg' : 'opacity-70 hover:opacity-100'"
          >
            <img 
              :src="image" 
              :alt="`${project.title} - image ${index + 1}`" 
              class="w-20 h-16 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <!-- Contenu -->
        <div class="p-6 md:p-8">
          <!-- Titre et date -->
          <div class="mb-6">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
              {{ project.title }}
            </h2>
            <p class="text-gray-400 flex items-center gap-2">
              <Icon name="mdi:calendar" class="text-lg text-[#32bcae]" />
              {{ project.date }}
            </p>
          </div>
          
          <!-- Description complète -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Description</h3>
            <p class="text-gray-300 leading-relaxed whitespace-pre-line">{{ project.fullDescription }}</p>
          </div>
          
          <!-- Fonctionnalités -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3">Fonctionnalités principales</h3>
            <ul class="grid md:grid-cols-2 gap-2">
              <li v-for="feature in project.features" :key="feature" class="flex items-center gap-2 text-gray-300">
                <Icon name="mdi:check-circle" class="text-[#32bcae] text-lg flex-shrink-0" />
                <span class="text-sm">{{ feature }}</span>
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
          
          <!-- Liens - affichés seulement si disponibles -->
          <div v-if="project.github || project.demo" class="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
            <a v-if="project.github" :href="project.github" target="_blank" 
               class="flex items-center gap-2 px-6 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <Icon name="mdi:github" class="text-xl" />
              Code source
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" 
               class="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#32bcae] to-[#13514b] rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300">
              <Icon name="mdi:open-in-new" class="text-xl" />
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal de zoom (optionnel) -->
    <div v-if="isZoomed" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out" @click="toggleZoom">
      <img 
        :src="currentImage" 
        :alt="project?.title" 
        class="max-w-[95vw] max-h-[95vh] object-contain animate-zoom-in"
      />
      <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all duration-300">
        <Icon name="mdi:close" class="text-2xl text-white" />
      </button>
    </div>
  </div>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

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

const currentImageIndex = ref(0)
const isZoomed = ref(false)

const currentImage = computed(() => {
  if (props.project && props.project.images && props.project.images.length > 0) {
    return props.project.images[currentImageIndex.value]
  }
  return props.project?.image || ''
})

const isZoomable = computed(() => {
  return currentImage.value && currentImage.value.length > 0
})

const prevImage = () => {
  if (props.project && props.project.images) {
    currentImageIndex.value = (currentImageIndex.value - 1 + props.project.images.length) % props.project.images.length
  }
}

const nextImage = () => {
  if (props.project && props.project.images) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.project.images.length
  }
}

const toggleZoom = () => {
  if (isZoomable.value) {
    isZoomed.value = !isZoomed.value
    if (isZoomed.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = props.show ? 'hidden' : 'auto'
    }
  }
}

const close = () => {
  emit('close')
  currentImageIndex.value = 0
  isZoomed.value = false
}

// Empêcher le scroll du body quand le modal est ouvert
watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    currentImageIndex.value = 0
  } else {
    document.body.style.overflow = 'auto'
    isZoomed.value = false
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

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-modal-slide-up {
  animation: modal-slide-up 0.3s ease-out;
}

.animate-zoom-in {
  animation: zoom-in 0.2s ease-out;
}

.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(50, 188, 174, 0.1);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #32bcae;
  border-radius: 4px;
}

/* Style pour le conteneur d'image */
.fixed.inset-0 {
  cursor: pointer;
}
</style>