export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/1.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/1.png')},
                    {name: 'Nike boots second', img: require('../assets/img/2.png')},
                    {name: 'Nike boots third', img: require('../assets/img/3.png')}
                ]
            },
            {
                id: 2,
                title: 'Nike Default',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/4.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/4.png')},
                    {name: 'Nike boots second', img: require('../assets/img/5.png')},
                    {name: 'Nike boots third', img: require('../assets/img/6.png')}
                ]
            },
            {
                id: 3,
                title: 'Nike Green',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/7.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/7.png')},
                    {name: 'Nike boots second', img: require('../assets/img/8.png')},
                    {name: 'Nike boots third', img: require('../assets/img/9.png')}
                ]
            },
            {
                id: 4,
                title: 'Nike Street',
                description: 'Incididunt elit in et esse aute est minim incididunt aliqua.Incididunt elit in et esse aute est minim incididunt aliqua.',
                img: require('../assets/img/10.png'),
                gallery: [
                    {name: 'Nike boots second', img: require('../assets/img/11.png')},
                    {name: 'Nike boots third', img: require('../assets/img/12.png')}
                ]
            },
        ],
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList (state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id === +id)
        }
    },
}