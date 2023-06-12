import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const menu = (
    <>
      <li className={router.pathname == "/" ? "border-b-2 border-primary" : ""}>
        <Link href="/">All Meetups</Link>
      </li>
      <li
        className={
          router.pathname == "/add-meetup" ? "border-b-2 border-primary" : ""
        }
      >
        <Link href="/add-meetup">Add Meetup</Link>
      </li>
    </>
  )
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="z-10 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-semibold p-3">
          <span className="text-primary">Next</span>Meets
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1">{menu}</ul>
      </div>
    </div>
  )
}

export default Navbar
