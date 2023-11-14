<template>
  <div>
    <MenuNav />
  </div>

  <div>
    <BannerTop />
  </div>

  <div class="container">
    <div class="row">
      <div class="col-4">
        <div>
          <SideNav />
        </div>
      </div>

      <div class="col-8">
        <div class="row row-container">
          <div class="col-8">
            <div class="row inner-row">
              <div class="col-5 match-culture">
                Match con la cultura <span class="match-percentage">80%</span>
              </div>
              <div class="col-7 match-bar-container">
                <div class="col-9 match-bar-inner"></div>
              </div>
            </div>
          </div>

          <div class="col-4 button-container">
            <button class="btn btn-primary-1">Enviar Pitch</button>
            <button class="btn btn-primary-1 follow-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 8C6.5 8.90625 6.96875 9.71875 7.75 10.1875C8.5 10.625 9.46875 10.625 10.25 10.1875C11 9.71875 11.5 8.90625 11.5 8C11.5 7.125 11 6.3125 10.25 5.84375C9.46875 5.40625 8.5 5.40625 7.75 5.84375C6.96875 6.3125 6.5 7.125 6.5 8ZM13 8C13 9.4375 12.2188 10.75 11 11.4688C9.75 12.1875 8.21875 12.1875 7 11.4688C5.75 10.75 5 9.4375 5 8C5 6.59375 5.75 5.28125 7 4.5625C8.21875 3.84375 9.75 3.84375 11 4.5625C12.2188 5.28125 13 6.59375 13 8ZM10.4062 15H7.5625C5.5 15 3.8125 16.5312 3.53125 18.5H14.4375C14.1562 16.5312 12.4688 15 10.4062 15ZM7.5625 13.5H9H10.4062C13.5 13.5 16 16 16 19.0938C16 19.5938 15.5625 20 15.0625 20H2.90625C2.40625 20 2 19.5938 2 19.0938C2 16 4.46875 13.5 7.5625 13.5ZM17.75 13.75V11.75H15.75C15.3125 11.75 15 11.4375 15 11C15 10.5938 15.3125 10.25 15.75 10.25H17.75V8.25C17.75 7.84375 18.0625 7.5 18.5 7.5C18.9062 7.5 19.25 7.84375 19.25 8.25V10.25H21.25C21.6562 10.25 22 10.5938 22 11C22 11.4375 21.6562 11.75 21.25 11.75H19.25V13.75C19.25 14.1875 18.9062 14.5 18.5 14.5C18.0625 14.5 17.75 14.1875 17.75 13.75Z" fill="#DE1C7D"/>
</svg>

              Seguir 
            </button>
          </div>
          <br />

          <div class="tabs ">
            <a href="/" class="linktab-active">Perfil</a>
            <a href="/vacante" class="linktab">Vacantes</a>
            <a class="linktab">Listas</a>
          </div>
        </div>


        <div class="profile-container">
          <PerfilEmpresaB />
        </div>

        <br />
 
      </div>
    </div>
  </div>
</template>

<script>
import PerfilEmpresaB from './PerfilEmpresaB.vue'
import MenuNav from './MenuNav.vue'
import SideNav from './SideNav.vue'
import BannerTop from './BannerTop.vue'

export default {
  name: 'PerfilEmpresa',
  components: {
    MenuNav,
    BannerTop,
    SideNav,
    PerfilEmpresaB
  }
}
</script>

<style>
.row-container {
  margin-top: 24px;
}

.inner-row {
  margin-top: 14px;
}

.match-culture {
  color: #9FA8DA;
  font-size: 14px;
  font-weight: 700;
  text-align: justify;
}

.match-percentage {
  color: #8BC34A;
  margin-left: 20px;
}

.match-bar-container {
  background: #E8EAF6;
  padding: 0;
  margin: 0;
  border-radius: 15px;
  height: 15px;
}

.match-bar-inner {
  background: #8BC34A;
  border-radius: 15px;
  color: #8BC34A;
  height: 15px;
}

.button-container {
  margin-top: 0px;
}

.tabs {
  float: left;
  color: #9FA8DA;
  font-weight: 600;
  padding: 0 20px;
  display: contents;
}

.linktab {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  color: #9FA8DA;
  text-decoration-line: none;font-size: 12px;
}



.linktab-active { display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  color: var(--color-secundary);
  text-decoration-line: none;
    border-bottom: 2px solid var(--color-secundary);font-size: 12px;
}

.follow-btn
{
  margin-left: 10px;
  background: transparent!important;
    color: var(--color-secundary)!important;
    border: 1px solid var(--color-secundary);
}
.profile-container {
  margin-top: 20px;
}
</style>
