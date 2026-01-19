---
title: "ABENBDL_GROUP_EXTENSION"
description: |
  ABENBDL_GROUP_EXTENSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_GROUP_EXTENSION.htm"
abapFile: "ABENBDL_GROUP_EXTENSION.html"
keywords: ["update", "delete", "do", "if", "class", "data", "ABENBDL", "GROUP", "EXTENSION"]
---

``...  group Group1 [`implementation in class Class1 unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html)\  \{    // implementation-relevant content  \}  \  group Group2 [`implementation in class Class2 unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html)\  \{    //implementation-relevant content  \}  \  [group Group3 ...]\  ...``

Grouping divides the implementation-relevant parts of a [business object's](ABENRAP_BO_GLOSRY.html) business logic into multiple groups for behavior implementation. Each group is assigned to a separate [implementation class](ABENBDL_IN_CLASS_UNIQUE_EXT.html). This works for BDEF extensions in the same way as for RAP BOs, see the topic [RAP - `group`](ABENBDL_GROUPING.html).

The original BDEF may divide the implementation into multiple groups, and the extension can add further groups. An individual group from the original BDEF cannot be extended.

The BDEF extension `DEMO_RAP_EXTENSION_GROUP` extends the RAP behavior definition `DEMO_RAP_BASE_GROUP`. It divides the implementation-relevant content into two groups.

Original BDEF: explicitly allows extensions

BDEF interface:

Extension BDEF: defines two groups with separate ABPs.

managed implementation in class bp\_demo\_rap\_base\_group unique;\\nstrict ( 2 );\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\n\\ndefine behavior for DEMO\_RAP\_BASE\_GROUP\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n field ( readonly : update ) key\_field;\\n group demo\_a implementation in class cl\_group\_demo\_a unique\\n \\{\\n create;\\n update;\\n delete;\\n \\}\\n\\n group demo\_b implementation in class cl\_group\_demo\_b unique\\n \\{\\n field ( features : instance ) char\_field;\\n \\}\\n\\n group demo\_c implementation in class cl\_group\_demo\_c unique\\n \\{\\n determination DemoDet on save \\{ create; \\}\\n \\}\\n\\} interface;\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_I\_GROUP alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\} extension using interface DEMO\_RAP\_I\_GROUP\\n implementation in class bp\_demo\_rap\_extension\_group unique;\\n\\nextend behavior for Root\\n\\{\\n group demo\_ext\_a implementation in class cl\_demo\_ext\_a unique\\n \\{\\n validation DemoValidation on save \\{ field data\_field; \\}\\n action (authorization:none) DemoAction result \[1\] $self;\\n action ( features : instance, authorization:none )\\n DemoAction1 result \[1\] $self;\\n \\}\\n group demo\_ext\_b implementation in class cl\_demo\_ext\_b unique\\n \\{\\n validation DemoValidation2 on save \\{ field dec\_field; \\}\\n action (authorization:none) DemoAction2 result \[1\] $self;\\n action ( features : instance, authorization:none )\\n DemoAction1b result \[1\] $self;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html