<template>

  <h1>Elegant Contact Form.</h1>
   <div class="info"><a href="https://www.grandvincent-marion.fr" target="_blank"><p> Made with <i class="fa fa-heart"></i> by Marion Grandvincent </p></a></div>

<v-form @submit="submitHandler" v-slot="{ errors }">
      <h1>Should you have any questions, please do not hesitate to contact me :</h1>

  <div class="contentform">
      <div id="sendmessage" :class="{ 'show': isSubmitted }"> Your message has been sent successfully. Thank you. </div>

      <div class="leftcontact">
          <div class="form-group">
            <p>Surname<span>*</span></p>
            <span class="icon-case"><i class="fa fa-male"></i></span>
              <v-field type="text" label="surname" name="nom" id="nom" rules="required|alpha_spaces" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Nom' doit être renseigné."/>
              <div class="validation">{{ errors.nom }}</div>
          </div> 

          <div class="form-group">
          <p>Name <span>*</span></p>
          <span class="icon-case"><i class="fa fa-user"></i></span>
              <v-field type="text"  label="name" name="prenom" id="prenom" rules="required|alpha_spaces" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."/>
              <div class="validation">{{ errors.prenom }}</div>
          </div>

          <div class="form-group">
          <p>E-mail <span>*</span></p>	
          <span class="icon-case"><i class="fa fa-envelope-o"></i></span>
              <v-field type="email" name="email" id="email" rules="required|email" data-msg="Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire."/>
              <div class="validation">{{ errors.email }}</div>
          </div>	

          <div class="form-group">
          <p>Company <span>*</span></p>
          <span class="icon-case"><i class="fa fa-home"></i></span>
              <v-field type="text" label="company" name="society" id="society" rules="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Société' doit être renseigné."/>
              <div class="validation">{{ errors.society }}</div>
          </div>

          <div class="form-group">
          <p>Company Address <span>*</span></p>
          <span class="icon-case"><i class="fa fa-location-arrow"></i></span>
              <v-field type="text" label="company address" name="adresse" id="adresse" rules="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Adresse' doit être renseigné."/>
              <div class="validation">{{ errors.adresse }}</div>
          </div>

          <div class="form-group">
          <p>Postcode <span>*</span></p>
          <span class="icon-case"><i class="fa fa-map-marker"></i></span>
              <v-field type="text" label="рostcode" name="postal" id="postal" rules="required|alpha_num" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Code postal' doit être renseigné."/>
              <div class="validation">{{ errors.postal }}</div>
          </div>	



  </div>

  <div class="rightcontact">	

          <div class="form-group">
          <p>City <span>*</span></p>
          <span class="icon-case"><i class="fa fa-building-o"></i></span>
              <v-field type="text" label="city" name="ville" id="ville" rules="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Ville' doit être renseigné."/>
              <div class="validation">{{ errors.ville }}</div>
          </div>	

          <div class="form-group">
          <p>Phone number <span>*</span></p>	
          <span class="icon-case"><i class="fa fa-phone"></i></span>
              <v-field type="text" label="phone number" name="phone" id="phone" rules="required|digits:10" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Téléphone' doit être renseigné. Minimum 10 chiffres"/>
              <div class="validation">{{ errors.phone }}</div>
          </div>

          <div class="form-group">
          <p>Function <span>*</span></p>
          <span class="icon-case"><i class="fa fa-info"></i></span>
              <v-field type="text" label="function" name="fonction" id="fonction" rules="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Fonction' doit être renseigné."/>
              <div class="validation">{{ errors.fonction }}</div>
          </div>

          <div class="form-group">
          <p>Subject <span>*</span></p>	
          <span class="icon-case"><i class="fa fa-comment-o"></i></span>
              <v-field type="text" label="subject" name="sujet" id="sujet" rules="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné."/>
              <div class="validation">{{ errors.sujet }}</div>
          </div>
      
          <div class="form-group">
          <p>Message <span>*</span></p>
          <span class="icon-case"><i class="fa fa-comments-o"></i></span>
              <!-- <v-field v-slot="{ field }" name="message" rules="required|max:500"> -->
              <v-field v-slot="{ field }" name="message" rules="required|custom_rule:500,*">
                <textarea v-bind="field" rows="14" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Message' doit être renseigné."></textarea>
                <div class="validation">{{ errors.message }}</div>
              </v-field>
          </div>	
  </div>
  </div>
<button 
  type="submit"
  class="bouton-contact"
>
  Send
</button>
 
</v-form>

</template>

<script setup>
import { ref } from 'vue'
import { configure } from "vee-validate";
import { localize } from '@vee-validate/i18n'

