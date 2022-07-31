import CharacterContainer from "../pages/character/CharacterContainer";
import EpisodeContainer from "../pages/episode/EpisodeContainer";
import MainContainer from "../pages/main/MainContainer";


export const episode = 'episode'
export const character = 'character'

export const AppLinks = [{
    link: '/',
    Component: MainContainer,
    label: 'Main',
    showLink: false
}, {
    link: `${episode}/:episode_id`,
    Component: EpisodeContainer,
    label: 'Episode',
    showLink: false
},{
    link: `${character}/:characterName`,
    Component: CharacterContainer,
    label: 'Character',
    showLink: false
}] as const

