import { render, waitFor } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import App from '../App';
import { mockCharacter, mockEpisode } from './mockData';
import { character, episode } from '../common/constants';
  

jest.mock('../common/hooks',() => ({
    useGetDataBy: (url) => {
        const mockEpisodes = url.includes('episode')

        return {
            data: mockEpisodes ? [mockEpisode] : [mockCharacter],
            isLoading: false,
            error: ''
        }}
}))

const renderComponent = (initialRoute) => render(
    <MemoryRouter initialEntries={[initialRoute]} >
        <App />
    </MemoryRouter>
)

describe('tests of app', ()=>{
    it('should show eposides list', async ()=>{
        const {getByText, getAllByRole} = renderComponent('/')
    
        await waitFor(() => {
            expect(getByText('Pilot')).toBeDefined()

            expect( getAllByRole('link',{name: 'See episode'})[0] ).toHaveAttribute('href', `${episode}/1`)
        })
    })

    it('should show eposides list and navigate to detail episode page ', async ()=>{
        const { getByText, getByRole, getAllByRole } = renderComponent(`/${episode}/1`)


        await waitFor(() => {
            expect(getByText(`Title: ${mockEpisode.title}`)).toBeDefined()

            expect(
                getByRole('link',{name: 'Episodes'})
            ).toHaveAttribute('href', '/')
            expect(
                getAllByRole('link',{name: mockEpisode.characters[0]})[0]
            ).toHaveAttribute('href',`/character/${ mockEpisode.characters[0].replace(' ', '+')}`)
        })  
    })

    it('should render character page ', async ()=>{
        const { getByText } = renderComponent(`/${character}/Jesse+Pinkman`)


        await waitFor(() => {
            expect(getByText(`Nickname: ${mockCharacter.nickname}`)).toBeDefined()
        })
    })
})