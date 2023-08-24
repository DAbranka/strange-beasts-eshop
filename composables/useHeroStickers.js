import { v4 as uuidv4 } from 'uuid'
export function useHeroStickers(){
    let id = uuidv4
    const heroStickers = ref([
        {id: id(), title: "Bushy Whispers" ,image: '_nuxt/assets/stickers/BW.png'},
        {id: id(), title: "L'hypnotiseur" ,image: '_nuxt/assets/stickers/image25.png'},
        {id: id(), title: "Chat de grand malheur" ,image: '_nuxt/assets/stickers/image26.png'},
        {id: id(), title: "Chat de grand malheur" ,image: '_nuxt/assets/stickers/image27.png'},
        {id: id(), title: "Chat de grand malheur" ,image: '_nuxt/assets/stickers/image29.png'},
    ])

    return { heroStickers }
}