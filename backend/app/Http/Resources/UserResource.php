<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'birthday' => $this->birthday,
            'created_at' => $this->created_at,
            'firstName' => $this->first_name,
            'gender' => $this->gender,
            'lastName' => $this->last_name,
            'phoneNumber' => $this->phone_number,
            'roleId' => $this->role_id,
            'updated_at' => $this->updated_at,
        ];
    }
}
