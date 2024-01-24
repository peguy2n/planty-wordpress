const STATE_INCLUDED_COUNTRIES=["AU","BR","CA","CH","ES","HK","IE","IN","IT","JP","MY","MX","US"],POSTAL_CODE_EXCLUDED_COUNTRIES=["HK"],CITY_EXCLUDED_COUNTRIES=["SG"],hasPostal=a=>!POSTAL_CODE_EXCLUDED_COUNTRIES.includes(a),hasCity=a=>!CITY_EXCLUDED_COUNTRIES.includes(a),hasState=a=>STATE_INCLUDED_COUNTRIES.includes(a),countryChoices=[{value:"AF",label:wp.i18n.__("Afghanistan","surecart")},{value:"AL",label:wp.i18n.__("Albania","surecart")},{value:"DZ",label:wp.i18n.__("Algeria","surecart")},{value:"AS",label:wp.i18n.__("American Samoa","surecart")},{value:"AD",label:wp.i18n.__("Andorra","surecart")},{value:"AO",label:wp.i18n.__("Angola","surecart")},{value:"AI",label:wp.i18n.__("Anguilla","surecart")},{value:"AQ",label:wp.i18n.__("Antarctica","surecart")},{value:"AG",label:wp.i18n.__("Antigua and Barbuda","surecart")},{value:"AR",label:wp.i18n.__("Argentina","surecart")},{value:"AM",label:wp.i18n.__("Armenia","surecart")},{value:"AW",label:wp.i18n.__("Aruba","surecart")},{value:"AU",label:wp.i18n.__("Australia","surecart")},{value:"AT",label:wp.i18n.__("Austria","surecart")},{value:"AZ",label:wp.i18n.__("Azerbaijan","surecart")},{value:"BS",label:wp.i18n.__("Bahamas","surecart")},{value:"BH",label:wp.i18n.__("Bahrain","surecart")},{value:"BD",label:wp.i18n.__("Bangladesh","surecart")},{value:"BB",label:wp.i18n.__("Barbados","surecart")},{value:"BY",label:wp.i18n.__("Belarus","surecart")},{value:"BE",label:wp.i18n.__("Belgium","surecart")},{value:"BZ",label:wp.i18n.__("Belize","surecart")},{value:"BJ",label:wp.i18n.__("Benin","surecart")},{value:"BM",label:wp.i18n.__("Bermuda","surecart")},{value:"BT",label:wp.i18n.__("Bhutan","surecart")},{value:"BO",label:wp.i18n.__("Bolivia","surecart")},{value:"BQ",label:wp.i18n.__("Bonaire, Sint Eustatius and Saba","surecart")},{value:"BA",label:wp.i18n.__("Bosnia and Herzegovina","surecart")},{value:"BW",label:wp.i18n.__("Botswana","surecart")},{value:"BV",label:wp.i18n.__("Bouvet Island","surecart")},{value:"BR",label:wp.i18n.__("Brazil","surecart")},{value:"IO",label:wp.i18n.__("British Indian Ocean Territory","surecart")},{value:"BN",label:wp.i18n.__("Brunei Darussalam","surecart")},{value:"BG",label:wp.i18n.__("Bulgaria","surecart")},{value:"BF",label:wp.i18n.__("Burkina Faso","surecart")},{value:"BI",label:wp.i18n.__("Burundi","surecart")},{value:"CV",label:wp.i18n.__("Cabo Verde","surecart")},{value:"KH",label:wp.i18n.__("Cambodia","surecart")},{value:"CM",label:wp.i18n.__("Cameroon","surecart")},{value:"CA",label:wp.i18n.__("Canada","surecart")},{value:"KY",label:wp.i18n.__("Cayman Islands","surecart")},{value:"CF",label:wp.i18n.__("Central African Republic","surecart")},{value:"TD",label:wp.i18n.__("Chad","surecart")},{value:"CL",label:wp.i18n.__("Chile","surecart")},{value:"CN",label:wp.i18n.__("China","surecart")},{value:"CX",label:wp.i18n.__("Christmas Island","surecart")},{value:"CC",label:wp.i18n.__("Cocos (Keeling) Islands","surecart")},{value:"CO",label:wp.i18n.__("Colombia","surecart")},{value:"KM",label:wp.i18n.__("Comoros","surecart")},{value:"CG",label:wp.i18n.__("Congo","surecart")},{value:"CD",label:wp.i18n.__("Congo, The Democratic Republic of the","surecart")},{value:"CK",label:wp.i18n.__("Cook Islands","surecart")},{value:"CR",label:wp.i18n.__("Costa Rica","surecart")},{value:"HR",label:wp.i18n.__("Croatia","surecart")},{value:"CU",label:wp.i18n.__("Cuba","surecart")},{value:"CW",label:wp.i18n.__("Curaçao","surecart")},{value:"CY",label:wp.i18n.__("Cyprus","surecart")},{value:"CZ",label:wp.i18n.__("Czechia","surecart")},{value:"CI",label:wp.i18n.__("Côte d'Ivoire","surecart")},{value:"DK",label:wp.i18n.__("Denmark","surecart")},{value:"DJ",label:wp.i18n.__("Djibouti","surecart")},{value:"DM",label:wp.i18n.__("Dominica","surecart")},{value:"DO",label:wp.i18n.__("Dominican Republic","surecart")},{value:"EC",label:wp.i18n.__("Ecuador","surecart")},{value:"EG",label:wp.i18n.__("Egypt","surecart")},{value:"SV",label:wp.i18n.__("El Salvador","surecart")},{value:"GQ",label:wp.i18n.__("Equatorial Guinea","surecart")},{value:"ER",label:wp.i18n.__("Eritrea","surecart")},{value:"EE",label:wp.i18n.__("Estonia","surecart")},{value:"SZ",label:wp.i18n.__("Eswatini","surecart")},{value:"ET",label:wp.i18n.__("Ethiopia","surecart")},{value:"FK",label:wp.i18n.__("Falkland Islands (Malvinas)","surecart")},{value:"FO",label:wp.i18n.__("Faroe Islands","surecart")},{value:"FJ",label:wp.i18n.__("Fiji","surecart")},{value:"FI",label:wp.i18n.__("Finland","surecart")},{value:"FR",label:wp.i18n.__("France","surecart")},{value:"GF",label:wp.i18n.__("French Guiana","surecart")},{value:"PF",label:wp.i18n.__("French Polynesia","surecart")},{value:"TF",label:wp.i18n.__("French Southern Territories","surecart")},{value:"GA",label:wp.i18n.__("Gabon","surecart")},{value:"GM",label:wp.i18n.__("Gambia","surecart")},{value:"GE",label:wp.i18n.__("Georgia","surecart")},{value:"DE",label:wp.i18n.__("Germany","surecart")},{value:"GH",label:wp.i18n.__("Ghana","surecart")},{value:"GI",label:wp.i18n.__("Gibraltar","surecart")},{value:"GR",label:wp.i18n.__("Greece","surecart")},{value:"GL",label:wp.i18n.__("Greenland","surecart")},{value:"GD",label:wp.i18n.__("Grenada","surecart")},{value:"GP",label:wp.i18n.__("Guadeloupe","surecart")},{value:"GT",label:wp.i18n.__("Guatemala","surecart")},{value:"GG",label:wp.i18n.__("Guernsey","surecart")},{value:"GN",label:wp.i18n.__("Guinea","surecart")},{value:"GW",label:wp.i18n.__("Guinea-Bissau","surecart")},{value:"GY",label:wp.i18n.__("Guyana","surecart")},{value:"HT",label:wp.i18n.__("Haiti","surecart")},{value:"HM",label:wp.i18n.__("Heard Island and McDonald Islands","surecart")},{value:"VA",label:wp.i18n.__("Holy See (Vatican City State)","surecart")},{value:"HN",label:wp.i18n.__("Honduras","surecart")},{value:"HK",label:wp.i18n.__("Hong Kong","surecart")},{value:"HU",label:wp.i18n.__("Hungary","surecart")},{value:"IS",label:wp.i18n.__("Iceland","surecart")},{value:"IN",label:wp.i18n.__("India","surecart")},{value:"ID",label:wp.i18n.__("Indonesia","surecart")},{value:"IR",label:wp.i18n.__("Iran, Islamic Republic of","surecart")},{value:"IQ",label:wp.i18n.__("Iraq","surecart")},{value:"IE",label:wp.i18n.__("Ireland","surecart")},{value:"IM",label:wp.i18n.__("Isle of Man","surecart")},{value:"IL",label:wp.i18n.__("Israel","surecart")},{value:"IT",label:wp.i18n.__("Italy","surecart")},{value:"JM",label:wp.i18n.__("Jamaica","surecart")},{value:"JP",label:wp.i18n.__("Japan","surecart")},{value:"JE",label:wp.i18n.__("Jersey","surecart")},{value:"JO",label:wp.i18n.__("Jordan","surecart")},{value:"KZ",label:wp.i18n.__("Kazakhstan","surecart")},{value:"KE",label:wp.i18n.__("Kenya","surecart")},{value:"KI",label:wp.i18n.__("Kiribati","surecart")},{value:"KW",label:wp.i18n.__("Kuwait","surecart")},{value:"KG",label:wp.i18n.__("Kyrgyzstan","surecart")},{value:"LA",label:wp.i18n.__("Lao People's Democratic Republic","surecart")},{value:"LV",label:wp.i18n.__("Latvia","surecart")},{value:"LB",label:wp.i18n.__("Lebanon","surecart")},{value:"LS",label:wp.i18n.__("Lesotho","surecart")},{value:"LR",label:wp.i18n.__("Liberia","surecart")},{value:"LY",label:wp.i18n.__("Libya","surecart")},{value:"LI",label:wp.i18n.__("Liechtenstein","surecart")},{value:"LT",label:wp.i18n.__("Lithuania","surecart")},{value:"LU",label:wp.i18n.__("Luxembourg","surecart")},{value:"MO",label:wp.i18n.__("Macao","surecart")},{value:"MG",label:wp.i18n.__("Madagascar","surecart")},{value:"MW",label:wp.i18n.__("Malawi","surecart")},{value:"MY",label:wp.i18n.__("Malaysia","surecart")},{value:"MV",label:wp.i18n.__("Maldives","surecart")},{value:"ML",label:wp.i18n.__("Mali","surecart")},{value:"MT",label:wp.i18n.__("Malta","surecart")},{value:"MH",label:wp.i18n.__("Marshall Islands","surecart")},{value:"MQ",label:wp.i18n.__("Martinique","surecart")},{value:"MR",label:wp.i18n.__("Mauritania","surecart")},{value:"MU",label:wp.i18n.__("Mauritius","surecart")},{value:"YT",label:wp.i18n.__("Mayotte","surecart")},{value:"MX",label:wp.i18n.__("Mexico","surecart")},{value:"FM",label:wp.i18n.__("Micronesia, Federated States of","surecart")},{value:"MD",label:wp.i18n.__("Moldova","surecart")},{value:"MC",label:wp.i18n.__("Monaco","surecart")},{value:"MN",label:wp.i18n.__("Mongolia","surecart")},{value:"ME",label:wp.i18n.__("Montenegro","surecart")},{value:"MS",label:wp.i18n.__("Montserrat","surecart")},{value:"MA",label:wp.i18n.__("Morocco","surecart")},{value:"MZ",label:wp.i18n.__("Mozambique","surecart")},{value:"MM",label:wp.i18n.__("Myanmar","surecart")},{value:"NA",label:wp.i18n.__("Namibia","surecart")},{value:"NR",label:wp.i18n.__("Nauru","surecart")},{value:"NP",label:wp.i18n.__("Nepal","surecart")},{value:"NL",label:wp.i18n.__("Netherlands","surecart")},{value:"NC",label:wp.i18n.__("New Caledonia","surecart")},{value:"NZ",label:wp.i18n.__("New Zealand","surecart")},{value:"NI",label:wp.i18n.__("Nicaragua","surecart")},{value:"NE",label:wp.i18n.__("Niger","surecart")},{value:"NG",label:wp.i18n.__("Nigeria","surecart")},{value:"NU",label:wp.i18n.__("Niue","surecart")},{value:"NF",label:wp.i18n.__("Norfolk Island","surecart")},{value:"KP",label:wp.i18n.__("North Korea","surecart")},{value:"MK",label:wp.i18n.__("North Macedonia","surecart")},{value:"MP",label:wp.i18n.__("Northern Mariana Islands","surecart")},{value:"NO",label:wp.i18n.__("Norway","surecart")},{value:"OM",label:wp.i18n.__("Oman","surecart")},{value:"PK",label:wp.i18n.__("Pakistan","surecart")},{value:"PW",label:wp.i18n.__("Palau","surecart")},{value:"PS",label:wp.i18n.__("Palestine, State of","surecart")},{value:"PA",label:wp.i18n.__("Panama","surecart")},{value:"PG",label:wp.i18n.__("Papua New Guinea","surecart")},{value:"PY",label:wp.i18n.__("Paraguay","surecart")},{value:"PE",label:wp.i18n.__("Peru","surecart")},{value:"PH",label:wp.i18n.__("Philippines","surecart")},{value:"PN",label:wp.i18n.__("Pitcairn","surecart")},{value:"PL",label:wp.i18n.__("Poland","surecart")},{value:"PT",label:wp.i18n.__("Portugal","surecart")},{value:"QA",label:wp.i18n.__("Qatar","surecart")},{value:"RO",label:wp.i18n.__("Romania","surecart")},{value:"RU",label:wp.i18n.__("Russian Federation","surecart")},{value:"RW",label:wp.i18n.__("Rwanda","surecart")},{value:"RE",label:wp.i18n.__("Réunion","surecart")},{value:"BL",label:wp.i18n.__("Saint Barthélemy","surecart")},{value:"SH",label:wp.i18n.__("Saint Helena, Ascension and Tristan da Cunha","surecart")},{value:"KN",label:wp.i18n.__("Saint Kitts and Nevis","surecart")},{value:"LC",label:wp.i18n.__("Saint Lucia","surecart")},{value:"MF",label:wp.i18n.__("Saint Martin (French part)","surecart")},{value:"PM",label:wp.i18n.__("Saint Pierre and Miquelon","surecart")},{value:"VC",label:wp.i18n.__("Saint Vincent and the Grenadines","surecart")},{value:"WS",label:wp.i18n.__("Samoa","surecart")},{value:"SM",label:wp.i18n.__("San Marino","surecart")},{value:"ST",label:wp.i18n.__("Sao Tome and Principe","surecart")},{value:"SA",label:wp.i18n.__("Saudi Arabia","surecart")},{value:"SN",label:wp.i18n.__("Senegal","surecart")},{value:"RS",label:wp.i18n.__("Serbia","surecart")},{value:"SC",label:wp.i18n.__("Seychelles","surecart")},{value:"SL",label:wp.i18n.__("Sierra Leone","surecart")},{value:"SG",label:wp.i18n.__("Singapore","surecart")},{value:"SX",label:wp.i18n.__("Sint Maarten (Dutch part)","surecart")},{value:"SK",label:wp.i18n.__("Slovakia","surecart")},{value:"SI",label:wp.i18n.__("Slovenia","surecart")},{value:"SB",label:wp.i18n.__("Solomon Islands","surecart")},{value:"SO",label:wp.i18n.__("Somalia","surecart")},{value:"ZA",label:wp.i18n.__("South Africa","surecart")},{value:"GS",label:wp.i18n.__("South Georgia and the South Sandwich Islands","surecart")},{value:"KR",label:wp.i18n.__("South Korea","surecart")},{value:"SS",label:wp.i18n.__("South Sudan","surecart")},{value:"ES",label:wp.i18n.__("Spain","surecart")},{value:"LK",label:wp.i18n.__("Sri Lanka","surecart")},{value:"SD",label:wp.i18n.__("Sudan","surecart")},{value:"SR",label:wp.i18n.__("Suriname","surecart")},{value:"SJ",label:wp.i18n.__("Svalbard and Jan Mayen","surecart")},{value:"SE",label:wp.i18n.__("Sweden","surecart")},{value:"CH",label:wp.i18n.__("Switzerland","surecart")},{value:"SY",label:wp.i18n.__("Syrian Arab Republic","surecart")},{value:"TW",label:wp.i18n.__("Taiwan","surecart")},{value:"TJ",label:wp.i18n.__("Tajikistan","surecart")},{value:"TZ",label:wp.i18n.__("Tanzania","surecart")},{value:"TH",label:wp.i18n.__("Thailand","surecart")},{value:"TL",label:wp.i18n.__("Timor-Leste","surecart")},{value:"TG",label:wp.i18n.__("Togo","surecart")},{value:"TK",label:wp.i18n.__("Tokelau","surecart")},{value:"TO",label:wp.i18n.__("Tonga","surecart")},{value:"TT",label:wp.i18n.__("Trinidad and Tobago","surecart")},{value:"TN",label:wp.i18n.__("Tunisia","surecart")},{value:"TR",label:wp.i18n.__("Turkey","surecart")},{value:"TM",label:wp.i18n.__("Turkmenistan","surecart")},{value:"TC",label:wp.i18n.__("Turks and Caicos Islands","surecart")},{value:"TV",label:wp.i18n.__("Tuvalu","surecart")},{value:"UG",label:wp.i18n.__("Uganda","surecart")},{value:"UA",label:wp.i18n.__("Ukraine","surecart")},{value:"AE",label:wp.i18n.__("United Arab Emirates","surecart")},{value:"GB",label:wp.i18n.__("United Kingdom","surecart")},{value:"US",label:wp.i18n.__("United States","surecart")},{value:"UM",label:wp.i18n.__("United States Minor Outlying Islands","surecart")},{value:"UY",label:wp.i18n.__("Uruguay","surecart")},{value:"UZ",label:wp.i18n.__("Uzbekistan","surecart")},{value:"VU",label:wp.i18n.__("Vanuatu","surecart")},{value:"VE",label:wp.i18n.__("Venezuela","surecart")},{value:"VN",label:wp.i18n.__("Vietnam","surecart")},{value:"VG",label:wp.i18n.__("Virgin Islands, British","surecart")},{value:"VI",label:wp.i18n.__("Virgin Islands, U.S.","surecart")},{value:"WF",label:wp.i18n.__("Wallis and Futuna","surecart")},{value:"EH",label:wp.i18n.__("Western Sahara","surecart")},{value:"YE",label:wp.i18n.__("Yemen","surecart")},{value:"ZM",label:wp.i18n.__("Zambia","surecart")},{value:"ZW",label:wp.i18n.__("Zimbabwe","surecart")},{value:"AX",label:wp.i18n.__("Åland Islands","surecart")}];export{hasPostal as a,hasCity as b,countryChoices as c,hasState as h};