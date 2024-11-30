<script setup>
import { useGlobalStore } from "../../stores/global";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeUnmount } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const store = useGlobalStore();
const { isMobile } = storeToRefs(store);

function handleCloseModal() {
  const modal = document.getElementById("songModal");
  if (modal) {
    modal.togglePopover();
    document.body.classList.remove("overflow-hidden");
  }
}

function handleInnerClick(event) {
  event.stopPropagation();
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    handleCloseModal();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div
    id="songModal"
    class="p-0 bg-inherit overscroll-contain w-full h-full"
    popover
    @click="handleCloseModal"
  >
    <div
      :class="[
        'relative top-1/2 transform -translate-y-1/2 overflow-hidden flex flex-col m-auto bg-white backdrop-blur-sm bg-white/50',
        isMobile ? 'w-full h-full' : 'w-[30rem] rounded-lg max-h-[800px] h-dvh',
      ]"
      @click="handleInnerClick"
    >
      <!-- Contenedor de la imagen -->
      <div
        class="relative rounded-xl overflow-hidden max-w-[75%] h-[250px] shadow-lg shadow-green-950/50 mx-auto mt-20"
      >
        <img
          :src="image.src"
          alt="Song Image"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Contenedor del texto -->
      <div class="w-[75%] flex flex-col mx-auto text-start gap-2 mt-4">
        <span class="font-bold text-3xl">{{ title }}</span>
        <span>{{ group }}</span>
        <div class="flex flex-row gap-2 items-center justify-center">
          <span class="material-symbols-outlined text-green-950/70 text-7xl">
            skip_previous
          </span>
          <div
            class="bg-gradient-to-r from-green-950/70 to-green-800/70 rounded-full aspect-square flex items-center justify-center w-[75px]"
          >
            <span class="material-symbols-outlined text-white text-5xl">
              play_arrow
            </span>
          </div>

          <span class="material-symbols-outlined text-green-950/70 text-7xl">
            skip_next
          </span>
        </div>
      </div>

      <button
        class="absolute top-2 right-2 text-white flex align-baseline"
        @click="handleCloseModal"
      >
        <span class="material-symbols-outlined text-3xl">close</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
[popover]::backdrop {
  background: #000a;
  backdrop-filter: blur(2px);
}
</style>
