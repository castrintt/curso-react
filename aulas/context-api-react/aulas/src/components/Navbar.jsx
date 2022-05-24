import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav
            style={
                {
                    width: '100%',
                    height: '100%'
                }
            }
        >
            <ul
                style={
                    {
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }
            >
                <li
                    style={
                        {
                            listStyle: 'none',
                            marginRight: '20px',

                        }
                    }
                >
                    <Link
                        style={
                            {
                                textDecoration: 'none'
                            }
                        }
                        to='/' >
                        Home
                    </Link>
                </li>
                <li
                    style={
                        {
                            listStyle: 'none',
                            marginRight: '20px',

                        }
                    }
                >
                    <Link
                        style={
                            {
                                textDecoration: 'none'
                            }
                        }
                        to='/about' >
                        About
                    </Link>
                </li>
                <li
                    style={
                        {
                            listStyle: 'none',
                            marginRight: '20px',

                        }
                    }
                >
                    <Link
                        style={
                            {
                                textDecoration: 'none'
                            }
                        }
                        to='/contact' >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar