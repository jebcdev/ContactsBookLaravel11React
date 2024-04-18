<?php

namespace Database\Seeders;

use App\Enums\VisibilityEnum;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $visibilityValues = VisibilityEnum::values();

        // Eliminar la carpeta 'avatars' si existe
        Storage::deleteDirectory('public/avatars');

        // Crear la carpeta 'avatars'
        Storage::makeDirectory('public/avatars');

        $avatarsPath = public_path('storage/avatars');
        for ($i = 1; $i <= 2; $i++) {
            Contact::create([
                'user_id' => User::all()->random(1)->first()->id,
                'name' => fake()->name(),
                'email' => fake()->safeEmail(),
                'visibility' => $visibilityValues[array_rand($visibilityValues)],

            ]);
            # code...
        }
    }
}
