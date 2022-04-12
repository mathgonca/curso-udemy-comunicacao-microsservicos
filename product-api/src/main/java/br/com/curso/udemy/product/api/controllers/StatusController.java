package br.com.curso.udemy.product.api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/v1")
public class StatusController {
    @GetMapping("/status")
    public ResponseEntity<HashMap<String, Object>> getAPIStatus() {
        var response = new HashMap<String, Object>();

        response.put("Service", "Product API");
        response.put("Status", "UP");
        response.put("httpStatus", HttpStatus.OK.value());

        return ResponseEntity.ok(response);
    }
}
