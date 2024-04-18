import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


export default function ContactsIndex({ auth, contacts }) {

    return (

        <>


            <AuthenticatedLayout
                user={auth.user}
                header={
                    <>
                        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                            Contacts
                        </h2>

                        <Link
                            href={route('contacts.create')}
                            className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        >
                            Create Contact
                        </Link>
                    </>
                }
            >
                <Head title="Contacts" />



                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">

                                {/* Contacts Table */}
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">Actions</th>
                                                <th scope="col" className="px-6 py-3">ID</th>
                                                <th scope="col" className="px-6 py-3">Created By</th>
                                                <th scope="col" className="px-6 py-3">Name</th>
                                                <th scope="col" className="px-6 py-3">Email</th>
                                                <th scope="col" className="px-6 py-3">Avatar</th>
                                                <th scope="col" className="px-6 py-3">Visibility</th>
                                                <th scope="col" className="px-6 py-3">Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                contacts.map((contact) => {
                                                    return (
                                                        <tr key={contact.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                <div className="space-x-1">
                                                                    <Link
                                                                        href={route('contacts.edit', contact)} className="inline-block px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-400 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                                                        Edit
                                                                    </Link>

                                                                    <Link href={route('contacts.destroy', contact)} className="inline-block px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-700 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-700" method='DELETE' as='button'>
                                                                        Delete
                                                                    </Link>
                                                                </div>
                                                            </th>

                                                            <td className="px-6 py-4">{contact.id}</td>
                                                            <td className="px-6 py-4">{contact.user.name}</td>
                                                            <td className="px-6 py-4">{contact.name}</td>
                                                            <td className="px-6 py-4">{contact.email}</td>
                                                            <td className="px-6 py-4">
                                                                {contact.avatar ? (
                                                                    <img
                                                                        src={`storage/${contact.avatar}`}
                                                                        alt="Avatar"
                                                                        className="w-16 h-16 object-cover rounded-full"
                                                                    />
                                                                ) : (
                                                                    <span>No avatar</span>
                                                                )}
                                                            </td>

                                                            <td className="px-6 py-4">{contact.visibility}</td>
                                                            <td className="px-6 py-4">{new Date(contact.created_at).toLocaleDateString('es-ES')}</td>


                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>

                                </div>
                                {/* Contacts Table */}


                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>

        </>
    );
}
