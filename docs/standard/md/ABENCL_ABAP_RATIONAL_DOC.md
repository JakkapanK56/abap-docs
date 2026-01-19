---
title: "ABENCL_ABAP_RATIONAL_DOC"
description: |
  ABENCL_ABAP_RATIONAL_DOC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_RATIONAL_DOC.htm"
abapFile: "ABENCL_ABAP_RATIONAL_DOC.html"
keywords: ["do", "method", "class", "data", "ABENCL", "ABAP", "RATIONAL", "DOC"]
---

The documented system class `CL_ABAP_RATIONAL` contains methods for calculating with rational numbers without any precision loss. All basic operations, such as addition, multiplication, division, and subtraction, can be performed without any rounding errors.

Creation of any rational numbers from string values using the method `FACTORY_FROM_STRING` of the class `CL_ABAP_RATIONAL`.

DATA(lo\_rational) = cl\_abap\_rational=>factory\_from\_string( \\n EXPORTING iv\_value = \\n\`123451319241923741092743102751927431209374123461928374612983746129\` & \\n\`3461293641239461293641237946192785619264124\` ). \\n\\ \\n\\ \\n" do some calculations \\n"multiplication \\nlo\_rational->mul( cl\_abap\_rational=>factory\_from\_string( \\n \`12345131924192374109274310275192743120937412346192837461298374612\` & \\n \`93461293641239461293641237946192785619264124\` ) ). \\n\\ \\n"division \\nlo\_rational->div( cl\_abap\_rational=>factory\_from\_string( \\n\`1234513192419237410927431027519274312093741234619283746129837461293\` & \\n\`461293641239461293641237946192785619264124\` ) ). \\n\\ \\n"addition \\nlo\_rational->add( cl\_abap\_rational=>factory\_from\_string( \\n \`12345131924192374109274310275192743120937412346192837461298374612\` & \\n \`93461293641239461293641237946192785619264124\` ) ). \\n\\ \\n"subtraction \\nlo\_rational->sub( cl\_abap\_rational=>factory\_from\_string( \\n\`1234513192419237410927431027519274312093741234619283746129837461293\` & \\n\`461293641239461293641237946192785619264124\` ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abencl\_abap\_math.html