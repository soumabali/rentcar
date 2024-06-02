@extends('layouts/layoutMaster')

@section('title', 'User Management - Crud App')

<!-- Vendor Styles -->
@section('vendor-style')
    @vite(['resources/assets/vendor/libs/select2/select2.scss', 'resources/assets/vendor/libs/@form-validation/form-validation.scss', 'resources/assets/vendor/libs/animate-css/animate.scss', 'resources/assets/vendor/libs/sweetalert2/sweetalert2.scss'])
@endsection

<!-- Vendor Scripts -->
@section('vendor-script')
    @vite(['resources/assets/vendor/libs/moment/moment.js', 'resources/assets/vendor/libs/select2/select2.js', 'resources/assets/vendor/libs/@form-validation/popular.js', 'resources/assets/vendor/libs/@form-validation/bootstrap5.js', 'resources/assets/vendor/libs/@form-validation/auto-focus.js', 'resources/assets/vendor/libs/cleavejs/cleave.js', 'resources/assets/vendor/libs/cleavejs/cleave-phone.js', 'resources/assets/vendor/libs/sweetalert2/sweetalert2.js'])
@endsection

<!-- Page Scripts -->
@section('page-script')
    @vite(['resources/js/laravel-user-management.js'])
@endsection

@section('content')

    <!-- Users List Table -->
    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Customer Management</h5>
            <button class="btn btn-primary" style="float: right" data-repeater-create data-id="" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAddUser">
                <i class="bx bx-plus me-1"></i>
                <span class="align-middle">Add</span>
            </button>
        </div>
        <div class="card-datatable table-responsive">
            <table class="datatables-users table border-top">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>john</td>
                        <td>john@mail.com</td>
                        <td>John Doe</td>
                        <td>
                            <div class="d-inline-block text-nowrap">
                                <button class="btn btn-sm btn-icon edit-record" data-id="" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><i class="bx bx-edit"></i></button>
                                <button class="btn btn-sm btn-icon delete-record" data-id=""><i
                                        class="bx bx-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>john</td>
                        <td>john@mail.com</td>
                        <td>John Doe</td>
                        <td>
                            <div class="d-inline-block text-nowrap">
                                <button class="btn btn-sm btn-icon edit-record" data-id="" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><i class="bx bx-edit"></i></button>
                                <button class="btn btn-sm btn-icon delete-record" data-id=""><i
                                        class="bx bx-trash"></i></button>
                            </div>
                        </td>
                    <tr>
                        <td>3</td>
                        <td>john</td>
                        <td>john@mail.com</td>
                        <td>John Doe</td>
                        <td>
                            <div class="d-inline-block text-nowrap">
                                <button class="btn btn-sm btn-icon edit-record" data-id="" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><i class="bx bx-edit"></i></button>
                                <button class="btn btn-sm btn-icon delete-record" data-id=""><i
                                        class="bx bx-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>john</td>
                        <td>john@mail.com</td>
                        <td>John Doe</td>
                        <td>
                            <div class="d-inline-block text-nowrap">
                                <button class="btn btn-sm btn-icon edit-record" data-id="" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><i class="bx bx-edit"></i></button>
                                <button class="btn btn-sm btn-icon delete-record" data-id=""><i
                                        class="bx bx-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>john</td>
                        <td>john@mail.com</td>
                        <td>John Doe</td>
                        <td>
                            <div class="d-inline-block text-nowrap">
                                <button class="btn btn-sm btn-icon edit-record" data-id="" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><i class="bx bx-edit"></i></button>
                                <button class="btn btn-sm btn-icon delete-record" data-id=""><i
                                        class="bx bx-trash"></i></button>
                            </div>
                        </td>
                    </tr>
            </table>
        </div>
        <!-- Offcanvas to add new user -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body mx-0 flex-grow-0">
                <form class="add-new-user pt-0" id="addNewUserForm">
                    <input type="hidden" name="id" id="user_id">
                    <div class="mb-3">
                        <label class="form-label" for="add-user-fullname">Full Name</label>
                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe"
                            name="name" aria-label="John Doe" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-email">Email</label>
                        <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com"
                            aria-label="john.doe@example.com" name="email" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-contact">Contact</label>
                        <input type="text" id="add-user-contact" class="form-control phone-mask"
                            placeholder="+1 (609) 988-44-11" aria-label="john.doe@example.com" name="userContact" />
                    </div>


                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                    <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                </form>
            </div>
        </div>
    </div>
@endsection
