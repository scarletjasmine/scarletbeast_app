<?php

namespace App\Http\Controllers;

use App\Http\Requests\CryptoUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CryptoController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
         //   'status' => session('status'),
        ]);
    }
    
    /**
     * Update the user's profile information.
     */
    public function update(CryptoUpdateRequest $request): RedirectResponse
    {

        
        $request->user()->fill($request->validated());
    
         $request->user()->save();

        /*
        if(isset($request->all()->ether_address)) {
            $request->user()->ether_address = $request->all()->ether_address;
            $request->user()->name = $auth->user()->name;
            $request->user()->email = $auth->user()->email;
            $request->user()->save();
            var_dump($request->user());die();
        } else {
            if ($request->user()->isDirty('email')) {
                $request->user()->email_verified_at = null;
                var_dump($request->user());    die();
            }

              $request->user()->save();
        }*/

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    */
}
