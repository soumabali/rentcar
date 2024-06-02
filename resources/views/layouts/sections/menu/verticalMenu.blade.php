@php
    $configData = Helper::appClasses();
@endphp

<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">


    <!-- ! Hide app brand if navbar-full -->
    @if (!isset($navbarFull))
        <div class="app-brand demo">
            <a href="{{ url('/') }}" class="app-brand-link">
                <span class="app-brand-logo demo">
                    @include('_partials.macros', ['width' => 25, 'withbg' => 'var(--bs-primary)'])
                </span>
                <span class="app-brand-text demo menu-text fw-bold ms-2">{{ config('variables.templateName') }}</span>
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
                <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
        </div>
    @endif

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <li class="menu-item ">
            <a href="{{ route('admin.user.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div class="text-truncate">Customer</div>
            </a>
        </li>
        <li class="menu-item ">
            <a href="{{ route('admin.mentor.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div class="text-truncate">Mentor</div>
            </a>
        </li>
        {{-- <li class="menu-item ">
            <a href="{{ route('admin.package.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-collection"></i>
                <div class="text-truncate">Pacakges</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item ">
                    <a href="http://local.rentcar/app/academy/dashboard" class="menu-link">
                        <div>Dashboard</div>
                    </a>
                </li>
            </ul>
        </li> --}}


        <li class="menu-item" style="">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-collection"></i>
                <div class="text-truncate">Package</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item ">
                    <a href="{{ route('admin.package.index') }}" class="menu-link">
                        <div>Package</div>
                    </a>
                </li>
            </ul>
            <ul class="menu-sub">
                <li class="menu-item ">
                    <a href="{{ route('admin.package-category.index') }}" class="menu-link">
                        <div>Package Category</div>
                    </a>
                </li>
            </ul>
            <ul class="menu-sub">
                <li class="menu-item ">
                    <a href="{{ route('admin.package-type.index') }}" class="menu-link">
                        <div>Package Type</div>
                    </a>
                </li>
            </ul>
        </li>

        <li class="menu-item ">
            <a href="{{ route('admin.branch.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-map-alt"></i>
                <div class="text-truncate">Branch</div>
            </a>
        </li>

        <li class="menu-item ">
            <a href="{{ route('admin.order.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-cart-alt"></i>
                <div class="text-truncate">Order</div>
            </a>
        </li>

        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Other</span>
        </li>

        <li class="menu-item ">
            <a href="{{ route('admin.mentor2.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div class="text-truncate">Mentor</div>
            </a>
        </li>




        @foreach ($menuData[0]->menu as $menu)
            {{-- adding active and open class if child is active --}}

            {{-- menu headers --}}
            @if (isset($menu->menuHeader))
                <li class="menu-header small text-uppercase">
                    <span class="menu-header-text">{{ __($menu->menuHeader) }}</span>
                </li>
            @else
                {{-- active menu method --}}
                @php
                    $activeClass = null;
                    $currentRouteName = Route::currentRouteName();

                    if ($currentRouteName === $menu->slug) {
                        $activeClass = 'active';
                    } elseif (isset($menu->submenu)) {
                        if (gettype($menu->slug) === 'array') {
                            foreach ($menu->slug as $slug) {
                                if (str_contains($currentRouteName, $slug) and strpos($currentRouteName, $slug) === 0) {
                                    $activeClass = 'active open';
                                }
                            }
                        } else {
                            if (
                                str_contains($currentRouteName, $menu->slug) and
                                strpos($currentRouteName, $menu->slug) === 0
                            ) {
                                $activeClass = 'active open';
                            }
                        }
                    }
                @endphp

                {{-- main menu --}}
                <li class="menu-item {{ $activeClass }}">
                    <a href="{{ isset($menu->url) ? url($menu->url) : 'javascript:void(0);' }}"
                        class="{{ isset($menu->submenu) ? 'menu-link menu-toggle' : 'menu-link' }}"
                        @if (isset($menu->target) and !empty($menu->target)) target="_blank" @endif>
                        @isset($menu->icon)
                            <i class="{{ $menu->icon }}"></i>
                        @endisset
                        <div class="text-truncate">{{ isset($menu->name) ? __($menu->name) : '' }}</div>
                        @isset($menu->badge)
                            <div class="badge bg-{{ $menu->badge[0] }} rounded-pill ms-auto">{{ $menu->badge[1] }}</div>
                        @endisset
                    </a>

                    {{-- submenu --}}
                    @isset($menu->submenu)
                        @include('layouts.sections.menu.submenu', ['menu' => $menu->submenu])
                    @endisset
                </li>
            @endif
        @endforeach
    </ul>

</aside>
