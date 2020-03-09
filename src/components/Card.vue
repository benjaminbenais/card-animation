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
      const cardHeight = e.target.clientHeight;
      const cardWidth = e.target.clientWidth;

      // Rotation values
      const rotateX = this.getRotateValue(offsetY, cardHeight);
      const rotateY = this.getRotateValue(offsetX, cardWidth);

      this.x = rotateX;
      this.y = rotateY;
    },
    getRotateValue(offset, length) {
      const middle = length / 2;
      return (offset * 100) / middle / 10 - 10;
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
