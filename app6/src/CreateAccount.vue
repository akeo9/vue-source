<script setup>
import {ref, reactive} from 'vue'

const title = ref("Order Form")

const order = reactive({
    name: {
        first: "",
        last: ""
    },
    email: "",
    size: "",
    quantity: "",
    delivery: "",
    addr: {
        street: "",
        street2: "",
        city: "",
        zip: ""
    },
})

function submit() {
    console.log("User data:")
    let userObj = { ...user }
    console.log(userObj)
    let jsonString = JSON.stringify(user);
    console.log(jsonString)
    let jsonObject = JSON.parse(jsonString)
    console.log(jsonObject)
}

</script>

<template>
  <div class="container">
    <div class="head">
    <h1> {{title}} </h1>
    <legend>Please fill in your information and we'll be sending your order in no time.</legend><br>
    </div>
    <br>
    <form>
        <div class="row">
        <div>
            <div class="col-25">
                <label for="firstName" class="form-label">Name </label>
            </div>
            <div class="col-75">
                <input id="firstName" type="text" class="form-control" v-model="order.name.first"
                    placeholder="Jane" required>
                <label for="lastName" class="form-label"></label>
                <input id="lastName" type="text" class="form-control" v-model="order.name.last"
                    placeholder="Doe" required>
            </div>
            <br>
        </div>

        <div>
            <div class="col-25">
                <label for="email" class="form-label">Email </label>
            </div>
            <div class="col-75">
                <input id="email" type="email" class="form-control" v-model="order.email"
                    placeholder="janedoe@domain.com" required>
            </div>
            <br>
        </div>

        <div>
            <div class="col-25">
                <label for="size">Size </label>
            </div>
            <div class="col-75">
                <select id="size" class="form-control" name="size" v-model="order.size" required>
                    <option value="">--Please choose a size--</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <br>
        </div> 

        <div>
            <div class="col-25">
                <label for="quantity">Quantity </label>
            </div>
            <div class="col-75">
                <input type="number" id="quantity" name="quantity" min="0" v-model="order.quantity" required>
            </div>
            <br>
        </div>

        <div>
            <div class="col-25">
                <label for="delivery">Delivery Date: </label>
            </div>
            <div class="col-75">
                <input type="date" id="delivery" name="deliveryDate" value="2023-02-02" min="2023-02-02" max="2024-04-30" required><br>
            </div>
            <br>
        </div>

        <div class="col">
            <div class="col-25">
                <label for="address">Delivery Address </label><br>
            </div>
            <div class="col-75">
                <input type= "text" id= "street" size="50" v-model="order.addr.street"
                    placeholder="Street Address" required><br>
                <input type= "text" id= "street2" size="50" v-model="order.addr.street2"
                    placeholder="Street Address Line 2"><br>
                <input type= "text" id= "city"  v-model="order.addr.city"
                    placeholder="City" required><br>
                <input type= "text" id= "zip" v-model="order.addr.zip"
                    placeholder="Postal / Zip Code" required>
            </div>
            <br>
            <br>
        </div>
            <input type="submit" value="Purchase"/>
        </div>
    </form> 

    <div class="info">
        <h3>Information</h3>

            <span>Name: {{ order.name.first }} {{ order.name.last }} </span> <br>
            <span>Email: {{ order.email }} </span> <br>
            <span>Size: {{ order.size }} </span> <br>
            <span>Quantity: {{ order.quantity }} </span> <br>
            <span>Date: {{ order.delivery }}</span><br>
            <span>Delivery Address: {{ order.addr.street }} {{ order.addr.street2 }} {{ order.addr.city }} {{ order.addr.zip }}</span> <br>
    </div>
  </div>


</template>

<style>
.container {
    padding: 10px 50px 80px 50px
}

.head {
    border-style: solid;
    border-color:limegreen;
    border-width: 20px;
    background-color: limegreen;
}

* {
  box-sizing: border-box;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}


form {
    border-style: solid;
    border-color:white;
    border-width: 20px;
    background-color: white;  
}

label {
    margin-top: 10px;
    padding-right: 10px;
    display: inline-block;
}

input {
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
}

.col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
}

.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

input[type=submit] {
  background-color: limegreen;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  float: right;
  width: 20%;
}

.info {
    padding: 10px;
    border-style: solid;
    border-color: lightgrey;
    border-width: 5px;
    border-radius: 5px;
    background-color: lightgrey;
    line-height: 25px;
}

</style>