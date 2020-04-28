{{each $data}}
<div>
    {{$value.get('title')}}
    {{$value.get('price')}}
    {{$value.get('author')}}
    {{$value.get('publishDate')}}
</div>
{{/each}}
