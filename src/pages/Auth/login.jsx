import { useState } from "react";
import "./styles.css";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("Tentando fazer login...");
        try {
            const response = await axios.post("https://clackback-production.up.railway.app/auth/login", { email, password });
            console.log(response); // Verifique a resposta aqui
    
            if (response.status === 200) {
                window.location.href = "/"; // Redireciona para a home após login bem-sucedido
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("E-mail ou senha incorretos!"); // Exibir erro para o usuário
        }
    };


    return (
        <div className="auth-container">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Entrar" />
                <p>
                    Não tem uma conta? <a href="/register">Clique aqui</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
