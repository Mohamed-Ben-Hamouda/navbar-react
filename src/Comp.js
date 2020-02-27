import React from 'react';
const NavMenu = props => {
    return (
        <div >
            <ul className="sub">{props.data.map(el => (
                el.SubMenue ?
                    <div>
                        <a className="ref" href={el.link}>{el.titele}
                            <div className="dropdown">{el.SubMenue.map(e =>
                                <li className="submenue dropdown-content"><a>{e}</a> </li>)}

                            </div>
                        </a>

                    </div> : <a href={el.link}>{el.titele}</a>
            ))
            }

            </ul>

        </div>
    )
}

export default NavMenu;