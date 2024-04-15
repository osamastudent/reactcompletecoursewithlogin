<!DOCTYPE html>
<html>
<head>
    <title>Create User</title>
</head>
<body>

    <h1>Create User</h1>

    <form method="POST" action="/users">
        @csrf
        <label for="name">Name:</label><br>
        <input type="text" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="text"  name="email"><br><br>
        <input type="text" name="password"><br><br>
        <input type="submit" value="Submit">
    </form>

    <table border="">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
        </tr>
    @foreach($showUsers as $values)
 <tr>
    <td>{{$values->id}}</td>
    <td>{{$values->name}}</td>
    <td>{{$values->email}}</td>
    <td><a href="/api/updateUsers/{{$values->id}}">api edit</a></td>
    <td><a href="/updateweb/{{$values->id}}">edit</a></td>
 </tr>
 
    @endforeach

    </table>
</body>
</html>
