import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';
import register from '../../../assets/images/register.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const UserRegistration = () => {
    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = user?.displayName || 'Unregister'
        const email = user?.email || 'Unregister'
        const message = e.target.message.value;
        const image = e.target.img.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const addPost = {
                        userName: name,
                        email,
                        message,
                        image: imgData.data.url
                    }
                    console.log(addPost);
                    fetch('http://localhost:5000/addPost', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addPost)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged && user?.email) {
                                toast.success('Data has been Posted Succesfully')
                                e.target.reset()
                                return;
                            }
                            else {
                                toast.error('Please first Log in')
                                navigate('/login')

                            }
                        })
                }
            })

    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-2/5">
                        <img src={register} alt="" />
                    </div>
                    <div className="card shadow-2xl bg-base-800 w-3/5">
                        <Form onSubmit={handleSubmit} className="card-body">
                            <div className='grid grid-cols-1 lg:grid-cols-1 gap-5'>
                                <textarea name='message' className="textarea textarea-bordered h-25 w-full mb-0 mt-2" placeholder="Your Message"></textarea>
                                <input name='img' type="file" className="input input-bordered input-primary w-full mt-0" />
                                <input type="submit" className='btn' value="Submit" />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegistration;