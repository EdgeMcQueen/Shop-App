export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/1.png')
            },
            {
                id: 2,
                title: 'Nike Default',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/4.png')
            },
            {
                id: 3,
                title: 'Nike Green',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/7.png')
            },
            {
                id: 4,
                title: 'Nike Street',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/10.png')
            },
        ],
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList (state) {
            return state.shopList
        }
    },
}