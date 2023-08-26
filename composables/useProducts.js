import { v4 as uuidv4 } from 'uuid'
export function useProducts(){
    let id = uuidv4
    const products = ref([
            {id: id(), title: "Bushy Whispers", price: 11.90 ,image: '_nuxt/assets/img/stickers/BW.png'},
            {id: id(), title: "Tom Nook", price: 9.50 ,image: '_nuxt/assets/img/stickers/image20.png'},
            {id: id(), title: "Magneto X", price: 7.16 ,image: '_nuxt/assets/img/stickers/image21.png'},
            {id: id(), title: "Fight Covid", price: 14.50 ,image: '_nuxt/assets/img/stickers/image22.png'},
            {id: id(), title: "COD Logo", price: 5.30 ,image: '_nuxt/assets/img/stickers/image23.png'},
            {id: id(), title: "Poke Rangers" , price: 10.50 ,image: '_nuxt/assets/img/stickers/image24.png'},
            {id: id(), title: "L'Hypnotiseur", price: 6.80 ,image: '_nuxt/assets/img/stickers/image25.png'},
            {id: id(), title: "Chat de grand malheur", price: 9.80 ,image: '_nuxt/assets/img/stickers/image26.png'},
            {id: id(), title: "Cerveau", price: 7.50 ,image: '_nuxt/assets/img/stickers/image27.png'},
            {id: id(), title: "Chat démonique", price: 4.50 ,image: '_nuxt/assets/img/stickers/image28.png'},
            {id: id(), title: "Pedo Bear Ice Cream", price: 9.80 ,image: '_nuxt/assets/img/stickers/image29.png'},
            {id: id(), title: "Rondu Puff", price: 6.80 ,image: '_nuxt/assets/img/stickers/image30.png'},
            {id: id(), title: "Bob L'Eponge", price: 9.80 ,image: '_nuxt/assets/img/stickers/image31.png'},
            {id: id(), title: "Happy Dead SpongeBob", price: 7.50 ,image: '_nuxt/assets/img/stickers/image32.png'},
            {id: id(), title: "Arthur Pixel", price: 4.50 ,image: '_nuxt/assets/img/stickers/image33.png'},
    ])
    return { products }
}