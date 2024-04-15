<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class myController extends Controller
{

    // show users
    function showData()
    {
        $user = User::latest()->get();

        return $user;
    }
    function showUsers()
    {
        $showUsers = User::all();

        return view('create', compact('showUsers'));
    }


    public function create()
    {
        return view('create');
    }

    // create Users
    public function createUsers(Request $request)
    {
        $request->validate([
            'name' => 'required | max:5| min:3',
            'email' => 'required',
            'password' => 'required',
        ]);

        // $obj = new User();
        // $obj->name = $request->name;
        // $obj->email = $request->email;
        // $obj->password = hash::make($request->password);
        // $obj->save();

        $data = $request->all();
        $data['password'] = hash::make($request->password);
        User::create($data);
        return response()->json(['message' => 'User created successfully'], 200);
    }


    // update Users Store

    function updateUsers($id)
    {
        // return response()->json(User::whereId($id)->first());
        return response()->json(User::findOrFail($id));
        // return view("update",compact($find));
    }

    // update Users Store
    function updateUsersStore(Request $request, $id)
    {
        $find = User::findOrFail($id)->first();
        $find->fill($request->only('name', "email"));
        $find->save();
        return response()->json(['message' => 'User updated successfully'], 200);
    }



    public function userDelete($id)
    {
        $user = User::findOrFail($id); // Find the user by ID
        $user->delete();

        // return response()->json(['message' => 'User deleted successfully']);
    }


    // user View

    function userView($id)
    {
        $find = User::findOrFail($id);
        return $find;
        // return response()->json(User::findOrFail($id));

    }


    // login user

    function login()
    {
        return view('login');
    }

   



    public function loginData(Request $request)
    {
        $credentials = $request->only('email', 'password');
        // $email = $request->session()->put('email', $request->email);
    
        
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        $remember = $request->remember;
    
        if (Auth::attempt($credentials, $remember)) {
            return response()->json("log in successfully");
        }
    
        // If the authentication attempt fails
        $user = User::where('email', $credentials['email'])->first();
        if (!$user) {
            return response()->json(['erroremailmessage' => 'User is not registered'], 404);
        } else {
            return response()->json(['errormessage' => 'Password is incorrect'], 401);
        }
    }
    






}
