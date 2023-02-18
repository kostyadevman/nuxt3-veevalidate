<template>
  <v-form class="form" @submit="onSubmit"  :validation-schema="schema" v-slot="{ errors }">
      <div class="form__row">
        <v-field
          v-slot="{ field, meta }"
          name="fullName" 
          type="text"  
        >
          <input 
            placeholder="ФИО"
            v-bind="field" 
            :class="{ 'is-invalid': errors.fullName, 'is-valid': !errors.fullName && meta.touched}"
          >
          <span>{{errors.fullName}}</span>
        </v-field>
      </div>
      <div class="form__row">
        <v-field
          v-slot="{ field, meta }"
          name="phoneNumber"
          type="text"
        >
          <input
            placeholder="Телефон"
            v-maska data-maska="###########"
            v-bind="field"
            :class="{ 'is-invalid': errors.phoneNumber, 'is-valid': !errors.phoneNumber && meta.touched}"
          >
          <span>{{errors.phoneNumber}}</span>
        </v-field>
      </div>
      <div class="form__row">
        <v-field 
          v-slot="{ field, meta }"
          name="email" 
          type="text"  
        >
          <input
            placeholder="Email"
            v-bind="field" 
            :class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && meta.touched}"
          >
          <span>{{errors.email}}</span>
        </v-field>
      </div>
      <div class="form__row">
        <v-field 
          placeholder="Примечание"
          name="note" 
          type="text"  
          :class="{ 'is-invalid': errors.note }" 
        />
        <span>{{errors.note}}</span>
      </div>
      <div class="form__row form__row--checkbox">
          <v-field 
            id="acceptTerms" 
            name="acceptTerms" 
            type="checkbox" 
            value="true" 
            :class="{ 'is-invalid': errors.acceptTerms }" 
          />
          <a href for="acceptTerms">Пользовательское соглашение</a>
          <span>{{errors.acceptTerms}}</span>
      </div>
      <button type="submit" class="form__submit">Заполнить 🖍</button>
   </v-form>
</template>

<script>
import { vMaska } from "maska";
import { object, string} from "yup";

const fullNameRegExp = /^[A-Za-z,А-Яа-я\s]*$/

export default {
  directives: { maska: vMaska },
  data() {
      const schema = object().shape({
          fullName: string()
              .required('Укажите Ваше ФИО')
              .matches(fullNameRegExp, 'Укажите валидное ФИО'),
          phoneNumber: string()
              .min(11, 'Укажите валидный номер телафона (11 цифр)')
              .max(11, 'Укажите валидный номер телафона (11 цифр)')
              .required('Укажите номер телефона'),
          email: string()
              .required('Укажите email')
              .email('Укажите валидный email'),
          note: string(),
          acceptTerms: string()
              .required('Примите пользовательское соглашение')
      });
      return { 
          schema,
      }
  },
  methods: {
      onSubmit(values) {
          console.log(JSON.stringify(values, null, 4));
      }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 392px;
  height: 405px;
  margin-right: auto;
  margin-left: auto;
  padding: 32px 15px 41px 15px;
  background-color: #ffffff;
  
  &__row {
      position: relative;
      width: 100%;
      margin-bottom: 25px;
      
      & input {
          display: block;
          width: 362px;
          height: 45px;
          padding-left: 15px;
          padding-right: 15px;
          border: 2px solid #dadada;
          
          &::placeholder {
              font-size: 12px;
              color: #aab0b7;
          }
      }
      
      & span {
          position: absolute;
          bottom: -15px;
          left: 5px;
          font-size: 12px;
          color: red;
      }
  }
  
  &__row--checkbox {
      display: flex;
      
      & input {
          width: 20px;
          height: 20px;
          cursor: pointer;
      }
      
      & a {
          margin-left: 20px;
          margin-top: 3px;
          color: #3d3d3e;
          text-decoration: underline;
          cursor: pointer;
      }
  }
  
  &__submit {
      width: 135px;
      height: 45px;
      padding-top: 15px;
      padding-bottom: 15px;
      box-sizing: border-box;
      border: none;
      border-radius: 22px;
      font-size: 15px;
      line-height: 15px;
      font-weight: 700;
      color: #ffffff;
      background-color: #ff597f;

      &:hover {
        opacity: .9;
      }
      
      &:active {
        opacity: .7;
      }
  }
}

input.is-valid {
  border: 2px solid rgb(142, 181, 239);
}

input.is-invalid {
  border: 2px solid red;
}
</style>