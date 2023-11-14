<template>
 

 <router-view></router-view>

</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

:root {
    --color-primary: #1A237E;
    --color-secundary: #DE1C7D;
    --color-green: #8BC34A;
    --color-gray-1: #E8EAF6;
    --color-yellow-1: #FFD54F;

  }
  

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
  .iconnav{
    color:white!Important;
    padding-left: 25px!important;
  }
  .color-white{
    color:white!Important;
  }
  .nav-link
  {
    color:white!Important;
    font-weight:500;
  }
  .btn-primary-1{
    background-color: var(--color-secundary);
    color:white;
  }

#app {
  font-family: inter; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}
</style>
