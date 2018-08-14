import { Motion } from "vue-motion";

let globaltaskIndex = 1;

export default {
  components: { Motion },
  methods: {
    handelMouseDown(e) {
      window.addEventListener("mouseup", this.handelMouseUp);
      window.addEventListener("mousemove", this.handleMouseMove);
      this.isDragging = true;
      this.zindex = globaltaskIndex++;
      this.initalIndex = this.index;
      this.startPositonX = e.pageX;
      this.startPositionY = e.pageY;
      this.updateActiveXY(e);
      this.$emit("mousedown", {
        id: this.id
      });
    },
    handelMouseUp(e) {
      window.removeEventListener("mouseup", this.handelMouseUp);
      window.removeEventListener("mousemove", this.handleMouseMove);
      this.updateActiveXY(e);
      this.isDragging = false;
      this.$emit("mouseup", {
        id: this.id
      });
      setTimeout(() => {

      }, 0);
    },
    updateActiveXY(e) {
      this.y = this.initalIndex * 55 + (e.pageY - this.startPositionY);
      this.x = 0;
    },
    handleMouseMove(e) {
      this.updateActiveXY(e);
      this.$emit("move", {
        id: this.id,
        x: e.pageX,
        y: e.pageY,
        translateX: 0,
        translateY: this.initalIndex * 55 + (e.pageY - this.startPositionY),
      });
    },
  },
  data() {
    return {
      startPositonX: 0,
      startPositionY: 0,
      initalIndex: 0,
      isDragging: false,
      zindex:0,
    }
  },
  props: {
    editable: {
      default: false
    },
    id: {
      default: 0
    },
    index: {
      default: 0
    },
    title: {
      default: "a task"
    },
    description: {
      default: "a task description"
    },
    animation: {
      require: true
    }
  }
};