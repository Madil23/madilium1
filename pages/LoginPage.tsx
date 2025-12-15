import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { Mail, KeyRound, Loader2 } from 'lucide-react';
import { login } from '../services/authService';

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const response = await login(email, password);
        
        setIsLoading(false);

        if (response.success) {
            alert('Login successful! (In a real app, you would be redirected)');
            // In a real app, you'd update global state and redirect
            // e.g., auth.login(response.user); window.location.href = '/dashboard';
        } else {
            setError(response.error || 'An unknown error occurred.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900/50 py-12 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <a href="#"><Logo /></a>
                    <h2 className="mt-6 text-2xl font-bold text-white">Welcome Back</h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Don't have an account? <a href="#signup" className="font-medium text-cyan-400 hover:text-cyan-300">Sign up</a>
                    </p>
                </div>

                <div className="glass-panel rounded-2xl p-8 shadow-2xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
                            <div className="relative">
                                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-5 w-5 text-slate-500" />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                            <div className="relative">
                                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <KeyRound className="h-5 w-5 text-slate-500" />
                                </span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        
                        {error && <p className="text-sm text-red-400 text-center">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-4 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-wait"
                            >
                                {isLoading && <Loader2 className="animate-spin" size={20} />}
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
