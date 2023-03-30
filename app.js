var isTemplateCreatable = false;

$("#createButton").click(function () {
    if (!$("#name").val().length) {
        alert("Please enter a project name.");
        return;
    }

    if (!$("#desc").val().length) {
        alert("Please enter a project description.");
        return;
    }

    $(".option").each(function () {
        if ($(this).is(":checked") && $("#" + this.value + "Text").val().length) {
            isTemplateCreatable = true;
            return;
        }
    });

    if (!isTemplateCreatable) {
        alert("Please select at least one option and fill its text.");
        return;
    }
    else {
        createTemplate();
    }
});

function showTextarea(e) {
    if ($("#" + e.value).is(":checked")) {
        $("#" + e.value + "Text").show();
    } else {
        $("#" + e.value + "Text").hide();
    }
}

function createTemplate() {
    var template = "";
    var projectInfo = "";
    var table = "## Table of contents" + "&#13;&#10;&#13;&#10;";
    var content = "&#13;&#10;";
    var i = 0;

    var options = [
        "info",
        "tech",
        "features",
        "code",
        "status",
        "setup",
        "usage",
        "inspiration",
        "contact",
    ];
    var headers = [
        "General info",
        "Technologies",
        "Features",
        "Code Examples",
        "Status",
        "Setup",
        "Usage",
        "Inspiration",
        "Contact",
    ];
    var tags = [
        "general-info",
        "technologies",
        "features",
        "code-examples",
        "status",
        "setup",
        "usage",
        "inspiration",
        "contact",
    ];

    projectInfo += "# " + $("#name").val() + "&#13;&#10;&#13;&#10;";
    projectInfo += $("#desc").val() + "&#13;&#10;&#13;&#10;";

    options.forEach((element) => {
        if ($("#" + element).is(":checked") && $("#" + element + "Text").val().length) {
            table += "- [" + headers[i] + "](#" + tags[i] + ")" + "&#13;&#10;";
            content += "## " + headers[i] + "&#13;&#10;&#13;&#10;";
            content += $("#" + element + "Text").val() + "&#13;&#10;&#13;&#10;";
        }

        i++;
    });

    template = projectInfo + table + content;

    $("#template").append(template);
    $("#template").show();
    $("#copyTemplate").show();
}

document.addEventListener('click', (e) => {
    let elementId = e.target.id;
    if (elementId === 'copyTemplate') {
        copyClipboard();
    }
}
);

function copyClipboard() {
    const copyTemplate = async () => {
        try {
            await navigator.clipboard.writeText($("#template").val());
            alert("Template is copied to clipboard!");
        } catch (error) {
            alert("Failed to copy: ", error);
        }
    }

    copyTemplate();
}
