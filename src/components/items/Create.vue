<template>
    <div class = "create" id = "create">
        <div class = "grid-container">
            <div class = "medium-6 large-6 large-offset-3 column">
                <h4>Add Item</h4>
                <div class="row">
                    <form @submit.prevent = "addItem">
                        <div class="large-12 medium-12">
                            <label>Item Name
                                <input type = "text" placeholder = "Descriptive name of the item"
                                       v-validate = "'required'" v-model="item.name" name = "name">
                            </label>
                            <span v-show = "errors.has('name')"
                                  class = "help is-danger">{{ errors.first('name')}}</span>
                        </div>
                        <div class="large-12 medium-12">
                            <label>Item Description
                                <textarea type = "text" placeholder = "Descriptive name of the item" cols="10" rows="3"
                                          v-validate = "'required'" v-model="item.description" name = "description"> </textarea>
                            </label>
                            <span v-show = "errors.has('description')"
                                  class = "help is-danger">{{ errors.first('description')}}</span>
                        </div>
                        <div class="large-12 medium-12">
                            <label>Total Number
                                <input type = "number" placeholder = "How many?" v-model="item.total_number" data-vv-as="number"
                                       v-validate = "'required|min_value:1'" name = "item-number">
                            </label>
                            <span v-show = "errors.has('item-number')"
                                  class = "help is-danger">{{ errors.first('item-number')}}</span>
                        </div>
                        <div class="large-12 medium-12">
                            <label>Price Per Item
                                <input type = "number" placeholder = "KSh 102" v-model="item.price"
                                       v-validate = "'required|min_value:100'" name = "price">
                            </label>
                            <span v-show = "errors.has('price')"
                                  class = "help is-danger">{{ errors.first('price')}}</span>
                        </div>
                        <div class="large-12 medium-12">
                            <button class="button primary" value="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import swal from 'sweetalert2';
    import {add_item_url, get_header} from "../../global/config";

    export default {
        data() {
            return {
                item: {
                    name: '', description: '', total_number: '', price: ''
                }
            }
        },
        methods: {
            addItem(){
                this.$validator.validateAll().then(() => {
                    let post_data = this.item;
                    axios.post(add_item_url,post_data, {header:get_header()})
                        .then(response => {
                            if(response.status === 200){
                                swal('Adding Item', response.data.message, 'success');
                            }
                        })
                });
            }
        }
    }

</script>

<style type = "scss">

</style>