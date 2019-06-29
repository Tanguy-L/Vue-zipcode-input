// eslint-disable-next-line
const countries = [
    {   regex : /^(?:[0-8]\d|9[0-8])\d{3}$/g, name:'fr', fullname: 'France', selected: true },
    {   regex: /^(?:(?:[1-9])(?:\d{3}))$/g, name:'be', fullname: 'Belgique', selected: false},
    {   regex: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/g, name:'esp', fullname: 'Espagne', selected: false},
    {   regex: /GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4}/g, name:'en', fullname: 'Angleterre', selected: false}
]

export default countries