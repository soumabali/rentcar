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
            <h5 class="card-title mb-0">Mentor List</h5>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <div class="row gy-4 mb-4">
                    <div class="col-sm-6 col-lg-4">
                        <div class="card p-2 h-100 shadow-none border">
                            <div class="rounded-2 text-center mb-3">
                                <a href="{{ url('app/academy/course-details') }}"><img class="img-fluid"
                                        src="{{ asset('assets/img/pages/app-academy-tutor-1.png') }}"
                                        alt="tutor image 1" /></a>
                            </div>
                            <div class="card-body p-3 pt-2">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="badge bg-label-primary">Automatic</span>
                                    <h6 class="d-flex align-items-center justify-content-center gap-1 mb-0">
                                        4.4 <span class="text-warning"><i class="bx bxs-star me-1"></i></span><span
                                            class="text-muted">(1.23k)</span>
                                    </h6>
                                </div>
                                <a href="#" class="h5">John Doe</a>
                                <p class="mt-2">Introductory course for Angular and framework basics in web development.
                                </p>
                                <div class="d-flex flex-column flex-md-row gap-2 text-nowrap pe-xl-3 pe-xxl-0">

                                    <a class="app-academy-md-50 btn btn-label-primary d-flex align-items-center"
                                        href="#">
                                        <span class="me-2">Detail</span><i
                                            class="bx bx-chevron-right lh-1 scaleX-n1-rtl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="card p-2 h-100 shadow-none border">
                            <div class="rounded-2 text-center mb-3">
                                <a href="{{ url('app/academy/course-details') }}"><img class="img-fluid"
                                        src="{{ asset('assets/img/pages/app-academy-tutor-2.png') }}"
                                        alt="tutor image 2" /></a>
                            </div>
                            <div class="card-body p-3 pt-2">
                                <div class="d-flex justify-content-between align-items-center mb-3 pe-xl-3 pe-xxl-0">
                                    <span class="badge bg-label-primary">Automatic</span>
                                    <h6 class="d-flex align-items-center justify-content-center gap-1 mb-0">
                                        4.2 <span class="text-warning"><i class="bx bxs-star me-1"></i></span><span
                                            class="text-muted"> (424)</span>
                                    </h6>
                                </div>
                                <a href="#" class="h5">John Doe</a>
                                <p class="mt-2">Introductory course for Angular and framework basics in web development.
                                </p>
                                <div class="d-flex flex-column flex-md-row gap-2 text-nowrap pe-xl-3 pe-xxl-0">

                                    <a class="app-academy-md-50 btn btn-label-primary d-flex align-items-center"
                                        href="#">
                                        <span class="me-2">Detail</span><i
                                            class="bx bx-chevron-right lh-1 scaleX-n1-rtl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="card p-2 h-100 shadow-none border">
                            <div class="rounded-2 text-center mb-3">
                                <a href="{{ url('app/academy/course-details') }}"><img class="img-fluid"
                                        src="{{ asset('assets/img/pages/app-academy-tutor-3.png') }}"
                                        alt="tutor image 3" /></a>
                            </div>
                            <div class="card-body p-3 pt-2">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="badge bg-label-success">MANUAL</span>
                                    <h6 class="d-flex align-items-center justify-content-center gap-1 mb-0">
                                        5 <span class="text-warning"><i class="bx bxs-star me-1"></i></span><span
                                            class="text-muted"> (12)</span>
                                    </h6>
                                </div>
                                <a href="#" class="h5">John Doe</a>
                                <p class="mt-2">Introductory course for Angular and framework basics in web development.
                                </p>
                                <div class="d-flex flex-column flex-md-row gap-2 text-nowrap pe-xl-3 pe-xxl-0">

                                    <a class="app-academy-md-50 btn btn-label-primary d-flex align-items-center"
                                        href="#">
                                        <span class="me-2">Detail</span><i
                                            class="bx bx-chevron-right lh-1 scaleX-n1-rtl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
