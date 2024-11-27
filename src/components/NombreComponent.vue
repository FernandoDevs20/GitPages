<script setup></script>

<template>
  <div
    class="rounded-3xl overflow-hidden shadow-lg border border-gray-300 m-2 h-fit transition-all p-5 flex flex-col justify-center grow"
  >
  <div class=" w-fit m-auto">
    <h1
        class="text-4xl p-5 text-center typewriter-text w-fit m-auto"
    >Fernando Rodriguez Gonzalez
    </h1>
    <h2
        class="text-2xl p-5 text-center"
    >
        Ingeniero en sistemas computacionales
    </h2>

  </div>
    
  </div>
</template>

<style>
  .typewriter-text {
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    animation: typing 4s steps(30), blink-caret 0.5s step-end infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    50% {
      border-color: transparent;
    }
  }
</style>
