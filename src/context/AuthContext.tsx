import axios, { AxiosInstance } from 'axios';
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { IUsuario } from '../interfaces';
import { useDispatch } from 'react-redux';
import { setModules } from '../redux/ModulesSlice';
import { reduxSetFiliais } from '../redux/FiliaisSlice';



interface AuthContextProps {
    authState: AuthStateProps;
    login: (email: string, password: string) => (Promise<{ success: boolean, usuario: IUsuario, statusCode: number }> | Promise<{ success: boolean, usuario: {}, statusCode: number }>);
    logout: () => Promise<void>;
    api_auth: AxiosInstance;
}


interface IModulos {
    id: number;
    descricao: string;
    icone: string;
    url: string;
}


interface AuthStateProps {
    usuario: IUsuario | null;
    token: string | null;
    refreshToken: string | null;
    modulos: IModulos[];
}



const AuthContext = createContext<AuthContextProps | undefined>(undefined);



interface AuthProviderProps {
    children: ReactNode;
}



const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const dispatch = useDispatch();

    const [authState, setAuthState] = useState(() => {

        const string_usuario = localStorage.getItem('usuario');
        const usuario = JSON.parse(string_usuario ? string_usuario : '{}');
        const string_modulos = localStorage.getItem('modulos');
        const modulos = JSON.parse(string_modulos ? string_modulos : '[]');
        const string_filiais = localStorage.getItem('filiais');
        const filiais = JSON.parse(string_filiais ? string_filiais : '[]');
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');

        // console.log("filiais refresh", filiais);
        dispatch(setModules(modulos));
        dispatch(reduxSetFiliais(filiais));

        if (token && refreshToken && usuario) {
            return ({ usuario, token, refreshToken, modulos: modulos });
        } else {
            return ({ usuario: {} as IUsuario, token: '', refreshToken: '', modulos: [] });
        }
    });




    const login = async (email: string, password: string) => {

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
            const { usuario, token, refreshToken, modulos, filiais } = response.data;
            // console.log(response.data);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('usuario', JSON.stringify(usuario));
            localStorage.setItem('modulos', JSON.stringify(modulos));
            localStorage.setItem('filiais', JSON.stringify(filiais));

            // console.log('filiais setados', filiais);
            dispatch(setModules(modulos));
            dispatch(reduxSetFiliais(filiais));

            setAuthState({ usuario, token, refreshToken, modulos });
            return { success: true, usuario, statusCode: response.status };

        } catch (error: any) {
            setAuthState({ usuario: {} as IUsuario, token: '', refreshToken: '', modulos: [] });
            return { success: false, usuario: {}, statusCode: error.response?.status };
        }
    };


    const logout = async () => {
        try {
            // Limpar localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('usuario');

            setAuthState({ usuario: {} as IUsuario, token: '', refreshToken: '', modulos: [] });
        } catch (error) {
            setAuthState({ usuario: {} as IUsuario, token: '', refreshToken: '', modulos: [] });
        }
    };


    const api_auth = axios.create({
        baseURL: `${process.env.EACT_APP_API_URL}`,
    });


    api_auth.interceptors.request.use(
        async (config) => {
            // Adicionar o token de autenticação à solicitação se disponível
            const token = authState.token;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );


    api_auth.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
            // Se o erro for de autenticação e o token expirou, tentar renovar o token
            if (error?.response?.status === 401 && !originalRequest._retry && authState.refreshToken) {
                originalRequest._retry = true;
                try {
                    const response = await axios.post(`${process.env.REACT_APP_API_URL}/refresh-token`, {
                        refresh_token: authState.refreshToken,
                    });

                    const { usuario, token, refreshToken, modulos } = response.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    localStorage.setItem('modulos', JSON.stringify(modulos));

                    setAuthState({ usuario, token, refreshToken, modulos });
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axios(originalRequest);

                } catch (refreshError) {
                    await logout();
                    throw refreshError;
                }

            } else if ((error?.response?.status === 401 && originalRequest._retry) || !authState.refreshToken) {
                await logout();
            }

            return Promise.reject(error);
        }
    );


    const contextValue: AuthContextProps = {
        authState,
        login,
        logout,
        api_auth,
    };


    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};



const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};



export { AuthProvider, useAuth };
