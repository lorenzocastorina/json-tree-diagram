var data = {
    "ul" : [{
        "li" : "nodo livello 1",
        "ul" : [{
            "li" : "nodo secondario",
            "ul" : [{
                "li" : "nodo livello 3"
            }]
        }, {
            "li" : "nodo secondario",
            "ul" : [{
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }, {
                "li" : "nodo livello 3"
            }]
        }]
    }]
}

var html = "";

$(document).ready(function() {
    ricorsiva(data)
    $("#container").append(html);
    $("ul:first").addClass("tree");
});

function ricorsiva(tree) {
    html += "<ul>"

    $.each(tree.ul, function(index, item) {
        
        html += "<li><code>" + item.li + "</code>"

        if(item.ul != undefined) {
            ricorsiva(item)
        }

        html += "</li>"
        
    });

    html += "</ul>"
}
