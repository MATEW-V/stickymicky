import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>DebtFlix</h1>
            </div>
            <div className="subheaders2">
                <div className="subheader-items2">
                    <h1>Movies</h1>
                </div>
                <div className="subheader-items2">
                    <h1>TV shows</h1>
                </div>
                <div className="subheader-items2">
                    <h1>Popular</h1>
                </div>
                <div className="subheader-items2">
                    <h1>Recent</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;