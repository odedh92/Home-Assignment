<?php

namespace App\Http\Controllers;
use App\Services\ProfileService;

class ProfileController extends Controller
{
    private $profileService;

    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function getProfile()
    {
        $data = $this->profileService->getProfileData();
        return response()->json($data);
    }
    public function getsSecondProfile()
    {
        $data = $this->profileService->getsSecondProfileData();
        return response()->json($data);
    }
}
