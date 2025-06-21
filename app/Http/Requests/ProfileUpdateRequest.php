<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\EthereumAddress;

class ProfileUpdateRequest extends FormRequest
{
    /**
     8 @todo: verify name and email also and also ether_address
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
    
        return [
            'name' => [ 'string', 'max:255'],
            'email' => ['string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'ether_address' => [new EthereumAddress],
        ];
    }
}



