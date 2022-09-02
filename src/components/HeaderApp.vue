<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
      <B-container style="">
        <b-navbar-brand href="#">
          <ul class="list-title">
            <li class="letter">M</li>
            <li class="letter">O</li>
            <li class="letter">V</li>
            <li class="letter">I</li>
            <li class="letter">E</li>
            <li class="letter">S</li>
          </ul></b-navbar-brand
        >
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2 search-input"
            placeholder="Search"
            v-model="input"
          ></b-form-input>
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            @click="search(input)"
            >Search</b-button
          >
        </b-nav-form>
      </B-container>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "HeaderApp",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search(value) {
      this.$emit("onSearch", value);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #000000a3 !important;
  transition: 0.5s all;
  cursor: pointer;
}

.list-title {
  margin: 0;
  color: #fff;
  font-size: 25px;
  font-family: fantasy;
  font-weight: 700;
  list-style: none;
  display: flex;
  justify-content: center;
}
nav {
  margin: 0;
  padding: 0;
}
.letter {
  padding: 12px;
}

@keyframes borderColors {
  0% {
    border: 1px solid #8101f8;
    box-shadow: #8101f8 2px 0px 10px 2px;
  }
  15% {
    border: 1px solid #007cf7;
    box-shadow: #007cf7 2px 0px 10px 2px;
  }
  30% {
    border: 1px solid #ff0051;
    box-shadow: #ff0051 2px 0px 10px 2px;
  }
  45% {
    border: 1px solid #15a15b;
    box-shadow: #15a15b 2px 0px 10px 2px;
  }
  60% {
    border: 1px solid #d9ae20c7;
    box-shadow: #d9ae20c7 2px 0px 10px 2px;
  }
  75% {
    border: 1px solid #fa0707a9;
    box-shadow: #fa0707a9 2px 0px 10px 2px;
  }
  90% {
    border: 1px solid #76b3b5;
    box-shadow: #76b3b5 2px 0px 10px 2px;
  }
  100% {
    border: 1px solid #003143;
    box-shadow: #003143 2px 0px 10px 2px;
  }
}

.search-input:hover {
  animation: borderColors 10s linear infinite alternate-reverse;
}

@keyframes changeColors {
  0% {
    color: #8101f8;
  }
  15% {
    color: #007cf7;
  }
  30% {
    color: #ff0051;
  }
  45% {
    color: #15a15b;
  }
  60% {
    color: #d9ae20c7;
  }
  75% {
    color: #fa0707a9;
  }
  90% {
    color: #76b3b5;
  }
  100% {
    color: #003143;
  }
}

.letter::before {
  content: "";
  box-shadow: 0px 40px 27px 3px;
  top: -25%;
  width: 13px;
  height: 20px;
  display: flex;
  position: absolute;
}

.navbar:hover {
  background: #000000 !important;
}
.navbar:hover .letter:nth-child(1) {
  animation: changeColors 4s linear infinite alternate-reverse;
}
.navbar:hover .letter:nth-child(2) {
  animation: changeColors 4.3s ease-in-out infinite alternate-reverse;
}
.navbar:hover .letter:nth-child(3) {
  animation: changeColors 4.5s ease-out infinite alternate-reverse;
}
.navbar:hover .letter:nth-child(4) {
  animation: changeColors 4.7s ease-out infinite alternate-reverse;
}
.navbar:hover .letter:nth-child(5) {
  animation: changeColors 4.8s ease infinite alternate-reverse;
}
.navbar:hover .letter:nth-child(6) {
  animation: changeColors 5s ease infinite alternate-reverse;
}

@media (max-width: 767px) {
  .form-inline {
    justify-content: center;
  }
  .search-input {
    width: 60%;
  }
}
@media (max-width: 576px) {
  .form-inline {
    justify-content: space-evenly;
  }
}
@media (max-width: 525px) {
  .navbar-brand {
    margin: 0;
  }
  .list-title {
    padding: 0;
  }
  .navbar .container {
    display: flex;
    justify-content: center;
  }
}
</style>