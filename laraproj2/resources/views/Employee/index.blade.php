@extends('employee.layout');
@section('content');

<div class="card">
    <div class="card-header">Contact Us Page</div>
    <div class="card-body">
        <form action="{{ url ('employee') }}" method="post" enctype="multipart/form-data">
            {!! csrf_field() !!}
            <label for="name" class="form-label">Name</label><br>
            <input type="text" name="name" id="name" value="Input your name" class="form-control"><br>

            <label for="address" class="form-label">Address</label><br>
            <input type="text" name="address" id="address" value="Input your address" class="form-control"><br>

            <label for="mobile" class="form-label">Mobile Number</label><br>
            <input type="text" name="mobile" id="mobile" class="form-control"><br>
            <input type="file" name="photo" id="photo" class="form-control"><br>

            <input type="submit" value="Save" class="btn btn-success">
        </form>
    </div>
</div>