import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success('Login successful!');
  };

  return (
    <>
      <Helmet>
        <title>Login - J.K.Y Mart</title>
      </Helmet>
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="glass rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-8 text-center gradient-text">Welcome Back</h1>

          {/* Login Method Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                loginMethod === 'email'
                  ? 'bg-accent text-white'
                  : 'bg-slate-100 dark:bg-secondary text-slate-600 dark:text-slate-300'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                loginMethod === 'phone'
                  ? 'bg-accent text-white'
                  : 'bg-slate-100 dark:bg-secondary text-slate-600 dark:text-slate-300'
              }`}
            >
              Phone
            </button>
            <button
              onClick={() => setLoginMethod('google')}
              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                loginMethod === 'google'
                  ? 'bg-accent text-white'
                  : 'bg-slate-100 dark:bg-secondary text-slate-600 dark:text-slate-300'
              }`}
            >
              Google
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Login */}
            {loginMethod === 'email' && (
              <>
                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Phone Login */}
            {loginMethod === 'phone' && (
              <div>
                <label className="block font-semibold mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
            )}

            {/* Google Login */}
            {loginMethod === 'google' && (
              <button
                type="button"
                className="w-full border border-slate-300 dark:border-slate-600 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-secondary transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign in with Google
              </button>
            )}

            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-accent/90 transition"
            >
              {loginMethod === 'email' ? 'Login' : 'Send OTP'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
