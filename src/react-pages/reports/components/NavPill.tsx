const NavPill: React.FC<{ active: boolean, year: number }> = ({ active, year }) => {
    if (active) {
        return (
            <li className="nav-item px-3" role="presentation" style={{ marginBottom: "1rem" }}>
                <a className="btn nav-link active" id={`pills-${year}-tab`} data-toggle="pill"
                    href={`#pills-${year}`} role="tab" aria-controls={`pills-${year}`} aria-selected="true"
                >{year}</a>
            </li>)
    }
    return (
        <li className="nav-item px-3" role="presentation" style={{ marginBottom: "1rem" }}>
            <a className="btn nav-link" id={`pills-${year}-tab`} data-toggle="pill"
                href={`#pills-${year}`} role="tab" aria-controls={`pills-${year}`}
            >{year}</a>
        </li>
    )
}

export default NavPill