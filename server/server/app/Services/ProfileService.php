<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;

class ProfileService
{
    public function getProfileData()
    {
        $response = Http::get('https://json.flashy.dev/profile-1');

        if ($response->successful()) {
            return $response->json();
        } else {
            abort($response->status());
        }
    }
    public function getsSecondProfileData()
    {
        $response = Http::get('https://json.flashy.dev/profile-2');

        if ($response->successful()) {
            return $response->json();
        } else {
            abort($response->status());
        }
    }
}
