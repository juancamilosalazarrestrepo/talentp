<template>
    <div>
      <h2 class="sectitle">Publicadas recientemente</h2>
  


      
      <!-- Use carousel component here -->
      <carousel :items-to-show="3">
        <slide v-for="item in data" :key="item.id">
          <div style="
    border-radius: 10px;
    border: 1px solid  #E8EAF6;
    background: #FFF;
">



            <img :src="item.image" alt="Imagen" class="carrimg">
            <!-- Use a computed property to truncate the description -->

            <div class="row" style="background-color: rgb(250, 250, 250);  font-size: 12px;  padding: 5px 0px;
    margin: 0px 0;">


<div class="col-4">
Experticia
</div>

<div class="col-6">
<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
</div>


<div class="col-2 " style="
color: var(--color-secundary);
">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8C19 9.65625 17.6563 11 16 11C15.0938 11 14.2813 10.625 13.7188 9.96875L10.9063 11.375C10.9688 11.5938 11 11.8125 11 12C11 12.2188 10.9688 12.4375 10.9063 12.6562L13.7188 14.0312C14.2813 13.4062 15.0938 13 16 13C17.6563 13 19 14.3438 19 16C19 17.6562 17.6563 19 16 19C14.3438 19 13 17.6562 13 16C13 15.8125 13 15.5938 13.0625 15.375L10.25 13.9688C9.68753 14.625 8.87503 15 8.00003 15C6.34378 15 5.00003 13.6562 5.00003 12C5.00003 10.3438 6.34378 9 8.00003 9C8.87503 9 9.68753 9.40625 10.25 10.0312L13.0625 8.65625C13 8.4375 13 8.21875 13 8C13 6.34375 14.3438 5 16 5C17.6563 5 19 6.34375 19 8ZM8.00003 13.5C8.53128 13.5 9.00003 13.2188 9.28128 12.75C9.56253 12.3125 9.56253 11.7188 9.28128 11.25C9.00003 10.8125 8.53128 10.5 8.00003 10.5C7.43753 10.5 6.96878 10.8125 6.68753 11.25C6.40628 11.7188 6.40628 12.3125 6.68753 12.75C6.96878 13.2188 7.43753 13.5 8.00003 13.5ZM17.5 8C17.5 7.46875 17.1875 7 16.75 6.71875C16.2813 6.4375 15.6875 6.4375 15.25 6.71875C14.7813 7 14.5 7.46875 14.5 8C14.5 8.5625 14.7813 9.03125 15.25 9.3125C15.6875 9.59375 16.2813 9.59375 16.75 9.3125C17.1875 9.03125 17.5 8.5625 17.5 8ZM16 17.5C16.5313 17.5 17 17.2188 17.2813 16.75C17.5625 16.3125 17.5625 15.7188 17.2813 15.25C17 14.8125 16.5313 14.5 16 14.5C15.4375 14.5 14.9688 14.8125 14.6875 15.25C14.4063 15.7188 14.4063 16.3125 14.6875 16.75C14.9688 17.2188 15.4375 17.5 16 17.5Z" fill="#DE1C7D"/>
</svg>


</div>
</div>
            <div style="
    padding: 10px;
"> 



            
          
            
            <h3 class="carrtitle">  {{ item.name }}</h3>


<div style="padding: 5px 5px 5px 5px;">
    <p style="
    text-align: left;   display: flex;
padding: 0px 5px;
justify-content: center;
align-items: center;
gap: 8px; border-radius: 10px;color:#2196F3;

        font-size: 12px;background:   #E3F2FD;
">Creada por organización: {{ item.company_name }}</p>


            <p style="
    text-align: left;
    font-size: 14px;
">  {{ truncateDescription(item.description) }}</p>



          


<div class="row" style="
    font-size: 12px;
">

    <div class="col-4">
        <p> <span class="numcarr" >{{ item.views_count }}</span> Vistas</p>
    </div>

    <div class="col-4">
        <p> <span class="numcarr" >{{ item.review }}</span> Comentarios</p>
    </div>

    <div class="col-4">
        <p> <span class="numcarr" >{{ item.pitches_count }} </span> Pitches</p>
    </div>


    
    <hr>
            <button class="btn btn-primary-1" style="
    float: left;    font-size: 12px;    width: fit-content;
    margin-left: 10px;
">
            Aplicar a vacante
          </button>
            
           
</div>
           


</div>

       



           
         
         
        </div>
          </div>
        </slide>
  
        <!-- Add navigation and pagination components -->
        <template #addons>
          <navigation />
        </template>
      </carousel>
  
      <p v-if="data.length === 0">No hay datos disponibles.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  
  export default {
    name: 'PerfilVacanteB',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data() {
      return {
        data: [],
      };
    },
    mounted() {
      axios.get('https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10')
        .then(response => {
          this.data = response.data.data;
        })
        .catch(error => {
          console.error('Error al cargar datos:', error);
        });
    },
    methods: {
      truncateDescription(description) {
        const maxLength = 80;
        if (description.length > maxLength) {
          return description.substring(0, maxLength) + '...';
        }
        return description;
      },
    },
  };
  </script>
  
<style scoped>
.fa-star
{    
    color:#9FA8DA;
}

</style>



  <style >
 .carousel__icon {
   
   color: #1a237d;
}
.sectitle{
    font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 125%; /* 21.25px */
letter-spacing: 0.5px;
}


.numcarr{ 
    display: flex;
    padding: 0px 5px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: white;
    border-radius: 20px;
    background-color: #E565A5;
    width: 30px;
    margin-left: auto;
    margin-right: auto;

}

.carousel__prev {
    left: -45px;
    background: #E8EAF6;
    height: 100%;    color:#1A237E;    margin: 10px;border-radius: 6px 0px 0px 6px;

}

.carousel__next {
    right: -45px;
    background: #E8EAF6;
    height: 100%;
    color:#1A237E;    margin: 10px;border-radius: 0px 6px 6px 0px;
}


.carrtitle{
    font-family: Roboto;
font-size: 18px;
font-style: normal;font-weight: 400;
color: #1A237E;
letter-spacing: 0.5px;    text-align: left;    min-height: 65px;

}
.carrimg { 
    width: 100%;
    height: 73px;
    flex-shrink: 0;
    border-radius: 10px 10px 0px 0px;
}



.carousel__slide {
 
  margin: 10px;    max-width: 236px;

}
  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 0px; /* Adjust the margin for spacing */
    background-color: #f9f9f9;
  }
  
  .item-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .item-details {
    text-align: center;
  }
  
  .item-description {
    margin-bottom: 10px;
  }
  </style>