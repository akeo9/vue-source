<script setup>
    import { ref, reactive, watch } from 'vue'
    import { onMounted, onUpdated } from 'vue'
    import { validator } from 'validator'

    var validate = require("validate.js")

    const usernameRef = ref(null)

    const username = ref('')
    const password = ref('')
    const password2 = ref('')
    const email = ref('')
    const phone = ref('')
    const disabled = ref(true)
    const profile = reactive({
        image: {},
    })

    const validUsername = ref(false)
    const validPassword = ref(false)
    const passwordsMatch = ref(false)
    const validEmail = ref(false)
    const validPhone = ref(false)

    const usernameErrorRef = ref(null)
    const passwordErrorRef = ref(null)
    const upperErrorRef = ref(null)
    const specialErrorRef = ref(null)
    const password2ErrorRef = ref(null)
    const emailErrorRef = ref(null)
    const phoneErrorRef = ref(null)

    // watch element ref - similar to onMounted - not watching value of input
    // for some reason disabled when ref function is installed 
    let count = 0
    watch(usernameRef, () => {
        console.log('watching usernameRef')
        console.log(usernameRef.value)
        console.log(count++)
        usernameRef.value.value = "rmcgregor"
    })

    // called when anything in component changes - including onMounted
    // if used in input element, must have v-model set
    function componentUpdate(elm) {
        console.log("password changed")
        console.log(elm.value)
        console.log(passwordErrorRef.value)
        console.log(upperErrorRef.value)
        
        if (passwordErrorRef.value != null && elm.value.length > 0) {
            validPassword.value = (elm.value.length >= 8 ) 
            //&& "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

            passwordErrorRef.value.innerHTML = (validPassword.value) ?
                "&nbsp;" : "Minimum length: 8 characters"
        }

        if (upperErrorRef.value != null && elm.value.length > 0) {
            let uppercase = /[A-Z]/
            validPassword.value = (elm.value.match(uppercase))

            upperErrorRef.value.innerHTML = (validPassword.value) ?
                "&nbsp;" : "Required one uppercase character"            
        }

        if (specialErrorRef.value != null && elm.value.length > 0) {
            let special = /[!@#$%^&*]/
            validPassword.value = (elm.value.match(special))

            specialErrorRef.value.innerHTML = (validPassword.value) ?
                "&nbsp;" : "Required one special character"            
        }
    }

    function loadPreviewImg(evt) {
        profile.image = evt.target.files[0]
        let reader = new FileReader()
        reader.onloadend = function () {
            let img = document.querySelector("#preview-img")
            img.src = reader.result;
        }
        reader.readAsDataURL(profile.image)
    }


    //watch v-model input.value ref (called when string changes)
    watch(username, () => {
        validUsername.value = (username.value.length >= 4)

        usernameErrorRef.value.innerHTML = (validUsername.value) ?
            "&nbsp;" : "Minimum length: 4 characters"
    })

     // watch array of refs
    watch([password, password2], () => {
        passwordsMatch.value = (password.value === password2.value)

        password2ErrorRef.value.innerHTML = (passwordsMatch.value || password2.value.length == 0) ?
            "&nbsp;" : "Passwords do not match"

    })
    
    var constraints = {
        from: {
            email: true
        }
    }

    validate({from: null}, constraints)
    
    /*
    watch(phone, () => {
        if (phoneErrorRef.value != null && elm.value.length > 0) {
            let phone = validator.isMobilePhone(phone.value, option.mobileNumberLocale)
            validPhone.value = (elm.value.match(phone))

            phoneErrorRef.value.innerHTML = (validPhone.value) ?
                "&nbsp;" : "Enter a valid phone number"            
        }
        /*
        validPhone.value = validator.isMobilePhone(phone.value, option.mobileNumberLocale)
        
        phoneErrorRef.value.innerHTML = (!validPhone.value) ?
            "&nbsp;" : "Enter a valid phone number"
        
    })

    watch(email, () => {
        if (emailErrorRef.value != null && elm.value.length > 0) {
            let email = validator.isMobilePhone(email.value, option)
            validEmail.value = (elm.value.match(email))

            emailErrorRef.value.innerHTML = (validEmail.value) ?
                "&nbsp;" : "Invalid email"            
        }
        
        validEmail.value = validator.isEmail(email.value, options)

        emailErrorRef.value.innerHTML = (validEmail.value) ?
            "&nbsp;" : "Invalid email"
    })
    */
    // watch array of refs
    watch([validUsername, validPassword, passwordsMatch], async () => {
        disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value)
        console.log(disabled.value)

        if (!disabled.value) usernameRef.value.value = ''
    })

    function submit() {
        let mssg = username.value + ", " + password.value
        console.log(mssg)
    }

    onMounted(() => {
        usernameRef.value.focus();
    })

    onUpdated(() => {
        //console.log(usernameRef.value.value)
    })

   
</script>


<template>
    <div class="container">
        <form class="rounded border border-primary border-2 border-opacity-25 py-3 px-5">
            <fieldset class="d-flex flex-column">
                <legend>Create Account</legend>

                <div class="form-floating mb-2">
                    <input ref="usernameRef" v-model="username" id="username" type="text" class="form-control" />
                    <label for="username" class="form-label">Username</label>
                    <small ref="usernameErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <input :ref="componentUpdate" v-model="password" id="password" type="password"
                        class="form-control" />
                    <label for="password" class="form-label">Password</label>
                    <small ref="passwordErrorRef" class="text-danger">&nbsp;</small><br>
                    <small ref="upperErrorRef" class="text-danger">&nbsp;</small><br>
                    <small ref="specialErrorRef" class="text-danger">&nbsp;</small>

                </div>

                <div class="form-floating mb-2">
                    <input v-model="password2" id="password2" type="password" class="form-control" />
                    <label for="password2" class="form-label">Confirm Password</label>
                    <small ref="password2ErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <input v-model="email" id="email" type="email" class="form-control" />
                    <label for="email" class="form-label">Email</label>
                    <small ref="emailErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <input v-model="phone" id="phone" type="phone" class="form-control" />
                    <label for="phone" class="form-label">Phone Number</label>
                    <small ref="phoneErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div>
                    <label for="profile" class="form-label">Choose a profile picture:</label>
                    <input id="profile" class="form-control" type="file" name="profile"
                        accept="image/png, image/jpeg" @change="loadPreviewImg">
                </div>
                <br>
                <div>
                    <figure id="fig1">
                        <img id="preview-img">
                    </figure>
                </div>
                <br>
                <div>
                    <button @click="submit" class="btn btn-primary" type="button"
                        v-bind:disabled="disabled">Create</button>
                </div>
            </fieldset>
        </form>
    </div>

</template>

<style>
#preview-img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
}
</style>