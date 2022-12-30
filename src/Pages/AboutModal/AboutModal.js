import React from 'react';
import { toast } from 'react-hot-toast';

const AboutModal = ({ about, setClick, setRefresh, refresh }) => {

    const { name, Address, university, email, _id } = about


    const handleAbout = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;

        const about = {
            name,
            email,
            university,
            address
        }
        console.log(about);
        fetch(`https://social-media-platform-server-five.vercel.app/about/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(about)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('About Info Updated!!!');
                    setRefresh(!refresh)
                    setClick(null)
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Edit Your Information</h3>
                    <form onSubmit={handleAbout} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" placeholder="Your Name" defaultValue={name} className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" defaultValue={email} className="input w-full input-bordered" />
                        <input name="university" type="text" placeholder="University Name" defaultValue={university} className="input w-full input-bordered" />
                        <input name="address" type="text" placeholder="Your Address" defaultValue={Address} className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AboutModal;