<template>

<div>
    <img src="@/assets/banner.jpg" class="w-full imgbanner" alt="User" style="margin: 0;"/>

</div>
  </template>
  
  <script>
  export default {
    name: 'BannerTop',
    data() {
      return {
      };
    },
    methods: {
    },
  };
  </script>
  
  <style>
.imgbanner{
    display: flex;
width: 100%;
height: 230px;
justify-content: flex-end;
align-items: center;
flex-shrink: 0;
object-fit: cover;

}  </style>
  