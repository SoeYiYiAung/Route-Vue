<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <form @submit.prevent="signUp">
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control" aria-describedby="emailHelp" v-model="formData.username">
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="formData.email">
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="formData.password">
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'SignUpPage',
        data(){
            return{
                formData:
                {
                    username:'',
                    email:'',
                    password:''
                },
            }
        },
        methods:{
            async signUp(){
                console.log(this.formData)
                await axios.post('http://localhost:3000/users/',this.formData)
                this.formData={
                    username:'',
                    email:'',
                    password:''
                }
            }
            }
            


        
    }
</script>

<style scoped>

</style>