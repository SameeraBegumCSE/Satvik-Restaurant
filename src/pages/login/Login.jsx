import { useLogin } from "../../hooks/useLogin"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTheme } from "../../hooks/useTheme"
import googleLogo from "../../images/googleicon.png" // Replace with correct path

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const { login, error, isPending } = useLogin()
  const { color } = useTheme()

  function handleSubmit(e) {
    e.preventDefault()
    login(email, password)
    setEmail("")
    setPassword("")
  }

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4"
      data-aos="fade-down"
    >
      <div className="w-full max-w-md">
        <h2 className="text-lg text-gray-700 mb-1">Welcome back</h2>
        <h1 className="text-2xl font-bold mb-6">Login to your account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {!isPending ? (
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all"
            >
              Login now
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-green-400 text-white py-3 rounded-md"
            >
              Logging in...
            </button>
          )}

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 mt-4 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  )
}
