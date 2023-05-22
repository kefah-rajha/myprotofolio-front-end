import Navbar from "./navbar";
type allLayoutProps = {
    children: React.ReactNode,
  };
const layout=({children}:allLayoutProps)=>{
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    </>
  )
}

export default layout