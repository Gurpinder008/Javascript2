$(document).ready(function() {
    // Function to fetch JSON data
    function fetchCharacters() {
        $.ajax({
            url: 'characters.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                displayCharacters(data);
            },
            error: function() {
                console.log('Error fetching data');
            }
        });
    }

    //  display characters in the table
    function displayCharacters(characters) {
        const table = $('#charactersTable tbody');
        table.empty();

        characters.forEach(function(character) {
            const row = $('<tr></tr>');

            Object.values(character).forEach(value => {
                row.append(`<td>${value}</td>`);
            });

            table.append(row);
        });

        filterCharacters();
    }

    fetchCharacters();

    // Search 
    $('#searchInput').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        const rows = $('#charactersTable tbody tr');

        rows.each(function() {
            const firstName = $(this).find('td:first-child').text().toLowerCase();
            if (firstName.includes(searchTerm)) {
                $(this).addClass('highlight');
            } else {
                $(this).removeClass('highlight');
            }
        });
    });
    

    // Filter 
    function filterCharacters() {
        const rows = $('#charactersTable tbody tr');

        const countAM = rows.filter(function() {
            const lastName = $(this).find('td:nth-child(2)').text();
            return lastName.toUpperCase().charCodeAt(0) <= 'M'.charCodeAt(0);
        }).length;

        const countNZ = rows.length - countAM;

        $('#filterAM').text(`A - M (${countAM})`);
        $('#filterNZ').text(`N - Z (${countNZ})`);

        rows.each(function() {
            const lastName = $(this).find('td:nth-child(2)').text();
            const showAM = lastName.toUpperCase().charCodeAt(0) <= 'M'.charCodeAt(0);
            const showNZ = lastName.toUpperCase().charCodeAt(0) > 'M'.charCodeAt(0);

            if ($('#filterAM').hasClass('active')) {
                $(this).toggle(showAM);
            } else if ($('#filterNZ').hasClass('active')) {
                $(this).toggle(showNZ);
            } else {
                $(this).show();
            }
        });
    }

    $('#filterAM, #filterNZ').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        filterCharacters();
    });
});
