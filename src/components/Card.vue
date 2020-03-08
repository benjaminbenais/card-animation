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
  name: 'HelloWorld',
  data() {
    return {
      x: 0,
      y: 0,
      scale: 1
    };
  },
  methods: {
    handleMouseOver(e) {
      // Mouse position relative to the card
      const { offsetX, offsetY } = e;
      // Card measurements
      const cardHeight = e.target.clientHeight;
      const cardWidth = e.target.clientWidth;
      // Half measurements
      const middleY = cardHeight / 2;
      const middleX = cardWidth / 2;

      // Example for offsetY < middleY (top half of the card):
      // `a` is the position of the mouse relative to top half the card, in percentage
      // If the mouse is at the
      // top of the card, `a` = 0;
      // middle of the card, `a` = 100;

      // The value of `rotate` is between 10 and -10
      // So we divide a by 10, and store the value in `b`
      // In this case, we want to invert the percentage:
      // The mouse at the top half gives us 10 and the bottom 0

      this.scale = 1.07;

      // TOP
      if (offsetY < middleY) {
        const a = (offsetY * 100) / middleY;
        const b = a / 10;
        this.x = b - 10;
      }

      // BOTTOM
      if (offsetY > middleY) {
        const a = (offsetY * 100) / middleY;
        const b = a / 10;
        this.x = b - 10;
      }

      // LEFT
      if (offsetX < middleX) {
        const a = (offsetX * 100) / middleX;
        const b = a / 10;
        this.y = 10 - b;
      }

      // RIGHT
      if (offsetX > middleX) {
        const a = (offsetX * 100) / middleX;
        const b = (a / 10) * -1;
        this.y = b + 10;
      }
    },
    handleMouseLeave() {
      this.x = 0;
      this.y = 0;
      this.scale = 1;
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
