<template lang="html">
  <main id="main" class="main _column">
    <section class="about">
      <div class="about-circle"></div>
      <div class="container">
        <div class="about-column">
          <h3 class="about__pre-title">Вкратце обо мне:</h3>
          <h4 class="about__message">
            Привет! Я занимаюсь дизайном сайтов, веб-сервисов и приложений, делая их привлекательнее для Ваших клиентов. Популяризирую положительный имидж компании, увеличиваю прибыль.
          </h4>
        </div>
        <div class="about-column">
          <h1 class="about__title">UX/UI</h1>
          <h2 class="about__sub-title">DESIGN</h2>
        </div>
        <h5 class="about__free-title">ABOUT</h5>
      </div>
      <img src="/static/IS_F2(final).png" alt="Сергей Иванов"
           class="about__photo" />
    </section>
    <section class="skills">
      <div class="container">
        <article class="skills__description _mobile">
          <h3 class="skills__title">Обо мне:</h3>
          <p>
            Привет! Я занимаюсь дизайном сайтов, веб-сервисов и приложений, делая их привлекательнее для Ваших клиентов. Популяризирую положительный имидж компании, увеличиваю прибыль.
          </p>
        </article>
        <h3 class="skills__title">Профиль и умения</h3>
        <ul class="skills-list">
          <li class="skills-list__item">
            <icon-play class="skills-list__item-icon"></icon-play>
          </li>
          <li class="skills-list__item">
            <icon-cube class="skills-list__item-icon"></icon-cube>
          </li>
          <li class="skills-list__item">
            <icon-layers class="skills-list__item-icon"></icon-layers>
          </li>
        </ul>
        <article class="skills__description">
          Меня зовут Сергей и я занимаюсь веб-дизайном более трех лет.
          Имею опыт работы над проектами как в команде,
          так и напрямую с заказчиком.
          <br><br>
          В работе с фронтенд-разработчиками использую современные инструменты и с заботой думаю о разработчиках, которые все это будут верстать. Умею брать на себя ответственность, вести проекты и привлекать необходимых исполнителей.
          <br><br>
          Делаю дизайн с учетом принципов пользовательского опыта (UX), люблю адаптивность, внимателен к деталям. Знаю HTML и CSS на уровне, чтобы понимать ограничения по дизайну, предметно поговорить с разработчиками-фронтендерами
          и предложить идеи.
          <br><br>
          Делаю анимацию — как для презентаций, так и для показа разработчикам для лучшего понимания того, как и что должно выглядеть в проекте. Умею простую 3D-визуализацию.
        </article>
      </div>
    </section>
    <section class="apps">
      <div class="container">
        <h3 class="apps__title">Основное ПО</h3>
        <ul class="workflow-list">
          <li v-for="appItem in mainApps" :key="appItem.name"
              class="workflow-item">
            <img :src=" '/static/apps/' + appItem.icon " :alt="appItem.name"
                 class="workflow-item__icon" />
            <workflow-tooltip :Description="appItem.description" />
          </li>
        </ul>
        <h4 class="apps__title _add">Дополнительное ПО</h4>
        <ul class="workflow-list">
          <li v-for="appItem in addApps" :key="appItem.name"
              class="workflow-item">
            <img :src=" '/static/apps/' + appItem.icon " :alt="appItem.name"
                 class="workflow-item__icon" />
            <workflow-tooltip :Description="appItem.description" />
          </li>
        </ul>
      </div>
    </section>
    <section class="contacts">
      <div class="container">
        <h3 class="contacts__title">Напишите мне</h3>
        <form @submit.prevent="submit" class="about-form">
          <h4 class="about-form__title">Мы детально обсудим Ваше предложение, либо просто дружелюбно пообщаемся.</h4>
          <label class="about-form__label">
            <input v-model="Form.name"
                   type="text" required class="about-form__input" placeholder="Ваше имя*" />
            <span class="about-form__placeholder">Ваше имя*</span>
            <i class="about-form__bar"></i>
          </label>
          <label class="about-form__label">
            <input v-model="Form.mail" type="email"
                   required class="about-form__input" placeholder="Ваш E-mail*" />
            <span class="about-form__placeholder">Ваш E-mail*</span>
            <i class="about-form__bar"></i>
          </label>
          <label class="about-form__label">
            <input v-model="Form.message"
                   type="text" required class="about-form__input"
                   placeholder="Расскажите о Вашем предложении" />
            <span class="about-form__placeholder">Расскажите о Вашем предложении</span>
            <i class="about-form__bar"></i>
          </label>
          <button class="about-form__submit">Отправить</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>

  import IconPlay from '../../icons/play.js';
  import IconCube from '../../icons/cube.js';
  import IconLayers from '../../icons/layers.js';

  import WorkflowTooltip from './WorkflowTooltip.vue';

  import { token , chat_id } from '../../../data.js';

  export default {
    name: 'About',
    components: { IconPlay , IconCube , IconLayers , WorkflowTooltip },
    data: () => ({
      Form: {
        name: '',
        mail: '',
        message: ''
      },
      mainApps: [
        {
          name: 'Sketch',
          icon: 'sketch.png',
          description: 'Sketch — профессиональный векторный инструмент для Mac OS. Мощный, простой, быстрый, гибкий редактор для дизайна интерфейсов.'
        },
        {
          name: 'Photoshop CC',
          icon: 'photoshop-cc.png',
          description: 'Adobe Photoshop — многофункциональный графический редактор, разработанный и распространяемый фирмой Adobe Systems.'
        },
        {
          name: 'After Effects',
          icon: 'after-effects-cc.png',
          description: 'Adobe After Effects — программа для редактирования видео и динамических изображений, разработки композиций (композитинг), анимации и создания различных эффектов.'
        },
        {
          name: 'muse',
          icon: 'muse.png',
          description: 'Adobe Muse — графический редактор, ориентированный на создание сайтов, небольших интернет-магазинов и лендинг пейдж без необходимости написания кода.'
        },
        {
          name: 'illustrator-cc',
          icon: 'illustrator-cc.png',
          description: 'Adobe Illustrator — векторный графический редактор, разработанный и распространяемый фирмой Adobe Systems.'
        },
        {
          name: 'Axure RP',
          icon: 'axure-rp.png',
          description: 'Axure RP — программа для создания прототипов и спецификаций веб-сайтов и приложений.'
        }
        
      ],
      addApps: [
        {
          name: 'C4D',
          icon: 'C4D_Logo.png',
          description: 'Cinema4D — программный пакет для создания трёхмерной графики и анимации. Универсальная комплексная программа для создания и редактирования трехмерных эффектов и объектов.'
        },
        {
          name: 'marvel',
          icon: 'logo_marvel.png',
          description: 'Marvel — программа для прототипирования и анимации мобильных и веб-предложений.'
        },
        {
          name: 'final_cut',
          icon: 'final_cut.png',
          description: 'Final Cut — профессиональный видеоредактор для обработки видео и монтажа.'
        },
        {
          name: 'MindMeister',
          icon: 'mindmeister.png',
          description: 'MindMeister — инструмент для майндмэппинга, который позволяет визуально запечатлеть идеи, развивать их и делиться ими. Используется для брейнсторминга, создания заметок, планирования проектов и многих других креативных задач.'
        },
        {
          name: 'zeplin',
          icon: 'zeplin.png',
          description: 'Zeplin — программа, направленная на то, чтобы подружить дизайнеров и разработчиков. Позволяет передавать макеты из графических программ в удобный и понятный разработчикам формат.'
        }
      ]
    }),
    methods: {
      submit (event) {
        const message =
`
Сообщение с ${ document.title }:

Имя: ${ this.Form.name }
E-mail: ${ this.Form.mail }
Сообщение: ${ this.Form.message }
`;
        this.$http.post(`https://api.telegram.org/bot${ token }/sendMessage?chat_id=${ chat_id }&text=${ message }`)
          .then( response => {
            this.Form = {
              name: '',
              mail: '',
              message: '',
            };
            return this.$swal( 'Ура!' , 'Ваше сообщение успешно отправлено.' , 'success' )
          })
          .catch( error => {
            console.error(error);
            this.$swal( 'Ой!' , 'Что-то пошло не так. Попробуйте ещё раз или напишите мне сразу на почту: siivanov@yandex.ru' , 'error' );
          })
			}
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";
  @import "../../../stylesheets/partials/_layout.scss";

  .skills, .apps, .contacts {
    background-color: #fff
  }

  .about {
    z-index: -1;
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    @include MQ(Tp) {
      height: 75vh;
    }
    @include MQ(Tl) {
      height: 100vh;
    }
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 60%;
      max-width: initial;
      min-width: 1080px;
      padding-top: 200px;
      @include MQ(Pp) {
        flex-flow: column;
        width: 90%;
      }
      @include MQ(Tp) {
        min-width: initial;
        width: 90%;
      }
      @include MQ(Tl) {
        min-width: initial;
        width: 90%;
      }
    }
    .about-column {
      flex: 1 1 50%;
      min-width: 45%;
      max-width: 50%;
      @include MQ(Pp) {
        flex-basis: 100%;
        max-width: initial;
      }
    }
    &__title {
      margin-right: 150px;
      text-align: right;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 72px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 1px;
      color: #404552;
      text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      @include MQ(Pp) {
        display: none;
        font-size: 12vw;
      }
      @include MQ(Tp) {
        margin-right: initial;
      }
      @include MQ(Tl) {
        margin-right: initial;
      }
    }
    &__pre-title {
      margin-top: 120px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 36px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 1px;
      color: #404552;
      @include MQ(Pp) {
        display: none;
        font-size: 12vw;
      }
      @include MQ(Tp) {
        margin-top: 0;
      }
      @include MQ(Tl) {
        margin-top: 0;
      }
    }
    &__sub-title {
      margin-right: 150px;
      text-align: right;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 42px;
      line-height: 1;
      color: #404552;
      color: var(--charcoal-grey-two);
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      @include MQ(Pp) {
        display: none;
      }
      @include MQ(Tp) {
        margin-right: initial;        
      }
      @include MQ(Tl) {
        margin-right: initial;
      }
    }
    &__free-title {
      position: absolute;
      left: -7.5%;
      bottom: 90px;
      opacity: 0.1;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 144px;
      line-height: 1;
      letter-spacing: 10px;
      text-align: left;
      color: #404552;
      color: var(--charcoal-grey-two);
      @include MQ(Pp) {
        display: none;
      }
      @include MQ(Tp) {
        left: 0;
      }
      @include MQ(Tl) {
        left: 0;
      }
    }
    &__message {
      max-width: 395px;
      margin-top: 20px;
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 18px;
      line-height: 1.56;
      color: #404552;
      color: var(--charcoal-grey-two);
      @include MQ(Pp) {
        display: none;
      }
      @include MQ(Tp) {
        width: 75%;
      }
    }
    &__mail {
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.67;
      text-align: left;
      color: #ff144b;
      color: var(--neon-red);
    }
    &__photo {
      position: absolute;
      bottom: 0; left: 50%;
      width: 550px;
      height: 728px;
      object-fit: contain;
      transform: translateX(-50%);
      @include MQ(Pp) {
        left: 50%;
        width: 100%;
        height: auto;
      }
      @include MQ(Tp) {
        left: 50%;
        width: 50%;
        height: auto;
      }
      @include MQ(Tl) {
        left: 50%;
        width: 40%;
        height: auto;
      }
    }
  }

  .about-circle {
    position: absolute;
    top: 140px; left: 50%;
    width: 728px;
    height: 700px;
    background-image: linear-gradient(125deg, #7bcbfb, #1c9bf7);
    background-image: linear-gradient(125deg, #7bcbfb, var(--azure));
    transform: translateX(-50%);
    border-radius: 50%;
    @include MQ(Tp) {
      width: 500px;
      height: 500px;
    }
  }

  .contacts {
    padding: 150px 0;
    background-color: #f5f5f5;
    @include MQ(Pp) {
      padding: 30px 0;
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 64px;
      font-weight: 800;
      letter-spacing: 0.9px;
      text-align: center;
      color: #404552;
      color: var(--charcoal-grey-two);
      @include MQ(Pp) {
        text-align: left;
        font-size: 12vw;
      }
    }
  }

  .skills {
    margin-top: 95vh;
    padding-top: 140px;
    @include MQ(Pp) {
      padding-top: 40px;
    };
    @include MQ(Tp) {
      margin-top: 75vh
    };
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 64px;
      font-weight: 800;
      letter-spacing: 1px;
      text-align: center;
      color: #404552;
      @include MQ(Pp) {
        text-align: left;
        font-size: 9vw;
      }
    }
    &__description {
      width: 65%;
      margin: 70px auto 0 auto;
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-weight: 300;
      line-height: 1.67;
      text-align: center;
      color: #202020;
      color: var(--black);
    	@include MQ(Pp) {
        width: 100%;
        margin: 25px auto 0 auto;
        font-size: 5.5vw;
        text-align: left;
    	}
      &._mobile {
        display: none;
        @include MQ(Pp) {
          display: block;
        }
      }
    }
  }

  .skills-list {
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin: 0 auto;
    margin-top: 70px;
    @include MQ(Pp) {
      width: 100%;
      justify-content: flex-start;
      margin: 0;
      margin-top: 40px;
    };
    &__item {
      @include MQ(Pp) {
        margin-right: 58px;
      };
    }
    &__item-icon {
      width: 40px;
      fill: #1c9bf7;
      fill: var(--azure);
      @include MQ(Pp) {
        width: 26.5px;
      };
    }
  }

  .apps {
    padding: 100px 0;
    @include MQ(Pp) {
      padding: 30px 0;
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 1px;
      text-align: center;
      color: #404552;
      color: var(--charcoal-grey-two);
      &._add {
        margin-top: 50px;
        @include MQ(Pp) {
          margin-top: 25px;
        }
      }
    	@include MQ(Pp) {
    	  font-size: 8vw;
    	}
    }

    .workflow-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      width: 60%;
      margin: 50px auto 0 auto;
      @include MQ(Pp) {
        width: 100%;
        margin-top: 25px;
      }
    }
    .workflow-item {
      position: relative;
      margin: 50px;
      @include MQ(Pp) {
        margin: 10px;
      }
      &:hover {
        .workflow-tooltip {
          opacity: 1;
          visibility: visible;
        }
      }
      &__icon {
        size: 100px;
        object-fit: contain;
        object-position: center;
        @include MQ(Pp) {
          size: 50px;
        }
      }
      
    }
  }

  .about-form {
    position: relative;
    display: block;
    width: 435px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    @include MQ(Pp) {
      width: 100%;
    }
    &__title {
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 18px;
      line-height: 1.44;
      text-align: center;
      color: #404552;
      color: var(--charcoal-grey-two);
    	@include MQ(Pp) {
        text-align: left;
    	  font-size: 5.5vw;
    	}
    }
    &__label {
      position: relative;
      display: block;
      margin-top: 2.25rem;
      margin-bottom: 2.25rem;
    }
    &__input {
      display: block;
      width: 100%;
      // height: 1.9rem;
      // padding: 0.125rem 0.125rem 0.0625rem;
      font-size: 1rem;
      line-height: 1.9;
      color: transparent;
      background: none;
      border-width: 0;
      transition: all 0.28s ease;
      border-color: transparent;
      box-shadow: none;
      resize: none;
      &::placeholder {
        opacity: 0;
      }
      &:focus,
      &:valid {
        color: #333;
        & ~ .about-form__placeholder {
          font-size: 0.8rem;
          color: gray;
          top: -1rem;
          left: 0;
        }
      }
      &:invalid {
        color: red;
        & ~ .about-form__placeholder {
          font-size: 0.8rem;
          color: gray;
          top: -1rem;
          left: 0;
        }
      }
      &:focus {
        outline: none;
        & ~ .about-form__placeholder {
          color: #1c9bf7;
        }
        & ~ .about-form__bar::before {
          width: 100%;
          left: 0;
        }
      }
    }
    &__placeholder {
      position: absolute;
      display: block;
      top: 0.25rem;
      pointer-events: none;
      padding-left: 0.125rem;
      z-index: 1;
      color: #b3b3b3;
      font-size: 1rem;
      font-weight: normal;
      transition: all 0.28s ease;
    }
    &__bar {
      position: relative;
      display: block;
      border-bottom: 0.0625rem solid #999;
      &::before {
        content: '';
        height: 0.125rem;
        width: 0;
        left: 50%;
        bottom: -0.0625rem;
        position: absolute;
        background-color: #1c9bf7;
        transition: left 0.28s ease, width 0.28s ease;
        z-index: 2;
      }
    }
    &__submit {
      display: block;
      width: 200px;
      height: 50px;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 18px;
      text-align: center;
      color: #fff;
      border-radius: 100px;
      background-color: #ff144b;
      background-color: var(--neon-red);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    	@include MQ(Pp) {
        width: 100%;
    	}
    }
  }

</style>
