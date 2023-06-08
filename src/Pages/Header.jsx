import React from 'react'
import Myimg from '../images/ajay2.png'
import Myimg2 from '../images/Vector.png'
import Myimg3 from '../images/Vector (1).png'
import Myimg4 from '../images/Vector (2).png'
import Myimg5 from '../images/Vector (3).png'
import Myimg6 from '../images/Vector (4).png'
import Myimg34 from '../images/Vector 5.png'
import Myimg22 from '../images/Vector 6.png'

const Header = () => {
return (
        <div className=''>
            <header className='container-fluid'>
                <img src={Myimg} alt="" />
                <div className='header d-flex mt-5'>
                    <img src={Myimg2} alt="" height={30} />
                    <p className='location'>Lagos, Nigeria</p>
                </div>
                <div className='product d-flex mt-5'>
                    <img src={Myimg3} alt="" height={30} />
                    <p className='survey'>All products</p>
                    <div className='d-flex'>
                        <img src={Myimg4} alt="" height={30} />
                        <p className='Guest'>Hi,Guests</p>
                        <img src={Myimg5} alt="" height={12} className='image' />
                    </div>
                    <div className='d-flex'>
                        <img src={Myimg6} alt="" height={30} />
                        <p className='number'><b>0</b></p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header 