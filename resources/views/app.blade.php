<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel + Inertia + Vite</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    @production
    @php
    $manifest = json_decode(file_get_contents(public_path('dist/manifest.json')), true);
    @endphp
    <script type="module" src="/dist/{{ $manifest['resources/scripts/app.ts']['file'] }}"></script>
    <link rel="stylesheet" href="/dist/{{ $manifest['resources/scripts/app.ts']['css'][0] }}">
    @else
    <script type="module" src="http://localhost:3030/@vite/client"></script>
    <script type="module" src="http://localhost:3030/resources/scripts/app.ts"></script>
    @endproduction
</head>

<body>
    @inertia
</body>

</html>