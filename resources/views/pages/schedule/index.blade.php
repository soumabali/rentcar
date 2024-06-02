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
            <h5 class="card-title mb-0">Schedule</h5>
        </div>
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="card shadow-none bg-transparent border border-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Package VVIP</h5>
                            <p class="card-text">
                                <strong>Date:</strong>
                                Sunday, 2 June 2024
                            </p>
                            <p class="card-text">
                                <strong>Time:</strong>
                                08:00 - 09:00
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card shadow-none bg-transparent border border-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Package VVIP</h5>
                            <p class="card-text">
                                <strong>Date:</strong>
                                Sunday, 2 June 2024
                            </p>
                            <p class="card-text">
                                <strong>Time:</strong>
                                08:00 - 09:00
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card shadow-none bg-transparent border border-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Package VVIP</h5>
                            <p class="card-text">
                                <strong>Date:</strong>
                                Sunday, 2 June 2024
                            </p>
                            <p class="card-text">
                                <strong>Time:</strong>
                                08:00 - 09:00
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card shadow-none bg-transparent border border-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Package VVIP</h5>
                            <p class="card-text">
                                <strong>Date:</strong>
                                Sunday, 2 June 2024
                            </p>
                            <p class="card-text">
                                <strong>Time:</strong>
                                08:00 - 09:00
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
