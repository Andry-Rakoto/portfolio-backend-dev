<template>
  <nav class="fixed top-0 w-full bg-primary-dark/90 backdrop-blur-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-2xl font-bold gradient-text">Portfolio</a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a v-for="item in menuItems" :key="item.name" 
               :href="item.href" 
               class="text-gray-300 hover:text-primary transition-colors duration-300">
              {{ item.name }}
            </a>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-300 hover:text-primary focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden animate-slide-up">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-dark/95 backdrop-blur-md">
        <a v-for="item in menuItems" :key="item.name" 
           :href="item.href" 
           @click="isOpen = false"
           class="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const menuItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Profil', href: '#apropos' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Projets', href: '#projets' }
]
</script>