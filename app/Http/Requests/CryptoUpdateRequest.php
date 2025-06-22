<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\EthereumAddress;

class CryptoUpdateRequest extends FormRequest
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
         'ether_address' => [new EthereumAddress],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}



