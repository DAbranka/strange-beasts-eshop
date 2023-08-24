import { v4 as uuidv4 } from 'uuid'
export function useHeroStickers(){
    let id = uuidv4
    const heroStickers = ref([
        [
            {id: id(), title: "Bushy Whispers" ,image: '_nuxt/assets/stickers/BW.png'},
            {id: id(), title: "Tom Nook" ,image: '_nuxt/assets/stickers/image20.png'},
            {id: id(), title: "Magneto X" ,image: '_nuxt/assets/stickers/image21.png'},
            {id: id(), title: "Fight Covid" ,image: '_nuxt/assets/stickers/image22.png'},
            {id: id(), title: "COD Logo" ,image: '_nuxt/assets/stickers/image23.png'},
        ],
        [
            {id: id(), title: "Poke Rangers" ,image: '_nuxt/assets/stickers/image24.png'},
            {id: id(), title: "L'Hypnotiseur" ,image: '_nuxt/assets/stickers/image25.png'},
            {id: id(), title: "Chat de grand malheur" ,image: '_nuxt/assets/stickers/image26.png'},
            {id: id(), title: "Cerveau" ,image: '_nuxt/assets/stickers/image27.png'},
            {id: id(), title: "Chat démonique" ,image: '_nuxt/assets/stickers/image28.png'},
        ]
    ])

    

    return { heroStickers }
}