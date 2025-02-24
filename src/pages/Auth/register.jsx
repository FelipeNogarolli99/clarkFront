// // import { useState } from "react";
// // import "./styles.css";
// // import axios from "axios";


// // const Register = () => {
// //     const [name, setName] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [confirmPassword, setConfirmPassword] = useState("");
// //     const [message, setMessage] = useState("");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const userData = { name, email, password, confirmPassword };

// //         try {
// //             const response = await fetch("https://clackback-production.up.railway.app/register", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify(userData),
// //             });

// //             const data = await response.json();

// //             if (response.ok) {
// //                 setMessage("Cadastro realizado com sucesso!");
// //             } else {
// //                 setMessage(data.message || "Erro ao cadastrar");
// //             }
// //         } catch (error) {
// //             setMessage("Erro ao conectar ao servidor.");
// //             console.error(error);
// //         }
// //     };

// //     return (
// //         <div className="auth-container">
// //             <h2>Registrar</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-control">
// //                     <label htmlFor="name">Nome:</label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         placeholder="Digite seu nome"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-control">
// //                     <label htmlFor="email">E-mail:</label>
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         placeholder="Digite seu email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-control">
// //                     <label htmlFor="password">Senha:</label>
// //                     <input
// //                         type="password"
// //                         name="password"
// //                         placeholder="Digite a sua senha"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-control">
// //                     <label htmlFor="confirmPassword">Confirmar Senha:</label>
// //                     <input
// //                         type="password"
// //                         name="confirmPassword"
// //                         placeholder="Confirme a sua senha"
// //                         value={confirmPassword}
// //                         onChange={(e) => setConfirmPassword(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <input type="submit" value="Cadastrar" />
// //                 <p>
// //                     Já tem conta? <a href="/login">Clique aqui</a>
// //                 </p>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Register ;
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import "./styles.css";

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [isLoading, setIsLoading] = useState(false); // Controle de loading
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate(); // Para redirecionar após o cadastro

//     // Função de validação do formulário
//     const validateForm = () => {
//         if (!name.trim()) {
//             toast.error("O campo Nome é obrigatório.");
//             return false;
//         }
//         if (!email.trim()) {
//             toast.error("O campo E-mail é obrigatório.");
//             return false;
//         }
//         if (!password || password.length < 6) {
//             toast.error("A senha deve ter pelo menos 6 caracteres.");
//             return false;
//         }
//         if (password !== confirmPassword) {
//             toast.error("As senhas não coincidem.");
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) return;

//         const userData = { name, email, password };

//         try {
//             setIsLoading(true);
//             const response = await fetch("https://clackback-production.up.railway.app/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(userData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 toast.success("Cadastro realizado com sucesso!");
//                 navigate("/login"); // Redireciona para login após cadastro
//             } else {
//                 toast.error(data.message || "Erro ao cadastrar");
//             }
//         } catch (error) {
//             toast.error("Erro ao conectar ao servidor.");
//             console.error(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="auth-container">
//             <ToastContainer position="top-right" autoClose={3000} />
//             <h2>Registrar</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-control">
//                     <label htmlFor="name">Nome:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Digite seu nome"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label htmlFor="email">E-mail:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Digite seu email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label htmlFor="password">Senha:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Digite a sua senha"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label htmlFor="confirmPassword">Confirmar Senha:</label>
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirme a sua senha"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <input
//                     type="submit"
//                     value={isLoading ? "Cadastrando..." : "Cadastrar"}
//                     disabled={isLoading}
//                 />
//                 <p>
//                     Já tem conta? <a href="/login">Clique aqui</a>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Register;


import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Controle de loading
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Para redirecionar após o cadastro

    // Função de validação do formulário
    const validateForm = () => {
        if (!name.trim()) {
            toast.error("O campo Nome é obrigatório.");
            return false;
        }
        if (!email.trim()) {
            toast.error("O campo E-mail é obrigatório.");
            return false;
        }
        if (!password || password.length < 6) {
            toast.error("A senha deve ter pelo menos 6 caracteres.");
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("As senhas não coincidem.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const userData = { name, email, password };

        try {
            setIsLoading(true);
            const response = await fetch("https://clackback-production.up.railway.app/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Cadastro realizado com sucesso!");
                navigate("/login"); // Redireciona para login após cadastro
            } else {
                toast.error(data.message || "Erro ao cadastrar");
            }
        } catch (error) {
            toast.error("Erro ao conectar ao servidor.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <ToastContainer position="top-right" autoClose={3000} />
            <h2>Registrar</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <input
                    type="submit"
                    value={isLoading ? "Cadastrando..." : "Cadastrar"}
                    disabled={isLoading}
                />
                <p>
                    Já tem conta? <a href="/login">Clique aqui</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
