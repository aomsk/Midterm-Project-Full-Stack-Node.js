import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar is-warning">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link href={'/'}>
                            <a className="navbar-item">
                                Home
                            </a>
                        </Link>
                        <a className="navbar-item">
                            Tag
                        </a>
                        <Link href={'/userlist'}>
                            <a className="navbar-item">
                                User List
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar