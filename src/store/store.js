import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Virat', price: 20},
            {name: 'Dhoni', price: 40},
            {name: 'Rohit', price: 60},
            {name: 'Uttappa', price: 80}
        ]
    },
    getters: {// In order to change the price //
        saleProducts: (state) => {
            var saleProducts = state.products.map( product => {
                return {
                    name:  '##' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach( product => {
                product.price -= 1
            });
        }
    }
});