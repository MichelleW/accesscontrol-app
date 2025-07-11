

function AccessRoles() {
    return (
        <div><h2>Access roles</h2>
            <div className="bg-light p-3">
                This has a light gray background.
            </div>
            <div className="bg-secondary text-white p-3">
                This has a medium gray background.
            </div> <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>  </div>

    )
}

export default AccessRoles