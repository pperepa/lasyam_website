/* BLUE */
HEADER =
    'header { \
    border: solid; \
    border-color: blue; \
}';
/* GREEN */
TOP_NAV =
    '#top-navigation { \
    border: solid; \
    border-color: green; \
}';
/* YELLOW */
NAV_UL =
    '#top-navigation ul { \
    border: solid; \
    border-color: yellow; \
}';
/* RED */
NAV_LI =
    '#top-navigation li { \
    border: solid; \
    border-color: red; \
}';

/* BLUE */
NAV_A =
    '#top-navigation a { \
    border: solid; \
    border-color: blue; \
}';

NAV =
    'nav { \
        border: solid; \
        border-color: blue; \
}';

/* PURPLE */
SECTION =
    'section { \
    border: solid; \
    order-color: purple; \
}';

/* BROWN */
SECTION_ART =
    'section article { \
    border: solid; border-color: brown; \
} \
form { \
    border: solid; \
    border-color: indigo; \
}';

/* PINK */
HEADER_IMGS =
    'header img { \
    border: solid; \
    border-color: pink; \
}';

/* BROWN, RED, PINK */
FOOTER =
    'footer { \
    border: solid; \
    border-color: brown; \
} \
footer ul { \
    border: solid; \
    border-color: red; \
} \
footer li { \
    border: solid; \
    border-color: pink; \
}';

/* BLACK, PINK, MAGENTA */
FIGURE =
    'figure { \
    border: solid; \
    border-color: black; \
} \
aside { \
    border: solid; \
    border-color: pink; \
} \
div { \
    border: solid; \
    border-color: magenta;\
}';

/* TEAL */
PARA =
    'p { \
    border: solid; \
    border-color: teal; \
}';
/* Function to toggle the CSS styling borders on and off on click. */
function toggle() {
    var sheet = document.createElement('style');
    sheet.innerHTML = HEADER + TOP_NAV + NAV_UL + NAV_LI + SECTION + SECTION_ART + HEADER_IMGS + FOOTER + FIGURE + PARA + NAV;
    document.head.appendChild(sheet);
    console.log("Styles added.");
}