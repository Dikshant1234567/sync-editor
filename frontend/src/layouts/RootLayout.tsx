import CodeEditor from "../components/CodeEditor"
import SideBar from "../components/SideBar"

function RootLayout() {
  return (
    <div className="flex w-screen h-screen">
      <SideBar/>
      <CodeEditor/>
    </div>
  )
}

export default RootLayout
