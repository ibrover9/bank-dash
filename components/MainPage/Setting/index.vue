<script></script>

<template>
  <div class="setting">
    <div class="setting-headers">
      <div class="setting-headers-header">Edit Profile</div>
      <div class="setting-headers-header">Preferences</div>
      <div class="setting-headers-header">Security</div>
    </div>
    <div class="horizontal-line"></div>
    <div class="setting-main">
      <div class="setting-main-edit_profile">
        <div class="setting-main-edit_profile-image">
          <img src="/public/MainWindow/LogoMain.svg" />
        </div>
      </div>
      <div class="setting-main-edit_profile-pencil">
        <img src="/public/MainWindow/pencil.svg" />
      </div>

      <div class="setting-main-edit_profile-inputs">
        <label for="setting-your-name"
          >Your name
          <div>
            <input id="setting-your-name" placeholder="Charlene Reed " /></div
        ></label>
        <label for="setting-user-name"
          >User name
          <div>
            <input id="setting-user-name" placeholder="Charlene Reed " /></div
        ></label>
        <label for="setting-email"
          >Email
          <div>
            <input
              id="setting-email"
              placeholder="charlenereed@gmail.com  "
            /></div
        ></label>
        <label for="setting-password"
          >Password
          <div><input id="setting-password" placeholder="********** " /></div
        ></label>
        <label for=""
          >Date of Birth
          <MainPageSettingDatePicker />
        </label>
        <label for="setting-pesent_address"
          >Present Address
          <div>
            <input
              id="setting-pesent_address"
              placeholder="San Jose, California, USA "
            /></div
        ></label>
        <label for="setting-permanent_address"
          >Permanent Address
          <div>
            <input
              id="setting-permanent_address"
              placeholder="San Jose, California, USA"
            /></div
        ></label>
        <label for="setting-city"
          >City
          <div><input id="setting-city" placeholder="San Jose" /></div
        ></label>
        <label for="setting-postal_code"
          >Postal Code
          <div>
            <input id="setting-postal_code" placeholder="45962" /></div
        ></label>
        <label for="setting-country"
          >Country
          <div><input id="setting-country" placeholder="USA" /></div
        ></label>
      </div>
    </div>
    <div class="setting-buttons">
      <button class="setting-buttons-button">Save</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/assets/mainSetting.scss";
</style>
