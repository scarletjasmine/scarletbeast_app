<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use kornrunner\Keccak;

class EthereumAddress implements Rule
{
    public function passes($attribute, $value)
    {
        if (!preg_match('/^0x[0-9a-fA-F]{40}$/', $value)) {
            return false;
        }

        $address = strtolower(str_replace('0x', '', $value));
        $hash = Keccak::hash($address, 256);

        for ($i = 0; $i < 40; $i++) {
            if (hexdec(substr($hash, $i, 1)) >= 8 && strtoupper(substr($value, $i + 2, 1)) !== strtoupper(substr($value, $i + 2, 1))) {
                return false;
            }
            if (hexdec(substr($hash, $i, 1)) < 8 && strtoupper(substr($value, $i + 2, 1)) !== strtolower(substr($value, $i + 2, 1))) {
                return false;
            }
        }

        return true;
    }

    public function message()
    {
        return 'The attribute must be a valid Ethereum address.';
    }
}

