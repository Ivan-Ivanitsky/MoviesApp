<template>
  <div class="pagination">
    <ul class="pagination-items">
      <div class="arrow prew" @click="onPrew()">&#10094;</div>
      <div class="pagination-items-wrapper">
        <li
          :class="{ active: btn === currentPage }"
          class="pagination-item-btn"
          v-for="(btn, key) in button"
          :key="key"
          @click="onChangePage(btn)"
        >
          {{ btn }}
        </li>
      </div>
      <div class="arrow next" @click="onNext()">&#10095;</div>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      button: Math.round(this.moviesLimit / 5),
      count: 1,
      endCount: null,
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    moviesPerPages: {
      type: Number,
      default: 1,
    },
    moviesLimit: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onChangePage(page) {
      this.$emit("onChangePage", page);
    },
    onPrew() {
      const buttonLength = Math.round(this.moviesLimit / 5);
      const start = buttonLength * (this.count - 1) - buttonLength;
      const end = start + buttonLength;
      let btnPrewArray = [];
      for (let i = 0; i < this.endCount; i++) {
        btnPrewArray[i] = i + 1;
      }
      if (start < 0) {
        console.log(this.count);
        return;
      } else {
        btnPrewArray = btnPrewArray.slice(start, end);
        Object.values(btnPrewArray).map(() => {
          this.button = btnPrewArray;
        });
        this.count--;
      }
    },
    onNext() {
      if (this.button >= this.moviesLimit) {
        return;
      } else {
        const buttonLength = Math.round(this.moviesLimit / 5);
        const start = buttonLength * (this.count + 1) - buttonLength;
        const end = buttonLength + start;
        let btnNextArray = [];

        for (let i = 0; i < this.moviesLimit; i++) {
          btnNextArray[i] = i + 1;
        }
        btnNextArray = btnNextArray.slice(start, end);
        Object.values(btnNextArray).map((el) => {
          this.endCount = el;
          this.button = btnNextArray;
        });
        this.count++;
      }
    },
  },
};
</script>
<style>
.pagination-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
}

.pagination-items-wrapper {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 30px 5px;
  border: solid 1px #dadada8f;
  padding: 5px;
  border-radius: 5px;
  background: #00000091;
  max-width: 200px;
  overflow: hidden;
}
.pagination-item-btn {
  border: solid 0.5px #fff;
  border-radius: 5px;
  width: 30px;
  text-align: center;
  cursor: pointer;
  margin: 5px;
  font-size: 15px;
  color: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: all 0.2s ease-in-out;
}
.pagination-item-btn:hover {
  color: #000;
  background: #fff;
  transform: scale(1.2);
}
.active {
  color: #000;
  background: #fff;
  /* transform: scale(1.2); */
}
.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: solid 1px #e9e3e391;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  border-radius: 10px;
  transition: 0.3s all;
  cursor: pointer;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.563);
}
</style>
