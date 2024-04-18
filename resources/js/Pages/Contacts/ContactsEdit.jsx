import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { ConctactsForm } from './ConctactsForm';


export default function ContactsEdit({ auth, contact, visibilityOptions }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Contact
                    </h2>

                    <Link
                        href={route('contacts.index')}
                        className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    >
                        Back
                    </Link>
                </>
            }
        >
            <Head title="Edit Contact" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <ConctactsForm
                            auth={auth}
                            visibilityOptions={visibilityOptions}
                            contact={contact}
                            routeType={'PUT'}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
