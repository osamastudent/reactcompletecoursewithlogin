<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Login Form</h1>
            <form action="/loginform" method="post">
                @csrf
                <input type='text' name='email'  className='form-control mt-3' placeholder='Email' />
                @error('email')
                    <div class="row">
                        <div class="col-12 ">
                            <span class="text-danger error-style">
                                <i class="fas fa-exclamation-triangle"></i>
                                {{$message}}
                            </span>
                        </div>
                    </div>
                    @enderror

                    @if(session('message'))
                    <div class="row">
                        <div class="col-12 ">
                            <span class="text-danger error-style">
                                <i class="fas fa-exclamation-triangle"></i>
                                
                                {{session('message')}}
                            </span>
                        </div>
                    </div>
                    @endif

                <input type='text' name='password' className='form-control mt-3' placeholder='password' />
                
                @error('password')
                    <div class="row">
                        <div class="col-12 ">
                            <span class="text-danger error-style">
                                <i class="fas fa-exclamation-triangle"></i>
                                {{$message}}
                            </span>
                        </div>
                    </div>
                    @enderror

                    @if(session('message'))
                    <div class="row">
                        <div class="col-12 ">
                            <span class="text-danger error-style">
                                <i class="fas fa-exclamation-triangle"></i>
                                
                                {{session('message')}}
                            </span>
                        </div>
                    </div>
                    @endif

                <button type='submit' className='btn btn-primary form-control mt-3'>login</button>
            </form>

</body>
</html>