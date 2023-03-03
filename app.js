var isTemplateCreatable = false;

$('#createButton').click(function () {
    $('.option').each(function () {
        if ($(this).is(':checked') && $('#' + this.value + 'Text').length) {
            createTemplate();
            isTemplateCreatable = true;
            return;
        }
    });
    
    if (!isTemplateCreatable) {
        alert('Please select an option and fill it');    
    }
});

function showTextarea(e) {
    if ($('#' + e.value).is(':checked')) {
        $('#' + e.value + 'Text').show();        
    }
    else {
        //$('#' + e.value + 'Text').val('');
        $('#' + e.value + 'Text').hide();
    }    
}

function createTemplate() {
    var template = '';
    var projectInfo = '';
    var table = 'Table of contents';
    var content = '';
    var i = 0;

    var options = ['info', 'tech', 'features', 'code', 'status', 'setup', 'usage', 'inspiration', 'contact'];
    var headers = ['General info', 'Technologies', 'Features', 'Code Examples', 'Status', 'Setup', 'Usage', 'Inspiration', 'Contact'];

    if ($('#name').val().length) {
        projectInfo += $('#name').val();
    }

    if ($('#desc').val().length) {
        projectInfo += $('#desc').val();
    }

    options.forEach(element => {
        if ($('#' + element).val()) {
            table += headers[i];
            content += headers[i];
            content += $('#' + element + 'Text').val();
        }

        i++;
    });

    template = projectInfo + table + content;

    //$('#template').append(projectInfo);
    //$('#template').append(table);
    //$('#template').append(content);

    $('#template').append(template);

    $('#template').show();
}
