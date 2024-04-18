<?php

namespace App\Http\Requests;

use App\Enums\VisibilityEnum;
use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {

        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'sometimes|required|exists:users,id',
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:255',
            // 'avatar' => 'sometimes|nullable|mimes:jpg,jpeg,bmp,png',
            'visibility' => [
                'sometimes',
                'required',
                Rule::in(VisibilityEnum::values()), // Utiliza los valores válidos del enum
            ],
        ];
    }
}
