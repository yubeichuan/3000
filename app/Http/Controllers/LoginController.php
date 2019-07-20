<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

use App\Http\Requests;

class LoginController extends Controller
{
    public function index()
    {
        return view('admin.login');
    }

    /**
     * @param Request $request
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $sql['title']=$input['username'];

        Article::create($sql);
//        return view('admin.welcome');
        return redirect('welcome');
//        return $request->get('username');

    }
    public function welcome()
    {
        return view('admin.welcome');
    }
}
