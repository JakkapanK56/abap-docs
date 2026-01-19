---
title: "ABENABAP_ASJSON_CLASS_INSTANCES"
description: |
  ABENABAP_ASJSON_CLASS_INSTANCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_ASJSON_CLASS_INSTANCES.htm"
abapFile: "ABENABAP_ASJSON_CLASS_INSTANCES.html"
keywords: ["if", "method", "class", "data", "types", "ABENABAP", "ASJSON", "CLASS", "INSTANCES"]
---

To transform classes to [JSON](ABENJSON_GLOSRY.html) using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) or to create classes from JSON data, their classes must implement the interface `IF_SERIALIZABLE_OBJECT`. The instance of a class (object) is represented as an object component of the object `%heap` as follows:

"key":\\{ "%type":"class", \\n        "%val":\\{ "part":\\{ "%classVersion":"...", \\n                          "name":... \\n                          ... \\n                        \\} \\n                 ... \\n               \\} \\n      \\}

The name `key` is the key used to reference the object. The value of `key` is itself an object whose object components represent the class and the attributes of the referenced ABAP object.

The [tag interface](ABENTAG_INTERFACE_GLOSRY.html)\\ `IF_SERIALIZABLE_OBJECT` has the same meaning for JSON as for [asXML](ABENASXML_CLASS_INSTANCES.html). This means it defines which attributes of a class are serialized. In addition, helper methods can be implemented that adjust behavior (see the [example](ABENSERIALIZABLE_OBJECT_ABEXA.html)).

[asJSON for Object References](ABENABAP_JSON_ASJSON_OREF_ABEXA.html)

-   The character-like value *class* of the component `%TYPE` specifies the class of the object. The same applies to `class` as to the element name `class` in [asXML](ABENASXML_CLASS_INSTANCES.html) representation. In asJSON, the namespace that specifies where the class is defined in asXML is resolved before the class name.
-   The component `%VAL` represents the attribute values of the object. The value of `%VAL` is itself an object. The components `part` are objects that contain the values of the instance attributes of individual object parts. The same applies to the object parts and their names `part` as to the subelements `<part>` in [asXML](ABENASXML_CLASS_INSTANCES.html) representation.
-   The components of an object part `part` represent the values of the instance attributes of the objects in their canonical representation under their names. The same applies to the names as to the corresponding elements in [asXML](ABENASXML_CLASS_INSTANCES.html) representation. Static attributes are ignored.
-   An optional component, `%classVersion`, of an object part, `part`, contains the version of the class of the object part in character-like representation. The same applies to the version of the class as to the attribute `classVersion` in [asXML](ABENASXML_CLASS_INSTANCES.html) representation.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html abenabap\_asxml\_references.html