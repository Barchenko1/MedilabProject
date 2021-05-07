package com.barchenko.project.entity.enums;

import java.util.Arrays;

public enum OrganizationName {
    PARTNERSHIP("Partnership"), LLC("Limited liability company (LLC)"), C_CORP("C corp"), NONPROFIT("Nonprofit");

    OrganizationName(String value) {
        this.value = value;
    }

    private final String value;

    public String getValue() {
        return value;
    }

}
