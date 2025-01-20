
import Illustration from "../../assets/teste.jpg";
import './style.css';
import { useCallback, useEffect, useState } from "react";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import Icon from "../../components/Icon";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import IconLoading from "../../components/Icons/IconLoading";
import Logo from "../../assets/logo_label_gradient.svg";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Login() {

    const { login, logout } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailWarning, setEmailWarning] = useState(false);
    const [loading, setLoading] = useState(false);

    const ThemeColor = useSelector((state: any) => { return state.theme.color });

    const navigate = useNavigate();

    const handleLogin = useCallback(async () => {
        if (!email) {
            setEmailWarning(true)
            return
        }
        if (!password) {
            setPasswordError('active_error');
            return
        }
        setPasswordError('');
        setLoading(true);

        const result = await login(email, password);
        if (result?.success) {
            setLoading(false);
            navigate('/app/atendimentos');
        } else {
            setLoading(false);
            if (result.statusCode === 401) {
                toast.error("Usuário ou senha incorreto!");
                setPasswordError('active_error');
            } else {
                setEmailWarning(true)
                // toast.error("Algo de inesperado aconteceu. Entre em contato com a equipe de suporte.");
            }
            return
        }

    }, [email, password, login, navigate]);

    useEffect(() => {
        logout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="fixed h-screen w-screen flex justify-end bg-slate-700" data-theme={ThemeColor}>

            <img id="bg_login" src={Illustration} alt="Ilustração" className="fixed h-full object-cover blur-sm" />

            <div id="login_card" className="z-[1] absolute sm:w-2/3 w-full h-full overflow-auto flex justify-center items-center bg-white dark:bg-[#020617f7] dark:text-white p-8 sm:px-20">
                <div className="w-full max-w-lg top-0" >
                    <div className="header text-center mb-8">
                        <h2 className="text-3xl sm:text-5xl mt-6 mb-1 font-medium cursor-default">
                            Bem-vindo ao
                            <br />
                            {/* <strong className="sm:text-[3.5rem] text-brand font-black" >BLITZ</strong> */}
                            <img className="h-[50px] mx-auto my-[4px]" src={Logo} alt="" />
                        </h2>
                        <sub className="text-sm" >Não tem uma conta? <Link to="/" className="primary" >Clique aqui</Link></sub>
                    </div>
                    <div className="">

                        <div className="">
                            <div className="form-group">
                                <label htmlFor="input_email" className="block text-left" >E-mail</label>
                                <input
                                    type="mail"
                                    name="email"
                                    disabled={loading}
                                    id="input_email"
                                    placeholder={emailWarning ? 'Informe um email inválido' : `Informe seu email`}
                                    className={`primary ${emailWarning ? 'invalid' : ''}`}
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); (e.target.value ? setEmailWarning(false) : setEmailWarning(true)) }}
                                />
                                {/* {emailWarning && <div className="text-red-500 mb-[-24px]">Informe um email válido</div>} */}

                            </div>
                            <div className="form-group">
                                <label htmlFor="input_password" className="flex justify-between" >
                                    Senha
                                    <Link to={"/esqueci-minha-senha"} className="primary" >Esqueceu sua senha?</Link>
                                </label>
                                <input
                                    style={{ borderColor: passwordError ? 'red' : '' }}
                                    id="input_password"
                                    type="password"
                                    disabled={loading}
                                    name="password"
                                    placeholder="Informe sua senha"
                                    className={`primary ${passwordError && 'border-red-500 border-1 invalid'}`}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setPasswordError('') }}
                                />
                                {passwordError && <div className="text-red-500 mb-[-24px]">Senha incorreta</div>}
                            </div>

                            <div className="form-group mt-6">
                                <button
                                    onClick={() => { handleLogin() }}
                                    className={`${loading ? 'loading' : ''} flex justify-center items-center btn_login primary w-full ${passwordError}`}
                                >
                                    {loading && <IconLoading />}
                                    {loading ? 'Entrando...' : 'Entrar'}
                                </button>
                            </div>

                        </div>

                        <div className="border border-t-[1px solid] border-x-0 border-b-0 mt-11 py-8">
                            <p className="text-center" >Ou entre utilizando suas redes sociais</p>
                            <div className="flex gap-4 mt-5" >
                                <div className="w-1/2" >
                                    <button className="light w-full flex items-center justify-center gap-2" >
                                        <Icon className="mt-[-2px]" icon={"ri:google-fill"} />
                                        Google
                                    </button>
                                </div>
                                <div className="w-1/2" >
                                    <button className="light w-full flex items-center justify-center gap-2" >
                                        <Icon className="mt-[-2px]" icon={"ri:facebook-fill"} />
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="z-[3] absolute right-0 p-4 dark:text-white">
                <ThemeSwitcher />
            </div>

            <div hidden>
                <IconLoading />
            </div>
        </div>
    )
}