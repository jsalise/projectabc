<template>
  <div id="editProfileModule">
    <div class="modal fade" id="editProfileModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="item !== null">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
            <button type="button" class="close" @click="hideModal()" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span v-if="errorMessage !== null" class="text-danger text-center">
                <label><b>Opps! </b>{{errorMessage}}</label>
            </span>
            <br v-if="errorMessage !== null">       
            <span class="inputs" >

              <div class="form-group margin-top-25">
                <label for="address">Email Address<label class="text-danger">*</label></label>
                <input type="text" class="form-control" placeholder="Email" v-model="item.email" disabled>
              </div>

              <div class="form-group margin-top-25">
                <label for="address">First Name<label class="text-danger">*</label></label>
                <input type="text" class="form-control" placeholder="First Name" v-model="item.first_name">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Middle Name</label>
                <input type="text" class="form-control" placeholder="Optional" v-model="item.middle_name">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Last Name<label class="text-danger">*</label></label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="item.last_name">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Id Number</label>
                <input type="text" class="form-control" placeholder="Optional" v-model="item.employment_code">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Gender</label>
                <select class="form-control" v-model="item.sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Contact Numbar</label>
                <input type="text" class="form-control" placeholder="Optional" v-model="item.contact_number">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Address</label>
                <input type="text" class="form-control" placeholder="Optional" v-model="item.address">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Birthdate</label>
                <input type="date" class="form-control" v-model="item.birthdate" placeholder="Optional">
              </div>
      
              <div class="form-group">
                <label for="address">Position</label>
                <input type="text" class="form-control" v-model="item.position" placeholder="Optional">
              </div>

              <div class="form-group">
                <label for="address">Department</label>
                <input type="text" class="form-control" v-model="item.deparment" placeholder="Optional">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Emergency Contact Person</label>
                <input type="text" class="form-control" v-model="item.emergency_contact_name" placeholder="Optional">
              </div>

              <div class="form-group margin-top-25">
                <label for="address">Emergency Contact Person's Number</label>
                <input type="text" class="form-control" v-model="item.emergency_contact_number" placeholder="Optional">
              </div>
              <government-list :data="item" class="margin-top-25"></government-list>
            </span>
            <span class="sidebar">
              <span class="sidebar-header" style="margin-top: 25px;">Profile Picture</span>
              <span class="image" v-if="item.profile !== null">
                <img :src="config.BACKEND_URL + item.profile" height="auto" width="100%" class="imageProfile" >
              </span>
              <span class="image" v-else>
                <i class="fa fa-user-circle-o" ></i>
              </span>

              <button class="btn btn-primary custom-block" style="margin-top: 5px; margin-left: 1%; width: 98%;" @click="showImages('profile')">Select
              </button>

              <div class="browse-images-holder" v-if="buttonClicked === 'profile' && browseImagesFlag === true">
                <div class="browse-images" >
                  <browse-images></browse-images>
                </div>
              </div>

              <span class="sidebar-header" style="margin-top: 25px;">Signature</span>
              <span class="image" v-if="item.signature !== null">
                <img :src="config.BACKEND_URL + item.signature" height="auto" width="100%" >
              </span>
              <span class="image" v-else>
                <i class="fas fa-signature"></i>
              </span>
        
              <button class="btn btn-primary custom-block" style="margin-top: 5px; margin-left: 1%; width: 98%" @click="showImages('signature')">Select
              </button>

              <div class="browse-images-holder">
                <div class="browse-images" v-if="buttonClicked === 'signature' && browseImagesFlag === true">
                  <browse-images></browse-images>
                </div>
              </div>

            </span>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-danger" @click="hideModal()">Close</button>
              <button type="button" class="btn btn-primary" @click="submit()">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.margin-top-25{
  margin-top: 25px;
}
.inputs{
  width: 65%;
  float: left;
  margin-right: 5%;
  min-height: 50px;
  overflow-y: hidden;
}
.form-group{
  margin-bottom: 0px !important;
}
.form-group label{
  margin-bottom: 0px !important;
}
.sidebar{
  width: 30%;
  float: left;
  min-height: 50px;
  overflow-y: hidden;
}
.sidebar-header{
  height: 40px;
  line-height: 40px;
  width: 100%;
  float: left;
}
.sidebar .image{
  width: 100%;
  float: left;
  height: 200px;
  text-align: center;
}
.sidebar .imageProfile{
  max-height: 200px;
  width: 100%;
}
.image i{
  font-size: 150px;
  line-height: 200px;
}
.image img{
  border-radius: 5px;
}
.custom-block{
  width: 49%;
  float: left;
}
.custom-block input{
  display: none;
}
.browse-images-holder {
  float:left;
}
.browse-images{
  width: 200px;
  height: 300px;
  position: absolute;
  border: solid 1px #ddd;
  background: #fff;
  margin-left: -250px;
  margin-top: -300px;
}
</style>
<script>
import ROUTER from '../../router'
import AUTH from '../../services/auth'
import CONFIG from '../../config.js'
import axios from 'axios'
export default {
  data(){
    return {
      user: AUTH.user,
      config: CONFIG,
      errorMessage: null,
      item: null,
      offset: 1,
      buttonClicked: null,
      browseImagesFlag: false
    }
  },
  components: {
    'government-list': require('modules/profiles/VariableList.vue'),
    'browse-images': require('components/increment/generic/image/BrowseImages.vue')
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    modal(){
      $('#editProfileModal').modal('show')
    },
    hideModal(){
      $('#editProfileModal').modal('hide')
    },
    retrieve(){
      let parameter = {
        condition: [{
          value: this.item.id,
          column: 'id',
          clause: '='
        }]
      }
      $('#loading').css({'display': 'block'})
      this.APIRequest('profiles/retrieve', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(response.data.length > 0){
          this.item = response.data[0]
        }else{
          this.item = null
        }
      })
    },
    update(){
      if(this.validate()){
        this.APIRequest('profiles/update', this.item).then(response => {
          if(response.data === true){
            this.retrieve()
          }
        })
      }
    },
    validate(){
      let i = this.item
      if(i.first_name !== null && i.last_name !== null && i.sex !== null){
        return true
      }
      return false
    },
    validateRequiredFields(){
      let customerData = this.item
      let conditionFirstName = (customerData.first_name === null || customerData.first_name === '')
      let conditionLastName = (customerData.last_name === null || customerData.last_name === '')
      let conditionEmail = (customerData.email === null || customerData.email === '')

      if(conditionFirstName && conditionLastName && conditionEmail){
        this.errorMessage = 'Please fill up all required fields'
        return false
      }else if(conditionFirstName){
        this.errorMessage = 'Please fill up First Name'
        return false
      }else if(conditionLastName){
        this.errorMessage = 'Please fill up Last Name'
        return false
      }else if(conditionEmail){
        this.errorMessage = 'Please fill up Email'
        return false
      }else{
        return true
      }
    },
    submit(){
      if(this.validateRequiredFields()){
        this.item.account_id = this.user.userID
        this.APIRequest('profiles/update', this.item).then(res => {
          this.retrieve()
          if(res.data === true){
            this.hideModal()
          }
          let message = res.error.message
          if(typeof message.username !== undefined && typeof message.username !== 'undefined'){
            this.errorMessage = message.username[0]
          }else if(typeof message.email !== undefined && typeof message.email !== 'undefined'){
            this.errorMessage = message.email[0]
          }
        })
      }
    },
    manageImageUrl(url){
      if(this.buttonClicked === 'signature'){
        this.item.signature = url
      }else{
        this.item.profile = url
      }
      this.update()
    },
    showImages(button){
      this.buttonClicked = button
      this.browseImagesFlag = true
    }
  }
}
</script>
