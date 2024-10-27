<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(LoginRequest $request): JsonResponse
    {
        if (Auth::attempt($request->only(['email', 'password']))) {
            $request->session()->regenerate();
            $user = User::where('email', $request->email)->first();
            $authToken = $user->createToken('secretAuthToken')->plainTextToken;

            return response()->json([
                'data' => [
                    'id' => $user->id,
                    'email' => $user->email,
                    'firstName' => $user->first_name,
                    'lastName' => $user->last_name,
                    'tokens' => [
                        'authToken' => $authToken,
                    ]
                ]
            ]);
        }

        return response()->json([
            'errors' =>
            [
                'error' => 'The provided credentials do not match our records.',
            ],
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['data' => 'logout successfully'], Response::HTTP_OK);
    }
}
