import React from 'react'
import './lupa-password.styles.scss'
import simplebook from '../../assets/simplebook.svg'
import simpleprofile from '../../assets/simpleprofile.svg'
import bestprice from '../../assets/bestprice.svg'
import FormInput from '../form-input/form-input.component'
import mail from '../../assets/Mail.svg'

class LupaPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='content'>
                <div className='content-container'>
                    <div className='bagian-kiri'>
                            <div className='penjelasan1'>
                                    <img src={simplebook} alt="" className='gambar'/>
                                <div className='detail'>
                                    <h2 className='title'>Simple Booking Price</h2>
                                    <p className='descripton'>Pemesanan tanpa ribet dimana pun dan kapan pun</p>
                                </div>
                            </div>
                            <div className='penjelasan1'>
                                    <img src={simpleprofile} alt="" className='gambar'/>
                                <div className='detail'>
                                    <h2 className='title'>Simple Profile</h2>
                                    <p className='descripton'>Pesan lebih cepat, isi data customer dengan sekali klik.</p>
                                </div>
                            </div>
                            <div className='penjelasan1'>
                                    <img src={bestprice} alt="" className='gambar'/>
                                <div className='detail'>
                                    <h2 className='title'>Best Price</h2>
                                    <p className='descripton'>Harga kompetitif dan memberikan jasa forwarding
                                    dengan kualiatas dan jaminan harga terbaik.</p>
                                </div>
                            </div>
                    </div>
                    <div className='bagian-kanan'>
                        <div className='textwrapper'>
                            <h1 className='text1'>Lupa Password ?</h1>
                            <p className='text2'>Untuk mengubah password, masukkan alamat email yang sudah terdaftar dan 
                                konfirmasi email yang akan kami kirimkan ke email Anda!</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className='mail'>
                                    <img src={mail} alt="" />
                                </div>
                                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                                <div className='buttons'>
                                    <button type="submit" className='button2'> Lupa Password </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LupaPassword