configure({
  generateMessage: localize('ru', {
    messages: {
      "alpha": "Поле {field} может содержать только буквы",
      "alpha_dash": "Поле {field} может содержать только буквы, цифры и дефис",
      "alpha_num": "Поле {field} может содержать только буквы и цифры",
      "alpha_spaces": "Поле {field} может содержать только буквы и пробелы",
      "between": "Поле {field} должно быть между 0:{min} и 1:{max}",
      "confirmed": "Поле {field} не совпадает Подтверждение",
      "digits": "Поле {field} должно быть числовым и точно содержать 0:{length} цифры",
      "dimensions": "Поле {field} должно быть 0:{width} пикселей на 1:{height} пикселей",
      "email": "Поле {field} должно быть действительным электронным адресом",
      "excluded": "Поле {field} должно быть допустимым значением",
      "ext": "Поле {field} должно быть действительным файлом. ({args})",
      "image": "Поле {field} должно быть изображением",
      "one_of": "Поле {field} должно быть допустимым значением",
      "integer": "Поле {field} должно быть целым числом",
      "length": "Длина поля {field} должна быть 0:{length}",
      "max": "Поле {field} не может быть более 0:{length} символов",
      "max_value": "Поле {field} должно быть 0:{max} или менее",
      "mimes": "Поле {field} должно иметь допустимый тип файла. ({args})",
      "min": "Поле {field} должно быть не менее 0:{length} символов",
      "min_value": "Поле {field} должно быть 0:{min} или больше",
      "numeric": "Поле {field} должно быть числом",
      "regex": "Поле {field} имеет ошибочный формат",
      "required": "Поле {field} должно быть заполнено",
      "required_if": "Поле {field} обязательно для заполнения",
      "size": "Поле {field} должно быть меньше, чем 0:{size}KB"
    },
    fields: {
      email: {
        "required": "Поле {field} является обязательным",
      },
    },
  })
})

const isSubmitted = ref(false);

const submitHandler = (values) => {
    alert(JSON.stringify(values, null, 4));
    isSubmitted.value = true;
}

</script>

<style scoped>
body {
  margin: auto;
  background: #eaeaea;  
  font-family: 'Open Sans', sans-serif;
}
.info p {
  text-align:center;
  color: #999;
  text-transform:none;
  font-weight:600;
  font-size:15px;
  margin-top:2px
}

.info i {
  color:#F6AA93;
}
form h1 {
  font-size: 18px;
  background: #F6AA93 none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  padding: 22px 25px;
  border-radius: 5px 5px 0px 0px;
  margin: auto;
  text-shadow: none; 
  text-align:left
}

form {
  border-radius: 5px;
  max-width:700px;
  width:100%;
  margin: 5% auto;
  background-color: #FFFFFF;
  overflow: hidden;
}

p span {
  color: #F00;
}

p {
  margin: 0px;
  font-weight: 500;
  line-height: 2;
  color:#333;
}

h1 {
  text-align:center; 
  color: #666;
  text-shadow: 1px 1px 0px #FFF;
  margin:50px 0px 0px 0px
}

input {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: 75%;
  height: 40px;
  float: left;
  padding: 0px 15px;
}

.is-invalid {
  border-color: #F00;
}

a {
  text-decoration:inherit
}

textarea {
  width: 75%;
  height: 130px; 
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #EEE;
  margin: 0;
  float: left;
  padding: 0px 15px;
  resize: none;
}

.form-group {
  overflow: hidden;
  clear: both;
}

.icon-case {
  width: 35px;
  float: left;
  border-radius: 5px 0px 0px 5px;
  background:#eeeeee;
  height:42px;
  position: relative;
  text-align: center;
  line-height:40px;
}

i {
  color:#555;
}

.contentform {
  padding: 40px 30px;
}

.bouton-contact{
  background-color: #81BDA4;
  color: #FFF;
  text-align: center;
  width: 100%;
  border:0;
  padding: 17px 25px;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 18px;
}

.leftcontact {
  width:49.5%; 
  float:left;
  border-right: 1px dotted #CCC;
  box-sizing: border-box;
  padding: 0px 15px 0px 0px;
}

.rightcontact {
  width:49.5%;
  float:right;
  box-sizing: border-box;
  padding: 0px 0px 0px 15px;
}

.validation {
  /* display:none; */
  margin: 0 0 10px;
  font-weight:400;
  font-size:13px;
  color: #DE5959;
}

#sendmessage {
  border:1px solid #fff;
  display:none;
  text-align:center;
  margin:10px 0;
  font-weight:600;
  margin-bottom:30px;
  background-color: #EBF6E0;
  color: #5F9025;
  border: 1px solid #B3DC82;
  padding: 13px 40px 13px 18px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.03);
}

#sendmessage.show,.show  {
  display:block;
}
</style>
