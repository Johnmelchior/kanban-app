import SideBar from "./SideBar"
import TopBar from "./TopBar"
import './layout.css';

const Layout = ({ children }) => {
	return (
		<div>
			<SideBar />
			<TopBar />
			<main className="main-content">
				{children}
			</main>
		</div>
	)
}

export default Layout;