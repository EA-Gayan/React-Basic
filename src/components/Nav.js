function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
                <li>{props.li}</li>
            </ul>
        </nav>
    );
};

export default Nav;