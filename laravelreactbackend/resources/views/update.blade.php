<!DOCTYPE html>
<html>
<head>
    <title>Create User</title>
</head>
<body>

    <h1>Create User</h1>

    <form method="POST" action="/users">
        @csrf
        <label for="name" value="{{$find->name}}">Name:</label><br>
        <input type="text" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="text"  name="email"><br><br>
        <input type="text" rd" name="password"><br><br>
        <input type="submit" value="Submit">
    </form>

</body>
</html>
