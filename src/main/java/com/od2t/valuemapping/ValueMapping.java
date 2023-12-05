package com.od2t.valuemapping;

import com.od2t.system.System;

public record ValueMapping(Integer valueMappingId,
                           System sourceSystem, String sourceSystemFieldValue,
                           System targetSystem, String targetSystemFieldValue, String targetSystemFieldType) {

}
