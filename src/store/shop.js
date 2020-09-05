export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/1.png')
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList (state) {
            return state.shopList
        }
    },
}