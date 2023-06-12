import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <div className="p-3 md:p-6 ">
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
