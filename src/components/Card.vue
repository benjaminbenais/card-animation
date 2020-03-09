<template>
  <div class="card-container">
    <img
      class="card"
      @mousemove="handleMouseOver"
      @mouseleave="handleMouseLeave"
      :style="style"
      src="../assets/card.png"
    />
  </div>
</template>

<script>
import rotateElement from "../helpers/rotateElement";

export default {
  name: "HelloWorld",
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    handleMouseOver(e) {
      // Mouse position relative to the card
      const { offsetX, offsetY } = e;
      // Card measurements
      const { clientWidth, clientHeight } = e.target;

      // Get rotation values
      const { x, y } = rotateElement({
        offsetX,
        offsetY,
        width: clientWidth,
        height: clientHeight
      });

      // Set rotation values
      this.x = x;
      this.y = y;
    },
    handleMouseLeave() {
      this.x = 0;
      this.y = 0;
    }
  },
  computed: {
    style() {
      return {
        transform: `rotateX(${this.x}deg) rotateY(${this.y}deg)`
      };
    }
  }
};
</script>

<style scoped>
.card-container {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  transition: all 200ms ease-in-out;
}

.card-container:hover {
  transform: scale(1.05);
}
.card {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
