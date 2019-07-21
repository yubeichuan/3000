<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PcController extends Controller
{
    public function index(){
        return view('website.index');
    }
    
}
