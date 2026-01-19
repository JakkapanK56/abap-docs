---
title: "ABENABAP_ASJSON_ANONYM_DO"
description: |
  ABENABAP_ASJSON_ANONYM_DO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASJSON_ANONYM_DO.htm"
abapFile: "ABENABAP_ASJSON_ANONYM_DO.html"
keywords: ["if", "data", "types", "ABENABAP", "ASJSON", "ANONYM"]
---

An anonymous data object, that is, a data object created using `CREATE DATA` or the instance operator `NEW`, is represented as an object component of `%heap` in the form:

"key":\\{ "%type":"...", \\n        "%maxLength":..., \\n        "%totalDigits":..., \\n        "%fractionDigits":..., \\n        "%val":... \\n      \\}

The name `key` is the key used to reference the anonymous data object. The value of `key` is itself an object whose object components represent the type and the value of the anonymous data object.

The value of the anonymous data object is specified as content of the component `%val` in its canonical representation. If the anonymous data object itself is a non-initial reference variable, it references another component of `%heap`.

The remaining components specify the data type of the anonymous data object.

[asJSON for Anonymous Data Objects](ABENABAP_JSON_ASJSON_DREF_ABEXA.html).

-   The same rules apply to the content of `%type` as to the element name `type` in [asXML](ABENASXML_ANONYMOUS_DATA_OBJECT.html).
-   The components `%maxLength`, `%totalDigits`, and `%fractionDigits` specify the technical properties of the type, if required. The same rules apply to their content as to the corresponding attributes in [asXML](ABENASXML_ANONYMOUS_DATA_OBJECT.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html abenabap\_asxml\_references.html