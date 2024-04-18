import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import React from 'react'

export const ConctactsForm = ({ auth, visibilityOptions, contact, routeType }) => {
    const { data, setData, post, processing, errors, reset } = useForm({

        user_id: auth.user.id,
        name: contact.name ? contact.name : "",
        email: contact.email ? contact.email : "",
        avatar: contact.avatar ? contact.avatar : "",
        visibility: contact.visibility ? contact.visibility : "",

    });

    const submit = (e) => {

        e.preventDefault();

        if (routeType === 'POST') {
            post(route(`contacts.store`), data);
        }

        if (routeType === 'PUT') {
            // post(route('contacts.update', contact), data);
            post(route('contacts.update', contact));


        }

    };

    const buttonText = routeType === 'POST' ? 'Save' : 'Update';

    return (

        <>
            {/* Form */}
            <form onSubmit={submit}>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>


                <div className='mt-4'>
                    <InputLabel htmlFor="avatar" value="Avatar" />


                    <input
                        id="avatar"
                        type="file"
                        name="avatar"
                        className="mt-1 block w-full"
                        onChange={(e) => setData('avatar', e.target.files[0])} // Manejamos el cambio del archivo
                    // required
                    />

                    <InputError message={errors.avatar} className="mt-2" />
                </div>


                <div className='mt-4'>
                    <InputLabel htmlFor="visibility" value="Visibility" />


                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="visibility"
                        name="visibility"
                        value={data.visibility}
                        onChange={(e) => setData('visibility', e.target.value)}
                        required
                        defaultValue={contact.visibility}
                    >
                        <option defaultValue>Choose Visibility</option>
                        {visibilityOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>



                    <InputError message={errors.visibility} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">


                    <PrimaryButton className="ms-4" disabled={processing}>
                        {buttonText}
                    </PrimaryButton>
                </div>



            </form>

            {/* Form */}
        </>
    )
}
