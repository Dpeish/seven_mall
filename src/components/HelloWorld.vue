<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>APP Template</h2>
    <div>
      <span class="svg-container">
        <svg-icon icon-class="user" />
      </span>
      <span class="svg-container">
        <svg-icon icon-class="password" />
      </span>
      <span class="svg-container">
        <svg-icon icon-class="eyeopen" />
      </span>
      <span class="svg-container">
        <svg-icon icon-class="eyeclose" />
      </span>
    </div>

    <div class="box">
      这是一个盒子
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/index.scss';
h1, h2 {
  width: 2rem;
  background: #eee;
  font-weight: normal;
  @include border-bottom(red);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.svg-container {
  color: #9ba098;
  vertical-align: middle;
  width: 40px;
  display: inline-block;
  font-size: 20px;
  padding-left: 13px;
}
.img {
  display: block;
  width: 100px;
  height: 80px;
}
.box {
  margin: 10px auto;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: #eee;
  @include border-left(red);
}
</style>
