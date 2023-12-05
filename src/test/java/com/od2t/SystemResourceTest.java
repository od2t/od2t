package com.od2t;

import com.od2t.system.System;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.assertj.core.api.Assertions.assertThat;

@QuarkusTest
class SystemResourceTest {

    @Test
    void get() {
        System[] systems = given()
                .when().get("/api/v1/systems")
                .then()
                .statusCode(200)
                .extract().as(System[].class);
        assertThat(systems).contains(
                new System(1, "System1"),
                new System(2, "System2")
        );
    }

}