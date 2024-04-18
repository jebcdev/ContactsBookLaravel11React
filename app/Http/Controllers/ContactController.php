<?php

namespace App\Http\Controllers;

use App\Enums\VisibilityEnum;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::query()->where('user_id', auth()->user()->id)->with('user')->orderBy('id', 'desc')->get();
        // return($contacts);
        return Inertia::render('Contacts/ContactsIndex', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $newContact = new Contact();
        $visibilityOptions = VisibilityEnum::values();
        return Inertia::render('Contacts/ContactsCreate', compact('newContact', 'visibilityOptions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {

        $validatedData = $request->validated();

        if ($request->hasFile('avatar')) {

            $avatar = $request->file('avatar');
            $avatarName = Str::random(20) . '.' . $avatar->getClientOriginalExtension();
            $avatarPath = $avatar->storeAs('avatars', $avatarName, 'public');

            $validatedData['avatar'] = $avatarPath;
        }


        Contact::create($validatedData);

        return to_route('contacts.index')->with('message', 'Contact Created Successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        $visibilityOptions = VisibilityEnum::values();
        return Inertia::render('Contacts/ContactsEdit', compact('contact', 'visibilityOptions'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $validatedData = $request->validated();

        if ($request->hasFile('avatar')) {
            // Eliminar la imagen anterior si existe
            if ($contact->avatar) {
                Storage::disk('public')->delete($contact->avatar);
            }

            // Subir la nueva imagen
            $avatar = $request->file('avatar');
            $avatarName = Str::random(20) . '.' . $avatar->getClientOriginalExtension();
            $avatarPath = $avatar->storeAs('avatars', $avatarName, 'public');

            // Asignar la nueva imagen al contacto
            $validatedData['avatar'] = $avatarPath;
        }


        // Actualizar los datos del contacto
        $contact->update($validatedData);

        return to_route('contacts.index')->with('message', 'Contact Updated Successfully');
    }


    /**
     * Remove the specified resource from storage.
     */

    public function destroy(Contact $contact)
    {
        // Verificar si el contacto tiene un avatar y eliminarlo si existe
        if ($contact->avatar) {
            Storage::disk('public')->delete($contact->avatar);
        }

        // Eliminar el contacto
        $contact->delete();

        return redirect()->route('contacts.index')->with('message', 'Contact Deleted Successfully');
    }
}
