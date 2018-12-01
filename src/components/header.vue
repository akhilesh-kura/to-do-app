<template>
  <div id="header-container">
    <div v-if=" this.$parent.authenticated" id="header-inner" class="row">
      <h3 class="col-md-6" id="site-name">Blog It!</h3>
      <div class="col-md-6" id="right-div">
        <h4  id="user-email">{{user_email}}</h4>
        <button  id="logout-button">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

//    console.log('header');

export default {
  name: "HeaderElement",
  data() {
    return {
      user_email: "sample@sample.com"
    };
  }
};
</script>

<style>
#header-container {
  display: inline-flex;
  width: 100%;
  height: 10%;
  margin: 1%;
  background-color: rgba(86, 204, 96, 0.918)
}
#header-inner {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  margin: auto;
}
#site-name {
  float: left;
}
#right-div {
  display: inline-flex;
  flex-direction: row;
  float: right;
  justify-content: flex-end;
  overflow: auto;
}
#user-email {
  margin: 0 5% 0 5%;
  align-self: auto;
  
}
#logout-button {
  margin: 0 5% 0 5%;
  align-self: auto;
}
</style>
