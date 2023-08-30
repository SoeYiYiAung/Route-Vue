<template>
    <div>
        <h1 class="mt-5">Product Page</h1>
        <!-- <button class="btn btn-primary" @click="upload">Upload Product</button> -->


    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10">
                
            </div>
            <div class="col-md-2">
                <select name="" id="" class="form-select" v-model="category" @change="filterProducts">
                    <option value="all">All</option>
                    <option :value="index" v-for="category,index in categories" :key="category">{{category}}</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 mt-3" v-for="product in filter_item" :key="product">

                <div class="card cardheight">
                    <img :src="product.image" class="card-img-top imgstyle" alt="...">
                    <div class="card-body">
                        <h6 class="card-title">{{product.title}}</h6>
                        <p class="card-text text-truncate">{{product.description}}</p>
                        <a href="#" class="btn btn-primary">See Details</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
    export default {

        name:'ProductPage',
        data(){
            return{
                products:[

                ],
                categories:[

                ],
                category:'all',
                filter_item:[

                ]
            }
        },
        methods:{
            // upload()
            // {
            //     axios.get('http://fakestoreapi.com/products')
            //     .then(response=>this.products=response.data)
            // }

            filterProducts()
            {
                if(this.category != 'all')
                {
                    this.filter_item=this.products.filter((item)=>this.categories[this.category]===item.category)
                }
                else{
                    this.filter_item=this.products
                }
            }
        },
        created()
        {
            axios.get('http://fakestoreapi.com/products')
                .then(response=>this.products=response.data)
                .then(data=>this.filter_item=data)

            axios.get('http://fakestoreapi.com/products/categories')
                .then(response=>this.categories=response.data)    
        }
        
    }
</script>

<style scoped>
.imgstyle{
    height: 200px;
}
.cardheight{
    height:400px
}
</style>