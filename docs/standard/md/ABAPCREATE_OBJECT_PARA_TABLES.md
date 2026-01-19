---
title: "ABAPCREATE_OBJECT_PARA_TABLES"
description: |
  ABAPCREATE_OBJECT_PARA_TABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_PARA_TABLES.htm"
abapFile: "ABAPCREATE_OBJECT_PARA_TABLES.html"
keywords: ["if", "try", "catch", "method", "class", "data", "internal-table", "ABAPCREATE", "OBJECT", "PARA", "TABLES"]
---

[Short Reference](ABAPCREATE_OBJECT_SHORTREF.html)

 `... [PARAMETER-TABLE ptab]\      [EXCEPTION-TABLE etab].`

The additions `PARAMETER-TABLE` and `EXCEPTION-TABLE` are used to pass actual parameters dynamically to the instance constructor or assign return codes to the non-class-based exceptions.

These additions can only be used if the instantiated class is specified dynamically in `name`. They use special internal tables `ptab` and `etab` to assign actual parameters to the input parameters of the instance constructor or return codes to the non-class-based exceptions.

The syntax and semantics are the same as in the dynamic method calls using the statement [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html). The internal tables `ptab` and `etab` in particular must be defined with reference to the tables `abap_parmbind_tab` and `abap_excpbind_tab` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP`.

Dynamic creation of a [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html) (CFW) dialog box and dynamic passing of input parameters to the instance constructor of the global class `CL_GUI_DIALOGBOX_CONTAINER`. The class is defined explicitly using the addition [`TYPE`](ABAPCREATE_OBJECT_EXPLICIT.html).

The following program section dynamically creates an object of a class `SOME_CLASS` whose instance constructor expects a reference variable of the static type `ANY_CLASS`. The program has correct syntax, but the object is created only in systems in which the classes also exist.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: container TYPE REF TO cl\_gui\_container, \\n exc\_ref TYPE REF TO cx\_root. \\n\\ \\nDATA: class TYPE string VALUE \`CL\_GUI\_DIALOGBOX\_CONTAINER\`, \\n ptab TYPE abap\_parmbind\_tab. \\n\\ \\nptab = VALUE #( ( name = 'PARENT' \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( cl\_gui\_container=>desktop ) ) \\n ( name = 'WIDTH' \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( 1000 ) ) \\n ( name = 'HEIGHT' \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( 300 ) ) ). \\n\\ \\nTRY. \\n CREATE OBJECT container TYPE (class) \\n PARAMETER-TABLE ptab. \\n CATCH cx\_sy\_create\_object\_error INTO exc\_ref. \\n out->write( exc\_ref->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). CONSTANTS: \\n anycls TYPE string VALUE \`ANY\_CLASS\`, \\n somecls TYPE string VALUE \`SOME\_CLASS\`, \\n param TYPE string VALUE \`PARA\`. \\n\\ \\nDATA dref TYPE REF TO data. \\nTRY. \\n CREATE DATA dref TYPE REF TO (anycls). \\n CREATE OBJECT dref->\* TYPE (anycls). \\n CATCH cx\_sy\_create\_data\_error \\n cx\_sy\_create\_object\_error. \\n ... \\nENDTRY. \\n\\ \\nIF dref IS BOUND. \\n FINAL(ptab) = VALUE abap\_parmbind\_tab( \\n ( name = param \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( dref->\* ) ) ). \\nENDIF. \\n\\ \\nDATA oref TYPE REF TO object. \\nTRY. \\n CREATE OBJECT oref TYPE (somecls) PARAMETER-TABLE ptab. \\n CATCH cx\_sy\_create\_object\_error \\n cx\_sy\_dyn\_call\_parameter\_error INTO FINAL(exc). \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_object.html