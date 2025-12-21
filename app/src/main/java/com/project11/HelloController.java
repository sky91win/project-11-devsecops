package com.project11;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "🚀 Project 11 running successfully on AWS EKS via GitHub Actions!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
