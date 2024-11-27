<script setup>
import {onBeforeUnmount, onMounted} from "vue";

function handleCloseModal() {
  document.body.classList.remove("overflow-hidden");
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
    :class="[
      'p-0 bg-inherit overscroll-contain w-full  ',
      isMobile ? ' h-full' : 'h-fit'
    ]"
    popover
    id="modalContactus"
  >
    <div
      :class="[
        'bg-blue-950 relative overflow-hidden    flex flex-col px-6 my-auto mx-auto',
        isMobile ? 'w-full h-full' : 'w-[30rem] rounded-lg max-h-[800px] h-dvh'
      ]"
    >
      
      
    </div>
  </div>
</template>

<style scoped>
  [popover]::backdrop {
    background: #000a;
    backdrop-filter: blur(2px);
  }
</style>