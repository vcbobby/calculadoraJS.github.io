function Navbar({ ct }) {

    const prevenir = (nuevoTema, e) => {
        e.preventDefault();
        ct(nuevoTema);
    };

    return (
        <>
            <div className="navbar">
                <ul>
                    <li><a href="#" onClick={(e) => prevenir('Light', e)}>Light</a></li>
                    <li><a href="#" onClick={(e) => prevenir('Dark', e)}>Dark</a></li>
                    <li><a href="#" onClick={(e) => prevenir('Sky', e)}>Sky</a></li>
                    <li><a href="#" onClick={(e) => prevenir('Forest', e)}>Forest</a></li>
                    <li><a href="#" onClick={(e) => prevenir('Blood', e)}>Blood</a></li>
                    <li><a href="#" onClick={(e) => prevenir('Pink', e)}>Barby</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;