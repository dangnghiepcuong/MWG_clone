<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends BaseRepository
{
    public function model()
    {
        return new User();
    }

    public function getUserByAccountIds($accountIds)
    {
        return $this->model()->whereIn('account_id', $accountIds)->get();
    }

    public function getUsersByUserIds($userIds)
    {
        return $this->model()->whereIn('id', $userIds)->get();
    }
}
