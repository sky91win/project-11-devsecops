package com.project11;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Project 11 running via GitHub Actions + ArgoCD!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    // 🔗 Redirect to YouTube video after deploy
    @GetMapping("/video")
    public RedirectView openVideo() {
        return new RedirectView("https://youtu.be/mh0WBGPs0ZQ?si=AU6RH4c_sTeDYrOZ");
    }
}
