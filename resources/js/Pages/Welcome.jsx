import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, contacts }) {
    return (
        <><div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head title="My Simple Contacts Book" />
            <header className="bg-gray-900 text-white flex justify-end p-4">
                <nav className="flex gap-2">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-2 py-1 transition hover:text-gray-300 focus:outline-none focus-visible:ring-[#FF2D20]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-2 py-1 transition hover:text-gray-300 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-2 py-1 transition hover:text-gray-300 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <main className="bg-gray-100 dark:bg-gray-900 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {contacts.map(contact => (
                        <div key={contact.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold mb-2">{contact.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{contact.email}</p>
                                {contact.avatar ? (
                                    <img
                                        src={`storage/${contact.avatar}`}
                                        alt="Avatar"
                                        className=" rounded-full"
                                    />
                                ) : (
                                    <div className="w-full h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-300 mb-4">
                                        No avatar
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
        </>
    );
}
