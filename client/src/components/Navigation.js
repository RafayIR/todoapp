import React from 'react';
import { useNavigate} from 'react-router-dom';


const Navigation = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/', { replace: true });
    }

    return (
        <div>
            <nav>
                <div className="container-fluid">
                    <div className="row pt-4">
                        <div className="col-lg-12">
                            <ul className="menu text-end">
                                <li ><button className='btn btn-secondary' onClick={logout}> Logout </button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
