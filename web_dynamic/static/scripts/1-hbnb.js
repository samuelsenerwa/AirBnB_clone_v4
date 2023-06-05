$(document).ready(function () {
    let amenityIds = [];
    let amenityNames = [];
    $('input[type="checkbox"]').change(function () {
        const amenityId = $(this).attr('data-id')
        const name = $(this).attr('data-name')
        if ($(this).is(':checked')) {
            amenityIds.push(amenityId);
            amenityNames.push(name); 
        } else {
            amenityIds = amenityIds.filter(amenityId);
            amenityNames = amenityNames.filter(name);
        }
        $('DIV.amenities h4').text(amenityNames.join(', '));
    });
});
