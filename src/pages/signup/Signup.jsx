import { useState, useEffect } from 'react'
import { useSignup } from '../../hooks/useSignup'             // adjust paths if needed
import { UserAuth } from '../../context/AuthContext'
import { useTheme } from '../../hooks/useTheme'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import googleIcon from '../../images/googleicon.png'           // replace Image with img

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()
  const { googleSignIn } = UserAuth()
  const { color } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
    setEmail('')
    setPassword('')
    setDisplayName('')
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
  }

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4"
      data-aos="fade-up"
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Create your account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
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

          {!isPending ? (
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Sign up
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-green-400 text-white py-3 rounded-md"
            >
              Signing up...
            </button>
          )}

          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 mt-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
        >
          <img src={googleIcon} alt="Google" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
