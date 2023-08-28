export function useProducts(){
    const products = ref([
            {id: "0", title: "Bushy Whispers", price: 11.90 ,image: '_nuxt/assets/img/stickers/BW.png'},
            {id: "1", title: "Tom Nook", price: 9.50 ,image: '_nuxt/assets/img/stickers/image20.png'},
            {id: "2", title: "Magneto X", price: 7.16 ,image: '_nuxt/assets/img/stickers/image21.png'},
            {id: "3", title: "Fight Covid", price: 14.50 ,image: '_nuxt/assets/img/stickers/image22.png'},
            {id: "4", title: "COD Logo", price: 5.30 ,image: '_nuxt/assets/img/stickers/image23.png'},
            {id: "5", title: "Poke Rangers" , price: 10.50 ,image: '_nuxt/assets/img/stickers/image24.png'},
            {id: "6", title: "L'Hypnotiseur", price: 6.80 ,image: '_nuxt/assets/img/stickers/image25.png'},
            {id: "7", title: "Chat de grand malheur", price: 9.80 ,image: '_nuxt/assets/img/stickers/image26.png'},
            {id: "8", title: "Cerveau", price: 7.50 ,image: '_nuxt/assets/img/stickers/image27.png'},
            {id: "9", title: "Chat démonique", price: 4.50 ,image: '_nuxt/assets/img/stickers/image28.png'},
            {id: "10", title: "Pedo Bear Ice Cream", price: 9.80 ,image: '_nuxt/assets/img/stickers/image29.png'},
            {id: "11", title: "Rondu Puff", price: 6.80 ,image: '_nuxt/assets/img/stickers/image30.png'},
            {id: "12", title: "Bob L'Eponge", price: 9.80 ,image: '_nuxt/assets/img/stickers/image31.png'},
            {id: "13", title: "Happy Dead SpongeBob", price: 7.50 ,image: '_nuxt/assets/img/stickers/image32.png'},
            {id: "14", title: "Arthur Pixel", price: 4.50 ,image: '_nuxt/assets/img/stickers/image33.png'},
    ])
    return { products }
}