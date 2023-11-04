<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Barwsa</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link href="{{ asset('/build/css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('/build/css/quasar.variables.css') }}" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="app"></div>
    <script src="{{ asset('build/js/app.js') }}" defer></script>
</body>
</html>
