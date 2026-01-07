import axios from 'axios';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import { UserInfo } from '../interfaces/UserInfo';
import AuthService from './AuthService';

const GITHUB_API_URL = import.meta.env.VITE_API_URL;

const githubApi=axios.create({
    baseURL: GITHUB_API_URL,
});
githubApi.interceptors.request.use((config) => {
    const authHeader = AuthService.getAuthHeaders();
    if (authHeader) {
        config.headers['Authorization'] = authHeader;
    }   
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
    try {
        const response = await githubApi.get(`/user/repos` , {
            params: {
                per_page: 100,
                sort: 'created',
                direction: 'desc',
                affiliation: 'owner',

            },
        });
        const repositories: RepositoryItem[] = response.data.map((repo: any) => ({
            name: repo.name,
            description: repo.description ? repo.description : null,
            imageUrl: repo.owner ? repo.owner.avatar_url : null,
            owner: repo.owner ? repo.owner.login : null,
            language: repo.language ? repo.language : null,
        }));
        return repositories;
    } catch (error) {
        console.error('Error al obtener repositorios:', error);
        return [];
    }
}
export const createRepository = async (repo: RepositoryItem): Promise<void> => {
    try {
        const response = await githubApi.post(`/user/repos`,repo, {
            
        });
        console.log('Repositorio creado:', response.data);
    } catch (error) {
        console.error('Error al crear repositorio:', error);
    }
};
export const getUserInfo = async () : Promise<UserInfo | null> => {
    try {
        const response = await githubApi.get(`/user`, {
            });
            return response.data as UserInfo;
    
    }catch (error) {
        console.error('Error al obtener información del usuario:', error);
        const userNotFound: UserInfo = {
            login: 'undefined',
            name: 'Usuario no encontrado',
            bio: 'No se puede obtener la información del usuario',
            avatar_url: 'https://static.vecteezy.com/system/resources/previews/026/551/249/non_2x/profile-page-pixelated-ui-icon-address-book-management-contact-user-name-phone-number-editable-8bit-graphic-element-outline-isolated-user-interface-image-for-web-mobile-app-retro-style-vector.jpg',

        };
        return userNotFound;

    }
};